const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  let aux = s[2];
  s[2] = s[0];
  s[0] = aux;

  aux = s[1];
  s[1] = s[2];
  s[2] = aux;
  // Only change code above this line
}
editInPlace();