/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    mobile = 20000 tk
    tablet = 15000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */
function calculateElectronicsBudget(laptopQty,tabletQty, mobileQty){
    const laptop = 35000;
    const tablets = 15000;
    const mobile = 20000; 

    const laptopTotal = laptop * laptopQty;
    const tabletsTotal = tablets * tabletQty;
    const mobileTotal = mobile * mobileQty;

    const totalBudget = laptopTotal + tabletsTotal + mobileTotal;
    return totalBudget;
}
const result = calculateElectronicsBudget(0,0,1);
console.log(result);