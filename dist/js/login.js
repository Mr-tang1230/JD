$(function(){
   $('.tab-cli').eq(0).click(function(){
       $(this).find('a').addClass('col').end().siblings().find('a').removeClass('col')
       $(".login-middle1").css({display:'block'})
       $(".login-middle2").css({display:'none'})
   })
   $('.tab-cli').eq(1).click(function(){
    $(this).find('a').addClass('col').end().siblings().find('a').removeClass('col')
    $(".login-middle1").css({display:'none'})
    $(".login-middle2").css({display:'block'})
})
$('.ma').on('myover',function(){
    $(this).children('img').eq(0).stop().animate({marginLeft:0},1000,function(){
          $(this).next().show(0,function(){
            $(this).delay(3000).animate({display:'none'},0,function(){
                $(this).prev().animate({marginLeft:'85px'},1000)
            })
          })
    }
    ) })
 $('.ma').trigger('myover');
 $('.ma').mouseenter(function(){
    $(this).children('img').eq(0).stop().animate({marginLeft:0},1000,function(){
        $(this).next().show()
    })
 })
 $('.ma').mouseleave(function(){
    $(this).children('img').eq(1).hide().prev().stop().animate({marginLeft:'85px'},1000)
 })
 $('.to_res').click(function(){
     location.assign('http://localhost:8080/register.html')
 })
 //http://47.104.244.134:8080/
 $('#btn').click(function(){
     if(($('#inp1').val()=='')&&$('#inp2').val()!=''){
        alert('账号名不能为空！');
        return;
     }else if(($('#inp1').val()!='')&&$('#inp2').val()==''){
         alert('密码不能为空！');
        return;
     }else if(($('#inp1').val()=='')&&$('#inp2').val()==''){
        alert('账户名和密码不能为空！');
        return;
     }
    //  登录
    $use=$('#inp1').val()
    $pass=$('#inp2').val()
    $.post('http://47.104.244.134:8080/userlogin.do',{name:$use,password:$pass},function(data){
        if(data.code==0){
            alert('登录成功')
        }else{
            alert('登录失败')
        }
    })

 })
})
