function insertionSort(args) {
    for(let i = 0; i < args.length; i++){
        let current = args[i]; //current value variable
        
        for (var j = i - 1; j > -1 && args[j] > current; j--){
            args[j+1] = args[j];
        }
        args[j + 1] = current;
        
    }
    return args;
}

module.exports = insertionSort;