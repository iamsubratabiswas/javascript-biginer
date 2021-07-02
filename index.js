var arrayName=[1,2,3,4,"subrata",5,6,7,8,9];

//normal for loop
// for(var i=0;i<arrayName.length;i++)
// {
//     console.log(arrayName[i]);
// }
                                   
//forEach loop method  works same as for loop    //by default give new line

// arrayName.forEach(   function(element){console.log(element);}  )


//let=temporary variable block level existance 
                                   
                                               

// ways to print in javasript    
// console.log("Hello World");
// alert("me");  //Not much used /give alert on screen
// document.write("this is document write ") //write on sreen

// document.getElementsByTagName('h1')             //for tag     //Elements
// document.getElementsByTagName('h1')[0]
// document.getElementById('FirstContainer')   //for id           //Element
//FirstContainer                                //for id  same purpose

//document.getElementsByClassName("container")   for class    all    //Elements
//document.getElementsByClassName("container") [0]           //first one
// document.querySelector(".container")        //for class  for 1st one
 

// FirstContainer.innerHTML                                    //for Id
//document.getElementById('FirstContainer').innerHTML         //for Id same purpose as previous one
// document.querySelector(".container").innerHTML              //For class for 1st one
//document.getElementsByClassName("container") [0].innerHTML   //For Class


//operations
// document.getElementsByTagName('h1')[0].style.fontSize="12px"
// document.getElementsByTagName('h1')[0].style.background="red"
// document.getElementsByTagName('h1')[0].style.visibility="hidden"    //element disappeared but space tken

// FirstContainer.innerHTML="i hate begging"                 //id
// document.getElementById('FirstContainer').click()      //for id
// FirstContainer.click()                                  //for id

// document.querySelector(".container").click()              //for class
//document.getElementsByClassName("container")[0].click()      //for class
// document.getElementsByTagName('h1')[0].style.display="none"   //element disappeared , no captured space


// document.write("this is document write ") //write on sreen document  //but it should be avoided

//Javascript cosole API
// console.log("Hello World", 4 + 6, "another log");   //print on console
// console.warn("this is a warning");    //give warnig on console
// console.error("this is aa  error");    //show error on console
//console.assert(4==6)                       //to compare validity

/*
multi
line
comments
*/

//javascript variables

var number1 = 34;
var number2 = 56;
// console.log(number1+number2);       //90

//Data types in Javascript

//Numbers
var num1 = 455;
var num2 = 35.45;

//string
var str1 = "this is a string";
var str2 = 'this is also a string';

//console.log(str1+" "+str2+" "+num1+num2);  //this is a string this is also a string 45535.45

//object (key:value)

var marks = {
    subrata: 100,
    shubham: 78,
    harry: 99.977
}
//Boolean
var a = true;
var b = false;
// console.log(a,b ); 
// console.log(marks); 

//var und=undefined;   //undefined=not defined,null and undefined are different
var und;  //by default undefined ,initialistion with undefined not mandatory
// console.log(undefined );
// console.log(und);  
var n = null;
// console.log(n ); 

/*in javascript datatype= two
    1.primitive  =6
undefined,null,number,string,boolean,symbol
    2.reference
Array,Object
*/

var arr = [1, 2, "string here", 4, 5];   //rectangular bracket
// console.log(arr);           //length and type also be printed
// console.log(arr[2]); 

//operators in javascript

var a = 100;
var b = 10;
// console.log("the value of a+b is :", a+b ); 
// console.log("the value of a-b is :", a-b ); 
// console.log("the value of a*b is :", a*b ); 
// console.log("the value of a/b is :", a/b ); 
// console.log("the value of a%b is :", a%b ); 

//assignment operator
var c = b;
c += 2; //c=c+2
// console.log(c); //print

//comparison operator
// console.log(a==b); //false 
// console.log(a>=b);
// console.log(a<=b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);

//logical operators
// console.log(true&&true);  //true
// console.log(true&&false);  //false
// console.log(false&&false); //false


// console.log(true||true); //true
// console.log(true||false);  //false
// console.log(false||false);  //false

// console.log(true^true);   //false
// console.log(true^false);  //true
// console.log(false^false);  //false

// //logical NOT
// console.log(!true);   //false
// console.log(!false);  //true

//function

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 5);
c2 = avg(40, 50);
// console.log(c1,c2); //number=blue
// console.log('3'); //string==black



//conditional javascript

//if else
// var age=48;
// if(age<8)
// {
// console.log('you are a kid');
// }
// else
// {
//     console.log('you are not a kid');//op
// }


// //if else ladder
// var age=10;
// if(age>18)
// {
// console.log('you are adult');
// }
// else if(age>8)
// {
//     console.log('you are not a kid');//op
// }
// else
// {
//     console.log('you are a kid');
// }

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);


