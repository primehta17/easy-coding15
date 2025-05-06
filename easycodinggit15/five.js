//write a function to count the number of even and odd digit in an integer

function countEvenOddDigits(numStr) {
    let count=0,count1=0,arr=[];
    for(let i=0;i<numStr.length;i++){
       if(numStr[i]%2==0){
         count++; 
       }else{
         count1++;
       }
    }
    arr.push(count);
    arr.push(count1);
    return arr;  
}
console.log(countEvenOddDigits("883452"));
console.log(countEvenOddDigits("1234567890"));