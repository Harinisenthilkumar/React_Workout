// const http = require("http"); // http importing
// const fs = require("fs");
// console.log("wellcome you ");
// http
//   .createServer((req, res) => {
//     fs.readFile("login.html", (err, data) => {
//       res.write(data.toString());
//       res.end();
//     });
//   })
//   .listen(8080);

// const express = require("express"); //import express
// // create express app
// // initiate express
// const app = express()

// // CONFIGURE METHOOD AND URL FOR HTTP REQUEST & RESPONSE
// app.get("/sayhi", (req, res) => {
//   res.send("hii i am harini ");
// });
// // make server to watch the port
// app.listen(8080, () => {
//   console.log("server listening in port 8080");
// });
/* HTTP METHOODS 

GET
POST
PUT
PATCH
DELETE
OPTIONS
*/

const express = require("express"); //import express
const app = express();

app.use(express.json()); // middleware
app.use(express.urlencoded());
app.use("/files", express.static(__dirname + "/public"));

// console.log(__dirname);//predefined value

app.post("/sayhi", (req, res) => {
  res.send("hii i am harini ");
});
app.post("/num", (req, res) => {
  res.send("" + Math.random());
});

app.get("/user", (req, res) => {
  const user = {
    name: "harini",
    age: 21,
    gender: "female",
  };
  res.send(user);
});
// app.get("/login", (req, res) => {
//   const username = req.query.username;
//   const password = req.query.password;
//   console.log(username, password);
//   if (username === "admin" && password === "1234") {
//     res.send("login successfull");
//   }
//   res.send("login failed");
// });
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);
  if (username === "admin" && password === "1234") {
    res.send("login successfull");
  }
  res.send("login failed");
});
const users = [
  {
    value: 1,
    name: "harini"
  },
  {
    value: 2,
    name: "shanmu"
  },
  {
    value: 3,
    name: "sherin"
  },
];
app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  res.send(users[id]);
});

// make server to watch the port

app.listen(8080, () => {
  console.log("server listening in port 8080");
});
