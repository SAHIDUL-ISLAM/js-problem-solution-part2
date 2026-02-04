/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 =[167, 190, 120, 165, 137];
let max = heights2[0];

function heightsNumber(array){
        for(const values of array){
            if(values>max){
                max = values;
            }
        }
        return max;
}
const result = heightsNumber(heights2);
console.log(result);

