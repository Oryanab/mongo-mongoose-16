# mongo-mongoose-16
# MongoDB

## What is a Database?
In computing, a database is an organized collection of data stored and accessed electronically from a computer system. [Database](https://en.wikipedia.org/wiki/Database)

## What is a Document Database?
A document database (also known as a document-oriented database or a document store) is a database that stores information in documents. Documents can be stored in formats like JSON, BSON, and XML.

## MongoDB Documents
Documents store data in field-value pairs. The values can be a variety of types and structures, including strings, numbers, dates, arrays, or objects
```
{
     "_id": 1,
     "first_name": "Tom",
     "email": "tom@example.com",
     "cell": "765-555-5555",
     "likes": [
        "fashion",
        "spas",
        "shopping"
     ],
     "businesses": [
        {
           "name": "Entertainment 1080",
           "partner": "Jean",
           "status": "Bankrupt",
           "date_founded": {
              "$date": "2012-05-19T04:00:00Z"
           }
        },
        {
           "name": "Swag for Tweens",
           "date_founded": {
              "$date": "2012-11-01T04:00:00Z"
           }
        }
     ]
  }
```
## MongoDB Collections
A collection is a group of documents. Collections typically store documents that have similar contents.
```
[
  {
     "_id": 1,
     "first_name": "Tom",
     "email": "tom@example.com",
     "cell": "765-555-5555",
     "likes": [
        "fashion",
        "spas",
        "shopping"
     ],
     "businesses": [
        {
           "name": "Entertainment 1080",
           "partner": "Jean",
           "status": "Bankrupt",
           "date_founded": {
              "$date": "2012-05-19T04:00:00Z"
           }
        },
        {
           "name": "Swag for Tweens",
           "date_founded": {
              "$date": "2012-11-01T04:00:00Z"
           }
        }
     ]
  },
  {
     "_id": 2,
     "first_name": "Donna",
     "email": "donna@example.com",
     "spouse": "Joe",
     "likes": [
        "spas",
        "shopping",
        "live tweeting"
     ],
     "businesses": [
        {
           "name": "Castle Realty",
           "status": "Thriving",
           "date_founded": {
              "$date": "2013-11-21T04:00:00Z"
           }
        }
     ]
  }
]
```

## Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

## Mongoose CRUD
* **Create**: Documents can be created in the database. Each document has a unique identifier.
```
const Accountant = require('../models/accountant');

Accountant.create({
    license_id: 5005603,
    license_date: new Date('24/07/1977'),
    first_name: 'פטר',
    last_name: 'קוט',
    city: 'פתח-תקוה',
    status: 'הצהיר על אי עיסוק במקצוע'
})
```
* **Read**: Documents can be read from the database. The API or query language allows developers to query for documents using their unique identifiers or field values. Indexes can be added to the database in order to increase read performance.
```
const Accountant = require('../models/accountant');

Accountant.find({}).where('license_id').gt(5005000)
  .than((accountants) => {
    console.log(accountants);
  }) 
```
* **Update**: Existing documents can be updated — either in whole or in part.
```
const Accountant = require('../models/accountant');

Accountant.updateMany({license_date: {
    $lt: new Date(1980, 1, 1)
  }}, {status: 'מחודש'}, function (err, docs) {
    if (err) {
    console.log(err)
    } else {
    console.log("Updated Docs : ", docs);
    }
  });
```
* **Delete:** Documents can be deleted from the database.
```
Accountant.deleteOne({license_id: 123456});
```

## Notes
* Mongo DB default port is 27017
* [Querying](https://docs.mongodb.com/manual/tutorial/query-documents/)

## Assignment
1. Start a new Project, initiating GIT, NPM & Mongo DB.
2. Download a csv file of real estate agents from [here](https://data.gov.il/dataset/metavhim/resource/a0f56034-88db-4132-8803-854bcdb01ca1)
3. Design a Schema for `Agent` model
4. Write a job script that populates the database using the csv file (see example `batch-insert.js`)
5. Make 3 API endpoints (routes):
   1. GET `/cities` - will respond with a list of all cities
   2. GET `/agents/?city=<city>` - will respond with a list of all agents in that city
   3. PUT `/agent/:id/edit` - will update agent's city
6. **BONUS** implement a frontend application to consume this api.

## Resources
[What is a Document Database?](https://www.mongodb.com/document-databases)

[MongoDB Documentation](https://docs.mongodb.com/manual/)

[Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)

[Querying](https://docs.mongodb.com/manual/tutorial/query-documents/)
