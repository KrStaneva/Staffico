(function () {
    var clickOnOff = 0;
    window.onload = function () {
        $(".read-more").click(function () {
            $(".int-more").toggle("slow");
        });
    };
})();