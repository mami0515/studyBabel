class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log(`Hello I'm ${this.name}`);
  }
}
let alice = new Person("Alice", 7);
alice.sayHello();

class Designer extends Person{
  constructor(name, age, skill){
    super(name, age);
    this.skill = skill;
  }
  showSkill(){
    console.log(`スキルは${this.skill}です。`);
  }
}
let designer = new Designer("maoda", 31, "JavaScript");
designer.showSkill();
designer.sayHello();
