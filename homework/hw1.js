const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];
let result = 0;

nums1.forEach(num => {
    result += num;
})

console.log(result);


const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach(firstname => {
    const person = {
        name: firstname[0].toUpperCase() + firstname.slice(1),
        nameLenght: firstname.length
    }
    namesObject.push(person);
})

console.log(namesObject);


const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach(num => {
    numsRes.push({
        number: num,
        square: num ** 2,
        cube: num ** 3,
    })
})

console.log(numsRes);



const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.forEach(num => {
    reversedNumberRow.unshift(num)
})

console.log(reversedNumberRow);







