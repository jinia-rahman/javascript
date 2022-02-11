//for first 2kg, price=30tk
//for more than 2kg, price=25tk
//write a function that calculte total price  based on quantity
function mularDam(quantity){
    if(typeof quantity !="number"){
        return "please enter a valid number"
    }
    if(quantity<=0){
        return "please enter a valid number"
    }
    if(quantity>20){
        return "please enter less than"
    }
    let price; //price declare 
    if(quantity<=2){
        price = quantity * 30;
    }
    else{
        price=quantity *25;
    }
    return price;
}
console.log(mularDam(ok));
