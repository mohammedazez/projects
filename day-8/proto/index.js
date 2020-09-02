function Person(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
}
// menambahkan properti dengna protoyping
Person.prototype.nationality = "Indonesia";

// menambahkan method
Person.prototype.salam = function () {
  return `Hello ${this.name}`;
};

Person.prototype.biodata = function () {
  return `${this.name}, ${this.age}, ${this.eyeColor}`;
};

Person.prototype.sisaUmurPensiun = function () {
  const sisaPensiun = 55 - this.age;
  // console.log(object);
  return `Sisa tahun pensiun anda ${sisaPensiun}`;
};

let orang1 = new Person("Thoriq", 20, "red");
console.log(orang1.name);
console.log(orang1.salam());
console.log(orang1.sisaUmurPensiun());

// method nambah di data type
String.prototype.repeatStringThreeTimes = function (item) {
  return this.repeat(item);
};

console.log("Impact byte".repeatStringThreeTimes(3));

String.prototype.capitalize = function (item) {
  return item;
};
console.log("Impact Byte".capitalize);



Array.prototype.maximum = function () {
  if (this % 2 == 0) {
    return true
  } else {
    return false
  }
}

let angka = [1,2,3]
angka.isEven()

angka.maximum()