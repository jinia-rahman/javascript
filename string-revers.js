const name = "hello! how are you?"
function reverseString(text){
    let reverse = '';
    for(const latter of text ){
        console.log(latter);
        reverse = latter + reverse ;
    }
}
const reversed = reverseString(name);
console.log(reversed);