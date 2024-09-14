const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port =8080
const MONGODB_URL = "mongodb://localhost:27017/Ecommerce";
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`${MONGODB_URL} connected successfully`);
  })
  .catch((err) => {
    console.error("error in connecting to MongoDB", err.message);
  });

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Changed `data.now()` to `Date.now()`
  },
});

const uploader = multer({ storage: storage });

app.post("/upload/single", uploader.single("upload_file"), (req, res) => {
  console.log(req.file, req.body);
  res.status(200).send("File uploaded successfully"); // Changed `res.send(200)` to `res.status(200).send`
});

app.post("/upload/multiple", uploader.single("upload_file", 10), (req, res) => {
  console.log(req.file, req.body);
  res.status(200).send("multiple File uploaded successfully"); // Changed `res.send(200)` to `res.status(200).send`
});

/*const UserController = require("./controllers/UserController");
const router = express.Router();
router.post("/user/insert", UserController.insert);
router.get("/user/list", UserController.list);
app.use(router);
*/

// app.post("/user/insert", UserController.insert);
// app.get("/user/list", UserController.list);

// const UserRoute = require("./routes/UserRoute");
// app.use(UserRoute);


app.use(require("./routes/ProductRoutes"));
app.use(require("./routes/TagRoute"));
app.use(require("./routes/PostRoute"));


app.listen(port, () => {
  console.log(`server listening in port ${port}`);
});
