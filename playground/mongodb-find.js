const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ca2f853820b5e70ac7c6cc2')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to find data',err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
  }, (err) => {
    console.log('Unable to find data',err);
  });

  db.collection('users').find({age:20}).toArray().then((docs) => {
    console.log('users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch data',err);
  });
  // client.close();
});
