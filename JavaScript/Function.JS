// Functions

function name(parameter1, parameter2) {
    // code body
} 

//  Th create a function, we yse a function declaration
//example:
function showText (){
    alert("Hello");
}

showText();
showText();
showText();

function addNumb(a , b){
    let result = a+b
    return result;
}

addNumb(5, 2);

//local variable
function showTextmessages (message){
    alert(`$(message)`);
}

showTextmessages("This is a function");
showTextmessages("This is Nigeria");

// var5iables declared inside a function is only visible inside that function.
function showMsg(){
    let message = "Hello Nigeria";
    alert(message);

}

showMsg();
alert(message);

//outer variable
let gender = "male";

// a functin can access an outer variable and can modify it.
// if same-named variable is declared inside the function, it over-shadows the
outer one.
function showMGender (){
    gender = "female"
    let text = "I am a" + gender 
    alert(text);
}
alert(gender); //male
showMGender(); // Iam a female
alert(gender); // female

let gender2 = "male";

// a functin can access an outer variable and can modify it.
// if same-named variable is declared inside the function, it over-shadows the
outer one.
function showMGender (){
    let gender2 = "female";
    let text = "I am a" + gender ;
    alert(text);
}
alert(gender); //male
showMGender(); // Iam a female
alert(gender); // male


// Parameters and Default
function sendMssg(from, message){
    alert(`$(from): $(message)`);
}

sendMssg("GoodGod","We are making progress");


sendyMsg("Allen"); // Allen no text message




// returning a value
function addNumb(a , b){
    let result = a+b
    return result;
}

addNumb(5, 2);
alert(result);

function addnumb(a, b){
    return a+ b;

}
let result = addNumb(4, 7)
alert(result); //11

function abeg(){
    alert(nothing);
    return "something!";

}

abeg();
function confirmAge(age) {
    if (age >= 22){
        alert(true);
        return true;
    } else{
        result confirm ("Do you have permission")
    }
}

let age = prompt("Enter your age")
confirmAge(age)


 // Arrow function
 const checkMenu = ()=>{
    
 }

