const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').insertOne({
  //   text:'something',
  //   completed:false
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  // client.close();

  db.collection('users').insertOne({
    name:'Surya',
    age:20,
    location:'Deoghar'
  },(err,result) => {
    if(err)
    {
      return console.log('Unable to insert users',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  client.close();
});
