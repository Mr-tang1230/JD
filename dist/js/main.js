
// https://suggest.taobao.com/sug?code=utf-8&q=aa&callback=jsonp406&k=1&area=c2c&bucketid=10
var os = document.createElement('script');
var inp = document.getElementById('key')
var ul = document.getElementById('docu')
inp.oninput = function () {
    var val = inp.value
    var os = document.createElement('script');
    os.src = ' https://suggest.taobao.com/sug?code=utf-8&q=' + val + '&callback=oo&k=1&area=c2c&bucketid=10 '
    document.body.appendChild(os);
    ul.style.display = 'block';
}
function oo(data) {
    var str = ''
    for (let i in data.result) {
        str += `<li>${data.result[i][0]}</li>`
    }
    ul.innerHTML = str
}
// 定时器

var span = document.querySelectorAll(".time>strong")
function djs(date1, date2) {
    var ms = date2 - date1;
    var ss = ms / 1000;

    var hour = Math.floor(ss / 3600 % 24);
    var minute = Math.floor(ss / 60 % 60);
    var second = Math.floor(ss % 60);


    return { hour, minute, second };
}

function tm() {
    var date1 = new Date();
    var date2 = new Date("2019-10-01 08:08:08");
    var time = djs(date1, date2);
    span[0].innerHTML = time.hour;
    span[1].innerHTML = time.minute;
    span[2].innerHTML = time.second;
    if (span[0].innerHTML < 10) {
        span[0].innerHTML = '0' + time.hour;
    }
    if (span[1].innerHTML < 10) {
        span[1].innerHTML = '0' + time.minute;
    }
    if (span[2].innerHTML < 10) {
        span[2].innerHTML = '0' + time.second;
    }

    if (date2 - date1 <= 0) {
        clearInterval(timer);
    }
}
tm();
var timer = setInterval(tm, 1000)



