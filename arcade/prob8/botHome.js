function matrixElementsSum(matrix) {
//new code

    //iterate through each element of an array
    //if i'th val is 0 and j'th value is non-zero----- it's bad
    //if i'th val is 0 and j'th value is zero--------- it's bad
    //if i'th val is non-zero and j'th value is zero----- good
        //add i'th val to a global variable
    //if i'th val is non-zero and j'th value is non-zero- good
        //add i'th and j'th val to same global variable
    
    //output the sum of global variable
    //
    //
    var size1 = matrix.length;
    var size2 = matrix[0].length;
    var total = 0;
    var temp;
    var temp2;
    if (size1 == 1){
        var i = 0;
        for (var j = 0; j <matrix[0].length; j++){
        temp = matrix[i][j];
        total += temp;
    }
      }
    else if (size1 == 0 && matrix[0].length == null){
        total = matrix.reduce((a, b) => a + b);
    }
    else{
    for (var i = 0; i< size1; i++)
        {
            for (var j = 0; j < (matrix[0].length); j++){
             
              if (i > 0){
                  if ((matrix[i-1][j] == 0) && (matrix[i][j] != 0)){
                      matrix[i][j] = 0;
                  }
                  else {
                      temp2 = 0;
                      if (i !=(size1-1)){
                      temp2 = matrix[i-1][j];
                      } 
                      temp = matrix[i][j];
                      total += temp + temp2;
                  }
              } 
            }
        }
    }
    return total;
}

var matrix = [1,2,3];
var retVal = matrixElementsSum(matrix);
console.log(retVal);