function fibonacciSet(max) {
    if (max > 1) {
        var fibList = [1];
        var currentFib = 1;
        while (currentFib < max) {
            console.log(currentFib);
            fibList.push(currentFib);
            var lenFib = fibList.length;
            currentFib = fibList[lenFib-1] + fibList[lenFib-2];
            console.log(currentFib);
           }
        return fibList;
    }
    else{
        return [1, 1];
        }
    }

fibonacciSet(4000000);