// IF statement

if (7 > 3) {
    alert("Hello world")
}

let numb = prompt("Enter a Year");

if (numb == 2023) {
    alert ("Happy New Year")
}

if (numb == 2023) {
    alert ("You Guessed Right")
} else {
    alert("YOU ARE USELESS")
}

// ELSE IF
if (numb == 2022) {
    alert ("You Guessed the year");}
   else if (numb < 2022) {
     alert("YOU ARE ELIGIBLE")}
   else if (numb > 2022 ) {
      alert("YOU ARE TOO YOUNG")
   }
      
   let age = prompt("enter age");
   const gateFee = 2500;
 
 if (age < 15) {
       let disc80 = 80/100;
       let discount80 = disc80 * gateFee;
       alert( Hi kiddo you have a discount of 2000 naria and your new gateFee is $(gateFee - discount80) ) 
   }
   if (age < 15) {
    let disc80 = 80/100;
    let discount80 = disc80 * gateFee;
    alert( `Hi kiddo, you have a discount of ${discount80} and your new gateFee is ${gateFee - discount80}`);
}

if (age < 18 ){
    let disc50 = 50/100;
    let discount50 = disc50 * gateFee;
    alert( gateFee - discount50 ) 
 }

 if (age > 18){
     let disc30 = 30/100;
     let discount30 = disc30 * gateFee;
     alert(`Hello you are too old and u well be grated a discount of ${discount30} and ur gate fee is ${gateFee - discount30}`);
 }
 
// AND Operator (&&)

let menu = a && b;

alert(true && false); //false
alert(false && true); //false
alert(false && true); //false
alert(true && false); //false
alert(true && true); //false
alert(false && false) //true

alert (1 && 0); // 0 -> false
alert (1 && 2 && 3); //3

// OR (||) operator finds the first truthy value
// Evaluates from let left to rigth
alert(true || false); //true
alert(false || true); //true
alert(false || true); //true
alert(true || false); //true
alert(true || true); //true
alert(false || false); //false

// NOT (!) OPERATOR
alert (!true); //fale
alert (!0); // true

alert(a && b || c && d);
alert(1 && 0 || null && 3);
alert( 0 || null); // null

if (age >= 15 || age <= 10) {
    alert()
}
