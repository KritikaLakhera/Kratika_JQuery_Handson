$(function() {
    $('#1').click(function() {
        $(this).css('background', 'yellow');

    });
});

$(function() {
    $('#2').click(function() {
        $(this).css('background', 'green');

    });
});

$(function() {
    $('#3').click(function() {
        $(this).css('background', 'red');

    });
});

$(function() {
    $('#4').click(function() {
        $(this).css('background', 'pink');

    });
});

$(function() {
    $("div").click(function() {
        $(this).toggleClass("off");
    });
    var p;
    $('button').click(function() {
        if (p) {
            p.appendTo("body");
            p = null;
        } else {
            p = $("div").detach();
        }
    });
});