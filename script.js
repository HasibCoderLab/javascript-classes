// ===================|     Example 01    |==================
class ToyotaCar {
    start() {
        console.log("Start");

    }

    stop(){
        console.log("Stop");
        
    }
    setBrand(Brand){
        this.BrandVar = Brand
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner")
let lexus = new ToyotaCar();