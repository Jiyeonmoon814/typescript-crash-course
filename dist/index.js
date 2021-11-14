"use strict";
//Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'really', false];
// Tuple 
let person = [1, 'Brad', true];
// Tuple Arrau
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Jimmy'],
    [3, 'Kelly'],
];
// Union 
let pid = 22;
pid = '22';
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; //3
})(Direction1 || (Direction1 = {}));
//console.log(Direction1.Up) //0
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
//console.log(Direction1.Left) //3
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
//when you wanna change the type from the assigned type 
//let customerId: <number>cid
let customerId = cid;
// Function 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (s, y) => x + y;
const sub = (s, y) => x - y;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const moon = new Person(1, 'moonlight');
console.log(moon.register());
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registerd`;
    }
}
// Extending Classes (Subclasses)
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(5, 'Sara', 'PM');
console.log(emp.position);
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['moon', 'sun', 'star']);
strArray.push('cloud');
console.log(strArray);
