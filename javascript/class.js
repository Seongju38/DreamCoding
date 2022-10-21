'use strict';

// Object-oriendted programming

// class : template
// object : instance of a class

// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor (생성자)
  constructor(name, age) {
    // fields
    this.name = name; // 전달된 데이터를 바로 할당
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`); // this : 생성된 object / . : 의 / name : 이름
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

/******************************************************************************************************************************/

// 2. Getter and Setter : 클래스를 사용하는 사용자가 바보 같이 사용해도 좀 더 방어적으로 사용할 수 있게 만들어주는 것
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() { // get을 정의하는 순간 this.age가 메모리에 있는 데이터를 읽어오는 것이 아닌 get을 호출하게 됨
    // return this.age;
    return this._age;
  }

  set age(value) { // set을 정의하는 순간 = age;(값을 할당할 때) 바로 메모리에 값을 할당하는 것이 아닌 set을 호출하게 됨
    // this.age = value; // 위와 같은 원리와 이 문장은 set을 호출하고 또 다시 set을 호출하고 무한대로 호출하게 됨 : error

    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    // this._age = value; // 문제를 방지하기 위해서 정의된 field 이름과는 다른 이름을 사용해야함

    this._age = value < 0 ? 0 : value;
  }
}

// User 클래스 안의 field는 firstName, lastName, _age 가 됨

const user1 = new User('Steve', 'Job', -1); // 나이는 -1이 될 수 없음
console.log(user1.age);

/******************************************************************************************************************************/

// 3. Fields (public, private)

class Experiment {
  // 생성자를 사용하지 않고 field를 정의할 수 있음
  publicField = 2; // public : 외부에서 접근 가능
  #privateField = 0; // private : 클래스 내부에서만 접근 가능
}
const experimet = new Experiment();
console.log(experimet.publicField);
console.log(experimet.privateField);

/******************************************************************************************************************************/

// 4. Static properties and methods

// 클래스 안에 있는 field와 method들은 object를 만들 때마다 새로 복제 되어서 그 값만 우리가 지정된 값으로 변경이 되어서 만들어짐
// object 데이터에 상관없이 공통적으로 사용되는 method들이 있을 수가 있는데, 그런 것들을 static으로 선언하여 사용함
// -> static으로 선언된 것은 object에 상관없이 class 자체에 연결되어 있는 것임

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined : publisher는 private로 선언되어 object에 연결되어 있는 것이 아님
console.log(Article.publisher); // Dream coding : class에 연결되어 있음
Article.printPublisher();

// static은 object (들어오는 데이터)에 상관없이 공통적으로 클래스에서 사용하고 싶을 때 선언 -> 메모리의 사용을 좀 더 줄여줄 수 있음

/******************************************************************************************************************************/

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding
  draw() {
    super.draw(); // 공통적으로 정의한 draw도 그려주면서 색다른 것도 그려주고 싶을 때
    console.log('▲');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triange: color: ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

/******************************************************************************************************************************/

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true : 자바스크립트의 모든 object는 Object를 모두 상속함

console.log(triangle.toString()); // 어떤 object들이든 Object에 정의된 메소드들을 사용할 수 있음
