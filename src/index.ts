//Basic Types
let id : number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true 
let x: any = 'Hello'


let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'really',false]


// Tuple 
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Arrau
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Jimmy'],
    [3, 'Kelly'],
]

// Union 
let pid: string | number = 22

pid = '22'

// Enum 
enum Direction1 {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

//console.log(Direction1.Up) //0

enum Direction2 {
    Up = 1,
    Down, 
    Left, 
    Right 
}

//console.log(Direction1.Left) //3

enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//console.log(Direction1.Down) // Down

// Objects
type User = {
    id : number,
    name : string 
}

const user: User = {
    id : 1,
    name : 'John',
}

// Type Assertion
let cid: any = 1
//when you wanna change the type from the assigned type 
//let customerId: <number>cid
let customerId = cid as number 

// Function 
function addNum(x:number,y:number): number {
    return x + y 
}

function log(message: string | number): void {
    console.log(message)
}

// Interface 
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number  //optional 
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

//type can be used with unions or primitives
type Point = number | string // set two union, you can't use it like this with interface 
const p1: Point = 1 

//Interface with function 
interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (s:number, y:number): number => x + y 
const sub: MathFunc = (s:number, y:number): number => x - y 

// Classes 
class Person {
    id: number
    name: string
    
    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const moon = new Person(1, 'moonlight')

console.log(moon.register())

interface PerosonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PerosonInterface {
    id: number
    name: string
    
    constructor(id:number, name:string){
        this.id = id
        this.name = name 
    }

    register() {
        return `${this.name} is registerd`
    }
}

// Extending Classes (Subclasses)

class Employee extends Person2 {
    position: string

    constructor(id:number, name:string, position:string) {
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(5,'Sara','PM')

console.log(emp.position)

// Generics 
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<Number>([1,2,3,4])
let strArray = getArray<String>(['moon','sun','star'])

strArray.push('cloud')

console.log(strArray)