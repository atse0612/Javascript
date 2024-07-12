function selectionSort(arr) {
    const swap = (arr, indx1, indx2) =>
        ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);
    
    for (let i = 0; i < arr.length; i++){
        let small = i; //lowest value
        
        for (let j = i+1; j < arr.length ; j++){
            if (arr[small] > arr[j]){
                small = j;
            }
        } 
        if (i !== small) swap(arr, i, small);
        
    }
    return arr;
}

module.exports = selectionSort;