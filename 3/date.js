let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 5/30/2006
console.log(today.toLocaleDateString("'ru-RU'", options)); // 30.05.2006
