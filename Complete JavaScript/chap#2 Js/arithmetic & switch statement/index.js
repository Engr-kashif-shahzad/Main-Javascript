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
// let age = prompt("What is your age?");

// switch (age) {
//     case '10':
//         console.log("Your age is 10");
//         break;
//     case '11':
//         console.log("Your age is 11");
//         break;
//     case '12':
//         console.log("Your age is 12");
//         break;
//     case '13':
//         console.log("Your age is 13");
//         break;
//     case '14':
//         console.log("Your age is 14");
//         break;
//     default:
//         console.log("Your age isn't special");
// }
// Problem no.2
// ternery operator
// let a= prompt("hey whats your age");
// a=Number.parseInt(a); // converting the string to a number
// if(a<0){
//     alert("This is an invalid age");
// }
// else if(a<9){
//     alert("your kid & you can think a drive after 18");
// }
// else if(a<18 && a>=9){
//     alert("your kid & you can think a drive after 18");
// }
// else{
//     alert("you can now drive as you are above 18")
// }
// console.log(Done)
// console.log("you can",a<18? "not drive": "drive")

// // Problem no.3
// let num=prompt("what's your age?")
// age=Number.parseInt(num)
// if(num % 2 == 0 && num % 3 == 0){
//     console.log("Your number is divisible by 2 & 3")
// }
//     else{
//         console.log("Your number isn't divisible by 2 & 3")
//     }
    // Problem no.4 ternary operator
    let age=77
    let a = age>18? "you can drive": "you can't drive"
    console.log(a)

