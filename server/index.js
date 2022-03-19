require("dotenv").config();
const express = require('express')
const app = express()
const port = 4000

const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(express.json()); //front에서 json 형식의 데이터를 보냈을 때 데이터 req.body에 넣어준다
app.use(express.urlencoded({ extended: false })); // form submit 했을 때 데이터를 req.body에 넣어준다
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "PATCH", "POST", "DELETE"],
  })
);
app.use(cookieParser());

const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
app.use('/users', usersRoute);
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
//   // console.log(`Example app listening on port ${port}`)
//   console.log(`http server runnning ${port}`)
// })

let server;

server = app.listen(port, () => {
  console.log(`http server runnning ${port}`)
})

module.exports = server;