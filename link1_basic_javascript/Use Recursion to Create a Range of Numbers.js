function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
      return [];
    }else{
      const rangeCount = rangeOfNumbers(startNum,endNum - 1);
      rangeCount.push(endNum);
      return rangeCount;
    }
  };