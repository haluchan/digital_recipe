var canvas = $('.canvas');
var canvasCount = canvas.length;

var cns = new Array();
var ctobj = new Array();
var setting = new Array();
var color = new Array();
var ereaserWidth = 10;



canvas.each(function(index, element) {

    cns[index] = createCanvas(element);
    ctobj[index] = cns[index][0];
    setting[index] = cns[index][1];

    $(this).on('touchstart', function(evt) {

        var mousePos = getMousePos(element, evt);
        var mark = $(this).parent('div').children('.mark');

        ctobj[index].beginPath();
        ctobj[index].strokeStyle = setting[index].strokeColor;
        ctobj[index].lineJoin = "round";
        ctobj[index].lineCap = "round";
        ctobj[index].lineWidth = setting[index].lineWidth;
        ctobj[index].globalCompositeOperation = 'source-over';
        if (setting[index].erease == true) {
            ctobj[index].lineWidth = setting[index].ereaserWidth;
            ctobj[index].globalCompositeOperation = 'destination-out';
            ctobj[index].arc(50, 50, 5, 0, 2 * Math.PI, false);
        
            touchMark(mark, mousePos);
        }
        // console.log(ctobj[index].lineWidth);
        ctobj[index].moveTo(mousePos.x, mousePos.y);
        evt.preventDefault();

        $(this).on('touchmove', function(evt) {
            
            var mousePos = getMousePos(element, evt);
            var mark = $(this).parent('div').children('.mark');
            ctobj[index].lineTo(mousePos.x, mousePos.y);
            ctobj[index].stroke();
            if (setting[index].erease == true) {
                touchMark(mark, mousePos);
            }
        })


        $(this).on('touchend', function(evt) {
            $('.mark').hide();
        })
    });

})


$('.canvas').parent('div').append('<div class="mark"></div>');
$('.mark').css({
    width: ereaserWidth,
    height: ereaserWidth,
    border: '1px solid #333',
    backgroundColor: '#EEE',
    borderRadius: ereaserWidth / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'none'
});



//------------------------------------------------
//color picker

var color = $('.tool[data-tool="pallete"] .color');
color.each(function() {
    $(this).css('background-color', $(this).data('color'));
})

color.on('click', function() {
    var i = $(this).parents('.canvasTool').attr('data-toolNumber');
    // console.log(ctobj[i].strokeColor);
    var colorSelected = $(this).data('color');
    setting[i].strokeColor = colorSelected;
    var hex = colorSelected.split('#');
    // console.log(hex[1]);
    var source = $(this).parents('.tool[data-tool="pallete"]').children('.btnTool').attr('src', 'img/makeup/btn_color_' + hex[1] + '.png');

})


$('.tool[data-tool="pallete"]').on('click', function() {
    $(this).children('.colors').toggleClass('hide');
})

$('.tool[data-tool="pallete"] .color').on('click', function() {

    $(this).siblings('.active').toggleClass('active');
    $(this).addClass('active');

})



$('.tool[data-tool="painter"]').on('click', function() {

    var i = $(this).parents('.canvasTool').attr('data-toolNumber');

    setting[i].erease = false;
    if (setting[i].isEreaserOn == true) {
        //mean painter off

        $(this).siblings('.tool[data-tool="ereaser"]').removeClass('clicked').children('.btnTool:first-child').removeClass('hide').next().addClass('hide');
        //turn off ereaser button
        setting[i].isEreaserOn = false;
        setting[i].isPainterOn = true;
        //keep canvas on


    } else {

        if (setting[i].isPainterOn == false) {
            // console.log(setting[i].isCanvasOn);
            if (setting[i].isCanvasOn == false) {

                toggleCanvas($(this));
                setting[i].isCanvasOn = true;
                // console.log(setting[i].isCanvasOn)
            }
            setting[i].isPainterOn = true;

        } else {
            if (setting[i].isCanvasOn == true) {
                toggleCanvas($(this));
                setting[i].isCanvasOn = false;
            }
            setting[i].isPainterOn = false;

        }

    }

    $(this).children('.btnTool').toggleClass('hide');
    $(this).toggleClass('clicked');
});

$('.tool[data-tool="ereaser"]').on('click', function() {
    var i = $(this).parents('.canvasTool').attr('data-toolNumber');
    setting[i].erease = true;


    if (setting[i].isPainterOn == true) {
        //mean ereaser off & canvas on

        $(this).siblings('.tool[data-tool="painter"]').removeClass('clicked').children('.btnTool:first-child').removeClass('hide').next().addClass('hide');
        //turn off painter button
        setting[i].isPainterOn = false;
        setting[i].isEreaserOn = true;


    } else {

        //painter off
        if (setting[i].isEreaserOn == false) {
            if (setting[i].isCanvasOn == false) {
                toggleCanvas($(this));
                setting[i].isCanvasOn = true;
            }
            setting[i].isEreaserOn = true;

        } else {
            if (setting[i].isCanvasOn == true) {
                toggleCanvas($(this));
                setting[i].isCanvasOn = false;
            }
            setting[i].isEreaserOn = false;
        }

    }


    $(this).children('.btnTool').toggleClass('hide');
    $(this).toggleClass('clicked');
});

// $('footer .next').on('click', function() {


// function CanvasToPic() {
//
//
//
//     $('.canvas').each(function(i) {
//
//         var dataURL = saveCanvas($(this)[0]);
//         localStorage.setItem('canvasFace-' + i, dataURL);
//     });
//
//     console.log(sessionStorage);
//
// }
// });

//----------------------------------------------------

function toggleCanvas(element) {
    element.parents('.canvasTool').siblings('.canvas').toggleClass('disable');
}

function saveCanvas(oCanvas) {
    var strDataURI = oCanvas.toDataURL("image/png");
    return strDataURI;

}


function touchMark(mark, pos) {

    var x = pos.x - ereaserWidth / 2;
    var y = pos.y - ereaserWidth / 2;
    mark.show().css({

        left: x,
        top: y
    })
}

function getMousePos(elt, evt) {

    var rect = elt.getBoundingClientRect();
    target = evt.originalEvent.touches[0];

    return {
        x: target.clientX - rect.left,
        y: target.clientY - rect.top
    };
}

function createCanvas(ele) {
    ctx = ele.getContext('2d');

    var setting = {

        erease: false,
        lineWidth: 5,
        ereaserWidth: ereaserWidth,
        strokeColor: '#F00',
        isCanvasOn: false,
        isPainterOn: false,
        isEreaserOn: false
    }

    return [ctx, setting];

}
