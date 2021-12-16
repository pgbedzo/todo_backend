const { response } = require('express');
const { ToDo } = require('../Model/todo');
//const { Todo } = require('../models/todo');
const getAllTodos = (req, res) => {
    ToDo.find()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((err) => {
            res.status(500).send("an error occured");
        });


    // res.send("Get all todos");
};

const getTodoById=(req,res)=>{ 
    const id=req.params.id
    ToDo.findById(id)
    .then((response)=>{
        res.status(200).send(response);
    })
    .catch((err)=>{
        res.status(500).send( 'an error occured');
    });
    
};
   

const createTodo=(req,res)=>{
        const todo =new ToDo( req.body);
        todo.save().then(response=>{
            res.status(201).send(response)})
        .catch(err=>{
            console.log(err);
            res.status(500).send(' an error occured');
        });
 };


    const deleteTodo =(req,res)=>{ 
        const id =req.params.id;
        ToDo.findByIdAndDelete(id)
        .then((response)=>{ 
            res.status(200).send('Todo with specified ID delete');
        })
        . catch((err)=>{
            console.log(err);
            res.status(500).send( 'an error occured');
        });
    },

    const updateTodo = (req,res) =>{ 
        const id = req.params.id;

        ToDo.findByIdAndUpdate({_id:id},req.body)
        .then((response)=>{ 
            res.status(201).send("Todo with specified ID update");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("an error occured",err);

    });
    };
    

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo,
};