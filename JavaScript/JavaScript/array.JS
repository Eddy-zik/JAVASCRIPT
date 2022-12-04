let alphabets = ["a", "b", "c", "d"];
// lenght of array 
alphabets.length; // 4

//accessing arrays uesing index notation
alphabets[1];//b
alphabets[0];//a

let numb = [1, 2, 3, 4];

// Array methods
  // Add/remove method
  // push method -- adds and item at the end of array
   let arr1 = ["mango", "cucumber", "orange", "pear", "banana"]
   arr1.push("carrot");
   alert(arr1); // it will add "carrot" at the end of array

   // pop method removes an item from the end of the array
   arr1.pop();
   alert(arr1); // it will remove carrot

   // shift method -- removes an item from the beginning of th array
   arr1.shift();
   alert(arr1); // it will remove mango from the array 

   // unshift method -- add an item at the beginning of an array
   arr1.unshift("apple");
   alert(arr1); // it will add apple at the beginning of the array

   // deleting item from the array
   let arr2 = [21, 45, 50, 34, 60]
   delete arr2[2];
   alert(arr2[2]); //undefined
   arr2.length; // 5

   let arr3 = [1, 2, 3, 4, 5, 6, 7];
   arr3.splice(1,2); // from index 1 remove two elemnts
   arr3.splice(0,3,66,77,88); //
   //from index 0 remove three elements and replaces them with another.
   alert(arr3);v// [66,77,88,4,5,6,7]

   let arr4 = [11, 22, 33, 44, 55, 66, 77, 88]
   arr4.splice(3, 0, 12, 43, 65);// from index 0 remove mo items and replaces them with 
   12,43,65.
   alert(arr4); //[11,22,33,12.43.65.44.55.66.77.88]

   //slice
   // is much simpler 
   //arr.slice 

   // concat 
   // create a new that includes values from other arrays and additional items 

   let arr6 = [3, 4];
   arr6.concat([7, 8]); //3, 4, 7, 8
   alert(atrr6.concat([7, 8])); 

   let arr7 = [1, 2, 3, 4, 5, 6];
   arr6.concat(arr7);
   alert (arr6.concat(arr7)); // 3, 4, 1, 2, 3, 4, 5, 6

   // Iterate: forEach
   // forEach method allow to run a function for element of the array.
   
   //array. forEach(function(item, index, array){  // do something
     // do something
    // });
   let arr8 = ["bic", "pen", "pencil"];
   arr8.forEach(alert); // bic, pen, pencil

   arr8.forEach((item, index, array) => {  // another way to declear a function (arrow function)
    alert(`${item} is at index ${index} in ${array}`);
   });

  // Searching in an array 

  

  // find and findIndex
  //find looks for a single (first) element and makes the function return true
  //  
  let name = [
    {id: 1, name: "praise"},
    {id: 2, name: "blessing"},
    {id: 3, name: "esther"},
    {id: 4, name: "allen"},
  ]

  let user = name.find((item) => {
    item.id == 2
  });
  alert(user);
  alert(user.name);
  // let user = names.find(item => item.id == 2)

alert(names.findIndex((item) => {
  return item.name =="allen"
})); //2
alert(names.findLastIndex((item) => {
  return item.name =="allen"
})); //4


// filter method
// filter is similar to the find method, but thne filter method returns all matching elements.
// array. filter(function(item, index, array ))

let students = [
  {id: 1, name: "praise"},
  {id: 1, name: "blessing"},
  {id: 1, name: "allen"},
  {id: 1, name: "esther"},
  {id: 1, name: "allen"},
  {id: 1, name: "seun"},
  {id: 1, name: "edward"},
];

alert(students.filter((item) => {
  return item.id < 4;
})); // 0

let filteredItem = student.filter((item) => {
  return item.id < 4;
});
alert(filteredItem.length); //3


//  Map
// map calls the function for each element of the array and
//returns the array of result:
// array.map(function(item, index, array){

//})

const posItem = [
  {id: 1, title: "Title 1", desc: "lorem ipsum hihkdn"},
  {id: 2, title: "Title 2", desc: "lorem ipsum hihkdn"},
  {id: 3, title: "Title 3", desc: "lorem ipsum hihkdn"},
  {id: 4, title: "Title 4", desc: "lorem ipsum hihkdn"},
]

{/* <div>
posItem.map((post) => {
<h1>{post.title} </h1>
<p> {post.id} </p>
<p> {post.desc} </p>

</div>
}) */}

posItems.map((post) => post.id);
console.log(posItem.map((post) => post.id));

// sort
const arr12 = [7, 3, 26, 5, 23];
arr12.sort(function(a, b) {
  return a - b
});
alert(arr12.sort((a,b) => a - b)); // ascending order
alert(arr12.sort((a,b) => b - a)); // descending order
 
// fill, sum 