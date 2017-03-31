$(function(){

    imgscrool('#box');

})

function imgscrool(obj) {
    var height = $(obj+" .banner .img img").height();
    var size=$(obj+" .banner .img li").size();
    var i = 0;

    function upMove() {
        if (i==0){
            $(obj+" .banner .img").stop(true);
            i==0;
            $('.btnDown').empty();
            $(".btnDown").append($('<a href="#"><img src="img/down.png"></a>'));
        }else{
            i--;
            $(obj+" .banner .img").stop(true).animate({top:-i*height},800);
        }
    };

    function downMove() {
        $(obj+" .banner .img").stop(true).animate({top:-i*height},800)
        // i++;
        if(i<size){
            i++;
        }else{
            $(obj+" .banner .img").stop(true);
            console.log(-i*height);
            i=size;
            // console.log(size);
            // 删除选中元素中所有的子节点
            $('.btnDown').empty();
        }
    }

    $("body").bind("mousewheel",function (event,delta) {
        var dir = delta > 0?'Up':'Down'

        if (dir == 'Down'){
            downMove();
            // console.log(height);
        }
        if (dir == 'Up'){
            upMove();
            console.log(i);
        }
    })



}

