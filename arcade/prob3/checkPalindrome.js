function checkPalindrome(inputString) {
    
    var re = /[^A-Za-z0-9]/g;
    inputString = inputString.toLowerCase().replace(re, '');
    var len = inputString.length;
      for (var i =0; i< len/2; i++){
        if (inputString[i] !== inputString[len - 1 - i]){
          return false;
        }
      }
    return true;
  }
  console.log("check: ", checkPalindrome('ana'));
  