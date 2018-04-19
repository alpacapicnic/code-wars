function formatWords(words){
    if (!Array.isArray(words) || !words.length) {
      return '';
  }
    var space = words.filter(function(entry) { return entry.trim() != ''; });
    
    if (space.length > 2) {
      var first = space.slice(0, -1).join(", ");
      var last = space.slice(-1);
      var res = first + " and " + last;
      return res;
    }
    else if (space.length === 2) {
      var first = space.slice(0, 1);
      var last = space.slice(1);
      var res = first + " and " + last;
      return res;
    }
    else {return res = space.join();}
}