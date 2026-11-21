from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.finance import sell_vs_rent

router = APIRouter(tags=["análise"])


class AnalysisIn(BaseModel):
    sale_price: float = Field(gt=0)
    sale_costs: float = Field(ge=0, default=0)
    monthly_rent: float = Field(ge=0)
    annual_costs: float = Field(ge=0, default=0)
    years: int = Field(ge=1, le=40, default=10)
    discount_rate: float = Field(ge=0, le=1, default=0.04)
    final_value: float = Field(ge=0)


@router.post("/analysis")
def analyse(data: AnalysisIn) -> dict:
    return sell_vs_rent(**data.model_dump())
