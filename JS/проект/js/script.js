'use strict';

// let btn = document.querySelector('.btn');

// btn.onclick = btn.style.display = 'none';


























































// for(let char of document.querySelectorAll('li')) {
//     char.querySelectorAll('li').length;
// }

// let per = char.querySelectorAll('li'.length);

// console.log(`${char} : ${per}`);





// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
















































// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },

//     "Деревья": {
//         "Огромные": {
//         "секвойя": {},
//         "дуб": {}
//         },
//     "Цветковые": {
//         "яблоня": {},
//         "магнолия": {}
//         }
//     }
// };

// function createTree(container, data) {
    
// }

// createTree(document.getElementById('tree'), data);
















































// function list() {
//     const listUl = document.createElement('ul');
//     document.body.append(listUl);


//     let listLi = prompt('Напишите содержимое пункта');

//     while(!(listLi === '' || listLi === null)) {
//         const numberLi = document.createElement('li');
        
//         numberLi.textContent = listLi;

//         listUl.append(numberLi);

//         listLi = prompt('Напишите содержимое пункта');
//     }
// }

// list();


// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.












































// const widget = document.querySelector('[data-widget-name]');
// console.log(widget.dataset.widgetName);

// console.log(widget.getAttribute('data-widget-name'));

// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.













































    // const sum = (money % allmoney) * 100;

//     const checkMon = (sum) => {
//     if(sum < 20) {
//         return 'red';
//     } else if(sum < 50) {
//         return 'yellow';
//     } else if(sum >= 90) {
//         return 'green';
//     }
// }

// checkMon(10);

// function checkMoney() {
//     const money = document.querySelectorAll('.listvalue');

//     const textMoney = document.querySelector('.listtext');

//     textMoney.style.color = checkMon(sum);
// }

// checkMoney();
















// Написать функцию checkMoney которая будет проверять и подсвечивать элементы из заданного списка.
// 1. Если сумма составляет меньше 20 процентов от цели, красим элемент с классом listtext в красный цвет
// 2. Если меньше 50 процентов в желтый
// 3. От 90 и больше в зеленый


















































// Написать программу для создания склада.
// Написать функцию которая возвращать объект склада. Свойство склада: store - массив объектов каждый из которых это отдельный товар с названием и количеством единиц;
// employees - массив с именами работников склада.
// Методы: addItem - добавление единицы товара, после вызова метод спрашивает у пользователя отдельными промтами сначала название, потом количество товара;
// removeItem - удаление единицы товара, после вызова спрашивает у пользователя сначала название, потом количество товара, которое нужно удалить;
// checkItem - проверяет есть ли товар с указанным именем на складе;
// getAmount - возвращает количество указанного товара на сайте;
// getMoreThen - возвращает массив товара которых количество больше указанных.

// const makeStore = (employees, store = []) => ({
//     employees: employees.every((element) => element.length > 2) ? employees : [],
//     store,


//     addItem(itemToAdd) {
//         if(!itemToAdd) {
//             const newItem = {
//                 title: prompt('Введите название товара.'),
//                 amount: +prompt('Введите количество товара.'),
//             }
//             this.store.push(newItem);
//         } else {
//             this.store.push(itemToAdd);
//         }
//     },

//     removeItem() {
//         const title = prompt('Введите название товара.');
//         const amountToRemove = +prompt('Введите количество товара для удаления.');

//         const itemToRemove = this.store.find((el) => el.title === title);
//         itemToRemove.amount = itemToRemove.amount - amountToRemove;
//     },

//     checkItem(titleToCheck) {
//         return this.store.some((le) => le.title === titleToCheck);
//     },

//     getAmount(titleToCheck) {
//         const amountToCheck = this.store.find((elem) => elem.title === titleToCheck);
//         return amountToCheck.amount || 'none';
//     },

//     getMoreThen(number) {
//         return this.store.filter((element) => element.amount > number);
//     }
// })

// const gogiStore = makeStore(["Gogi", "Gogo", "Gaga", "Gigi"]);
// const firstItem = {
//     title: "hachapuri with cheese",
//     amount: 20,
// };

// gogiStore.addItem(firstItem);
// gogiStore.addItem({
//     title: "hinkali",
//     amount: 50,
// });

// gogiStore.addItem({
//     title: "kingmarauli",
//     amount: 10,
// });

