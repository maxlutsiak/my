// Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.
const name = "Maxym";
console.log(name);

// Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".
const age = 25;
console.log(`Мені ${age} років`);

// Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.
const x = 10;
const y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.
const city = "Kherson";
console.log(`Я живу в місті ${city}`);

// Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.
const email = "demon164320@gmail.com";
const atIndex = email.indexOf("@");
const namePart = email.slice(0, atIndex);
const domainPart = email.slice(atIndex + 1);
console.log(namePart);
console.log(domainPart);

// Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".
const price = 500;
console.log(`Ціна: ${price} грн`);

// Створи дві змінні firstName і lastName.
const firstName = "Maxym";
const lastName = "Lutsiak";
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
// Виведи fullName в консоль.
// Створи дві змінні a і b, присвой їм якісь цілі числа.
const a = 15;
const b = 4;
// Виконай над ними додавання, віднімання, множення і ділення.
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
// Запиши результати в змінні sum, difference, product, quotient.
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
// Виведи всі ці результати в консоль.
// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
const radius = 5;
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
const area = 3.14 * radius * radius;
console.log(area);
// Виведи area в консоль.
// Створи змінну someString і присвой їй будь-який рядок.
const someString = "Hello, world!";
// Обчисли довжину цього рядка, використовуючи властивість .length.
const stringLength = someString.length;
console.log(stringLength);
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
// Створи змінну someString і присвой їй будь-який рядок.
const someString2 = "JavaScript";
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
const firstLetter = someString2[0];
console.log(firstLetter);
// Виведи першу літеру рядка в консоль.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
const lastLetter = someString2[someString2.length - 1];
console.log(lastLetter);
// Виведи останню літеру рядка в консоль.
// Створи дві змінних str1 та str2. 
const str1 = "HELLO";
const str2 = "WORLD";
// Отримай з кожної змінної останню літеру
const lastLetterStr1 = str1[str1.length - 1];
const lastLetterStr2 = str2[str2.length - 1];
console.log(lastLetterStr1);
console.log(lastLetterStr2);
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
// Створи змінну userValue та запиши до неї будь-яке число.


// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)

// Замінити вираз перевизначення комбінованим оператором `+=`.


// let students = 100;
// students = students + 50;
// console.log(students);
// Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.


// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"