let fruit = [
  {
    nama: "Pisang",
    latin: "Musa acuminata",
    warna: "Kuning",
  },
  {
    nama: "Jambu",
    latin: "Psidium guajava",
    warna: "Hijau",
  },
  {
    nama: "Apel",
    latin: "Malus domestica",
    warna: "Merah",
  },
  {
    nama: "Durian",
    latin: "Durio zibethinus",
    warna: "Kuning",
  },
  {
    nama: "Mangga",
    latin: "Mangifera indica",
    warna: "Hijau-Oranye",
  },
  {
    nama: "Semangka",
    latin: "Citrullus lanatus",
    warna: "Hijau-merah",
  },
];

// untuk menghubungkan DOM dengan html
let buah = document.querySelector(".buah");

// function looping untuk show
let display = () => {
  console.log("tes");
  fruit.forEach((item) => {
    let card = document.createElement("div");
    console.log("tes dalam buah");
    card.innerHTML = `
      <h5>${item.nama}</h5>
      <p>Nama Latin: ${item.latin}</p>
    `;
    buah.appendChild(card);
  });
};

// panggil functionnya
display();
