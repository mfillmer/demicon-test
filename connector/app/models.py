from time import time
from flask_sqlalchemy import SQLAlchemy
from flask.cli import with_appcontext
from sqlalchemy import *
import click
import uuid

db = SQLAlchemy()
Base = db.Model


@click.command('setup-db')
@with_appcontext
def setup_db():
    '''Recreate database completly.'''
    print('drop all tables')
    db.drop_all()

    print('create all tables')
    db.create_all()


class User(Base):
    uuid = Column(String(36), primary_key=True,
                  default=lambda: str(uuid.uuid4()))
    timestamp = Column(BIGINT, default=lambda: str(int(time()*1000)))
    name = Column(JSON)
    email = Column(String(100))
    gender = Column(String(100))
    location = Column(JSON)
