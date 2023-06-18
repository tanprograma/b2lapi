import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String },

  create_date: {
    type: Date,
    default: () => {
      return Date.now();
    },
    immutable: true,
  },
  update_date: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  url: String,
});
const Biltil = mongoose.model("Biltils", schema);
export { Biltil };
