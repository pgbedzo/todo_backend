const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    description:{ type: String, required: true },
   time: { type: String, required: true },
    date: { type: String, required: true },
    completed:{ type:Boolean,required:true,},
  }, {
    timestamps: true,
  });

  const ToDo = mongoose.model('ToDo', projectSchema);

module.exports = {ToDo};


