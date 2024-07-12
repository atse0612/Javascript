function merge(args1, args2) {
    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < args1.length && j < args2.length){
        if(args2[j] > args1[i]){
            results.push(args1[i]);
            i++;
        }else{
            results.push(args2[j]);
            j++;
        }
    }
    
    while (i < args1.length) {
        results.push(args1[i]);
        i++;
    }
    
    while (j < args2.length) {
        results.push(args2[j]);
        j++;
    }
    
    console.log(results);
    return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2); //obtaining the midpoints
  const left = mergeSort(arr.slice(0, mid)); //splicing to the left
  const right = mergeSort(arr.slice(mid)); //splicing to the right

  return merge(left, right); //getting both the midpoints
}

module.exports = { merge, mergeSort};