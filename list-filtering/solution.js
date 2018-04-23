function filter_list(l) {
    var filtered = l.filter(function (item) {
      return (typeof item === 'number');
    });
      return filtered;
    }