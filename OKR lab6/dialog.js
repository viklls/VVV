function userDialog() {
    let name = prompt("Як тебе звати?", "Гість");

    if (!name) {
        alert("Добре, тоді будемо називати тебе Гостем 🍽️");
        name = "Гість";
    } else {
        alert(`Привіт, ${name}! 👋`);
    }

    let times = prompt("Скільки закладів ти хочеш сьогодні подивитись? (1–5)", "3");
    times = Number(times);

    if (isNaN(times) || times < 1 || times > 5) {
        alert("Введено некоректне число. Буде показано 1 заклад.");
        times = 1;
    }

    for (let i = 1; i <= times; i++) {
        alert(`🍴 Заклад №${i}: Смачне місце #${i}`);
    }

    alert(`Дякуємо, ${name}, за інтерес до Eaty! Гарного дня! 😊`);
}


userDialog();

function showDeveloperInfo(surname, name, position = "студент") {
    alert(`Розробник сторінки:\nПрізвище: ${surname}\nІм’я: ${name}\nПосада: ${position}`);
}


showDeveloperInfo("Онищенко", "Вікторія"); 

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Рекомендація дня: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Рекомендація дня: "${str2}"`);
    } else {
        alert("Рядки однакової довжини.");
    }
}

compareStrings("Піцца Маргарита", "Борщ з пампушками");

