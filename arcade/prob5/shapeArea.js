function shapeArea(n) {
    var area = 0;
    if (n == 1)
           return 1;
    else
           return (area += (n * 4) - 4 ) + shapeArea(n-1);
}
