const timestamp = Math.floor(Date.now());
const a = timestamp.toString(16);
// console.log(timestamp)
// console.log(a)

const cluster = 5;
const b = cluster < 10 ? '0' + cluster.toString(16) : cluster.toString(16);
// console.log(b)
const type = 5;
const c = type.toString(16);

const user = 1234567;
const d = user.toString(16);

const id = a + b + c + d;

console.log(timestamp, cluster, type, user);
console.log(`Формат AAAAAAAABBCDDDDDD : ${id}`);