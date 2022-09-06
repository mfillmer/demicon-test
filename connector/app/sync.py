import click
import requests
from app.models import User, db
from sqlalchemy import desc

from app.utils import map_user_data

URL = 'https://randomuser.me/api'


@click.command('sync')
def sync():
    try:
        response = requests.get(URL)
        data = response.json()

        users = [User(

            gender=result['gender'],
            name=result['name'],
            location=result['location'],
            email=result['email'],

        )
            for result in data['results']
        ]

        db.session.add_all(users)
        db.session.commit()
        print('Synchronization successful')
    except Exception:
        """
        In case of an unsuccessful synchronization attempt, the Connector should return
        data from the last successful synchronization
        """
        last_users = User.query.order_by(desc(User.timestamp)).limit(1).all()
        print('Synchronization failed')
        print('last successful synchronization data:')
        print(map_user_data(last_users))
