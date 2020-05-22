let text = prompt("Введите текст: ", "");
while (true) {
    if (!text.includes("  "))
        break;
    text = text.replace(/  /g, " ");
}
console.log("result=" + text);