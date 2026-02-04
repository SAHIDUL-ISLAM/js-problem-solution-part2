/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(name){
    let len = name[0];
    for(const str of name){
        if(str.length<len.length){
            len = str;
        }
    }
    return len;
}
const result = smallestName(heights2);
console.log(result);