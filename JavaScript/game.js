"use strict";

alert ('Я загадал число от 1 до 10, попробуй его отгадать, у тебя есть 9 попыток')

let prNum, tempOut, attempts = 9
//attempts = 9 - количество попыток 9
prNum = Math.floor ((Math.random()*10)+1)
tempOut = document.getElementById ('temp-out')
tempOut.innerHTML = prNum
//console.log (prNum)



function startGame(num, out) {
    if (attempts <= 0)
    return

    attempts-- //Оператор декремента (--) уменьшает на 1

    num = document.getElementById('myNum').value
    out = document.getElementById('out')

    if (num == prNum) {
        out.innerHTML = 'You WINNER!!!'
    }

    if (attempts===0) { //завершаем игру
        out.innerHTML =  `У вас закончились попытки, хотите сыграть еще? Если да, то обновите страницу`
        return
    }

    else if (num > prNum) {
        out.innerHTML = `Вы ввели число больше чем нужно, предлагаю ввести новый вариант, у вас осталось ${attempts} попыток`
    }
    else if (isNaN(num)) {
        out.innerHTML = 'Вы ввели не число, предлагаю ввести число'
    }
    else if (num === "") {
        out.innerHTML = 'Вы ввели не число, Предлагаю ввести число'
    }
    else {
        out.innerHTML = `Вы ввели число меньше чем нужно, Предлагаю ввести новый вариант у вас осталось ${attempts} попыток`
    }

}
