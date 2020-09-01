// cara standart
let person1 = {
  name: "thoriq",
  age: 20,
  detail: function () {
    return `${this.name} berusia ${this.age}`;
  },
};

console.log(person1.detail());

// menggunakan function oop
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.detail = function () {
    // return `${this.name} berusia ${this.age}`;
    return `${this.name} berusia ${this.age}`;
  };
}

let person1 = new Person("Thoriq", 20);
let person2 = new Person("Auzan", 20);

console.log(person1.age);
console.log(person1.name);
console.log(person1.detail());

// menggunakan class oop
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  detail() {
    return `${this.name} berusia ${this.age}`;
  }
}

let person1 = new Person("Thoriq", 20);
let person2 = new Person("Auzan", 20);

console.log(person1.age);
console.log(person1.name);
console.log(person1.detail());

// pilar 1 encapsulation

function Gojek(jarak) {
  const pricePerKM = 5000;
  this.jarak = jarak;
  this.price = function () {
    return pricePerKM * this.jarak;
  };
}

let client1 = new Gojek(10);
client1.pricePerKM = 2000;
console.log(client1.price());

// pilar 2 inheritance
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  detail() {
    return `${this.name} berusia ${this.age}`;
  }
}

class Person extends People {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
}

let client = new Person("Thoriq", 20, "Frontend");
console.log(client.name);
console.log(client.age);
console.log(client.jobTitle);
console.log(client.detail());

// pilar 3 polymorphism
class Animal {
  animalSound() {
    console.log("Hewan mengeluarkan suara");
  }
}

class Cat extends Animal {
  animalSound() {
    console.log("Meong");
  }
}

let kucingGang = new Cat();
kucingGang.animalSound();

class KucingRumahan extends Cat {
  animalSound() {
    console.log("Meongnya kucing rumahan");
  }
}

let kucingRumah = new KucingRumahan();
kucingRumah.animalSound();

let hewan = new Animal();
hewan.animalSound();

class dog extends Animal {
  animalSound() {
    console.log("guk guk");
  }
}

let anjingPeliharaan = new dog();
anjingPeliharaan.animalSound();

// pilar 4 abstraction

class Hero {
  constructor(healthPoint) {
    this.healthPoint = healthPoint;
  }

  attack() {
    // this.healthPoint = this.healthPoint - 50
    this.healthPoint -= 50;
    return this.healthPoint;
  }

  heal() {
    this.healthPoint += 100;
    return this.healthPoint;
  }
}

let alpha = new Hero(500);

console.log(alpha.attack());
console.log(alpha.heal());

class Animal {
  animalSound() {}
  namalatin() {}
  punyaKaki() {}
}

class Cat extends Animal {
  animalSound() {
    console.log("meong");
  }
}

let kucingAnggora = new Cat();
kucingAnggora.animalSound();
kucingAnggora.namaLatin();
