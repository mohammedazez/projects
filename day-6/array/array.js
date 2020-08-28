// contoh array bisa menampung apapun
let productTeam = [
  "CTO",
  "Product Manager",
  "Frontend",
  "Backend",
  { jumlahteam: 100 },
  99,
  ["team 1", "team 2"],
];
console.log(productTeam);

// contoh array of object
let product = [
  { id: 1, name: "Kopi" },
  { id: 2, name: "susu" },
];
console.log(product);

// find indexof
let product = ["susu", "kopi", "teh"];
let obj1 = product.indexOf("susu");
// find obj using .find
let product = [
  { id: 1, name: "Kopi" },
  { id: 2, name: "susu" },
];
let obj1 = product.find((product) => product.name === "Kopi");

// update array
let productTeam = [
  "CTO",
  "Product Manager",
  "Frontend",
  "Backend",
  { jumlahteam: 100 },
  99,
  ["team 1", "team 2"],
  true,
];
console.log(productTeam);
productTeam[0] = "CEO";
console.log(productTeam);
productTeam[4] = { jumlahteam: 9999 };
console.log(productTeam);

// const in array

const car = ["tesla", "honda", "toyoya"];
car = "mazda"; // error
car[0] = "mazda";
// let in array
const cats = ["anggora", "persia"];
cats = ["bengal", "short leg"];

// menambahkan data paling terakhir
productTeam.push("UI Designer");
console.log(productTeam);
// hapus data paling terakhir
productTeam.pop();
console.log(productTeam);
// hapus data paling awal
productTeam.shift();
console.log(productTeam);

let inventory = [
  [
    ["kaos", 10],
    ["kemeja", 10],
  ],
  ["topi", 20],
];

// quokka

const productTeam = ["CTO", "Product Manager", "Frontend", "Backend"];
// console.log(productTeam);
// productTeam[0] = 'CEO'
// console.log(productTeam);
// productTeam[4] = {jumlahteam: 9999}
// console.log(productTeam);
// menambahkan data paling terakhir
productTeam.push("UI Designer");
console.log(productTeam);
// hapus data paling terakhir
productTeam.pop();
console.log(productTeam);
// hapus data paling awal
productTeam.shift();
console.log(productTeam);
// tambah data baru paling awal
productTeam.unshift("CPO");
console.log(productTeam);

// const number = [2,5, 1, 3, 10, 20, 12];
// number.sort();
// console.log(number);
// number.sort((a, b) => {return a-b})
// console.log(number);
// number.sort((a, b) => {
//   return b - a
// })
// console.log(number);
const number = [2, 5, 1, 3, 10, 20, 12];
number.forEach((item, index) => {
  return (number[index] = item * 2);
});
console.log(number);

const car = ["tesla", "honda", "toyoya"];
const car2 = car.forEach((element) => {
  return "mobil " + element;
});

console.log(car2);

const car3 = car.map((item) => {
  return "mobil " + item;
});
console.log(car3);

let product = [
  { id: 1, name: "Kopi" },
  { id: 2, name: "susu" },
];
// let product =['susu', 'kopi', 'teh']
let obj1 = product.find((product) => product.name === "Kopi");
console.log(obj1);
console.log(product);

// console.log(productTeam[6][0]);

const angka = [2, 5, 1, 3, 10, 20, 12];
// console.log(angka);
// angka.forEach((item, index) => {
//   angka[index] = item * 2
// })
// console.log(angka);

console.log(angka);
angka2 = angka.map((item, index) => {
  return (angka[index] = item * 2);
});
console.log(angka);
console.log(angka2);

// const angkaReduce = angka.reduce((total, num)=>{
//   return total + num
// })
// console.log(angkaReduce);

function angkaReduce2(total, num) {
  return total + num;
}

console.log(angka.reduce(angkaReduce2));

// const angkaFilter = angka.filter((angka) => {
//   return angka >= 10
// })
// console.log(angkaFilter);

const angkaFilter2 = (item) => {
  return item >= 5;
};
console.log(angka.filter(angkaFilter2));

// array multidimensi
let inventory = [
  ["kaos", 10],
  ["kemeja", 10],
  ["topi", 20],
  ["celana", 30],
];
console.log(inventory[0][0][0]);
inventory.push(["Jaket", 1000]);
console.log(inventory);
let inventory = [
  ["kaos", 10],
  ["kemeja", 10],
  ["topi", 20],
  ["celana", 30],
];
inventory.map((dataInventory) => {
  let terjual = dataInventory[1];
  dataInventory[2] = terjual;
});
console.table(inventory);

// rows[0].map((row, index) => {
//   return rows.map((column) => {
//     return column[index]
//   })
// })
let inventory = [
  ["kaos", 10],
  ["kemeja", 10],
  ["topi", 20],
  ["celana", 30],
];
// const inventoryFilter = inventory[0][0].filter((dataInventory, index) => {
//   return inventory((column) => {
//     let filter = column[0][1]
//     return filter
//   })
// })
// console.log(inventoryFilter);
// let inventory = [['kaos', 10]]
// const inventoryFilter = inventory.filter((angkaPertama) => {
//   return angkaPertama >= 10
// })
console.log(inventoryFilter);
let inventory = [
  ["kaos", 10],
  ["kemeja", 10],
  ["topi", 20],
  ["celana", 30],
];
inventory.forEach((pertama) => {
  pertama.forEach((kedua) => {
    kedua.forEach((ketiga) => {
      console.log(ketiga);
    });
  });
});

// for loop
let inventory = [["kaos", 10], ["kemeja"], ["topi", 20], ["celana", 30, "tes"]];

for (let a = 0; a < inventory.length; a++) {
  console.log("loop1");
  for (let b = 0; b < inventory[a].length; b++) {
    console.log("loop2", inventory[a][b]);
  }
}

let heroes = [["thor", "petir"], ["hulk", "marah"], ["iron man"]];

inventory[0][0];
inventory[0][1];
inventory[1][0];
inventory[2][0];
inventory[2][1];
inventory[3][0];
inventory[3][1];
inventory[3][2];

// contoh array multi dimensi report
let reportPemakaian = [
  [{ name: ["thoriq", "thoriq nur faizal"], tgl: "1-januari" }],
  [{ lastBuy: "1 day ago" }],
  [10000000],
];
