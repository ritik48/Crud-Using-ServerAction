import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export { Todo };
