// print angka 5
console.log(5); // print angka
/*
// console petik dua
console.log("Thoriq");

// console petik 1
console.log("Thoriq");
*/
console.log("Hello");

// data type number
let nomerSatu = 1;
let nomerSatu;
let nomerDua = 2;
let angkaDesimal = 10.2;
let angkaDesimal2 = 4.44444444;

// data type string
let stringSatu = "zainal";
let stringDua = "    ";
let stringTiga = "😇";
let stringEmpat = "?!@#$%^&*";

// data type boolean
let booleanTrue = true;
let booleanFalse = false;

// data type null & undefined
let var1 = 0;
let var2 = null;
let var3 = undefined;

// data type object
let person = {
  // name = key, "Thoriq" = value
  name: "Thoriq",
  // umur = key, 20 = value
  umur: 20,
};

let pemainBola = {
  name: "Messi",
};
// console person name
console.log(person.name);
// nested object
let kelas = {
  peserta1: {
    name = "Auzan",
  },
};

var nilai1 = 10;
{
  var nilai1 = 100;
  console.log("nilai 1 dalam scope", nilai1);
}
console.log("nilai 1 luar scope", nilai1);

let nilai2 = 20;
{
  let nilai2 = 200;
  console.log("nilai 2 dalam scope", nilai2);
}
console.log("nilai 2 luar scope", nilai2);

// camelCase
// Kata pertama kecil, jika ada kata kedua akan menjadi besar
// contoh: nomerSatu

// shorthand operator matematika
let angka = 10;
angka = angka + 9;
console.log(angka)

let angka2 = 10;
angka2 += 9;
console.log(angka2)

let angkaPlus = 0;
angkaPlus++;
console.log(angkaPlus)

let string1 = "1"
let angka1 = 1
console.log(string1 == angka1)