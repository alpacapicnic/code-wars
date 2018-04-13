function validateUsr(username) {
    if (username.length > 3 && username.length < 17) {
      if (/[A-Z]/g.test(username) === true) {
        return false;
      }
      else if (/[ ]/g.test(username) === true) {
        return false;
      }
      else {return true}
    }
    else {return false};
  }