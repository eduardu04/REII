from app.finance import irr, npv, sell_vs_rent


def test_npv_zero_rate_is_sum():
    assert npv(0, [-100, 50, 60]) == 10


def test_irr_simple():
    assert abs(irr([-100, 110]) - 0.10) < 1e-6


def test_sell_vs_rent_shape():
    r = sell_vs_rent(200000, 10000, 900, 1500, 10, 0.04, 220000)
    assert r["best"] in {"vender", "arrendar"}
    assert r["annual_net_rent"] == 9300
