function funcPangkat(angka, pangkat) {
  if (pangkat == 0) {
    console.log(1)
    return 1;
  } else {
    console.log(angka, pangkat)
    return angka * funcPangkat(angka, pangkat-1)
  }
}

// jika pangkat 1
console.log(funcPangkat(3, 3))