let input = prompt('Введите дату в формате', 'ММ/ДД/ГГГГ');
console.log(input)
const regex = new RegExp("^\\d{2}[/]\\d{2}[/]\\d{4}$");
let result = regex.test(input);
console.log(result)
if (result === false) {
    console.log(result)
    alert('дата не верна')
} else {
   let result = input.replace(/\//gi, '.');
   result = result.replace(/(\d{2})\.(\d{2})/, '$2.$1');
    alert(result)
}

