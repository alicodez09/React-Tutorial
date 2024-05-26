const express = require("express");
const { CreateTodo, UpdateTodo, GetTodo, GetTodos, DeleteTodo } = require("../controllers/todo"); 

const router = express.Router(); 

router.post("/create-todo", CreateTodo); 
router.get("/get-todos", GetTodos); 
router.put("/update-todo/:id", UpdateTodo); 
router.get("/get-todo/:id", GetTodo); 
router.delete("/delete-todo/:id", DeleteTodo); 





module.exports = router; 
