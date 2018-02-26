
function valByIndex(a) {
    // const array = [1, 2, 3, 4];
    for (let i of a){
    //since array starts from 0
    let posi = Math.abs(i) - 1; //
    //if array a's posi is less than 0 
    //that means we just seen the first item
    if(a[posi]<0) return posi+1;
    
    a[posi]= a[posi] * -1; 
    }
    return -1;
}

console.log(valByIndex([1,2,2,4]));

