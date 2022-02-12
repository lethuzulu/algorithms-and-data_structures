class Arraylist {
    constructor() {
        let array = [];

        this.insert = function (value) {
            array.push(value);
        };

        this.toString = function () {
            return array.join();
        };

        this.bubbleSort = function () {
            let length = array.length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        swap(array, j, j + 1);
                    }
                }
            }
        };
        this.modifiedBubbleSort = function () {
            let length = array.length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - 1 - i; j++) {
                    if (array[j] > array[j + 1]) {
                        swap(array, j, j + 1);
                    }
                }
            }
        };

        this.selectionSort = function () {

            let length = array.length;
            let minimumIndex;

            for (let i = 0; i < length - 1; i++) {
                minimumIndex = i;
                for (let j = i; j < length; j++) {
                    if (array[j] < array[minimumIndex]) {
                        minimumIndex = j;
                    }
                }

                if (i !== minimumIndex) {
                    swap(array, i, minimumIndex);
                }

            }

        };

        this.insertionSort = function () {
            let length = array.length;
            let j;
            let temp;
            for (let i = 1; i < length; i++) {
                j = i;
                temp = array[i];

                while (j > 0 && temp < array[j - 1]) { //{5}
                    array[j] = array[j - 1]; //{6}
                    j--;
                }
                array[j] = temp; //{7}
            }
        };

        this.mergeSort = function () {
            array = mergeSortRec(array);

            function mergeSortRec(array) {
                let length = array.length;
                if (length === 1) {
                    return array;
                }
                let mid = Math.floor(length / 2);
                let left = array.slice(0, mid);
                let right = array.slice(mid, length);
                return merge(mergeSortRec(left), mergeSortRec(right));
            };
            
            function merge(left, right) {
                let result = [];
            
                let il = 0;
                let ir = 0;
            
                while (il < left.length && ir < right.length) {
                    if (left[il] < right[ir]) {
                        result.push(left[il]);
                        il++;
                    }
                    else {
                        result.push(right[ir]);
                        ir++;
                    }
                }
            
                while (il < left.length) {
                    result.push(left[il]);
                    il++;
                }
                while (ir < right.length) {
                    result.push(right[ir]);
                    ir++;
                }
                return result;
            };
        };

        this.quickSort = function(){
            quick(array, 0, array.length -1);

            function quick(array, left, right){
                let index; 
                index = partition(array,left,right);
            }
            function partition(array, left, right){
                
            }
        }

        function swap(array, index1, index2) {
            let temporary_variable = array[index1];
            array[index1] = array[index2];
            array[index2] = temporary_variable;
        }

    }
}

function createNonSortedArray(size) {
    let array = new Arraylist();
    for (let i = size; i > 0; i--) {
        array.insert(i);
    }
    return array;
}

let array = createNonSortedArray(5);
array.mergeSort();
console.log(array.toString());
