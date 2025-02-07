// Only change code below this line
const bicycle = {
    gear: 2,
    //nao precisa mais usar a palavra function e o : para declarar a funcao
    //setGear: function(newGear) {
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  