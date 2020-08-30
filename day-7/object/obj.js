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

delete mobil.nama

console.log(mobil.platNo)
console.log(mobil["isBersih"])
console.log(mobil.jalan())
console.log(mobil.stop())
console.log(mobil)

let news = {
  title: "Ini judul",
  desc: "Lorem Ipsum dolor dolor",
  author: {
    people: {
      name: "Alpha",
      city: "Jakarta"
    }
  }
}

// obj as reference
function sayAuthor(obj) {
  console.log(obj)
  // String literal
  console.log(`${obj.name} tinggal di ${obj.city}`)

  // string b aja
  console.log(obj.name + " tinggal di " + obj.city)
}

let people = news.author.people
sayAuthor(people)

// mobil.platNo = "IND"

// mobil = {
//   nama : "VW",
//   platNo : "B123",
//   tahun : 2020,
//   warna : "Hijau",
// }