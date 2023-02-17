
// Setup
// const lastName = "Lovelace";

// Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
// console.log (lastLetterOfLastName) 
// console.log(lastName)
// a = 12
// b = 18 
// console.log (a+b)

// // arrays
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
//   ];
  
//   const subarray = arr[3];
//   const nestedSubarray = arr[3][0];
//   const element = arr[3][0][1];
//   console.log (element)

// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop(1);
// console.log(oneDown);
// console.log(threeArr);



// Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// const removedFromArray = myArray.pop()
// console.log(myArray);
// console.log(removedFromArray);


// function reusableFunction (){
//     console.log("hi world");
//   }
//   function(reusableFunction)

// function functionWithArgs (arg1,arg2){
//     console.log(arg1+arg2);
//   }
//   functionWithArgs(1,2)

// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }

// console.log(myFun)
// function testLessOrEqual(val) {
//     if (val<=12) {  // Change this line
        
//       return "Smaller Than or Equal to 12";
//     }
  
//     if (val<=24) {  // Change this line
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   testLessOrEqual(10);
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
case 1:
answer=("alpha");
break;
case 2:
answer=("beta");
break;
case 3:
answer=("gamma");
break;
case 4:
answer=("delta");
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
