// ===================|     Example 01    |==================
// class ToyotaCars {
//     start(){
//         console.log("Run The Car");

//     }

//     Stop(){
//         console.log("Break The Car");

//     }
//     setBrand(brand){
//         this.BradVar = brand 
//     }

// }

// let fortuner = new ToyotaCars();
// fortuner.setBrand("Fortuner");
// let lexus = new ToyotaCars();
// lexus.setBrand("Lexus");




// ===================|   *constructor *    |===========================
class subjects {
    constructor(subPosition, marks) {
        console.log("Pain Subjects");
        this.subPosition = subPosition;
        this.marks = marks;

    }
    Math() {
        console.log("Want you solve using formula");

    }

    physics() {
        console.log("Formula And Formula");

    }
}
let painSub1 = new subjects(1, 49); //constructor
let painSub2 = new subjects(2,59);//  constructor