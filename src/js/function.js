// let arr = ["BMW", "Mercedes", "Audi", "Volvo"];

// arr.forEach((item, i ) => {
//     console.log(`Element index ${i}, value: ${item}`);
// })

// let newArr = arr.filter((el) => {
//     return el.length == 3 || el.length == 4;
// });

// console.log(newArr);


// let arr_num = [5, -8, 8, 9 ,-6];
// newArr = arr_num.filter(el => {
//     return el > 0;
// })
// console.log(newArr);

// let newArr = arr.map(el => {
//     if(el.length == 3 )
//         return el.toLowerCase();
//     return el;
// })
// console.log(newArr);

// function elLength(el){
//     return el.length >= 3;
// }

// console.log(arr.every(elLength));
// console.log(arr.some(elLength));




// // Reduce
// let num = [6, 2, 1, 6, 4, 7, 9];
// let sum = num.reduce((sum, el)=>{
//     return sum + el
// })
// console.log("Result " + sum);

// let currency = [23.5, 45, 86, 29.1]
// let average =  currency.reduce((total, el, i, array) => {
//     total += el;
//     return (i == array.length - 1 ) ?  total /array.length : total;
// })
// console.log(average);




//Set

let mySet = new Set();
mySet.add(5);
mySet.add(5.3);
mySet.add('24');
mySet.add({"name": "Anna"});
mySet.add(55);

mySet.delete(5);

mySet.add(true);
mySet.add(5);
mySet.add(5);


// console.log(mySet.has('24'));

// for(let el of mySet)
//     console.log(el);


//Map

let map = new Map();
map.set("first", "1")
map.set(false, "2")
map.set(33, "3")
map.set("four", "4")
map.set(true, "5")
map.set("six", "6")
map.set({"seven": "eight"}, "7")
map.set(8.8, "8")

//map.clear//
// map.delete("six")

// console.log(map.has("six"));

// console.log(map.get(true));

for(let el of map)
    console.log(el[0]);
    


