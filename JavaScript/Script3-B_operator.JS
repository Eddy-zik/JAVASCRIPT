// basic operators and maths

// unary negation

let a = 2;
a = -a; // unary negation was applied
alert(a); //
 
let B =6, C =3;
let D = B-C;
alert(D);// 3

// Remainder %
alert(7 % 2); // 3 R 1 //1 reslut reminder
alert(8%4); //2 R 0 //0

// exponential **
alert(4**2); // 16
alert(10**3); // 1000

// addition +
alert(23 + "30"); //2330
alert("23" + 30); //2330
alert(23 + 30); //53
alert("2"+ 3 + 4) //234
alert(2 + 3 + "1") //51 -it will add those in front and breaks into a string
alert("hello" + "world"); //"helloworld'""

// division /
alert("10" / "5"); //2
alert(100 / 10 ); //10

// subtraction
alert("10"-"5"); //5
alert("20" - 10); //10
alert( 20 - 50 ); // -30

let pen = "50";
let book = "100";
alert( pen + book ); //50100
alert( +pen + +book ); // 50 +100 // 150
alert(Number(pen) + Number(book)); //150

let z = 4 * 3 + 4;
alert(z); //

 let g = 5;
 let h = 6;

 let k = 11 - (g = h+1);
 alert(g); //7
 alert(k); //4

 // chaining assignment / it is to asign the same value to different variables
 let m, n, p;
 m = n = p = 1;

 let t = 12;
 let w = 34;
 t = w = 5; // t and w are 5
 t = w ; // t is 34

 let f; // declare
 f = 4 // assign

 // Modify and assign
 let s = 2; //
 s = s * 2; // 2 * 2 // 4
 s * = 2; // s = s * 2 // 4
 s + = 4; // s = s + 4 // 6
 s - = 10; // s = s - 10 // -8

 // increment and decrement (++ and --)
 let q = 11;
 q += 1; // q = q + 1 // 12
 q++;   // q = q + 1 // 12
 q--;   // q = q - 1 // 11
 // q += 1; is equal to q++; //

++q // prefix
q++ // postfix
// They both increment q by 1

let count = 1
let j = count++;
// j = count = count +1
alert(j); // 1 because postfix returns th old value

let r = ++count;
//r = count = count + 1
alert(r); // 2 because perfix returns the new value

let round = 0;
round++;
++round; // 2 because when they are next to each other they will do the same thing
alert(round); // 2

let dog = 1
alert( 3 * ++dog ); // 3 * (1+1)// 6
alert( 3 * dog++); // 3 * 1 // 3

let y = (7 + 8, 2 + 1); //3
alert(y);

//comparisons 
alert(2 < 1); // false
alert( 4 == 2); //flase
alert( 2 != 1); //true

let response = 10 > 6;
alert(response); // true

alert("z" > "c"); // true
alert("blow" > "bleed"); // true
alert("blo" > "blow"); // false
alert("age" > "esther"); // true
alert(null > 0); // false


alert("01" == 1); // true
alert('4' > 1); // true
alert(1 == true ); // true
alert(0 == true ); // false
alert(false == 0); //true
alert('' == false); // true

alert( 0 === false ); //false 
alert (null === undefined); // false
alert( null == undefined); // true


