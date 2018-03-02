function almostIncreasingSequence(sequence) {

    var num = 0;
    for (i = 0; i<= sequence.length; i++){
        if (sequence[i] >= sequence[i+1]){
            num++;
            console.log(num);
            if(sequence[i]>= sequence[i+2] && sequence[i-1]>=sequence[i+1])
                return 0;
        }
    }
    return num <= 1;
    
}
