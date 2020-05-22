let consonant = 'hfhrgssdgdsfgryj';
let vowel = 'ukuyyjyj';
let consonantQuantity = 0;
let vowelQuantity = 0;
let input = prompt("Введите текст: ", "")
for (let i = 0; i <= input.length; i++) {
    if (consonant.includes(input[i]))
        consonantQuantity++;
    else if (vowel.includes(input[i]))
        vowelQuantity++;
}
console.log("consonant=" + consonantQuantity + "\nvowel=" + vowelQuantity);