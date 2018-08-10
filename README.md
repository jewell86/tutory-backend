# Tutory Back End

### What It Is
Tutory is an application to help people of all levels learn new skills! This repo is what powers our frontend application, and more information about our frontend can be found [here](https://github.com/jewell86/tutory-frontend)


### Technologies Used
- NodeJS
- Express
- Postgres
- Knex

### Directions To Get Started

Before you start you will want to create a new database and migrate the data:

```bash
createdb tutory_dev
npm install
npm run migrate
npm run seed
```

### DB Relationship Diagram
![alt](https://github.com/jewell86/tutory-backend/blob/master/db/relationship-diagrams/tutory-DB-relationship-diagram.png)

## API Call Examples

#### API Calls without Authorization


To retreive information about a tutorial, you would issue a **GET** request as follows:
`http://localhost:5000/tutorials/{tutorial_id}`
If we replace tutorial_id = 1, then the response will be:
```
{
    "response": {
        "tutorial": {
            "id": 1,
            "users_id": 11,
            "title": "Cooking 101",
            "description": "Intro to cooking",
            "img": "https://static01.nyt.com/images/2017/09/27/dining/27INSTAPOT1/27INSTAPOT1-superJumbo.jpg",
            "created_at": "2018-08-09T23:29:26.631Z",
            "updated_at": "2018-08-09T23:29:26.631Z",
            "avg_rating": "4.0000000000000000",
            "urls": [
                "https://www.youtube.com/embed/ZJy1ajvMU1k"
            ]
        },
        "comments": [
            {
                "users_id": 1,
                "content": "Great tutorial!",
                "created_at": "2018-08-09T23:29:26.650Z"
            },
            {
                "users_id": 1,
                "content": "It was ok...",
                "created_at": "2018-08-09T23:29:26.650Z"
            },
            {
                "users_id": 5,
                "content": "It was ok...",
                "created_at": "2018-08-09T23:29:26.650Z"
            },
            {
                "users_id": 8,
                "content": "asdfasdfasdfffasdfasdfasdfff 1 1 1 1 1",
                "created_at": "2018-08-09T23:29:26.650Z"
            }
        ]
    }
}
```
- The other routes unauthorized routes are:
  - `localhost:5000/users/{user_id}`
  - `localhost:5000/search/q={query}` **NOTE** if query is an emptry string, all tutorials and users are retrieved!


#### API Calls with Authorization
- You must first login and receive a token

  - As an example, you can receive a token by logging in with the following post request:
  - Route: `http://localhost:5000/users/login`
  - body: 
  ```
    {
      "username": "mrChris",
      "password": "chris"
    }
  ```
  - response (not the actual JWT you will receive): 
  ```
    {
      "token": "abcdefghijklmno..."
    }
  ```
  
  Then, using postman or any other tool to make HTTP requests, set the authorization to:
  ```
  authorization: "Bearer token_received_from_previous_request"
  ```
  
- You can **POST** a rating to a given tutorial with the following route and body:
  - route: `http://localhost:5000/tutorials/{tutorial_id}/rating`
  - body: 
  ```
    {
      "rating": 5
    }
  ```
  - response: 
  ```
    {
      "response": {
          "id": 11,
          "value": 3,
          "created_at": "2018-08-09T22:54:51.256Z",
          "updated_at": "2018-08-09T22:54:51.256Z"
      }
    }
  ```
  
 
