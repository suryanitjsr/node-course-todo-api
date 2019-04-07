const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


Todo.findOneAndRemove({_id: "5ca9c36f820b5e70ac7cf813"}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5ca9c468820b5e70ac7cf868').then((todo) => {
  console.log(todo);
});
