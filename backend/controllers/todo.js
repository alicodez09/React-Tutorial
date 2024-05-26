const TodoModel = require("../models/todo");

const CreateTodo = async (req, res) => {
  try {
    const { name, email, phone, age } = req.body;
    if (!name || !email || !phone || !age) {
      return res.status(501).send({ message: "Something wents wrong" });
    }

    const existingCategory = await TodoModel.findOne({ email });
    if (existingCategory) {
      return res.status(500).send({
        success: false,
        message: "Todo already exists",
      });
    }
    const todo = await new TodoModel({
      name,
      email,
      phone,
      age,
    }).save();
    res.status(201).send({
      success: true,
      message: "New Todo Created Successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating todos",
    });
  }
};

const UpdateTodo = async (req, res) => {
  try {
    const { name, email, age, phone } = req.body;
    const { id } = req.params;

    const todo = await TodoModel.findByIdAndUpdate(
      id,
      { name, email, age, phone },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Todo Updated Successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating the todo",
      error,
    });
  }
};

const GetTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.status(200).send({
      success: true,
      message: "Todos get Successfully",
      todos,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while getting the todos",
      error,
    });
  }
};

const GetTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
     res.status(500).send({
        success: false,
        message: "Error while getting the todo",
      });
    return
    }
    res.status(200).send({
        success: true,
        message: "Todo get Successfully",
        todo,
    });
  } catch (error) {
    res.status(500).send({
        success: false,
        message: "Error while getting the todo",
        error,
    });
  }
};
const DeleteTodo =  async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await TodoModel.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).send({
      success: true,
      message: "Todo delete Successfully",
      todo,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while deleting the todo",
      error,
    });
  }
};


module.exports = { CreateTodo, UpdateTodo ,GetTodos,GetTodo,DeleteTodo};
