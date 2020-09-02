export default class Karyawan {
  constructor(nama, umur, jabatan){
    this.nama = nama
    this.umur = umur
    this.jabatan = jabatan
  }

  bekerja(){
    console.log(`${this.nama} bekerja dengan baik`)
  }
}

export let olahraga = "sepak bola"

