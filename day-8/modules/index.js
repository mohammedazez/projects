// import { sayHello as katakanHalo, sayThank } from "./greeting.js";
import katakanHalo from "./greeting.js";
import { fruit, hewan } from "./data.js";
import Karyawan from "./Karyawan.js"

console.log("MODULEEEE");
console.log("buah", fruit);
console.log(hewan)
katakanHalo("Thor");
// katakanTerimakasih("Auzan");

// sayHello("Thoriq");
// sayThank("Auzan");

let a = new Karyawan("Alpha", 20, "staff")
a.bekerja()