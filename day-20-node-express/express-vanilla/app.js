const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("halo dunia ini saya");
});

app.listen(port, () => {
  console.log(`ini jalan di port ${port}`);
});
