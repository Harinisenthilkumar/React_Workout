const { text } = require("express");
const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    code: { type: String, required: true },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
      },
    ],
  },
  { timestamps: true }
);


const TagModel = mongoose.model("tags", tagSchema);
module.exports = TagModel