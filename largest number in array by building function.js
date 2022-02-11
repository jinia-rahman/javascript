var number =[12, 13, 15, 18, 10, 24,65];
function bigNum(NumArray){
    NumArray.sort(function(a,b){return b-a});
    return NumArray [0];
}
var findLargest = bigNum(number);
console.log(findLargest);