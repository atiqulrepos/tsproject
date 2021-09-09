let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1,true, 'hello']

//tuple
let person: [number, string, boolean] = [1,'Brad',true];
console.log("ID: ", id);

//tuple array
let employee: [number, string][]
employee =[
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];

//Union

let pid: string | number = 22;

pid = '22';

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
};

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
};
console.log("The value of Up is: ", Direction1.Up);
console.log("The value of Left is: ", Direction1.Left);

console.log("The value of Up is: ", Direction2.Up);
console.log("The value of Left is: ", Direction2.Left);

type User = {
    id: number,
    name: string,
    constructor(id: number, name: string):void

}

const user:User = {
    id: 1,
    name: 'John',
    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }
}

//Type Assertion

let cid: any = 1;
//let customerId = <number>cid;
//customerId = true; not good

let customerId = cid as number;

//Functions
function addNum(x:number,y:number):number {
    return x + y;
}

console.log(addNum(1,2))

function log(message: number | string) : void {
    console.log(message);
}

log('Hello')
log(1234)
//log(true) no no

interface UserInterface {
    id: number
    name: string
    show():void
}

const user1: UserInterface = {
    id: 11,
    name: 'Jill',
    show() {
        console.log(this.name)
    }
}

console.log(user1.id);
console.log(user.name);
console.log(user1.show())