import {model, Schema} from "mongoose";

const taskSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
});

export default model("Task", taskSchema);