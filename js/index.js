$(function() {
	// 车灯&BGM js代码
    $("#toggle").hover(function() {
    	$("#Layer").stop(true).animate({
        "opacity": "1"}, "fast");
    	// BGM播放
        $('#BGM')[0].play();

    }, function() {
    	$("#Layer").stop(true).animate({
        "opacity": "0"}, 2000);
    	// BGM停止
    	$('#BGM')[0].pause();
    });



    


  });