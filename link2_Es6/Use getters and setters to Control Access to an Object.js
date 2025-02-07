// Only change code below this line
class Thermostat{

    constructor(temp){
      this._temperature = temp;
    }
  
    get temperature(){
      return (this._temperature - 32) * 5/9;
    }
  
    set temperature(temp){
      this._temperature = temp * 9.0 / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius