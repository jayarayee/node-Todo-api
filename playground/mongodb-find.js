const MongoClint = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClint.connect('mongodb://localhost:27017/TodoApp', (err, clint)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');    
    }
    console.log('Connected to MongoDB server');
    const db = clint.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a89e6caa87792f54ac544eb')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fatch todos', err)
    // });
        
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fatch todos', err)
    });

    // clint.close();
});