// n = 5

// 1 2 3 4 5  
function deretKecil (n) {
  if (n == 1) {
    console.log(1)
  } else {
    tampil(n-1)
    console.log(n)
  }
}

// 5 4 3 2 1
function deretBesar (n) {
  if (n == 1) {
    console.log(1)
  } else {
    console.log(n)
    tampil(n-1)
  }
}
