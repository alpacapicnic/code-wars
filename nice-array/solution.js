function isNice(arr){
  
    console.log(arr);
    if (arr == null){
      return false;
    }
    //for each index check that there's at least one of itself +1 OR -1
    
    var foundValue = false;
    
    for (var i = 0; i < arr.length; i++) {
      foundValue = false;
      for (var j = 0; j <  arr.length; j++) {
        //var oneAbove = arr[i] + 1;
        //var oneBelow = arr[i] - 1;
        //console.log('Comparing ' + arr[j] + ' to ' + oneAbove + ' and ' + oneBelow);
        
        if (arr[j] === arr[i]-1 || arr[j] === arr[i]+1){
            foundValue = true;
            break;
        } 
      }
      
      if (foundValue === false)
        break;
    }
    
    return foundValue;
  
    
  
  }
  