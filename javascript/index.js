// let name = "Bazil";
// console.log("Hello, " + name); 



// // call stack


// function man () {
//     console.log("hello mAN")
// }
// function good(params) {
//     man()
//     console.log("good boy")
// }
// good()

// stack underflow



// function one(params) {
//     one()
// }
// one()

// stack underflow

// let stack =[];
// let remove =stack.pop();
// console.log("removed")


                                    //  global scope

// let two="bazil";
// function three(params) {
//     console.log(two);
// }
// three()

                                //    functional scope

// function four(params) {
//     let five="zaman";
//     console.log(five);
// }
// four()
// console.log(five)

                                     // blcok scope

// {
//     let six ="biriyani";
//     console.log(six);
//
// console.log(six);


                            // lexical scope

// function outer(params) {
//     let city="mlp";
//     function inner(params) {
//         console.log(city);
//     }
//     inner()
// } 
// outer()

                    //exeptional hadling

// function divide(a,b){
//     try{
//         if(b===0){
//             throw new Error("you cant dividee by zero");
//         }console.log("result:" ,a/b)
//     }catch(error){
//         console.log(error.message);
        
//     }finally{
//         console.log("done working");
        
//     }
// }
// divide(10,0)


                        // hositing with TDZ

// console.log(a)
// var a=10;

// console.log(b)
// var b=10;

// console.log(c)
// var c=10;

                        //strict mode

//use strict  mode on the top of the code

// "use strict";


                        //// call back function

// function man() {
//     console.log("i am done");
// }
// function good(callback){
//     console.log("come fast")
//     callback()
// }
// good(man)


                        ////call back hell


// setTimeout(()=>{
//     console.log("one");
//     setTimeout(()=>{
//         console.log("one");
//         setTimeout(()=>{
//             console.log("one");
//             setTimeout(()=>{
//                 console.log("one");
//             },1000)
//         },1000)
//     },1000)
// },1000)


                                                ////  promise

// let food=new Promise((resolve,reject)=>{
//     let hunger=false;
//     if (hunger){
//         resolve("done");
//     }else{
//         reject("not  done")
//     }
// });
// food
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err)
// })


                                    //// closure

// function outer(params) {
//     let name ="i am bazil";
//     function inner(params) {
//         console.log(name);
//     } return inner()
// }
// const good= outer();
// good();



                    //// iife(immeadietly invoke function expression )

// (function good() {
//     console.log("hello");
    
// })();

                        //// constroctor function 

// function bad(name , age) {
//     this.name=name;
//     this.age =age;   
// }
// const one= new bad("bazil",2000)

// console.log(one.age);


                            //// generator functionn 

// function* mad(params) {
//     yield "one";
//     yield "two";
//     yield "three";
// };
// const mood= mad();
// console.log(mood.next().value);
// console.log(mood.next().value);
// console.log(mood.next().value); 



                                            //// async and await




// async function ten(params) {
//     let res=await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let data=await res.json();
//     console.log(data);

// }
// ten()



                                    //// event loop

// console.log("one");
// setTimeout(()=>{
//     console.log("two");
    
// },2000);
// console.log("three");



                        //// optional chaining

// const man={
//     user:"bazil",
// };

// console.log(man.user)

                                //// curining

// function add(a) {
//     return function(b){
//         return function (c){
//             return a+b+c;
//         }
//     }
    
// }
// console.log(add(1)(2)(3));

//// 