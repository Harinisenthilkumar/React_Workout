const mongoose = require ("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    author : {type: String},
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"tags"
        }
    ]
},{timestamps: true});


const PostModel = mongoose.model("posts", postSchema);

module.exports = PostModel