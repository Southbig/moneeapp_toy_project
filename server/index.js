require("dotenv").config();
const express = require('express')
const app = express()
const port = 4000

const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
const postsCommentsRoute = require('./routes/comments');
app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('/comments', postsCommentsRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let server;

server = app.listen(port, () => {
  console.log(`http server runnning ${port}`)
})

module.exports = server;