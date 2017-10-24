// creating interface  bottles

interface bottles {
    name: string;
}
//creating interface cups
interface cups {
    name : string;
    quantity : number;
}
// creating a class parent 
class Parent<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}
// printing the details of class person
let bottleData : bottles = { name: "glass"};
let parents: Parent<bottles> = new Parent<bottles>();
parents.children.push(bottleData);
console.log(parents.children);

let cupData : cups = { name : "metal", quantity : 4};
let cup: Parent<cups> = new Parent<cups>();
cup.children.push(cupData);
console.log(cup.children);

