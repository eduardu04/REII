-- REII · esquema inicial do MVP (zona-piloto)
-- Escrita: só o backend FastAPI (chave secreta, ignora RLS).
-- Leitura pública (anon): só os dados de referência (zonas, INE, BPstat).

create extension if not exists pgcrypto;

-- Zonas (zona-piloto e as que vierem a seguir)
create table public.zonas (
  id            uuid primary key default gen_random_uuid(),
  nome          text not null,
  concelho      text not null,
  freguesia     text,
  codigo_ine    text unique,           -- código geográfico do INE (DICOFRE)
  lat           double precision,
  lng           double precision,
  piloto        boolean not null default false,
  criado_em     timestamptz not null default now()
);

-- Indicadores do INE por zona (valor mediano de avaliação bancária, renda mediana, etc.)
create table public.indicadores_ine (
  id            bigint generated always as identity primary key,
  zona_id       uuid not null references public.zonas(id) on delete cascade,
  indicador     text not null,         -- ex.: 'avaliacao_bancaria_eur_m2', 'renda_mediana_eur_m2'
  periodo       text not null,         -- ex.: '2026T2'
  valor         numeric not null,
  unidade       text not null default 'EUR/m2',
  fonte_url     text,
  recolhido_em  timestamptz not null default now(),
  unique (zona_id, indicador, periodo)
);

-- Séries do BPstat (taxas de juro, inflação) usadas nos cenários
create table public.series_bpstat (
  id            bigint generated always as identity primary key,
  serie         text not null,         -- ex.: 'taxa_juro_habitacao'
  periodo       text not null,
  valor         numeric not null,
  unidade       text not null default '%',
  fonte_url     text,
  recolhido_em  timestamptz not null default now(),
  unique (serie, periodo)
);

-- Parâmetros fiscais usados pelo motor de cálculo (IRS, mais-valias, IMI)
-- Na plataforma final são geridos no painel de administração; no MVP ficam só aqui.
create table public.parametros_fiscais (
  id            bigint generated always as identity primary key,
  parametro     text not null,         -- ex.: 'irs_rendas_taxa_autonoma', 'imi_taxa_urbano'
  valor         numeric not null,
  unidade       text not null default '%',
  ano           int not null,
  fonte_url     text,
  atualizado_em timestamptz not null default now(),
  unique (parametro, ano)
);

-- Imóvel registado pelo utilizador (sem conta: identificado pela sessão do browser)
create table public.imoveis (
  id            uuid primary key default gen_random_uuid(),
  sessao_id     text not null,
  zona_id       uuid references public.zonas(id),
  tipologia     text not null,         -- T0..T5+
  area_m2       numeric not null check (area_m2 > 0),
  ano_construcao int,
  estado        text,                  -- novo, bom, para obras
  morada_aprox  text,
  lat           double precision,
  lng           double precision,
  criado_em     timestamptz not null default now()
);

-- Contributo colaborativo (opcional): valores reais de venda ou renda partilhados pelos utilizadores
create table public.contributos (
  id            uuid primary key default gen_random_uuid(),
  sessao_id     text not null,
  zona_id       uuid not null references public.zonas(id),
  imovel_id     uuid references public.imoveis(id) on delete set null,
  tipo          text not null check (tipo in ('venda', 'renda')),
  valor         numeric not null check (valor > 0),
  area_m2       numeric check (area_m2 > 0),
  tipologia     text,
  data_ref      date not null default current_date,
  validado      boolean not null default false,
  criado_em     timestamptz not null default now()
);

-- Análise vender vs arrendar (entradas, resultado do motor e explicação da IA)
create table public.analises (
  id            uuid primary key default gen_random_uuid(),
  sessao_id     text not null,
  imovel_id     uuid references public.imoveis(id) on delete cascade,
  entradas      jsonb not null,
  resultado     jsonb not null,
  explicacao    text,
  creditos      int not null default 0,
  criado_em     timestamptz not null default now()
);

create index on public.indicadores_ine (zona_id);
create index on public.imoveis (sessao_id);
create index on public.imoveis (zona_id);
create index on public.contributos (zona_id, tipo);
create index on public.contributos (imovel_id);
create index on public.analises (sessao_id);
create index on public.analises (imovel_id);

-- RLS ligado em todas as tabelas
alter table public.zonas            enable row level security;
alter table public.indicadores_ine  enable row level security;
alter table public.series_bpstat    enable row level security;
alter table public.parametros_fiscais enable row level security;
alter table public.imoveis          enable row level security;
alter table public.contributos      enable row level security;
alter table public.analises         enable row level security;

-- Leitura pública só dos dados de referência
create policy "leitura publica zonas"      on public.zonas           for select to anon, authenticated using (true);
create policy "leitura publica ine"        on public.indicadores_ine for select to anon, authenticated using (true);
create policy "leitura publica bpstat"     on public.series_bpstat   for select to anon, authenticated using (true);
create policy "leitura publica fiscal"     on public.parametros_fiscais for select to anon, authenticated using (true);
-- imoveis, contributos e analises: sem políticas => só o backend (chave secreta) lê e escreve
