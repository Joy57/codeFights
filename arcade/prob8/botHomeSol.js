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
 
        for (var i = 0; i< size1; i++)
            {
                for (var j = 0; j < size2; j++){
                
                    if (matrix[i][j] === 0){
                        for (var l = i+1; l < matrix.length; l++){
                            matrix[l][j] = 0;
                        }
                    }
                }
            }
        for (var i = 0; i <size1; i++){
            for (var j = 0; j <size2; j++){
                total += matrix[i][j];
            }
        }
        return total;
    }
    
    var matrix = [1,2,3];
    var retVal = matrixElementsSum(matrix);
    console.log(retVal);