//for loop
// for(var i=0;i<arr.length;i++){
//     {
//         console.log(arr[i]);
//     }
// }

//forEach loop method
// arr.forEach(function(element){
//            console.log(element);
//         })

const ac = 0;
//ac++;       //Error 
              // not possible as constant
//while loop

let j = 0; //scope of let upto block level inside curly bracket so we should use it instead var
// while(j<arr.length){
//     console.log(arr[j]);
//        j++;
// }

//do while loop  at least one it run

// let j = 0;  //error  //j already declared
j = 10;
// do {
//     console.log(arr[0]);
//     j++;
// } while (j < arr.length);

//break and continue

// for(var i=0;i<arr.length;i++){
//     if(i==5)
//     break; //exit from for loop
//     if(i==2)
//     continue; //skip this iteration go to for loop again
//     {
//         console.log(arr[i]);
//     }
// }

let myArray=["Fan","camera",34,null,true];

//Array methods
//length,pop,push,shift,unshhift,toString,sort

// console.log(myArray.length);  //5
// console.log(myArray);

// myArray.pop();  //delete element from end
// console.log(myArray.length);  //4
// console.log(myArray);

// myArray.push("subrata");  //add element at end
// console.log(myArray.length);  //5
// console.log(myArray);

// myArray.shift();  //delete element from begining
// console.log(myArray.length); //4
// console.log(myArray); 

// myArray.unshift("biswas");  //add element from bigining and return the length of new array
// console.log(myArray.length); //5
// console.log(myArray);

// console.log(myArray.unshift("subrata")); //print new array length alternative way //6
// console.log(myArray.length);  //6
// console.log(myArray);

// myArray.toString();  //convert to string working on console but in vs code not working properly

// myArray.sort();  //sort elements
// console.log(myArray.length); //6
// console.log(myArray);   


//string methods in javascript
//length,indexOf,lastIndexOf,slice,replace

let myLovelyString="Subrata is a good good boy";
// console.log(myLovelyString.length);  //21
// console.log(myLovelyString.indexOf('Subrata'));  //0 IN WHICH INDEX
// console.log(myLovelyString.indexOf('subrata')); //-1
// console.log(myLovelyString.indexOf('good')); //13
// console.log(myLovelyString.lastIndexOf('good')); //18
// console.log(myLovelyString.slice(2,6)); // (index: n1 to n2-1 ) //brat

// d=myLovelyString.replace('Subrata','subrata');  //2nd will replace first one
// console.log(d,myLovelyString); //return replaced original not changed
 
// d=myLovelyString.replace('good','verygood'); //replace only first occurence
// console.log(d,myLovelyString); //return replaced original not changed


//Date

// let myDate= new Date();
// console.log(myDate);  //eg:  Thu Jun 24 2021 01:21:52 GMT+0530 (India Standard Time)

//Date methods

// console.log(myDate.getTime());  //gives times in seconds 
// console.log(myDate.getDate());  //gives date //eg: 24
// console.log(myDate.getDay());  //gives day //eg:4 dates start with sunday by index 0
// console.log(myDate.getFullYear());  //gives year //eg:2021  
// console.log(myDate.getMinutes());  //gives times in minutes  eg//21
// console.log(myDate.getHours());  //gives times in hours //eg: 1 
// console.log(myDate.getMilliseconds());  //gives times in milliseconds 

//DOM=Document object model manipulation
//we can use document to access html page

document.getElementById('click').style.border='2px solid blue' //works on id 'click' //to terget this 'click' id

let elem = document.getElementById('click');  //works on id 'click'    //to terget this 'click' id
// console.log(elem);  //<button id="click" style="border: 2px solid blue;">Click me</button>

let elemclass = document.getElementsByClassName('container'); //work on container classes
// console.log(elemclass);  

elemclass[0].style.background="yellow"; //first container  class become yellow

elemclass[1].classList.add("bg-primary"); //create bg-primary inside elemclass[1] or second cotainer class //blueviolet color override id cyan color
                                          //add  / remove both availabe

elemclass[1].classList.add("text-success");   //after creating it is effecting now go css and create and give some style to this class as red color of fonts

//elemclass[0].innerHTML  //in browser cosole to get access all html of any element

                          //"\n        <p>this is a paragraph on id FirstContainer
                          // and  class cotainer</p>\n        <button id=\"click\" style=\"border: 2px solid blue;\">Click me</button>\n    "

//elemclass[0].innerText  //in browser cosole to get access only text of any element
                          //"this is a paragraph on id FirstContainer and class cotainer\n\nClick me"


//  console.log(elem.innerHTML);
//  console.log(elem.innerText);


