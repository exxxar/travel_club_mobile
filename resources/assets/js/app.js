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


