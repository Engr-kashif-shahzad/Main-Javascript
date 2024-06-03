// exercise #2ps
// Problem no.1
// var age=prompt("what is your age?");
// // if(age<10 && age<=20){ // o/p will be show (under 10)
// if (age>10 && age >=20){ // o/p will be show (20 & above 20)
//     //if(age>10 && age<20){ // o/p will be show (11 ~19)
//     console.log("your age lies between 10 & 20")
// }
// else{
//     console.log("your age doesn't lies between 10 & 20")
// }

// Problem no.1
var age = prompt("What is your age?");

switch (age) {
    case '10':
        console.log("Your age is 10");
        break;
    case '11':
        console.log("Your age is 11");
        break;
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    case '14':
        console.log("Your age is 14");
        break;
    default:
        console.log("Your age isn't special");
}