//  console.log(elemclass[0].innerHTML);
//  console.log(elemclass[0].innerText);

// tn=document.getElementsByTagName('button');
// console.log(tn); //show all the buttons available

tn1=document.getElementsByTagName('div');
// console.log(tn1); //show all the div available

createdElement = document.createElement('p'); //create a paragraph createdElement
createdElement.innerText="this is a created para" //inner texts of this  paragraph
tn1[0].appendChild(createdElement); //give this  createdElement inside tn1[0]

createdElement1 = document.createElement('b'); //create a bold createdElement1
createdElement1.innerText="this is a created bold" //inner texts of this  paragraph
tn1[0].replaceChild(createdElement1,createdElement); //replace createdElement by createdElement1 inside tn1[0]

//removeChild(element);--->removes an element
//document.location --->> give the locations
//document.title---> give the title
//document.URL
//document.scripts
//document.links
//document.images
//document.domain

//Selectng using query

sel=document.querySelector('.container');  //give the first container class
// console.log(sel);

sel1=document.querySelectorAll('.container');  //give all container classes
// console.log(sel1);

// Events in JavaScript
// this functoin is calles from html button id =click,go to html code to view
// function clicked(){
//     console.log('the button was clicked');
// }

// window.onload= function(){ 
//                              //run this function after loading
//                              //document.onload not work because we attach it to the window
//     console.log("the documet was loaded");
// }

// FirstContainer.addEventListener('click',function(){
//     //addEventListener first arg=event ,2nd arg= functiion to call each time of that event
//  //  document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked,2nd container elemnts changed and bold</b>" 
//     //it will make bold to 2nd cotainer class elwment when clicked on first container
//     console.log("clicked on container"); //if click anywhere on hole container but previous onclick only for button clck
// })

// FirstContainer.addEventListener('mouseover',function(){
//     //addEventListener first arg=event ,2nd arg= functiion to call each time of that event
//     console.log("mouse moving on container"); //if click anywhere on hole container but previous onclick only for button clck
// })

// FirstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container"); //if click anywhere on hole container but previous onclick only for button clck
// })

//mouseclick,mouseup,mousedown, 

 let prevHTML=document.querySelectorAll('.container')[1].innerHTML;

// FirstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     //addEventListener first arg=event ,2nd arg= functiion to call each time of that event
//     console.log("mouse up when mouse button released on container"); //if click anywhere on hole container but previous onclick only for button clck
// })

// FirstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked,2nd container elemnts changed and bold</b>" 
//     console.log("mouse button pressed in container"); //if click anywhere on hole container but previous onclick only for button clck
// })

//Arrow Function
  
// function summ(a,b){
//     return a+b;
// }

summ=(a,b)=>{      //Aroow functiion also doing the same work as previous function
    return a+b;  //we use this version inside codes isteasd writing previous bigger version
}


//setTimeout and setInterval
logKaro= ()=>{ 
    document.querySelectorAll('.container')[1].innerHTML="<b>set interrval fired</b>" ;
    // console.log("I AM YOOUR LOG ");
    setTimeout(logKaro1,2000);
}

logKaro1= ()=>{ 
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    // console.log("I AM YOOUR LOG1 ");
}

// setTimeout(logKaro,2000); //arg1=function which will run arg2=delay milliseconds

// bandhKaro=setInterval(logKaro,4000); //do repeatedly same work 
//to stop it(if neccessary) i use bandhKaro (not mandatory),bandhKaro return an id and if i give it to clearInterval(clr) then it stops
//clearInterval and clearTimeout to stop setInterval and setTimeout

//JavaScript local storage
//localStorage.setItem('name','subrata'),localStorage,localStorage.getItem('name'),localStorage.clear()

// localStorage.setItem('name','subrata')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')  //delete single item
//localStorage.clear()    //delete all items


//JSON  //JavaScript Object Notation use to exchange data,convert to string when transport and we can convert again to JS Object



// obj={name: "subrata", length: 1,a:{this: "that"}}    // typeof obj= "object" //a is another object inside it
// jso=JSON.stringify(obj);         //typeof jso= "string"
// console.log(jso,typeof jso,typeof obj,typeof obj.a,obj.a)  //string is transportable
//   //JSON doesn't support single quote, but JS support both,so it convert below ways 
//   // observation of this: "that": if 'tha"t'=> "tha\"t", 'tha\"t'=> "tha\"t", 'tha\ "t'=> "tha \"t", 'tha\\"t'=> "tha\\\t"

// persed = JSON.parse(`{"name":"subrata","length":1,"a":{"this":"that"}} `) //inside backticks
// console.log(persed); //convert to object

//Template literals - Backticks
a=34;
// console.log(`this is my ${a}`); //a will work as replace to varible  altough inside string //after version 5 not sigle quote use backticks
