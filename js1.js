//array
// let selectedFruit =[
//     "apple", 2 , "5" , true];
// selectedFruit[4]= "banana"
// console.log(selectedFruit.length);


//function
// function sayhi(userName , lastName ){
//     console.log("hi "+ userName +" "+ lastName)
// }
//cal
// sayhi("mahywr" , "ashrafian")

// //add
// function add(a,b){
//     return a+b ;
// }
// let result = add (3,4);
// console.log(result);

// operators

// let x = 10 ;
// // let y = 13 ;
// // console.log(x+y);
// // console.log(x**y);
// // console.log(y%x);

// // console.log(y+3);
// // console.log(x+=10);
// console.log(x!)
// console.log(1=="2") 

//discount ternary

// let totalPrice=120;
// let disscount = totalPrice>200 ? "10%" : "5%";
// console.log(disscount);

//logical

// let age = 20;
// let isLoggedIn = true ;
// console.log(age>18 && isLoggedIn)

//noneBolean

//swap varieable

// let a = "red" ;
// let b = "blue";
//  c=a ;
//  a=b ;
//  b=c ;
// console.log(a)

//if-else

// let age =18;
// if (age<18)
//     console.log("you are too young")
// else if ( age >= 18 && age < 60)
// console.log("done!")
// else
//  console.log("you are too old")

//switch-case

// let role ="admin"

// switch(role){
//     case "admin" : 
//     console.log ("this is admin") ;
//     break;

//     case"user" :
//     console.log ("this is user") ;
//     break;
//     default:
//         console.log ("unknown user") ;
//     break;
// }

// if( role == "admin") {
//     console.log ("this is admin") ;
// }
// else if (role == "user") {
//     console.log ("this is user") ;
// }
// else {
//     console.log ("unknown user") ;
// }

// let userType =
// role =="admin" ? "admin" : role =="user"? "user" : "unknown user"
// console.log(userType)


//  for(let i = 0 ; i<=10 ; i++){
//      if(i% 2 ==1)
// console.log("the odd is : " , i);
//  }
// let i = 0;
// while(i<=5) {
//     if(i%2!==0) console.log("the odd is : " , i);
//     i++
// }
// let user = {
//     name :"mahy", age : 23 , shahr:"tehran"
// };
// for (key in user){
//     console.log(key,":" ,user[key]);
// }

// let team =[
//     esteghlal , perspolis , teraktor
// ]
// for (let item of team){
//     console.log(team);
// }


// function max ( a , b){
//     // if (a>b) return a;
//     //  return b;
//     return a>b ? a:b ;
// }
// console.log (max (2, 22 ));

// function landScape (height , width){
// return height>width ;
// }
// console.log(landScape(16, 15));


// function fizzBuzz (a ){
//     if (a % 3 ==0 && a % 5 ==0 ) return("fizzbuzz");
//     else if  (a % 3 ==0 ) return("fizz");
//     else if (a % 5 ==0 ) return("Buzz");
//     else if (typeof a !=="number") return ("not a number")
//     else return a ;
// }
// console.log ( fizzBuzz("g"));

// function speedCheck (speed) {
//     const speedLimit = 70 ;

//     if (speed <= speedLimit) return ("ok") ;
//     else {
//         const points = Math.floor( speed - speedLimit)/ 5 ;
//         if (points <= 12 ) return (points);
//         return('suspended')
//     }
    





// }
// console.log(speedCheck(72))

// template literals

// let message =   `i am black board`
// console.log (message)

// function sayhi (name, lastName){
//     console.log (`hi ${name} ${lastName}`)
// }
// sayhi("mahy", "ashi")

// const now = new Date();
// console.log(now);


// let userData ={
//     name:' : mahyar' , 
//     age : ": "+ 23 ,
//     adress : {
//          city : "tehran" , country :"iran"}
// } 
// function showUser(a){
//     for ( let key in obj){
//         console.log(key,obj[key])
//     }
// }
// showUser(userData)

// Factory function
// function userData (name , age , city ){
//     return{
//         name,age,city    };
// }
// const user=userData('mahyar', " 23", "tehran ");
// console.log(user);

// Constructor function
//  function UserData  (name , age , city ){
//     this.name=name;
//     this.age = age ;
//     this.city= city;
//  }
 
//  const user2 =new UserData('mahyar', " 23", "tehran ");
//  console.log(user2);

// array

// let numbers = [1,2,3,5];
// const selecteItem = numbers.find(function(item){
//     console.log(item)
//     return item>3 ;
// });
// console.log(selecteItem)


// const cars =["volvo" , "bmw" , "benz"] ;
// console.log (cars.indexOf("benz"));

// const data =[
//     {name: "a" , id : 1 },
//     {name: "b" , id : 2 }
// ]
// console.log(data);

// const run = function() {
//     console.log ("run  ! ");
// }
// run()
// speak()
//  function speak () {
//     console.log ("speak  ! ");
// }

// function sum (){
//   let total = 0
//   for ( let value of arguments ) 
//   total += value 
//   return total;
      
// }
// console.log(sum(2,13 ,5 , 7, 12))


// function sum (discount , ...args){
//     console.log(args);
//     const total =  args.reduce((acc , curr )=> acc+curr);
//     return total * (1-discount)
   
//   }


//   console.log(sum(0.1 , 10 , 20 , 30 , 40))






