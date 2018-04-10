function abbrevName(name){
    var input = name.toUpperCase();
    var initial = input.split(" ");
  
    //toUpperCase()
    var first = initial[0];
    var one = first[0];
    
    var second = initial[1];
    var two = second[0];
    return `${one}.${two}`;
    

}