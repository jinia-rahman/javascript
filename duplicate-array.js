function RemoveDuplicate(number){
    const unique =[]; // to store unique
    for(const element of number){ 
        console.log(element);
        if(unique.indexOf(element)== -1){  // if index is empty then -1 
            unique.push(element);    // 
        }
    }
    return unique; // return outside the loop
    }
const uniqueNum = RemoveDuplicate(number); // function calling
console.log( uniqueNum);