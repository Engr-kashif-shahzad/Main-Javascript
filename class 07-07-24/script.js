// spread operator

let x1=[14,15,16,17];
  let x2=[18,19];
  let x3=[]

document.write(["1st methode:"+ x1+x2  + "<br>"])
document.write(["2nd methode:" + x1,x2  + "<br>" ]) //2nd methode
document.write(["3rd method :" +([...x1, x2 ]) + "<br>"])
document.write(["4th method :" + ([...x1, ...x2]) ]) 

console.log([...x1, ...x2  ])
// or 
console.log("spread operator" + ([...x1,...x2]))  // its  work
// console.log("spread operator" ([...x1,...x2])) // its not work
 let x4=[100,200]
console.log([...x1,100,200,...x2])
