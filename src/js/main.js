console.log("Huy")
$(document).ready(function () {
    var currentFloor = 2 // переменная, где хранится текущее знаяение этажа
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor"); // удаляем активный клас этажей
        currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываес значение текущего этаж а в счетчик справа
    });

    counterUp.on("click", function () { // отслеживаем клик по кнопке верх
        if (currentFloor < 18) { // проверяем зханчение этажа не более 18
            currentFloor++; // прибавляем значение этажа
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом
            $(".counter").text(usCurrentFloor); // зхапись в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный клас 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
        };
    });
    // отслеживаем клик по кнопке вниз, аналогично кнопкуе вверх.
    counterDown.on("click", function () {
        if (currentFloor >2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});