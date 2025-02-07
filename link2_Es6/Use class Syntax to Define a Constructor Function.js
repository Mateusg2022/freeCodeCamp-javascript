// Only change code below this line
class Vegetable{
    constructor(...args){
      this.name = args[0];
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'
  console.log(Vegetable) //---> classes sao funcoes