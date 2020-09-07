// console.log("tes script");

// localStorage.setItem("Class", "Brilliant Blaze");
// localStorage.setItem(
//   "BatchBaru",
//   JSON.stringify({
//     nama: "Brilliant Blaze",
//     nomerBatch: 2,
//   })
// );
// document.getElementById("get-item-class").innerHTML = localStorage.getItem(
//   "Class"
// );

// // document.getElementById("#get-item-batch").innerHTML = localStorage.getItem(
// //   "Batch baru"
// // );
// let BatchBaru = JSON.parse(localStorage.getItem("BatchBaru"));

// console.log("object setelah parse", BatchBaru);
// document.getElementById("get-item-batch-nama").innerHTML = BatchBaru.nama;
// document.getElementById("get-item-batch-nomer").innerHTML =
//   BatchBaru.nomerBatch;

// function deleteData() {
//   console.log("delete tes");
//   localStorage.clear();
// }

// let loginBtn = document.getElementById("login-btn");
// loginBtn.addEventListener("click", login);

function login() {
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;
  console.log("tes", usernameInput, passwordInput);

  // buat variable dengan async
  // const getDataUser = async () => {
  //   // ambil response dari server
  //   let response = await fetch(
  //     "https://5f51a6865e98480016123bdd.mockapi.io/users"
  //   );
  //   // ambil data dalam bentuk json
  //   let data = await response.json();
  //   console.log(data);
  // };

  // buat fetch dulu
  fetch("https://5f51a6865e98480016123bdd.mockapi.io/users")
    .then((response) => response.json())
    .then((result) => {
      let user = result.filter((item) => item.username === usernameInput);
      console.log("hasil user setelah filter", user);
      if (user.length > 0) {
        // alert("username anda ditemukan");
        if (user[0].password === passwordInput) {
          // simpan data user yang login ke localstorage
          localStorage.setItem("user", JSON.stringify(user[0]));
          alert("username dan password sama");
          window.location.replace("./todo.html");
        } else {
          alert("password anda salah");
        }
      } else {
        alert("username tidak ditemukan");
      }
    });

  // getDataUser();
}
