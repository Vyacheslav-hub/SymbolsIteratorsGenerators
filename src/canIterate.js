export const canIterate = (obj) =>
    // Проверяем, что объект не null/undefined и имеет Symbol.iterator
    obj != null && typeof obj[Symbol.iterator] === 'function';


console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
