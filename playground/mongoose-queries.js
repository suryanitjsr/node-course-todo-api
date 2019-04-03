const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = "5ca34a82cd4054678cb89e5d";

User.findById(id).then((user) => {
  if(!user)
  {
    return console.log('ID not found');
  }
  console.log(`\nUser by Id ${id}:\n`,user);
}).catch((e) => console.log(e));

// var id = "5ca434a8dcdb790c54858030";
//
// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));
