// .test()
// buat pattern cara 1
let regex = new RegExp("impact");
let regexTest = regex.test("impact byte");
// console hasilnya
console.log(regexTest);

let regex = /impact/;
console.log(regex.test("impact byte"));

// karakter set
let regex1 = new RegExp("[a-z]");
console.log(regex1.test("abc"));

let regex1 = /[a-z]/;
console.log(regex1.test("abc"));

let regex2 = /[d-z 200-210]/;
console.log(regex2.test("c 209"));

let regex2 = /[d-z2-4]/;
console.log(regex2.test("R 105"));

// .macth()
let regexMatch = new RegExp("t");
let regexMatch = /t/;
let myName = "thoriq";
console.log(myName.match(regexMatch));

// flag i dan g
let regexMatch = /m/i;
let myName = "imam";
console.log(myName.match(regexMatch));

let regexMatch = /m/gi;
let myName = "Muhamad Aziz";
console.log(myName.match(regexMatch).index);

// short syntax
let regexMatch = /\d\s\w\w/;
let myText = "1 gb";
console.log(regexMatch.test(myText));

// negasi
let regexMatch = /\D\S\W\W/;
let myText = "1 gb";
console.log(regexMatch.test(myText));

// short syntax + quantifier
let regexMatch = /w{5,10}/;
let myText = "1 giga byte";
console.log(regexMatch.test(myText));

// quzntifier 0
let regexMatch = /thor*iq/;
let myName = "thoiq";
console.log(regexMatch.test(myName));

let regexMatch = /thor+iq/;
let myName = "thoiq";
console.log(regexMatch.test(myName));

// alternation
let regexalter = /^reactjs$|^vuejs$/;
let myName = "reactjs";
console.log(regexalter.test(myName));
