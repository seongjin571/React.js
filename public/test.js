a = 3; 
var a;
console.log(a);

// c = 2;
let c;
// console.log(c);
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}