//for the Cursor
$(document).mousemove(function(event) {
    // currentMousePos.x = event.pageX;
    // currentMousePos.y = event.pageY;
    console.log(event.pageY+"----"+event.pageX);

    $('#mainCircle').css({
        'top':event.pageY-20,
        'left':event.pageX-20,
    });

});
