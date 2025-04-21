const a = "hello";
console.log(a);

function getFirstValue(arr) {
    if (Array.isArray(arr) && arr.length > 0){
        return arr[0];
    }
}

console.log(getFirstValue([2,5,3,8,7,6,9]));