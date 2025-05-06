function threesExcuse(n) {
    let str="";
    for(let i=1;i<=n;i++){
        if(i%3==0){
           str+="Excuse";
        }else{
            str+=i;
        }
        if(i!==n){
            str+= " ";
        }
    }
    return str;
}
console.log(threesExcuse(10));