from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


username = "root"
password = "Chanson4eg"
database = "trello_clone"
# host = "ticketing-live.crwd16wegxtp.eu-west-2.rds.amazonaws.com"
host = "127.0.0.1"

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{username}:{password}@{host}/{database}"


engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()