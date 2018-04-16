function validatePIN (pin) {
    if (pin.length === 4 || pin.length === 6) {
      if (/^[0-9]*$/g.test(pin) === true) {
        return true;
      }
      else {return false}
    }
    else {return false}
  }