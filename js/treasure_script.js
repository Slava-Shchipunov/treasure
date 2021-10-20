/* Получение случайных значений */
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

/* Расстояние от клика до клада */
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

/* Получить для расстояния строку подсказки */
let getDistanceHint = function (distance) {
    if (distance < 12.5) {
        return "Обожжёшься!";
    } else if (distance < 25) {
        return "Очень горячо.";
    } else if (distance < 50) {
        return "Горячо.";
    } else if (distance < 100) {
        return "Тепло.";
    } else if (distance < 200) {
       return "Холодно.";
    } else if (distance < 400) {
       return "Очень холодно.";
    } else {
        return "Замёрзнешь!";
    }
};

/* Координаты клада */
let width = 500;
let height = 500;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

/* Обработчик кликов */
let clicks = 0;
let clicksLeft = 15;
$("#map").click(function (event) {
    /* Подсчёт кликов */
    clicks++;
    clicksLeft--;
    /* Получаем расстояние от места клика до клада */
    let distance = getDistance(event, target);

    /* Преобразуем расстояние в подсказку */
    let DistanceHint = getDistanceHint(distance) + " Осталось кликов: " + clicksLeft;

    /* Записываем в элемент #distance новую подсказку */
    $("#distance").text(DistanceHint);

    /* Проверка на выигрыш */
    if (distance < 10) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }

    if (clicksLeft === 0) {
        alert("Ты проиграл!");
    }
});