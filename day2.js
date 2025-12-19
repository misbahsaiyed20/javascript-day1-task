//Check even/odd number

let z = 11;
if (z %2 == 0){
    console.log('a is even number')
}
else{
    console.log('a is odd')
}

//Find largest of 3 numbers

let a = 4;
let b = 2;
let c = 9;

if (a > b && a> c){
    console.log('a is max', +a)
}
else if(b > a && b > c){
    console.log('b is max', +b)
}
else{
    console.log('c is max' , +c)
}

//Print numbers 1–100 (skip multiples of 5)

num = 0;
for (i = 0; i <= 100; i++){
    if(i %5 != 0){
        console.log(i);
    }
}

//Simple calculator using switch

let x = 100;
let y = 50;
calc = "add";

switch(calc){
    case "add":
        console.log("addition of x and y is ", x+y);
    case "sub": 
        console.log("subtraction of x and y is ", x-y);
    case "mul":
        console.log("multiplication of x and y", x*y);
    case "div":
        console.log("division of x and y is ", x/y)
}
