const mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/todo_cohort';
mongoose.connect(mongoDB);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const Todo= mongoose.model("todo", todoSchema);
module.exports={Todo};
