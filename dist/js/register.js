$(function(){
    $('.pro_btnbox').find('button').eq(1).click(function(){
        $('.pro_bac').hide();
    })
    $('.pro_btnbox').find('button').eq(0).click(function(){
        location.assign('http://localhost:8080/main.html')
    })
//    用户名
    $('#yanzheng').click(function(){
        var $reg=/^\w{3,9}$/g;
       var $vl=$('#txt_num').val();
       if($reg.test($vl)){
            $(this).css({'backgroundColor':'rgb(91,207,24)'}).text('验证成功，请点击下一步')
            $pos1=$vl;
       }
    $('.res_next').click(function(){
        $('.spe1').hide();
        $('.progress_num').eq(1).find('em').addClass('forgive').end().find('p').addClass('forgive')
        $('.progress_dott').eq(0).addClass('forgive')
        $('.spe2').show();
    })
})

var $reg1=/^\w{3,9}$/g;
var $reg2=/^\w{2,5}@[a-z0-9]{2,5}.[a-z]{2,5}$/g;
$('.spe2 #txt_num1').change(function(){
  $pasy=$(this).val()
    if($reg1.test($pasy)){
        $('.test_pass').show();
        $pos2=$pasy;
    }
})
$('.spe2 #txt_num2').change(function(){
    $pas=$(this).val()
      if($reg2.test($pas)){
          $('.test_email').show();
          $pos3=$pas
      }
})
$('.spe2 #txt_num3').change(function(){
    $pasp=$(this).val();
          $('.test_sex').show();
          $pos4=$pasp;
})
$('.spe2 .res_next').click(function(){
    $.post('http://47.104.244.134:8080/usersave.do',{username:$pos1,password:$pos2,email:$pos3,sex:$pos4},function(data){
       console.log(data);
    if(data.code==0){
           $('.res_suc').show();
           setTimeout(function(){
                 location.assign('http://localhost:8080/main.html')
           },3000)
           $('.progress_dott').eq(1).addClass('forgive')
           $('.progress_num').eq(2).find('em').addClass('forgive').end().find('p').addClass('forgive')
        }else{ 
         $('.res_error').show();
         setTimeout(function(){
           location.reload();
      },3000)
        }
      
    })


})


})