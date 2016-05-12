$(document).on("focus", "#datepicker", function () {
    $('#datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
    });
});
$(document).on("focus", ".timepicker", function () {
    $('input.timepicker').timepicker({
        timeFormat: 'hh:mm:ss p',
//        defaultTime: 'now',
        minTime: '06:00:00 AM',
        maxTime: '09:00:00 PM',
        startTime: '06:00:00 AM',
        interval: 60,
        scrollbar: true
    });
});

//Función range(), similar a la de Python. Retorna un array, recibiendo su inicio, final (no incluyente) y paso
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
}
;