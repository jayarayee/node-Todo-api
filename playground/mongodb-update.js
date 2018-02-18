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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a89fc849c981684df2efc6e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false  
    // }).then((result) => {
    //     console.log(result);
    // })
    db.collection('Mydata').findOneAndUpdate({
        _id: new ObjectID('5a89ee621b8208f6b3f6df69')
    }, {
        $set: {
            name: 'Andrew'
        }
    },{
        $inc: 1
    },{
        returnOriginal: false  
    }).then((result) => {
        console.log(result);
    });
    // clint.close();
});