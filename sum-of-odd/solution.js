function cubeOdd(arr) {
    if (arr === undefined || arr.length == 0) {
      return undefined;
  }
    var result = arr.map(cube => cube * cube * cube).filter(num => num % 2 !== 0).reduce((a, b) => a + b);
    console.log(result);
    return (result >= 0 || result <= 0) ? result : undefined;
  
  
  }