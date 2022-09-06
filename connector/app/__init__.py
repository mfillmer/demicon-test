from flask import Flask
from app.models import db, setup_db
from app import user
from app.sync import sync
from flask_cors import CORS


def setup_app(app: Flask):
    app.config.from_pyfile('./config.py')
    app.add_url_rule('/', view_func=lambda: ('ok', 200))
    app.register_blueprint(user.bp, url_prefix='/users')


def init_modules(app: Flask):
    db.init_app(app)

    if (app.debug):
        CORS(app)
    else:
        allowed_origins = app.config.get('ALLOWED_ORIGINS', '').split(' ')
        CORS(app, origins=allowed_origins)


def setup_cli(app: Flask):
    app.cli.add_command(sync)
    app.cli.add_command(setup_db)


def create_app():
    app = Flask(__name__)

    setup_app(app)
    init_modules(app)
    setup_cli(app)

    return app
