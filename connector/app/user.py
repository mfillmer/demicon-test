from flask import Blueprint, jsonify

bp = Blueprint('user', 'user')


@bp.route('/')
def get_users_by_country():
    return jsonify([s])
