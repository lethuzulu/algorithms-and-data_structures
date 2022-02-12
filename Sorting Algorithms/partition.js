
array =[-2,3,-1,5,4,-3,0]

function partition(array, l, r){
    let pivot = array[r];
    let i = l-1;
    for(let j = l; j < r; j++){
        if(array[j] < pivot){
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i+1, r);
    return i+1;
}
function swap(array, index1, index2) {
    let temporary_variable = array[index1];
    array[index1] = array[index2];
    array[index2] = temporary_variable;
}

partition(array, 0, 6);
console.log(array);
