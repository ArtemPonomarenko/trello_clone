from pydantic import BaseModel
from typing import Optional, List

class RequestModel(BaseModel):
    id: int
    title: str
    description: str
    list_id: int

    # rank: int

class ResponseModel(BaseModel):
    id: int
    title: str
    description: str
    list_id: int
    # rank: int
    class Config(): 
        orm_mode = True

class UpdateCardModel(BaseModel):
    title: str
    description: str
    card_id: int

class DeleteModel(BaseModel):
    card_id: int



# class UpdateCardRankRequest(BaseModel):
#     cards: List[UpdateRankModel]

# class UpdateRankModel(BaseModel):
#     id: int
#     text: str
#     category_id: int
#     rank: int