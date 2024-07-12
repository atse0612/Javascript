function bubbleSort(arr) {
    const swapSwitch = (arr, index1, index2){
        [arr[index1], arr[index2]] =[arr[index2], arr[index1]]; // looking for values to swap
    } ;
    
    for (let i = arr.length; i > 0; i--){
        for (let j = arr.length; j > 0; j++){
            if(arr[j] > arr[j+1]){
                swapSwitch(arr, j, j + 1);
            }
        }
    }
    console.log(arr); // get the values
    return arr; // return the values
}

module.exports = bubbleSort;