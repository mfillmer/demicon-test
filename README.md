# demicon-test


## Setup

For running the app, please install docker and docker-compose.
Then, move into the project directory and run `docker-compose up`
After building and running the App, you need to initialise the database by running `docker-compose exec api flask setup-db`.
For syncing, please use `docker-compose exec api flask sync`.

## Scaling

For scaling, please note that the database is a sqlite file inside the backend container. It can be extracted and then used by multiple services. 

## Copy of the task description

Description Tech Task D3 Cloud: Full-Stack Developer
## API Connector ##
### Backend ###
Please implement a connector to the Randomuser API service with the following
specification:
- Develop a backend application in your prefered Language
- Connector periodically (JobTask) get data from https://randomuser.me/api and save
into cache or database. The periodic update can also be triggered by an outside
service.
- Required Data from https://randomuser.me/api - gender, name, location, email
- Documentation of API - https://randomuser.me/documentation
- Implement simple GET controller to get users 

Response - JSON 
```json
"countries":
[
  {
    "name": <country>, 
    "users": [
      {
        "name": <userName>, 
        "gender": <gender>, 
        "email":<email>
      }
  }
]
```
- In case of an unsuccessful synchronization attempt, the Connector should return
data from the last successful synchronization
The backend application should be designed to work within CloudNative (serverless,
kubernetes etc) environments.
### Frontend ###
Please implement a small UI application to view data from backend with the following
features:
- In top should be simple ComboBox with all Countries and Button to reload data
from backend
- In bottom should be show List of users (name, gender, email) from selected in
ComboBox country (filter can implement on frontend side)
### Deployment ###
Depending on your time please document and/or implement the deployment of the
application in the cloud. What resources do you need to deploy the basic application and
what considerations need to be made to scale your application?
### Result ###
The source code please push on any git repository (github, bitbucket, gitlab ...) and provide
the instructions for building and starting the application
Good luck with your editing and we look forward to seeing your results!
