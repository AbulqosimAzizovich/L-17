/*const elements = ['Sun', 'Earth', 'Moon'];

console.log(elements.join());
// output: "Sun,Earth,Moon"

console.log(elements.join(''));
// output: "SunEarthMoon"

console.log(elements.join('-'));

var myString = "An,array,in,a,string,separated,by,a,comma";
var myArray = myString.split(",");
console.log(myArray)
/* 
*
*  myArray :
*  ['An', 'array', 'in', 'a', 'string', 'separated', 'by', 'a', 'comma']
*
*/
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];


delete fruits[0];
console.log(fruits)*/

// // shalow clone


// let arr = [1, 2 ,3 ,4, 5, 6, 7, 8, 9]

// // let arr2 = arr

// // let arr2 = []

// // 1

// for (let i = 0; i< arr.length; i++){
//     arr2.push(arr[i])
// }

// // 2

// let arr2 = [...arr]

// arr2.push(11)
// console.log(arr)
// console.log(arr2)


// function (array:arg){ return newArray }

// function Arr(array){
//     let newArray = [...array]
//     console.log(array)
//     console.log(newArray)
//     newArray.push(15)
//     console.log(array)
//     console.log(newArray)
//     return newArray
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Arr(arr)


// 1.forEach

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


/*Deep clone */

// arr.forEach((element, index, array) => {
//     console.log(element);
// });


// 2. map

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'sasa', true, false]


// let arr2 = arr.map((element, index, array) => {
//     return {key: element="salom"}
// });
// console.log(arr);
// console.log(arr2);


// 3. filter kkk2

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// 4. reduce


// let summa = 150
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// let sum = arr.reduce((a, b) =>{
//     return a + b;

// }, summa)
// console.log(sum);




// const students = [
//     {id: 1, name: 'Ali', Grade: 7, age: 16, surname: 'Aliyev'},
//     {id: 2, name: 'Eshmat', Grade: 8, age: 19, surname: 'Valiyev'},
//     {id: 3, name: 'Toshmat', Grade: 9, age: 27, surname: 'Ganiyev'},
//     {id: 4, name: 'G\'ani', Grade: 10, age: 22, surname: 'Eshmatov'},
//     {id: 5, name: 'Vali', Grade: 5, age: 16, surname: 'Toshmatov'},
// ]



// function filterStudents(arr, input, key){
//     let result = arr.filter(a => a[key].includes(input))
//     return result
// }

// console.log(filterStudents(students, "G", "name"))


// const editStd = (arr, newName, key, id) => {
//     return arr.map((value) => value.id === id ? {...value, [key]: newName} : value)
// }

// console.log(editStd(students, "Akrom", "surname", 2))

// let arr2 = arr.map((element, index, array) => {
//     return {key: element}
// });

/*

console.log(product);


const {products} = product;


const filterProduct = (filterStr) => {

    const result = products.filter((el) => {
        return el.category == filterStr;
    })

    const totalCount = result.map((el) => el.price).reduce((a, b) =>  a + b)

    return {result: result, resultCount: result.length, totalCount: totalCount}
}


const smartphone = filterProduct('smartphones');


console.log(smartphone)



const arr=[1,2,3,4,5,6,70,8,9,10];
const lang=['javascript','php','nodejs','angular','bootstrap','react']

console.log(lang.map((el)=> el.split("").sort().join('')))
console.log(arr.sort((a,b)=> b-a))

*/


// 1-masala

// const {products} = product;

// function sortByCategory(categ) {
//     return products.filter((val) => val.category.toLowerCase().includes(categ.toLowerCase())) 
// }
// console.log(sortByCategory("frag"));   


// function filterByname(titl) {
//     return products.filter((name) => name.title.includes(titl))
// }

// console.log(filterByname("perfume Oil"))


// 2-masala

// const {products} = product;

// function sortBybrand(brnd) {
//     return products.filter((val) => val.brand.includes(brnd))
// }

// console.log(sortBybrand("sion"));


// 3-masala

const {products} = product;
let arr = []
products.forEach((element, index, array) => {
    arr.push(element.price)
});
console.log(arr);
console.log("Sort", arr.sort((a, b) => a - b));
console.log("ReverseSort", arr.sort((a, b) => b - a));
