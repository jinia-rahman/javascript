//requirmnets
//chairwood = 3cft/chair
//tablewood = 10cft/table
//bedwood = 50cft/bed
function woodCalculator (chairQuantity , tableQuantity, bedQuantity){
    const perChairWood =3;
    const perTableWood =10;
    const perBedWood = 50;
    const woodChair =perChairWood * chairQuantity;
    const woodTable = perTableWood * tableQuantity;
    const woodBed = perBedWood * bedQuantity;
    const total = woodBed + woodChair + woodTable;
    return total;
}
var woodTotal =woodCalculator (1,2,2);
console.log(woodTotal);