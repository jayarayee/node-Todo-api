// const MongoClint = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClint.connect('mongodb://localhost:27017/TodoApp', (err, clint)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');    
    }
    console.log('Connected to MongoDB server');
    const db = clint.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Mydata').insertOne({
        name: 'Jay',
        age: '22',
        location: 'Atlanta'
    }, (err, result) => {
        if(err){
        return console.log('Unable to insert todo', err);
        }
        console.log(result.ops[0]._id.getTimestamp())
    });

    clint.close();
});