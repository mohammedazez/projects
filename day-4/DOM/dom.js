// pastiin JS kehubung dengan html
console.log(document);

// Ambil data dari DOM
console.log(document.title);
console.log(document.head);

// Ubah data
document.title = "Brilliant Blaze";

// ambil data id h1
let heading1 = document.getElementById("title");
console.log("heading1", heading1);
// console.log(heading1);

// ambil data h6
console.log(document.querySelector("#heading6"));

// ambil data h5
console.log(document.getElementsByTagName("h5")[0]);

let title = document.getElementById("title");
title.style.color = "red";

document.getElementById("title").style.color = "blue";

// explore DOM
console.log(document.body.children[0]);
console.log(document.head.parentNode);

// add event listener
const displayAlert = () => {
  console.log("tes");
  alert("lewat atas title");
};

title.addEventListener("mouseover", displayAlert);
