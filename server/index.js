const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.post('/', (req, res) => {
  console.log(req);
  res.send("received!");
});
app.listen(port, () => console.log(`http://localhost:${port}`))