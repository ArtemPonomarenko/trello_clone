from sqlalchemy import  Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from datetime import datetime

from database import Base

class List(Base):
    __tablename__ = 'lists'
    id = Column(Integer, primary_key=True, index=True)
    board_id = Column(Integer, ForeignKey("projects.id"), nullable=True)
    title = Column(String(255))
    cards = relationship("Card", backref="list")
    # created_at = Column(DateTime, default=datetime.utcnow)