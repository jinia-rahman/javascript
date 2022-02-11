function countvowel(sentence) {
    let count =0;
    for(let i=0;i<sentence.length;i++){
        let latter =sentence[i].toLocaleLowerCase();
 if(latter == "a" || latter == "e" || latter == "i" || latter == "o" || latter == "u"){
    count = count+1;
    }
}
return count;
}
let string ="my name is chanku";
let total=countvowel(string)
console.log(total);