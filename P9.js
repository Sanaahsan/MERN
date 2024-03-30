// q1

let num=5;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

// q2

let name= prompt("What is your name?");
let age=prompt("What is your age?");
alert(` ${name} is ${age} years old`);

// q3

let months=1;
switch(months){
    case 1:
       console.log(" January,February,March");
       break;
    case 2:
       console.log(" April,May,June");
       break;
    case 3:
       console.log(" July,August,September");
       break; 
    case 4:
       console.log(" October,November,December");
       break;
    default:
        console.log("NA");    
}  

// q4

let str= "nice";
if(str[0]==='A'||  str=='a') && (str.length>5){
    console.log("golden string");
}
else{
    console.log("Not a golden string");
}

// q5

let a=32;
let b=36;
let c=99;
if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }
    else{
        console.log(b,"is largest");
    }
}
else{
    if(b>c){
        console.log(b, "is largest");
    }
    else{
        console.log(c, "is largest");
    }
}

// q6

let num1=5021;
let num2=5023;
if(num1[num1.length-1]===num2[num2.length-1]){
    console.log("Same last digit")
}

// Practice Question

// q1

let msg="help!";
console.log(msg.trim().toUpperCase());

// q2

let name1="ApnaCollege";
console.log(name1.slice(4,9));  
// Colle
console.log(name1.indexOf("na"));
// (2)
console.log(name1.replace("Apna","Our"));
// "OurCollege"

console.log(name.slice(4).replace('l','t'));
