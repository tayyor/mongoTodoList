const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');



//add 
router.post('/',async(req,res)=>{
    const todo = new Todo({
        title:req.body.title,
        description:req.body.description,
    });
    try{
        const savedTodo = await todo.save();
        res.json(savedTodo);
    }catch (err){
        res.json({message:err})
    }
})

//retrieve
router.get('/', async(req,res) =>{
    try{
        const todo = await Todo.find();
        res.json(todo);
    }catch(err){
        res.json({message:err});
    }
})

//update
router.patch('/:todoId', async (req,res) =>{
    try{
        const updatedTodo = 
            await Todo.updateOne({_id:req.params.todoId},{$set:{title:req.body.title}});
            res.json(updatedTodo);
    }catch (err){
        res.json({message:err});
    }
});


//delete
router.delete('/:todoId',async(req,res) =>{
    try{
        const removedTodo = await Todo.deletOne({_id:req.params.todoId});
        res.json(removedTodo);
    }catch(err){
        res.json({message:err})
    }
})


//export module
module.exports = router