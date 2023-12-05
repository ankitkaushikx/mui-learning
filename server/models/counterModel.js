// counter.js
import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  type: String,
  counter: { type: Number },
});

const CounterModel = mongoose.model("Counter", counterSchema);

export default CounterModel;
