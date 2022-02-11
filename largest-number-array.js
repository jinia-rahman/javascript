var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= array[0];

for (i=0; i<=array.length;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}

console.log(largest);