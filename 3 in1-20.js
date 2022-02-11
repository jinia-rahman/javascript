function dividedBY(){
    let count =0; // count 0 
    for(let i =1;i<=20;i++){
        if(i%3==0){
            count =count+1; // check and increase 1
        }
    }
    return count;
}
let total =dividedBY();
console.log(total);