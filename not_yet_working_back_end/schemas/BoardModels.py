from pydantic import BaseModel
from .ListModels import ResponseModel as ListResponseModel
from typing import List

class RequestModel(BaseModel):
    title: str
    # id: int
    # user_id: int

class UpdateBoardModel(BaseModel):
    board_id: int
    title: str

class DeleteModel(BaseModel):
    board_id: int

class ResponseModel(BaseModel):
    id: int
    title: str
    lists: List[ListResponseModel]
    # user_id: int

    class Config:
        orm_mode = True