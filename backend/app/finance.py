"""Motor financeiro do REII: determinístico e testável. A IA só explica estes números."""


def npv(rate: float, cash_flows: list[float]) -> float:
    """VAL: cash_flows[0] é o momento 0."""
    return sum(cf / (1 + rate) ** t for t, cf in enumerate(cash_flows))


def irr(cash_flows: list[float], lo: float = -0.99, hi: float = 1.0, tol: float = 1e-7) -> float | None:
    """TIR por bissecção. Devolve None se não houver mudança de sinal."""
    f_lo, f_hi = npv(lo, cash_flows), npv(hi, cash_flows)
    if f_lo * f_hi > 0:
        return None
    for _ in range(200):
        mid = (lo + hi) / 2
        f_mid = npv(mid, cash_flows)
        if abs(f_mid) < tol:
            return mid
        if f_lo * f_mid < 0:
            hi = mid
        else:
            lo, f_lo = mid, f_mid
    return (lo + hi) / 2


def sell_vs_rent(
    sale_price: float,
    sale_costs: float,
    monthly_rent: float,
    annual_costs: float,
    years: int,
    discount_rate: float,
    final_value: float,
) -> dict:
    """Compara vender hoje com arrendar durante `years` e vender no fim."""
    sell_now = sale_price - sale_costs
    annual_net = monthly_rent * 12 - annual_costs
    rent_flows = [0.0] + [annual_net] * years
    rent_flows[-1] += final_value
    rent_npv = npv(discount_rate, rent_flows)
    return {
        "sell_now": round(sell_now, 2),
        "rent_npv": round(rent_npv, 2),
        "annual_net_rent": round(annual_net, 2),
        "best": "arrendar" if rent_npv > sell_now else "vender",
    }
