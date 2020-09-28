const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("halo dunia ini saya");
});

app.post("/", (req, res) => {
  res.send("Nyobain post");
});

app.put("/", (req, res) => {
  res.send("Nyobain put");
});

app.delete("/", (req, res) => {
  res.send("Nyobain delete");
});

app.all("/secret", (req, res, next) => {
  console.log("cie masuk secret");
  res.send("rahasia sekali lagi");
  next();
});

app.get("/blaze", (req, res) => {
  console.log("get blaze");
  res.send("body blaze");
});

app.post(
  "/brilliant",
  (req, res, next) => {
    console.log("post di brilliant");
    next();
  },
  (req, res) => {
    res.send("post brilliant");
  }
);

app.get("/blaze/:nama", (req, res) => {
  res.send(`Halo, ${req.params.nama}`);
});

app.get("*", (req, res) => {
  let body = `<h1>Maaf halaman tidak ditemukan</h1>`;
  res.send(body);
});

app.listen(port, () => {
  console.log(`ini jalan di port ${port}`);
});
