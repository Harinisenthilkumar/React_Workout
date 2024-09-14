const PostModel = require("../models/PostModel");

exports.insert = [(req, res) => {
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        author: req.body.author,
        tags: req.body.tags
    });
    post
        .save()
        .then((savedPost) => {
            res.send(savedPost);
        })
        .catch((err) => {
            res.send(err);
        }); 
}]


exports.insertwithTag = [
  (req, res) => {
    const post = new PostModel({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      author: req.body.author,
      tags: req.body.tags,
    });
    post
      .save()
      .then(async (savePost) => {
        for (let i = 0; i < savedPost.tags.length; i++) {
        //   await TagModel.updateOne(
        //     { _id: savedPost.tags[i] }, //criteria or condition
        //     { posts: [savedPost._id] } //data to update
        //   )


//   MULTIPLE INSERTION OF TAGS IN SAME POST 
        await TagModel.UpdateOne(
            { _id: savedPost.tags[i] }, //criteria or condition
            { $push: { posts: savedPost._id } } //data to update
            
        )





          .then((tag) => {
            console.log(tag);
          });
        }
        res.send(savePost);
      })
      .catch((err) => {
        res.send(err);
      });
  },
];



exports.list = [
    (req, res) => {
        PostModel.find().populate('tags')
            .then((posts) => {
                res.send(posts);
            })
            .catch((err) => {
                res.send(err);
            });
    },

]