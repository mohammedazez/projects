// cara membuat function
function greeting() {
  console.log("halo");
  console.log("halo2");
  console.log("halo3");
  console.log("halo4");
}

console.log("tes");

// function dengan parameter
function hitung(panjang, lebar, jariJari = 7) {
  const keliling = (panjang + lebar) * 2;
  const luas = panjang * lebar;
  const luasLingkaran = (22 / 7) * jariJari;
  return { keliling, luas, luasLingkaran };
}

// memanggil function dengan argumen
hitung(10, 20);

// function dengan default parameter
function greeting(name = "human") {
  console.log(name);
}

greeting();

// function ubah celcius ke fahrenheit
function celciusToFahrenheit(celcius) {
  const result = (celcius * 9) / 5 + 32;
  return result;
}
const data = 10;

function celciusDivide(celcius) {
  const result1 = celcius / 5;
  console.log("dalam scope celcius divide", hasil);
  // return result1;

  console.log(result1);
}
function celciusToFahrenheit(celcius) {
  const celciusDivides = celciusDivide(celcius);
  const result2 = celciusDivides * 9 + 32;
  console.log("dalam scope celcius to fahrenheit", hasil);
  return result2;
}

function celciusToReamur(celcius) {
  const celciusDivides = celciusDivide(celcius);
  const result = celciusDivides * 4;
  return result;
}

celciusToFahrenheit(data);

// arrow function
const hitungKelilingPersegi = (panjang) => {
  return panjang * 4;
};
hitungKelilingPersegi(10);

const hitungLuas = (panjang, lebar) => {
  return panjang * lebar;
};
hitungLuas(10, 50);

// variable function

const hitungLuas = function (panjang, lebar) {
  return panjang * lebar;
};
