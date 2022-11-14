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


