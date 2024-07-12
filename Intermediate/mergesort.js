function merge(arr1, arr2){
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[1]);
            i++;
    } else{
        results.push(arr2[j]);
        j++;
        }
    }
    return results;
}

// Mergesort Algorithm

function mergeSort(arr){
    if(arr.length <= 1)
        return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(left, right);
}
