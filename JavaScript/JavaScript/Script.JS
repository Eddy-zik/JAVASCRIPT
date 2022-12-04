let name = "Edward";
typeof(name);

let Age=18;
typeof(Age);

let truth=False;
typeof(truth);

let h;

let val=null;
typeof(val);

let language=["html","css","Javascript"]
typeof(language)

let mydetails={Firstname:"Ezekiel-hart",
               Lastname:"Edward",
               Age:18,}
typeof(mydetails);

let num =7;
let result= num + num;
console.log(result);

let num=7;
alert(num)
prompt(num)
console.log(num);
prompt("please enter your name")
confirm(num)

let age;
age=prompt()
alert(age)
confirm(age)

let numz;
numz=prompt("please enter your number");
alert(typeof(numz))

let ageNum = Number(age);
alert(typeof(ageNum));

let num1=1;
let num2=0;

let newMum1, newMum2;
newMum1=Boolean(num1)
newMum2=Boolean(num2)
typeof newMum1;
typeof newMum2;
alert(newMum1);
alert(newMum2);

let str="hello";
let newstr;
newstr = Boolean(str)
typeof newstr;
alert(newstr);



let Firstname= "Ezekiel-hart";
let Lastname= "Edward";
let age= "50";
let location= "Port Harcourt";

//concatenation
let fullName = Firstname + Lastname;
alert(fullName);
let concatstr = "My Friend " + fullName+age +"year old and leaves in "+ location
+".";
alert(concatstr);

let backstr = `My friend ${fullName} is ${age} years old and leave ${location}.`
alert(backstr);

console.log(Firstname.length);
console.log(fullName.length);

alert( Firstname[0]);
alert( Firstname[Firstname.length -1]);
alert( Firstname.at[]);
alert( Firstname.at(2));

let str2="be";
str2="w"+str2[1]
alert(str2)

str2.toUpperCase(0);
str2[0].toLowerCase(o)