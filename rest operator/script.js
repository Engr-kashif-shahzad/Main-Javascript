// // function sum(n1,n2,n3,...num){
// //     return 1
// // }
// // num(1,2,3,4,5,6,6,7,8,9)
// // console.log(num); // not work

// // function default parameter
// function sum(n1,n2,n3=6,n4=7){
//     return n1+ n2+ n3+n4
// }
// console.log(sum(3,5))
// // or
// console.log(sum(3,5, 8))

// // destruction ( w.r.t Array & Object)

// let numbers=[2,5,6,3,4,33,6,8]
// const[num1,num2, , num]= numbers
// console.log(num1,num2, num)

// // object
// let person={
//     name:"ali",
//     age : 22,
//     qualification:" bscs"

// }
// let {name, age, qualification}= person
// console.log(name, qualification, age)
// console.log(name)
// console.log(" ")
// console.log(qualification)
// console.log(age)
// Templete Literal

let nam="ali";
// hello everyone ali is a good person
console.log("hello " + nam + " is a good person")
// or
console.log('hello everyone' + $[nam] + "is a good person")