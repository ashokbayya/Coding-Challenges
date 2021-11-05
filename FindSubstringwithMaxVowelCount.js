let str = 'bbbbbbbbbbaaa';
var i=0;
var obj={};

if(!str.match(/[aeiou]/ig)){
    console.log("Not Found!")
}
else{
while(i<str.length){
    let substr = str.substring(i,i+5);
    if(substr.length<5){
        break;
    }
    i=i+1;
    if(substr.match(/[aeiou]/ig)){
        obj[substr]=substr.match(/[aeiou]/ig).length;
    }else{
        obj[substr]=0;
    }
    
}

let a= Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
console.log(a);
}
