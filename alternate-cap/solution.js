function capitalize(input){
    var even = input;
    var odd = input;
    for (var i = 0; i < even.length; i++) {
      if (i % 2 === 0) {
        even = even.substr(0, i) + even[i].toUpperCase() + even.substr(i + 1);
        }
      else {
        odd = odd.substr(0, i) + odd[i].toUpperCase() + odd.substr(i + 1);
        }
      }
      return [even, odd];  
    
}