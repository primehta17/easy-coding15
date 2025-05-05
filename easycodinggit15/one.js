//write function to check array hits the jackpot
function hitTheJackpot(arr) {
    let first =arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==first){
            return false;
        }
    }
   return true;
    
}
console.log(hitTheJackpot([5,5,5,4]) )
function newarr(){

}