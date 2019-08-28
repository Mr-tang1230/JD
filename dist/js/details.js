$(function(){
    $('.add_rec').each(function(){
      $(this).find('a').eq(0).click(function(){
      $numing=+($(this).parents('.cart_inp').find('.cart_num').val());
      console.log()
      $numing+=1;    
   $(this).parents('.cart_inp').find('.cart_num').val($numing);
    }).next().click(function(){
        $numing=+$(this).parents('.cart_inp').find('.cart_num').val();

        $numing-=1;
        if($numing<=1){
            $numing=1;
        }
        $(this).parents('.cart_inp').find('.cart_num').val($numing);
    })
    })
  // 价格

    $('.phonex .choose_col>div').click(function(){
      $(this).addClass('ced_bor').siblings().removeClass();
     $i= $(this).index();
    switch($i){
      case 1:
      $('.phonex .dd>span').eq(1).text('4499.00');
      break;
      case 2:
      $('.phonex .dd>span').eq(1).text('4588.00');
      break;
      case 3:
      $('.phonex .dd>span').eq(1).text('4788.00');
      break;
    }
    })
    $('.ke .choose_col>div').click(function(){
      $(this).addClass('ced_bor').siblings().removeClass();
     $i= $(this).index();
     
    switch($i){
      case 1:
      $('.ke .dd>span').eq(1).text('99.00');
      break;
      case 2:
      $('.ke .dd>span').eq(1).text('130.00');
      break;
    }
    })

    var cart=new Cart();
    cart.cal();
    var $t= $('.cart').offset().top
    var $l= $('.cart .count').offset().left
    $('.add_to').click(function(){
     $pur=+$(this).parents('.add_cart').find('.cart_num').val();
     $id=$(this).attr('data-id')
      cart.addCart($id,$pur,true);
      cart.cal();
      $(this).append('<div></div>').children('div:last')
      .css({height:"15px",width:'15px',background:'#e83631','borderRadius':'50%',
    'position':'absolute'}).stop().animate({'top':$t,'left':$l},300,function(){
      $(this).hide(100)
    })


   
    })

    $('.cart').click(function(){
      location.assign('http://localhost:8080/cart.html')
    })

 

})
