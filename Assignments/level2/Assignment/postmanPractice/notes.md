assignment 1 is to get a list of planets from swapi.dev.
https://swapi.dev/api/planets
there is a list of 60 planets.
Tatooine, Alderaan, Yavin IV, Hoth, Dagobah, etc.

assignment 2 is to get the first name.
https://swapi.dev/api/person/1
returns Luke Skywalker.

next part of the assignment is to use the following site.
https://api.vSchool.io/arnoldjones/todo and post 3 new objects.
results: after adding new objects.
[
    {
        "_id": "648a681478fe452c11499701",
        "title": "My new title",
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    },
    {
        "_id": "648a699e78fe452c1149970b",
        "title": "My Second post",
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    },
    {
        "_id": "648a69dd78fe452c1149970f",
        "title": "My third post",
        "price": 300,
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    }
]

second part of this assignment is to erase an object or entry.
https://api.vSchool.io/arnoldjones/todo/648a699e78fe452c1149970b this deletes the second entry.  results are:
[
    {
        "_id": "648a681478fe452c11499701",
        "title": "My new title",
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    },
    {
        "_id": "648a69dd78fe452c1149970f",
        "title": "My third post",
        "price": 300,
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    }
] the second entry was successfully deleted.

third part of the assignment is to update an entry.  I updated the following entry. https://api.vSchool.io/arnoldjones/todo/648a681478fe452c11499701
{"completed": "true"} it was successful. results below using get in postman to verify.
[
    {
        "_id": "648a681478fe452c11499701",
        "title": "My new title",
        "completed": true,
        "sessionId": "arnoldjones",
        "__v": 0
    },
    {
        "_id": "648a69dd78fe452c1149970f",
        "title": "My third post",
        "price": 300,
        "completed": false,
        "sessionId": "arnoldjones",
        "__v": 0
    }
] first entry completed updated to true.