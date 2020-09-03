
var parents=document.querySelector('.container'); 
// console.log(parents);
var divs=document.querySelector('.wrap');
var lis5=divs.querySelectorAll('li');
var spans=document.querySelector('.button').querySelectorAll('span');
var ps=document.querySelectorAll('p');
// console.log(lis,spans,ps); 
// var index=0;

var timer;
var index=0;

var count = 0;
for (var j = 0; j < spans.length; j++) {
  spans[j].index = j; //为每个小按钮添加下标
  spans[j].onclick = function () { //进入点击事件
  for (var i = 0; i < spans.length; i++) { //干掉所有人
    lis5[i].style = 'display:none;';
    spans[i].className = '';
    spans[j]=index
  }
  lis5[this.index].style = 'display:block;'; //留下我自己
  spans[this.index].className = 'on3'; //留下我自己
  count = this.index; // 把当前的角标值赋值给count 希望他从当前再开始
}
}

  function arrow_right(){
    autoplay();
  }

function arrow_left(){
  for(var j=0;j<lis5.length;j++){
    lis5[j].style.display="none";
    spans[j].className="";
  }
  lis5[index].style.display="block";
  spans[index].className="on3";   
  index--;
  if(index<0){index=4;};
}

function autoplay(){
  for(var j=0;j<lis5.length;j++){
    lis5[j].style.display="none";
    spans[j].className="";
  }
  lis5[index].style.display="block";
  spans[index].className="on3";   
  index++;
  if(index>=lis5.length){index=0;};
}


timer = setInterval(autoplay,2000);

 parents.onmouseover=function(){
  clearInterval(timer);
}
parents.onmouseout=function(){
  timer=setInterval(autoplay,2000);
}


