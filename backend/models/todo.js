const mongoose=require("mongoose")

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
        type: String,
        required: true,
      },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const TodoModel = mongoose.model("todos", todoSchema);

module.exports= TodoModel;
