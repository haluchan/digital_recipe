var canvas = $('#canvas');
var ctx = canvas[0].getContext('2d');
var erease = false;
var lineWidth = 5;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mouseMove(evt) {

    var mousePos = getMousePos(canvas[0], evt);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
}


canvas.on('mousedown', function(evt) {

    var mousePos = getMousePos(canvas[0], evt);

    ctx.beginPath();
    ctx.strokeStyle = '#CC6699';
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;
    ctx.globalCompositeOperation = 'source-over';
    if (erease == true) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.arc(50, 50, 5, 0, 2 * Math.PI, false);
    }
    ctx.moveTo(mousePos.x, mousePos.y);
    evt.preventDefault();

    canvas.on('mousemove', mouseMove);
});

canvas.on('mouseup mouseleave', function() {
    canvas.off('mousemove');
});

$('#paint').on('click', function() {
    erease = false;
});

$('#erease').on('click', function() {
    erease = true;
});

$('#reset').on('click', function() {
    ctx.clearRect(0, 0, canvas.width(), canvas.height());
});
