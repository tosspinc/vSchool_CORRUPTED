when using push request in postman. We need to use the todoID as well.
done using put and then body and raw and json need to be selected.
when submitting a put it needs to be done in an object {}.
only need to enter what is being updated.   
previous notation in postman and verfied via a request.
example:
{
    "completed": "false",
    "_id": "5d928013a72b8d21bo061855",
    "title": "This is my second todo!", 
    "description": "This is my awesome description!",
    "price": 200,
    "sessionId": "johnsmith1",
    "_v": 0
}

to update "Push" as stated above only enter what needs to be changed.
{
    "completed": "true"
}

to verify do a request.
{
    "completed": "true",
    "_id": "5d928013a72b8d21bo061855",
    "title": "This is my second todo!", 
    "description": "This is my awesome description!",
    "price": 200,
    "sessionId": "johnsmith1",
    "_v": 0
}

to change or update teh title and description we do the following.
{
    "title": "AHHHHH",
    "description": "MOOOOO"
}

to verify completed do another request and should see.
{
    "completed": "true",
    "_id": "5d928013a72b8d21bo061855",
    "title": "AHHHHH", 
    "description": "MOOOOO",
    "price": 200,
    "sessionId": "johnsmith1",
    "_v": 0
}