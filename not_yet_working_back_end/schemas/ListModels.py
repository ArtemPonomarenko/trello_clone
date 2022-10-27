from pydantic import BaseModel
from .CardModels import ResponseModel as CardModel
from typing import List

class RequestModel(BaseModel):
    id: int

class ResponseModel(BaseModel):
    id: int
    title: str
    board_id: int
    cards: List[CardModel]

    class Config:
        orm_mode = True

class UpdateListModel(BaseModel):
    list_id: int
    title: str

class DeleteModel(BaseModel):
    list_id: int