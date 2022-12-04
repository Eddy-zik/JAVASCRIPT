// includes, startsWith, endsWith
// str.includes(substr, pos) returns true/flase
let word = "We are leaving soon";
word.includes("are");
alert(word.includes("are"));

let result = word.includes("are");
alert(result)
 alert(word.includes("we", 4));

 //searching for a substring
 // str.indexOf(substr, pos), result the position where the match was found 
 let strm1 = "we are leaving soon";
 alert( strm1.indexOf("we"));
 alert( strm1.lastIndexOf("we"));

 strm1.startsWith("we");
 strm1.startsWith("are");

 strm1.endsWith("soon");
 strm1.endsWith("we");

 //substring. substr,slice
 let message="Hello dear";
 message.substring(1,3);
 message.substring(1);
 message.substr(1,5);

 //trim()// remove whitespace from both sides of a string 
 let paragraph = "I am here";
 paragraph.trim(); //Iam here

 //NUMBER
 let b = 3.142 //decimal
 let a = 10; //integer
 let x = 100000000 =10e9;

 //Rounding
 //Math.floor, Math.ceil, Math.round, Math.trunc
 //Math.floor rounds down
 //Math.ceil rounds up
 //Math.round rounds to the nearest integer
 //Math.trunc removes anything after the decimal point without rounding
 let numb = 3.13;
 let numb1 = -24.6;
 let numb2 = -24.1;
 Math.floor(numb);  //3
 Math.floor(numb1);  //-25
 Math.floor(numb2);  //3
 Math.ceil(numb);// 4
 Math.ceil(numb1);// -24
 Math.ceil(numb2);// -24

 Math.round(numb);
 Math.round(numb1);
 Math.round(numb2);

 Math.trunc(numb)

 let newAge= "45"
 let y = true;
 let newNume = "50px";
 let newNume1 = 33;
 let newNume2 = "a1234";
 //parseInt() // converts a string to a number
 parseInt(newAge); // 45
 Number(newAge); // 45
 Number(y); // 1

 //parseFloat() //convert a string to a float-point number
 parseFloat(newAge); //45
 typeof( parseFloat(newAge)); //number
 parseFloat(newNume); //50
 typeof(parseFloat(newNume));
 parseFloat(newNume2); 
 typeof(parseFloat(newNume2));

 //toString() // returns a string

 //isNaN() converts its argument to a number and then test if its NaN

 //isInteger() checks if the argument is an integer

 //toFixed(x) rounds the number to x digits after the point and
 // returns a string representation of the result.
 let example1 = 343.876;
 let example2 = 23.214;
 example1.toFixed(1);
 example1.toFixed(5);
 example2.toFixed(1);
 example2.toFixed(2);
 example2.toFixed(4);
 
 alart
 //Math.random()it truns a random number between 0 and 1