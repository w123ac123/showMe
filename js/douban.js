$(function () {
    $('#ul li').click(function () {
        $('#ul li').removeClass("active")
        this.className = "active";
    });
});