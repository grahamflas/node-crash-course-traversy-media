export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Ich heiße ${this.name}. I bin ${this.age} Jahre alt.`);
  }
}
