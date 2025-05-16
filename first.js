// написать функцию 
// которой передаешь число — кол-во ступенек, 
// а она выводит по очереди на какой она сейчас ступеньке
// function stupenkaKaynter(n) {
//     if(n === 0) return n
//     // let stupenka = n; 
//     // console.log('stupenka n : ',stupenka)
//     stupenkaKaynter(n-1)
//     // console.log('stupenka n : ',stupenka)
// }
// const n = 5;
// console.log(stupenkaKaynter(n));

function counter (n) {
    if(n === 0) return;
    console.log('v recursii -> ',n)
    counter(n-1)
    console.log('iz steka -> ',n)
}
const n = 3;
console.log(counter(n));

// стек и глубина вызова 
// хвостовая рекурсия

function tailRecursive_plusOne(n, step = 1) {
    if (step > n) {
        console.log('Базовый случай: шаг превысил n');
        return;
    }
    console.log(`Шаг: ${step}`);
    return tailRecursive_plusOne(n, step + 1);
}
tailRecursive_plusOne(5);
// "Шаг: 1"
// "Шаг: 2"
// "Шаг: 3"
// "Шаг: 4"
// "Шаг: 5"
// "Базовый случай: шаг превысил n"

function tailRecursive_minusOne(n, step = n) {
    if (n === 0) {
        console.log('Базовый случай: n = 0');
        return;
    }
    console.log(`Шаг: ${step}`);
    return tailRecursive_minusOne(n - 1, step - 1);
}
tailRecursive_minusOne(5);
// "Шаг: 5"
// "Шаг: 4"
// "Шаг: 3"
// "Шаг: 2"
// "Шаг: 1"
// "Базовый случай: n = 0"
