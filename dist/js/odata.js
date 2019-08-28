$(function(){
    var cart2=new Cart();
    cart2.showCart('cartList');
    var $all_t=0;
    cart2.cal();
     $('.lo').find('.total span').each(function(){
        $all_t+=+$(this).text();
        
     })
    
     $(".alltotal span").text($all_t)
    $('.inpbox').each(function(){
        $(this).find('input').eq(0).click(function(){
     $cartnum=+$(this).next().val()-1;
     $inp_id=$(this).attr('data-id');
     if($cartnum<=1){
         $cartnum=1;
     }
   $sigle=parseInt($(this).parents('.lo').find('.sprice').text().replace('￥',""))   
     $to_tol=$cartnum*$sigle;
     $(this).parents('.lo').find('.total span').text($to_tol);
     $(".alltotal span").text(+$(".alltotal span").text()-$sigle)  
     cart2.addCart($inp_id,$cartnum,false)

     $(this).next().val($cartnum)
    }).next().next().click(function(){
        $cartnum=+$(this).prev().val()+1 ;
        $inp_id=$(this).attr('data-id');
        $sigle=parseInt($(this).parents('.lo').find('.sprice').text().replace('￥',""))   
        $to_tol=$cartnum*$sigle;
     $(".alltotal span").text(+$(".alltotal span").text()+$sigle)  
        $(this).parents('.lo').find('.total span').text($to_tol)
        cart2.addCart($inp_id,$cartnum,false)
     $(this).prev().val($cartnum)
    })
    
    })

    $('.del').click(function(){
        var $udtol=0;
        $del_id=$(this).attr('data-id');
        cart2.remove($del_id);
        $(this).parents('li').remove();
        cart2.cal();
        
      $('.total').each(function(){
        //  console.log($(this).find('span').text()) 
         $udtol+=+$(this).find('span').text()
      })
       $('.alltotal').find('span').text($udtol) 
    })

$('#cartList').find('img').click(function(){
   location.assign('http://localhost:8080/details.html')
})
})