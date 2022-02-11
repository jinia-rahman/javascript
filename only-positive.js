function PositiveNumber(numbers){
    let emptyArr = [];                    //empty array
    for(const number of numbers){        //for of
        if(number>=0){          // comapre with 0, 0 < positive
            emptyArr.push(number)  // push in empty array
        }
        else if(number<0){       
            break                  
            emptyArr.push(number)
        }
    }
    return emptyArr;
}
const numberArray =[2,3,4,5,67,12,-23,-56,78,-90];
console.log(PositiveNumber(numberArray));