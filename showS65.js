$(function() {
	// 图片变量
	var carNum = 0;
	// 旋转代码
	$('#RT').click(function() {
		if (carNum==35) {
			carNum=0;
		}else {
			carNum++;
		}

      $('#s65').attr('src', 'img/s65/'+carNum+'.png');
    });

    $('#LT').click(function() {
		if (carNum==0) {
			carNum=35;
		}else {
			carNum--;
		}

      $('#s65').attr('src', 'img/s65/'+carNum+'.png');
    });

    // RT代码
    $('#RT').hover(function() {
    	$('#RT').stop(true).animate({
        "bottom": "25%"}, 100);
        // 阴影尺寸
        $('#RT0').stop(true).animate({
        "width": 70}, 100);

    }, function() {
    	$('#RT').stop(true).animate({
        "bottom": "20%"}, "slow");
        // 阴影尺寸
        $('#RT0').stop(true).animate({
        "width": 100}, "slow");
    });

    // LT代码
    $('#LT').hover(function() {
    	$('#LT').stop(true).animate({
        "bottom": "25%"}, 100);
        // 阴影尺寸
        $('#LT0').stop(true).animate({
        "width": 70}, 100);

    }, function() {
    	$('#LT').stop(true).animate({
        "bottom": "20%"}, "slow");
        // 阴影尺寸
        $('#LT0').stop(true).animate({
        "width": 100}, "slow");
    });


    // 无缝滚动
    // 获取box
    var fullBox = document.getElementById('fullBox');
    // 获取ul
    var ul = fullBox.children[0];
    // 定义计数标量
    var fullNum = ul.offsetLeft;
    // 开启定时器
    var time = 0;
    // 点击事件
    // 获取btn
    var leBtn = document.getElementById('fLT');
    var riBtn = document.getElementById('fRT');
    // 绑定点击事件
    leBtn.onmouseover = function () {
        clearInterval(time);
        time = setInterval(function () {
            fullNum-=3;
            if (fullNum <= -3072) {
                fullNum = 0;
            }
            ul.style.left = fullNum + "px";
        },0)
    }
    leBtn.onmouseout = function () {
        clearTimeout(time);
    }
    // 绑定点击事件
    riBtn.onmouseover = function () {
        clearInterval(time);
        time = setInterval(function () {
            fullNum+=3;
            if (fullNum >= 0) {
                fullNum = -3072;
            }
            ul.style.left = fullNum + "px";
        })
    }
    riBtn.onmouseout = function () {
        clearInterval(time);
    }

  
});