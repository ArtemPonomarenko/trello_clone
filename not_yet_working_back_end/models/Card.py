from sqlalchemy import  Column, Integer, DateTime, Text, ForeignKey
from sqlalchemy.orm import relationship

from datetime import datetime

from database import Base

class Card(Base):
    __tablename__ = 'cards'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(Text)
    description = Column(Text)
    list_id = Column(Integer, ForeignKey('categories.id'), nullable = False)
    # created_by = Column(Integer, ForeignKey('users.id'), nullable=True)
    # created_at = Column(DateTime, default=datetime.utcnow)