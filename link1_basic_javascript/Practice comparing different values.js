// Setup
function compareEquality(a, b) {
    //outra opçao: if (a == b && typeof(a) == typeof(b)) { // Change this line
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");