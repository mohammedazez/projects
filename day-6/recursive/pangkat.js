function funcPangkat(angka, pangkat) {
  if (pangkat == 0) {
    return 1;
  } else {
    return angka * funcPangkat(angka, pangkat-1)
  }
}

console.log(funcPangkat(3, 3))