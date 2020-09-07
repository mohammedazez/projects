console.log("tes script");

localStorage.setItem("Class", "Brilliant Blaze");
localStorage.setItem(
  "BatchBaru",
  JSON.stringify({
    nama: "Brilliant Blaze",
    nomerBatch: 2,
  })
);
document.getElementById("get-item-class").innerHTML = localStorage.getItem(
  "Class"
);

// document.getElementById("#get-item-batch").innerHTML = localStorage.getItem(
//   "Batch baru"
// );
let BatchBaru = JSON.parse(localStorage.getItem("BatchBaru"));

console.log("object setelah parse", BatchBaru);
document.getElementById("get-item-batch-nama").innerHTML = BatchBaru.nama;
document.getElementById("get-item-batch-nomer").innerHTML =
  BatchBaru.nomerBatch;

localStorage.clear();
