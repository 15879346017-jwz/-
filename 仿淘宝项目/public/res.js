
var regs=document.querySelector('.reg');
// console.log(regs);
function check1(){
   regs.style.display="none";
}

function check2(){
    location.href="http://127.0.0.1:8080/index.html";
}


var div1=document.querySelector(".body-2-1");
var div2=document.querySelector(".body-2-2");
var div3=document.querySelector(".body-2-3");

var lis=document.querySelectorAll('.body-2>ul>li');
var inputs=document.querySelector('.body-2-1-1>div>div:nth-child(2)>input');  
var spans=document.querySelector('.body-2-1-1>div>div:nth-child(2)>span:nth-of-type(2)');
var buttons=document.querySelector('.body-2-1-2>a');
var btn=document.querySelector('.body-2-2-1>div:nth-child(6)>button');

//控制a标签无法被点击
// buttons.style.pointerEvents="none";

inputs.onblur=function(){
if(!inputs.value){
   spans.style.color="red";
   spans.style.fontSize=14+"px";
   spans.style.lineHeight=37+'px';
   spans.innerHTML="您还没有输入手机号";
}else if(inputs.value.length!=11){
    spans.style.color="red";
    spans.style.fontSize=14+"px";
    spans.style.lineHeight=37+'px';
    spans.innerHTML="输入的手机号不对";
}else{spans.innerHTML="√";}

var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
        var r=xhr.responseText;
        if(r==1){alert("您的手机号已注册");
        location.href="http://127.0.0.1:8080/login.html";
        inputs.value="";
    }
    }
}
xhr.open('get',`/pro/v1/res1/${inputs.value}`,true);
xhr.send();

if(inputs.value && inputs.value.length==11){
       buttons.style.pointerEvents="auto";
       buttons.style.backgroundColor="#FF4A00";  
}
}



buttons.onclick=function(){
    div1.style.display="none";
    div2.style.display="block";
    lis[1].className="on";
}

var inps=document.querySelectorAll('.body-2-2 input');
var ps=document.querySelectorAll('.body-2-2 p');

inps[0].onblur=function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r!=0){alert("用户名重复");inps[0].value="";}
        }
    }
    xhr.open('get',`/pro/v1/res3/${inps[0].value}`,true);
    xhr.send();
}


var div=document.querySelector('.one');
var s_div=document.querySelector('.two');
var bgc=document.querySelector('.three');
var text=document.querySelector('.fore');
s_div.onmousedown=function(event){
    var downX=event.clientX;
    var flag=false;
    s_div.onmousemove=function(e){
        var moveX=e.clientX-downX;
        if(moveX<0){moveX=0};
        if(moveX>260){
        moveX=260;
        flag=true;
        text.innerHTML="验证成功";
        text.style.color="#fff";
        s_div.onmousedown=null;
        s_div.onmousemove=null;
        }
        bgc.style.width=moveX+'px';
        this.style.left=moveX+'px';
    } 
   s_div.onmouseup=function(){
       if(flag==false){
           bgc.style.width=0;
           this.style.left=0; 
           s_div.onmousemove=null;
       }
      
   }
}


btn.onclick=function(){
    div1.style.display="none";
    lis[1].className="on";    
    
    if(!inps[4].checked){
        alert("您还没有同意协议");
        return;
    }

    if(!inps[0].value){
      alert('用户名为空');
      div2.style.display="block";
      return;
    }else if(!inps[1].value){
        alert('密码名为空');
        div2.style.display="block";
        // return;
      }else if(inps[1].value!=inps[2].value){
        alert("密码与确认密码不一致");
        div2.style.display="block";
        // return;
    }else{
    div2.style.display="none";
    lis[2].className="on";
    div3.style.display="block";}

    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.style==200){
            var r=xhr.responseText;
            if(r!=0){             
               alert('注册失败');
            }
        }
    }
    xhr.open('post','/pro/v1/res2',true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send(`phone=${inputs.value}&uname=${inps[0].value}&upwd=${inps[1].value}&u_imgs=${inps[3].value}`);
}





