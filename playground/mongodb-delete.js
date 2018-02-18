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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteMany({tex:'eat lunch'}).then((result) =>{
    //     console.log(result);
    // });
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
        console.log(result);
    });
    
    // clint.close();
});