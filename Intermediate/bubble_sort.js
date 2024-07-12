function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
       for (let j = 0; j < arr.length; j++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    console.log(arr); 
    return arr;   
        }
    }
}

[34, 5, 6, 2, 1, 45, 30]

function bubbleSort2(arr){
    for(let i = 0; i < arr.length; i++){
       for (let j = 0; j < arr.length-i; j++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    console.log(arr); 
    return arr;   
        }
    }
}

// Optimization
function bubbleSort3(arr){
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for (let j = 0; j < arr.length-i; j++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swapped = true;
            }
     }
    if (!swapped) break;
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

