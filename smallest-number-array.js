var arr = [0,1,9,5,7];
var smallest = arr[0]; // array sum default 0 

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){ //i =1,2,3,4,5 compare smallest= index 0
        smallest = arr[i];  // comapre kore arr[i] 
        
    }
}
console.log(smallest);