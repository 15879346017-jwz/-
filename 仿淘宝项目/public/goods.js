(function(){
    var imgs=document.querySelector('.body1-1>ul>li:first-child>img');
    var ass=document.querySelector('.body1-2>span:last-of-type');
    var h1=document.querySelector('.body2>h1>span');
    var price=document.querySelector('.body2-1>p');
    var ass1=document.querySelector('.body2-3>li:first-child>span');
    var detials=document.querySelector('.body2-4>p');
    var num=document.querySelector('.body2-5>span:last-of-type'); 
    var a=document.querySelector('.body2-6>div>a:last-child');
    var imgs0=document.querySelector('.body1-1>div:first-child>img');
   var imgs1=document.querySelector('.body1-1-1');
    var urlParmas=new URLSearchParams(location.search);
    var $id=urlParmas.get("id");
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=JSON.parse(xhr.responseText);
             imgs.src=r[0].imgs1;
             imgs0.src=imgs.src;
             ass.innerText=r[0].assess;
             h1.innerText=r[0].title;
             price.innerText='￥'+r[0].wprice.toFixed(2);
             ass1.innerText=r[0].assess;
             detials.innerText=r[0].detail;
             num.innerHTML='库存('+r[0].num+')';
             imgs1.style.background=`url('${imgs0.src}') no-repeat`; 
             imgs1.style.backgroundSize="500%";
                a.onclick=function(){  
                    console.log(2);
                        var xhr=new XMLHttpRequest();
                        xhr.onreadystatechange=function(){
                            if(xhr.readyState==4 && xhr.status==200){
                                var r=xhr.responseText;
                                if(r==1){
                                    // alert('已添加入购物车中');
                                    a.href=`http://127.0.0.1:8080/shopping.html`;
                                }else if(r==0){
                                    fun();
                                }
                            }
                        }
                        xhr.open('get',`/pro/v1/shopping1/${$id}`,true);
                        xhr.send();  
                    }

                  var fun=function(){ 
                      console.log(1);
                    var xhr=new XMLHttpRequest();
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState=4 && xhr.status==200){
                            var r=xhr.responseText;
                            if(r==1){
                          a.href=`http://127.0.0.1:8080/shopping.html`;
                            }
                        }
                    }
                    console.log(r[0].imgs1);
                    xhr.open('post',`/pro/v1/shopping`,true);
                    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
                    xhr.send(`gtitle=${r[0].title}&g_price=${r[0].wprice}&g_detail=${r[0].detail}&gimgs=${r[0].imgs1}&waresId=${r[0].wid}`);
                   } 

              
        }
    }
    xhr.open('get',`/pro/v1/goods/${$id}`,true);
    xhr.send();  
   
})();

(function(){
   var inp=document.querySelector('.body2-5>input');     
   var spans=document.querySelectorAll('.body2-5>p>span');
       spans[0].onclick=function(){
            inp.value++;
       }
       spans[1].onclick=function(){
        if(inp.value>0){
            inp.value--;
        }
   }
})();

(function(){
    var lis=document.querySelectorAll('.body1-1>ul>li');
    var img1=document.querySelectorAll('.body1-1>ul>li>img');
    var imgs=document.querySelector('.body1-1>div:first-child>img');
    var div_img=document.querySelector('.body1-1-1');
    var div=document.querySelector('.body1-1>div:first-child');
    var sdiv=document.querySelector('.body1-1>div:first-child>div');
    // console.log(div_img);
    div.onmousemove=function(e){
        var x=e.clientX,
            y=e.clientY,
        
        //getBoundingClientRect()  作用是获取某个元素相对视窗的集合
            cx = div.getBoundingClientRect().left,
            cy=div.getBoundingClientRect().top,
            sdx=x-cx-50,
            sdy=y-cy-50;
            console.log(x,y);
            if(sdx<0){sdx=0}else if(sdx>290){sdx=290};
            // if(sdy<0){sdy=0}else if(sdy>290){sdy=290};
            if((sdx>=0 && sdx<=290) && (sdy>=0 && sdy<=290)){
              div_img.style.display="block";
              sdiv.style.display='block';
            };
            div_img.style.backgroundPosition = (sdx /290 * 100  + '%') + (sdy / 290 * 100 + '%');
            sdiv.style.left=sdx+'px';
            sdiv.style.top=sdy+'px';
    }
    div.onmouseleave=function(){
        div_img.style.display="none";
        sdiv.style.display='none';
    }

     for(let i=0;i<lis.length;i++){     
         lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className="";
            }
            this.className="on";   
            div_img.style.background=`url('${img1[i].src}') no-repeat`; 
            imgs.src=img1[i].src; 
            div_img.style.backgroundSize="490%";
         }
     }
})();

