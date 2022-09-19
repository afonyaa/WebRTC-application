const express = require("express");
const app = express();


app.use(express.json())

app.get("/", (req, res) => {
  res.json([{ text: "hello" }]);
});

app.get("/users", (req, res) => {
  console.log(req.body);
  res.send('hello')
});

app.post("/users", (req, resp)=> {
  console.log(req.body)
  resp.json('ok')
})

app.listen(8000, "localhost");
