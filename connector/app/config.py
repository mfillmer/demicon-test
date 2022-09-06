import os
from dotenv import load_dotenv

load_dotenv()


SQLALCHEMY_DATABASE_URI = os.getenv(
    'SQLALCHEMY_DATABASE_URI') or 'sqlite:///db.sqlite'
SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv(
    'SQLALCHEMY_TRACK_MODIFICATIONS') or False
ALLOWED_ORIGINS = os.getenv('ALLOWED_ORIGINS') or ''
