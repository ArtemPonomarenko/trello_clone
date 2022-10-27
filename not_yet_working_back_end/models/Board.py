from sqlalchemy import  Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from datetime import datetime

from database import Base

class Board(Base):
    __tablename__ = 'boards'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    lists = relationship("List", backref="board")
    # created_at = Column(DateTime, default=datetime.utcnow)
    # user_id = Column(Integer, ForeignKey('users.id'))