$(function () {
    $("#logo").mouseenter(function () {
        $(this).children().eq(0).hide().next().show()
    })
    $("#logo").mouseleave(function () {
        $(this).children().eq(0).show().next().hide()
    })

    var $a = 0; var $b = 0;
    $('.form').hover(function () {
        $b = 1; $a = 0;
    }, function (evt) {
        if (evt.offsetY <= 38) {
            $b = 0;
        }
        if (($a + $b) == 0) {
            $('#docu').hide();
        }
    })
    $('#docu').hover(function () {
        $a = 1; $b = 0;
        $(this).find('li').hover(function () {
            $(this).css({ 'backgroundColor': '#cecece' })
        }, function () {
            $(this).css({ 'backgroundColor': '' })
        })
    }, function (evt) {
        if (evt.offsetY > 0) {
            $a = 0;
        }
        if (($a + $b) == 0) {
            $('#docu').hide();
        }
    })

    // 主轮播
    var $i = 0
    $('.slider_banner').find('li').eq(0).css({ 'z-index': 10 });
    function silde() {
        $('.slider_banner').find('li').eq($i).css({ 'z-index': 10 }).siblings().css({ 'z-index': 0 });

        $('.slider_ind').find('li').eq($i).css({ 'width': '15px', 'height': '15px' }).children().stop().show()
            .end().siblings().css({ 'width': '10px', 'height': '10px' }).children().hide();

        $i++;
        if ($i >= $('.slider_banner').find('li').length) {
            $i = 0;
        }
    }
    silde();
    var $timer = window.setInterval(silde, 2000);
    $('.slider_banner').mouseenter(function () {
        clearInterval($timer);
    })
    $('.slider_banner').mouseleave(function () {
        $timer = window.setInterval(silde, 2000)
    })

    // 点击事件
    $('.slider_control').children().eq(0).click(function () {
        $i = $i - 2;
        if ($i <= 0) {
            $i = $('.slider_banner').find('li').length - 1;
        }
        silde();
    })
    $('.slider_control').children().eq(1).click(function () {
        silde();
    })
    // 点点移入
    $('.slider_ind').find('li').mouseenter(function () {
        $i = $(this).index('.slider_ind>li');
        silde();
        clearInterval($timer);
    })
    $('.slider_ind').find('li').mouseleave(function () {
        $timer = window.setInterval(silde, 2000);
    })
    $('.slider_col').hover(function () {
        $('.scol_control').show();
    }, function () {
        $('.scol_control').hide();
    })
    $('.flash button').hover(function () {
        $(this).css({ backgroundColor: '#f10215', color: '#fff' })
    }, function () {
        $(this).css({ backgroundColor: '#fff', color: '#000' })
    })

    $('.cart').click(function () {
        location.assign('http://localhost:8080/cart.html')
    })
    var cart3 = new Cart();
    cart3.cal();
    foo();
    function foo() {
        $lp = $('.gunarea').position().left - 1;
        if ($lp <= -660) {
            $lp = 0;
        }
        $('.gunarea').css({ 'left': $lp + 'px' })
    }
    var $tim = setInterval(foo, 10)

    $('.gunarea').hover(function () {
        clearInterval($tim);
    }, function () {
        clearInterval($tim);
        $tim = setInterval(foo, 10)
    })
    $('.gunarea').find('li').hover(function () {
        $(this).find('p').css({ color: '#e83631' }).prev().fadeTo('slow', 0.66)
    }, function () {
        $(this).find('p').css({ color: '#000' }).prev().fadeTo('slow', 1)

    })
    $('.sq_box img').hover(function () {
        $(this).fadeTo(500, 0.66)
    }, function () {
        $(this).fadeTo(500, 1)
    })

    $('.slider_banner').click(function () {
        location.assign('http://localhost:8080/details.html')
    })

    $po = $('.fall').offset().top;
    var $imgdata = ['img/gun1.jpg', 'img/gun2.jpg', 'img/gun3.jpg', 'img/gun4.png', 'img/gun3.jpg']
    $('.fall').find('img').hover(function () {
        $(this).fadeTo(500, 0.66)
    }, function () {
        $(this).fadeTo(500, 1)
    })
    $(window).scroll(function () {
        if (($('.fall').height() + $po) >= $('html,body').scrollTop()) {
            var str = '';
            for (let i = 0; i < $imgdata.length; i++) {
                var oDiv = document.createElement("div");
                oDiv.className = '.ko'
                str += `
        <img src="${$imgdata[i]}" alt="">
        <p><i></i> 馋小贝 中秋节休闲零食大礼包一整箱送女友女生儿童网红礼盒食品超市好吃的组合装2000g</p>
        <div class="more">
            <span>￥</span><span>3798.00</span>
        </div>
    `
            }

            oDiv.innerHTML = str;
            $('.fall').append(oDiv);
        }
    })
    $('.fs_col1').hover(function(){
        $('#hide_list').show()
    },function(){
        $('#hide_list').hide()
    })
    $('.JS_navCtn  li').hover(function () {
        var str = '';
        $.get('http://47.104.244.134:8080/goodstypelist.do', { l: 1 }, function (data) {
            str = '';
            $.each(data, function (item) {
                str += `<li>${data[item].name}</li>`
            })
            $('.op1').html(str)
        })
        $.get('http://47.104.244.134:8080/goodstypelist.do', { l: 2 }, function (data) {

            str = '';
            $.each(data, function (item) {
                str += `<li>${data[item].name}&nbsp;></li>`
            })
            $('.op2').html(str)
        })
    }, function () {
    })
    $(window).scroll(function(){
    
        // console.log($(window).height())
        // console.log($('html,body').scrollTop())
        if($('html,body').scrollTop()>=$(window).height()){
            $('#header').height('80px')
            $('#header').find('h1').css({"background-position":"0px -110px"})
           $('#header').css({'position': 'fixed'}).animate({top:0},1000).find('#hotwords').hide().next().hide()
        }else{
            $('#header').height('141px')
            $('#header').find('h1').css({"background-position":"0px 0px"})
           $('#header').css({'position': 'static','top':'-80px'}).find('#hotwords').show().next().show()
        }
    })
})





