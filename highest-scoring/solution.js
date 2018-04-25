function high(x){
    var words = x.split(' ');
        highest = 0;
        res = '';
    for(let i = 0; i < words.length; i++){
      var s = words[i];
      console.log(s);
          value = 0;
      for(let j = 0; j < s.length; j++){
        value += (s.charCodeAt(j) - 96);
      }
      if(value > highest){
      console.log(value);
        highest = value;
        res = s;
      }
    }
    return res;
}