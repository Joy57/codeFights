function adjacentElementsProduct(inputArray) {

    if (inputArray.length == 1)
        return 0;
    else{
        var j = inputArray[0] * inputArray[0+1];
        for (var i = 0; i <= inputArray.length-1; i++){
            if (inputArray[i] * inputArray[i+1] > j){
                j = inputArray[i] * inputArray[i+1];
            }
        }
         return j;
    }
}
    //inputArray = [3, 6, -2, -5, 7, 3];
 
