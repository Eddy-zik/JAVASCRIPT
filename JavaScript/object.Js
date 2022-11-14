let user = {
    name:"Edward",
    complexion:"Fair",
    gender:"Male",
    age:30
    IsAvailable: true,
    I am : Tall,


}
alert(user.name);
alert(user.gender);

// Using the dot notation to access the object properties

user.name; // Edward
user.age; // 30
user.I am; // undefined
user.["I am"]; // Tall


// Delete a property from an object
delete user.gender;
alert(user.gender); // 

// Object.keys(name of object)
Object.keys(user); // ["name","complexion","gender","age","IsAvaliable", etc]
Object.values(user); //
Object.entries(user);

let salariesOfCoders = {
    "edward":2600,
    "ezekiel":2000,
    "hart":2500
}

//lopping over property values
let total = 0;
for (let value of Object.values(salariesOfCoders)){
    alert(value) // 2600, 2000, 2500
}

total += value // total = total + value
//total = 0 + 2600
//total = 2600 + 2000
//total = 4600 + 2500
total = 5100



