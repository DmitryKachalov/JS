let input = prompt("Введите слово: ", "")
result = "";
for (let i = input.length - 1; i > -1; i--) {
    result += input[i]
}
console.log("result=" + result);