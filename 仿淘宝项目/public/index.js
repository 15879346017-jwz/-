
var tus=document.querySelectorAll('.body-3-2-1')[0];
var imgs=tus.querySelectorAll('img');
var tu1=document.querySelectorAll('.body-3-1-1')[0];
var img1=tu1.querySelectorAll('img');
var img2=document.querySelectorAll('.body-5-1-1-a-1 img');
var img3=document.querySelectorAll('.body-6-2-2 img');
var img4=document.querySelectorAll('.body-7 img');
var img5=document.querySelectorAll('.body-8 img');
   
var nav1=document.querySelector('.nav-one2');
var nav2=document.querySelector('.nav-user-1');
var nav2_str=document.querySelector('.nav-user-1 strong');    
var nav3=document.querySelector('.body-1-4-2');
var nav4=document.querySelector('.body-new-1');
var nav5=document.querySelector('.body-1-4-1-1>img');
var nav6=document.querySelector('.body-1-4 strong');
 
var urlParmas=new URLSearchParams(location.search);
var s=urlParmas.get("s");


function f1(){   

    f2();
    if(s){
       var xhr=new XMLHttpRequest();
       xhr.onreadystatechange=function(){
          if(xhr.readyState==4 && xhr.status==200){
             var r=JSON.parse(xhr.responseText);
              nav1.style.display="none";
              nav2.style.display="block";
            //   nav2.className="";
              nav2_str.innerHTML=r[0].uname;
              nav6.innerHTML=r[0].uname;
              nav3.style.display="none";
              nav4.style.display="block";
              nav5.src=r[0].u_imgs;
              if(!nav5){
                 nav5.src="/图片/timg.jpg";
              }
          }
       }
       xhr.open('get','/pro/v1/gain1',true);
       xhr.send();
    }
}

var f2=function(){
   var xhr=new XMLHttpRequest();
   xhr.onreadystatechange=function(){
       if(xhr.readyState==4 && xhr.status==200){
           var r=JSON.parse(xhr.responseText);
         //   console.log(r);
           
         var cou=0;
          for(var j=0;j<6;j++){
             img1[j].src=`${r[cou].imgs}`;
             cou++;
          }
          var count=6;
          for(var i=0;i<6;i++){
             imgs[i].src=`${r[count].imgs}`;
             count++;
          }
          var coun=12;
          for(var c=0;c<24;c++){
           img2[c].src=`${r[coun].imgs}`;
             coun++;
          }
          var c1=36;
          for(var c=0;c<6;c++){
           img3[c].src=`${r[c1].imgs}`;
             c1++;
          }
          var c2=43;
          for(var c=0;c<20;c++){
           img4[c].src=`${r[c2].imgs}`;
             c2++;
          }
          var c3=63;
          for(var c=0;c<5;c++){
           img5[c].src=`${r[c3].imgs}`;
             c3++;
          }
       }
   }
   xhr.open('get','/pro/v1/gain',true);
  //  xhr.open('get','/pro/v1/gain1',true);
   xhr.send();

}

var lis=document.querySelectorAll('.nav_2_fife_1>ul>li');
var div10=document.querySelectorAll('.nav_2_sex');

   lis[0].onclick=function(){
      for(var j=0;j<3;j++){
         lis[j].className="";
      }
      this.className="on1";
      div10[0].style.display="block";
   }
   lis[1].onclick=function(){
      for(var j=0;j<3;j++){
         lis[j].className="";
      }
      this.className="on1";
       div10[0].style.display="none";
   }
   lis[2].onclick=function(){
      for(var j=0;j<3;j++){
         lis[j].className="";
      }
      this.className="on1";
      div10[0].style.display="block";
   };
   (function(){
      var btn=document.querySelector('.nav_2_fife_2>button');
      var inp=document.querySelector('.nav_2_fife_2>input');
      btn.onclick=function(){
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function(){
         if(xhr.readyState==4 && xhr.status==200){
            var r=JSON.parse(xhr.responseText);
            console.log(r);
            location.href=`http://127.0.0.1:8080/goods.html?id=${r[0].wid}`;
         }
      }
      xhr.open('get',`/pro/v1/search1/${inp.value}`,true);
      xhr.send();
      }
   })();

   (function(){
     var div=document.querySelector('.last');
     var divs=document.querySelectorAll('.last>div');
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
      //   console.log(scrollTop);
        scrollTop>=478 ? div.className='last1':div.className='last';
        scrollTop>1630 ? divs[5].style.display="flex" : divs[5].style.display="none";
        (scrollTop>=0 && scrollTop<=1630) ?  divs[0].className='last_on' : divs[0].className='';
        (scrollTop>1630 && scrollTop<=2200) ? divs[1].className='last_on' : divs[1].className='';
        (scrollTop>2200 && scrollTop<=2500) ? divs[2].className='last_on' : divs[2].className='';
        (scrollTop>2500 && scrollTop<=2930) ? divs[3].className='last_on' : divs[3].className='';
        (scrollTop>2930) ? divs[4].className='last_on' : divs[4].className='';
        div.onclick=function(e){
           if(e.target.nodeName=="DIV"){
              switch(e.target.innerHTML){
                    case '逛街好货':
                       window.scroll({top:50,behavior:'smooth'});
                       break;
                   case '直播好店':
                     window.scroll({top:1631,behavior:'smooth'});
                     break;
                     case '时尚爆料':
                     window.scroll({top:2201,behavior:'smooth'});
                     break;
                     case '品质玩味':
                        window.scroll({top:2501,behavior:'smooth'});
                        break;
                    case '实惠专业':
                      window.scroll({top:2931,behavior:'smooth'});
                      break;
                      case '返回顶部':
                      window.scroll({top:0,behavior:'smooth'});
                      break;

              }
           }
        }   
    }
   })()

