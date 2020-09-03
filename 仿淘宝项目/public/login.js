
var d1=document.querySelector('.body-4');
function show(){
    d1.style.display="block";
}
function none1(){ 
    d1.style.display="none";
}

var xm=document.querySelector('.X');
var yz=document.querySelector('.Y');
// console.log(xm,yz);

var lis=document.querySelectorAll('.body-2-1>ul>li');
// console.log(lis[1]);
function show1(){
    if(xm.style.display="none"){
        xm.style.display="flex";
        lis[0].className="child";
        lis[1].className="";
    }
  if(yz.style.display="block"){
    yz.style.display="none";
  }
}
function none2(){
    if(yz.style.display="none"){
        yz.style.display="flex";
        lis[0].className="";
        lis[1].className="child";
    }
    if(xm.style.display="block"){
        xm.style.display="none";
    }
    
}

function login1(){
    if(!uname.value){alert('账号为空');return;}
    if(!upwd.value){alert('密码为空');return;}
     var xhr=new XMLHttpRequest();
     xhr.onreadystatechange=function(){
         if(xhr.readyState==4 && xhr.status==200){
             var r=JSON.parse(xhr.responseText);
             if(r==0){alert('密码输入错误');return;}
             else{
                 location.href=`http://127.0.0.1:8080/index.html?s=${1}`;
                 return;
                }
         }
     }
     xhr.open('get',`/pro/v1/login1/${uname.value}&${upwd.value}`,true);
     xhr.send();
}

function test(){
    if(!phone.value){alert("请输入手机号");return;};
     var xhr=new XMLHttpRequest();
     xhr.onreadystatechange=function(a){
         if(xhr.readyState==4 && xhr.status==200){
            var a=JSON.parse(xhr.responseText);  
             if(a==0){alert("您的手机号输入有误");} else{         
             testing.value=a;
             console.log(a);
             
            } 
         }
     }
     xhr.open('get',`/pro/v1/login2/${phone.value}`,true);
     xhr.send();
}

function login2(a){
   if(!testing.value){
       alert('请输入验证码');
       return;
    }
else{location.href=`http://127.0.0.1:8080/index.html?s=${1}`;return;}
}

