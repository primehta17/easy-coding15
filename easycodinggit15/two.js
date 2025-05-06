function buildString(chars, frequencies) {
    let str='';
    for(let i=0;i<chars.length;i++){
       
      
    
    }
    for(let j=0;j<frequencies.length;j++){
        str+=chars[j];
    }
    return str;
}
let chars=['a','b','c'];
let frequencies=[2,3,1];
console.log(buildString(chars, frequencies))