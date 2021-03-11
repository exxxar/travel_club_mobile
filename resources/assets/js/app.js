// show qr codes status


var qrStatus = true;
if (qrStatus === true || qrStatus == true) {
} else {
    $("#hero-qr-button").addClass("is-hidden");
    $(".qrWidget").addClass("is-hidden");
    $(".qr-button").addClass("is-hidden");
}

$(document).ready(function () {
    setTimeout(() => {
        $(".pageLoader").fadeToggle(200);
    }, 1000); // hide delay when page load


    let modeInCash = localStorage.getItem("travelclub-mode")

    if (modeInCash && modeInCash === "dark")
        $("body").addClass("dark-mode-active")
    else
        $("body").removeClass("dark-mode-active")


});

$(".qr-button .close-button").click(function () {
    $(".qr-button").toggle();
});

$("#darkmodeswitch, #darkmodeswitch-2").click(function () {


    let mode = !$("body").hasClass("dark-mode-active")


    if (mode) {
        localStorage.setItem("travelclub-mode", "dark")
        $("body").addClass("dark-mode-active")
    } else {
        localStorage.setItem("travelclub-mode", "light")
        $("body").removeClass("dark-mode-active")
    }


})

$(".sidebarTrigger").click(function (e) {

    e.preventDefault();
    if ($("body").hasClass("sidebar-open")) {
        $("body").removeClass("sidebar-open");
        $("body").addClass("sidebar-closed");
    } else if ($("body").hasClass("sidebar-closed")) {
        $("body").removeClass("sidebar-closed");
        $("body").addClass("sidebar-open");
    } else {
        $("body").addClass("sidebar-open");
    }

});


$('.owl-carousel').each(function() {
    //Find each set of dots in this carousel
    $(this).find('.owl-dot').each(function(index) {
        //Add one to index so it starts from 1
        $(this).attr('aria-label', index + 1);
    });
});

$(".ymaps-2-1-78-gototech").attr("rel","noreferrer");


var supportTouch = $.support.touch,
    scrollEvent = "touchmove scroll",
    touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    touchStopEvent = supportTouch ? "touchend" : "mouseup",
    touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
$.event.special.swipeupdown = {
    setup: function() {
        var thisObject = this;
        var $this = $(thisObject);
        $this.bind(touchStartEvent, function(event) {
            var data = event.originalEvent.touches ?
                event.originalEvent.touches[ 0 ] :
                event,
                start = {
                    time: (new Date).getTime(),
                    coords: [ data.pageX, data.pageY ],
                    origin: $(event.target)
                },
                stop;

            function moveHandler(event) {
                if (!start) {
                    return;
                }
                var data = event.originalEvent.touches ?
                    event.originalEvent.touches[ 0 ] :
                    event;
                stop = {
                    time: (new Date).getTime(),
                    coords: [ data.pageX, data.pageY ]
                };

                // prevent scrolling
                if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                    event.preventDefault();
                }
            }
            $this
                .bind(touchMoveEvent, moveHandler)
                .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                            Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                            Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                .trigger("swipeupdown")
                                .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
        });
    }
};
$.each({
    swipedown: "swipeupdown",
    swipeup: "swipeupdown"
}, function(event, sourceEvent){
    $.event.special[event] = {
        setup: function(){
            $(this).bind(sourceEvent, $.noop);
        }
    };
});


$('.stories').on('swipedown',function(){alert("swipedown..");} );
$('.stories').on('swipeup',function(){alert("swipeup..");} );


$(".story-image").on('touchstart',function(){

    alert("touchstart..");
} );
