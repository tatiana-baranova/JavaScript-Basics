let array = [45, 5.4, "r",'hi', true, 4];
// console.log(array);
// array[array.length - 1 ]= false
// console.log(array);
array[3] += ' friend';
array[6] = 22

// console.log(array);
// console.log(array.length);

//function
array.pop();  //видалення елемента

array.push("bob", "alex", 5) //додавання елемента в кінець масиву

array.shift(); //видалення 1 елемента

array.unshift("Hello") // додання елемента 

delete array[2]
// console.log(array);

let arr = new Array(5, "r",'hi', true, 4);
// console.log(arr);

let matrix = [
    [4, 5, 68, ['some', 'like']], 
    [true, 'some'], 
    [2.2, 3.6, 1.1, 7.9]
];

// console.log(matrix[0][3][0]);


let str = "hello, some, foot, ball, world";
let arr_split = str.split(",");
console.log(arr_split);

arr_split.splice(2, 2);

let info = arr_split.join("||");
console.log(info);






