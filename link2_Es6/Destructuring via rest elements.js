function removeFirstTwo(list) {
    [,, ...list] = list
    return [,, ...list] = list;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);