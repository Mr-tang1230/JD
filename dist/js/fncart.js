
    var $data=[{id:'1',img:'img/onePLUS.jpg',name:'一加7pro',price:"4499.00元"},{id:'2',img:'img/mo.jpg',name:'一加7手机壳',price:'99元'},{id:'3',img:'img/ear.jpg',name:'一加耳机',price:'199元'}]
    localStorage.setItem('product',JSON.stringify($data));
 
    function getId(id){
        return document.getElementById(id);
    }
    function getClass(cla){
        return document.querySelectorAll(cla);
    }
    
    function Cart(){
        //如不加判断会在刷新后，添加购物车时将localStorage的cart的data清空后在加
        if(localStorage.getItem('cart')!=null){
            this.data=JSON.parse(localStorage.getItem('cart')); 
        }else{
            this.data={};
        }
    }
    Cart.prototype.addCart=function(id,num,flag){
        if(this.data[id]==undefined){
            this.data[id]=num;    
        }else{
            if(flag){
            this.data[id]=parseInt(this.data[id])+num;
            }else{
                this.data[id]=num;
            }
        }
          localStorage.setItem('cart',JSON.stringify(this.data));			
    }
Cart.prototype.cal=function(){
    var $show_num=0;
     for(let x in this.data){
            $show_num+=this.data[x]
        }
        if($show_num>=99){
            $show_num='99+'
        }
    getClass('.count')[0].innerHTML=$show_num;

}

    Cart.prototype.showCart=function(a){
var ca=JSON.parse(localStorage.getItem('cart'));
var pd=JSON.parse(localStorage.getItem('product'));
this.cartList=getId(a);
var str='';
for(var i in ca){
    for(var j in pd){
        if(i==pd[j].id){
            var tol=parseInt(pd[j].price)*ca[i];
            str+=`<li><img src='${pd[j].img}'>
            <div class='lo'>
            <p class='sprice'><span>￥</span>${pd[j].price}</p>
            <div class='inpbox'>
             <input class='sub' type="button" value="-"  data-id="${pd[j].id}" />
         <input class='txt' type="text"  value="${ca[i]}"  data-id="${pd[j].id}"/>
          <input class='sup'  type="button" value="+"  data-id="${pd[j].id}" />
            </div>
           <p class='total'>总价：<span>${tol}</span>元</p>	
          <input  class='del' type="button" value="删除该商品" data-id='${pd[j].id}' />
            </div>
            </li>`
        }
    }
}
str+="<p class='alltotal'>所有商品总价：<span></span>元</p>";
this.cartList.innerHTML=str;
    }
    Cart.prototype.remove=function(delid){
    this.data=JSON.parse(localStorage.getItem('cart')); 
    
    for(var k in this.data){
        if(k==delid){
            delete this.data[k];
        }
    }
    localStorage.setItem('cart',JSON.stringify(this.data));
    }
    
 

    
