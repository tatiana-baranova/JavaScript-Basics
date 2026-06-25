// let x = 5;
// let y = 10;
// let res; 

// res = x + y;
// console.log("Result:"+ res);

// res = x - y;
// console.log("Result:"+ res);

// res = x * y;
// console.log("Result:"+ res);

// res = x / y;
// console.log("Result:"+ res);

// res += 1;
// console.log("Result:"+ res);

// let a = 5;
// res = (a + y) * 2;
// console.log("Result:"+ res);


// let w1 = "Hello ";
// let w2 = "World";
// console.log(w1 + w2);

let x = 16;
let hasCar = false;
let y = 16;
if (y == x || hasCar == true )
console.log("Рівність");
else if(x >= 15){
    console.warn("x >= 15");
    if(x = 16)
        console.log("x == 16");
}
else
    console.log("Not equal");
    

let username = "Denia";
switch(username){
    case "Bob":
        console.log("User name is Bob");
    break;
    case "Alex":
        console.log("User name is Alex");
    break;
    case "Den":
        console.log("User name is Den");
    break;
    default:
        console.log("User name undefined");
}

//Турнарний оператор

// let res;
// let number = 25;
// if(number >= 25){
//     res = "Huge"
// } else{
//     res = "Small";
// }

let number = 25;
let res = number >= 25 ? "Huge": "Small";
console.log("Result: "+ res);
