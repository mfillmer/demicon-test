
def map_user_data(users):
    country_dict = {}

    for user in users:
        country_name = user.location.get('country')
        if country_dict.get(country_name) is None:
            country_dict[country_name] = []

        country_dict[country_name].append(dict(
            name=user.name,
            gender=user.gender,
            email=user.email,
        ))

    return [dict(name=key, users=val) for key, val in country_dict.items()]
