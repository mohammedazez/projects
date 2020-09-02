// standart
async function hello() {
  result = await doAsync(); // disini ambil data
  console.log(result);
}

// async await dengan error handling
const hello2 = async () => {
  // kita coba sesuatu
  try {
    let result = await doAsync();
  } catch (error) {
    // kalau gagal dia lari kesini
    console.log("maaf error");
  }
};

// fetch data using async await
const getDataUser = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log("getdatauser", data);
  return data;
};
getDataUser();

// fetch data using async await dengan error handling
const getDataUser = async (idUser) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${idUser}`
    );
    let data = await response.json();
    console.log("getdatauser", data);
    return data;
  } catch {
    console.log("error bos");
  }
};
getDataUser(1);
