
from app.models import User, Country
import pytest
import os

from app import create_app, db as db_instance


@pytest.fixture
def app():
    os.environ['SQLALCHEMY_DATABASE_URI'] = 'sqlite://'
    app = create_app()
    yield app


@pytest.fixture
def db(context):
    with context:
        db_instance.create_all()
        yield db_instance
        db_instance.drop_all()


@pytest.fixture
def context(app):
    yield app.app_context()


@pytest.fixture
def cli_runner(app, db):
    with app.app_context():
        cli_runner = app.test_cli_runner()
        yield cli_runner


@pytest.fixture
def client(app, context, db):
    with app.test_client() as client:
        with context:
            client.context = context
            yield client