// gogiStore.addItem({
//     title: "tarhun",
//     amount: 30,
// });

// console.log(gogiStore.getMoreThen(28));




















































// function getSecondsToday(diff) {
//     let now = new Date();

//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDay());

//     let diff = now - today;
//     return Math.round(diff / 1000);
// }

// alert(getSecondsToday(3600));


























// function Calculator() {
//     this.calculate = function(str) {
//         let arr = str.split(' ')

//         if(arr[1] === '+') {
//             return +arr[0] + +arr[2];
//         } else if(arr[1] === '-') {
//             return +arr[0] - +arr[2];
//         }
//     };
// }

// let calc = new Calculator;

// alert(calc.calculate('3 + 7'));

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function(str) {

//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
//     }

//     let calcut = new Calculator;

//     calcut.addMethod('*', (a, b) => a * b);

//     alert(calcut.calculate('2 * 3'));






// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
// Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), 
// которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b); 

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.









// function checkLength(str, expectedLength) {
//         if (expectedLength == str.length) {
//             return true;
//         } else {
//             return false
//         }
// }

// alert(checkLength("Привет, Геннадий", 15))














// 2) Написать функцию, которая поверяет длину своего аргумента
// Аргументы : str - строка, длину которой должна проверять функция. expectedLength - ожидаемая длина
// return -  true / false





















// function checkPos(word, index, char) {
//     for(char of word) {
//     if (word.indexOf(char)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// }

// checkPos('help', [3], 'l')






// 1) Написать функцию, которая будет определять есть ли буква в слове на обозначенной позиции
// аргументы
// word - слово, на котором нужно будет проверять наличие буквы, index-позиция символа, char  - буква, наличие которой нужно проверять
// return - true или  false, в зависимости от того есть ли буква в слове



// function game() {

//     let counterError = 0;

//     let intro = confirm('Доброго времени суток, вы зашли на игру "Угадай слово". Для неё нужно два игрока. Вы готовы?');
//     alert('Правила таковы: Один из игроков загадывает слово, а другой угадывает его. У угадавшего на каждую букву по 5 ошибок. На этом всё. Поехали!');
//     let playerOne = prompt('Первый игрок, загадайте слово.');

//     let word = playerOne;

//     for (let char of word) {

//     }
// }

// game()

// Напишіть гру для відгадування слова.

// Game flow:
// Спитати чи користувач хоче зіграти у гру?
// Попросити користувача загадати слово.
// Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
// Якщо здогадка користувача вірна - переходити до наступного символу
// Якщо здогадка користувача не вірна - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
// Якщо користувач виграв - вивести у консоль "You win!"









// function morze() {
//     let counter = 0;

//     let targetMorze = '11';
        
//     let pos = 0;

//     let numberMorze = +prompt('Введите кол-во строк')

//     for (let i = 1; i <= numberMorze; i++) {
//         let textMorze = prompt('Введите шифр')

//         let shifrMorze = textMorze;

//         while (counter) {
//             let foundPos = shifrMorze.indexOf(targetMorze, pos);
//             if (counter) {
//                 counter++
//             } else {
//                 break
//             }

    
//             alert(counter);
//         }
//     }
    
// }

// morze()




// Очень странные дела

// Джим Хоппер с помощью радиоприемника пытается получить сообщение Оди. На приемник ему поступает 
// n
// n различных последовательностей кода Морзе. Декодировав их, он получает последовательности из цифр и строчного латинского алфавита, при этом во всех сообщениях 
// Оди содержится число 11, причем минимум 3 раза. Помогите определить Джиму количество сообщений от Оди.

// Формат входных данных
// В первой строке подаётся число 
// n
// n – количество сообщений, в последующих 
// n
// n строках вводятся строки, содержащие латинские строчные буквы и цифры.

// Формат выходных данных
// Программа должна вывести количество строк в которых содержится число 11 минимум 3 раза.

// Примечание: Числа 11 необязательно должны быть разделены другими символами, нужно подсчитать вхождение последовательности символов "11", т.е. например 
// в строке "111" содержится одна такая последовательность, в то время как в "1111" их уже две.

// Тестовые данные 🟢
// Sample Input:
// 3
// 11helpme11jim11
// avengers141414atta11ck
// k1lg0re11111l
// Sample Output:
// 1

























