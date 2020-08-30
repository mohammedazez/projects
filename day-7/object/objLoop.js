const mobil = {
  // properti
  nama : "ferrari",
  platNo : "B123",
  tahun : 2020,
  warna : "Merah",
  isBersih : true,
  komponen: ["ban", "pintu", "jendela"],

  // method
  jalan: () => {
    return 'yeaaay mobilnya jalan'
  },
  stop: function(){
    return 'yaaah mobilnya berenti'
  }
}

// Loop for in
for(let key in mobil){
  console.log(mobil[key])
}

// Object in array
let movie = [
  {title: "Spiderman 3", tahun:2020},
  {title: "interstellar", tahun: 2022}
]

console.log(movie[1].title)

