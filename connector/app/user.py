from flask import Blueprint, jsonify
from app.models import User
from app.utils import map_user_data
bp = Blueprint('user', 'user')


@bp.route('/', methods=['GET'])
def get_users_by_country():
    data = User.query.all()
    data = map_user_data(data)
    return jsonify(countries=data)
