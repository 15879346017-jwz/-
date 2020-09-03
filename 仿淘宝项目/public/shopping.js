// window.onload=function(){
//         var urlParmas=new URLSearchParams(location.search);
//         var $id=urlParmas.get("id");
//         console.log($id);
//         var xhr=new XMLHttpRequest();
//         xhr.onreadystatechange=function(){
//             if(xhr.readyState==4 && xhr.status==200){
//                 var r=xhr.responseText;
//                 // console.log(r);



                
//             }
//         }
//         xhr.open('get',`/pro/v1/goods/${$id}`,true);
//         xhr.send();
// }
// var app=new Vue({
//     el:'.shopping',
//     data:{
//         msg:'我的购物车',
//         number:0,
//         gtitle:'',
//         g_price:0,
//         g_detail:'',
//         gimgs:'',
//         total:49.00,
//         flag:true,
//         fl:true,
//         goods:[{gid:1,gtitle:'aaaaa',g_price:49.00,g_detail:'aaaaaa',gimgs:'./图片/购物车/图2.png',number:1}]
//     },
//     methods:{
//         allcheck(){
//            if(this.fl==false){
//             this.flag=true;
//             this.fl=true;
//            }else if(this.fl==true){
//               this.flag=false;
//               this.fl=false;
//            };
//         //    if(this.flag==false){
//         //     this.fl=false;
//         //    }
//         },
//         check(){
//             if(this.flag==false){
//                 this.flag=true;
//             }else{
//                 this.flag=false;
//                 this.fl=false;
//                 // console.log(this.flag
//             }
//         },
//         sub(item){
//             if(item.number>0){
//                 item.number--;
//             }
//         },
//         add(item){
//         item.number++;    
//         // var urlParmas=new URLSearchParams(location.search);
//         // var $id=urlParmas.get("id");
//         //  fetch(`http://127.0.0.1:8080/pro/v1/goods/${$id}`).then(res=>res.json()).then(res=>{console.log(res)}) ;           
//         },
//     },
//     computed: {
//         sum(){
//             var totals=0
//             this.goods.forEach((gid)=>{
//                 if(this.flag==true){
//                 totals+=gid.g_price*gid.number; 
//                 // console.log(this.list[0].price);
//                 }
//             });  
//             return this.total=totals.toFixed(2);
//         }
//     },
// })  
// (function(){
//     var spans=document.querySelectorAll('.sp1-2>div:nth-child(5)>span');
//     var inputs=document.querySelector('.sp1-2>div:nth-child(5)>input');
//     var inp=document.querySelector('.header>ul>li:first-child>input');
//     var title=document.querySelector('.sp1-2>div:nth-child(2)>div>span');
//     var detail=document.querySelector('.sp1-2>div:nth-child(3)>p');
//     var price=document.querySelector('.sp1-2>div:nth-child(4)>p');
//     var sum=document.querySelector('.sp1-2>div:nth-child(6)');
//     var imgs=document.querySelector('.sp1-2>div:nth-child(2)>img');
//     var total=document.querySelector('.sp2>span');

//     // var num=spans[1].innerHTML;
//     // console.log(num);
//     inputs.value=1;
//     var x;
//     spans[0].onclick=function(){
//         if(inputs.value>1){
//             // num--;
//            inputs.value--;
//         } 
//         sum.innerHTML='￥'+(x*inputs.value).toFixed(2); 
//      }
//      spans[1].onclick=function(){
//             // num++; 
//            inputs.value++;
//            sum.innerHTML='￥'+(x*inputs.value).toFixed(2); 
//      }
//     //  var urlParmas=new URLSearchParams(location.search);
//             //  var $id=urlParmas.get("id");
//              var xhr=new XMLHttpRequest();
//              xhr.onreadystatechange=function(){
//                  if(xhr.readyState==4 && xhr.status==200){
//                      var r=JSON.parse(xhr.responseText);
//                      console.log(r);
//                      var div=document.createElement('div');
//                       title.innerHTML='【暑期价】'+r[0].gtitle;
//                       imgs.src=r[0].gimgs;
//                       detail.innerHTML=r[0].g_detail; 
//                       price.innerHTML='￥'+(r[0].g_price).toFixed(2);
//                       x=(r[0].g_price).toFixed(2);
//                       sum.innerHTML='￥'+(r[0].g_price*inputs.value).toFixed(2); 
//                  }
//              }
//              xhr.open('get',`/pro/v1/goods`,true);
//              xhr.send();
// })()

(function(){
        
             var xhr=new XMLHttpRequest();
             xhr.onreadystatechange=function(){
                 if(xhr.readyState==4 && xhr.status==200){
                     var r=JSON.parse(xhr.responseText);
                    //  console.log(r); 
                    for(var key of r){
                        var div=document.createElement('div');
                        var F_div=document.querySelector('.sp1-1');
                        var l_div=document.querySelector('.sp2');
                        div.innerHTML=`
                        <div class="b">
                         <img src="./图片/购物车/满减图.png" alt="" class="b1">
                         <span class="b2">7.10-7.12每满300减30,可跨店</span>
                         </div>
                        <div class="sp1-2">
                        <div class="a1">
                            <input type="checkbox" class="inp">
                        </div>
                        <div class="a2">
                            <img src="${key.gimgs}" alt="" class="imgs">
                            <div class="a2-1">
                                  <span 
                                  class="a2-1-1"
                                  style="overflow: hidden;">${key.gtitle}</span>
                                  <img src="./图片/购物车/图2.png" alt=""  class="a2-1-2">
                            </div>
                        </div>
                        <div class="a3">
                            <span class="a3-1">详情</span>
                            <p class="a3-2">${key.g_detail}</p>
                        </div>
                        <div class="a4">
                            <del class="a4-1">￥99.99</del>
                            <p class="a4-2">￥${key.g_price.toFixed(2)}</p> 
                        </div>
                        <div class="a5">
                            <span class="a5-1">-</span>
                            <input type="text" disabled class="a5-2" value="1">
                            <span class="a5-1">+</span>
                        </div>
                        <div class="a6">
                            ￥${key.g_price.toFixed(2)}
                        </div>
                        <div class="a7">
                            <span>删除</span>
                        </div>
                     </div>`;
                     F_div.insertBefore(div,l_div);
                    }
                    var aAll=document.querySelectorAll('.a7>span');
                    for(let i=0;i<aAll.length;i++){
                       aAll[i].onclick=function(){
                           var xhr=new XMLHttpRequest();
                           xhr.onreadystatechange=function(){
                               if(xhr.readyState==4 && xhr.status==200){
                                   var r=xhr.responseText;
                                   if(r>=1){
                                         location.href='http://127.0.0.1:8080/shopping.html';
                                   }
                               }
                           }
                           xhr.open('get',`/pro/v1/delete/${r[i].gid}`,true);
                           xhr.send();
                       }
                      }
                    var inps=document.querySelectorAll('.a5>input');
                    var total=document.querySelectorAll('.a6');
                    var price=document.querySelectorAll('.a4-2');
                    var input=document.querySelector('.header input');
                    var inputAll=document.querySelectorAll('.inp');
                    var totals=document.querySelector('.sp2>span');
                         tot=Number(totals.innerHTML.slice(5));     
                        
                   for(let i=0;i<inps.length;i++){
                    //    console.log(inp.nextElementSibling);
                       inps[i].nextElementSibling.onclick=function(){
                           this.previousElementSibling.value++;
                           total[i].innerHTML='￥'+(price[i].innerHTML.slice(1)*this.previousElementSibling.value).toFixed(2);
                           let to=Number(total[i].innerHTML.slice(1)); 
                           if(inputAll[i].checked==true){
                                  tot=to.toFixed(2);
                           } 
                           totals.innerHTML="￥"+tot;
                           
                       }
                       inps[i].previousElementSibling.onclick=function(){
                           if(this.nextElementSibling.value>1){
                            this.nextElementSibling.value--;
                           }
                        total[i].innerHTML='￥'+(price[i].innerHTML.slice(1)*this.nextElementSibling.value).toFixed(2); 
                           
                       }
                       
                   }
                        //   totals.innerHTML='￥'+tot;
                       input.onclick=function(){
                           for(var inputA of inputAll){
                               inputA.checked=this.checked;
                           }
                       }                     
                       for(let j=0;j<inputAll.length;j++){
                           inputAll[j].onclick=function(){
                               var ck=document.querySelector(".a1>input:not(:checked)");
                               if(this.checked==false){
                                   input.checked=false;
                               }else if(!ck){
                                   input.checked=true;
                               }    
                            }

                           }
                                                    
                        //  console.log(tot);
                }
            }
            xhr.open('get',`/pro/v1/goods`,true);
            xhr.send();     


})()



                // for(var key of r){   
                //     // console.log(key) 
                //     var sum;
                //      var frag=document.createDocumentFragment();
                //      var F_div=document.createElement('div');
                //      F_div.classList.add('sp1-2');  
                //        frag.appendChild(F_div);
                //       var div1=document.createElement('div');
                //       div1.classList.add('a1');
                //        F_div.appendChild(div1);
                //       var input=document.createElement('input');
                //       input.classList.add('inp');
                //       input.type="checkbox";
                //       div1.appendChild(input);
                //       var div2=document.createElement('div');
                //       div2.classList.add('a2');
                //       F_div.appendChild(div2);
                //        var img=document.createElement('img');
                //        img.classList.add('imgs');
                //        img.src=key.gimgs;
                //        div2.appendChild(img);
                //        var div2_1=document.createElement('div');
                //        div2_1.classList.add('a2-1');
                //        div2.appendChild(div2_1);
                //        var span1=document.createElement('span');
                //        span1.classList.add('a2-1-1');
                //        span1.innerHTML=key.gtitle;
                //        div2_1.appendChild(span1);
                //        var img1=document.createElement('img');
                //        img1.classList.add('a2-1-2');
                //        img1.src="./图片/购物车/图2.png";
                //        div2_1.appendChild(img1);
                //        var div3=document.createElement('div');
                //        div3.classList.add('a3');
                //        F_div.appendChild(div3);
                //        var span2=document.createElement('span');
                //        span2.classList.add('a3-1');
                //        span2.innerHTML='详情';
                //        div3.appendChild(span2);
                //        var p1=document.createElement('p');
                //        p1.classList.add('a3-2');
                //        p1.innerHTML=key.g_detail;
                //        div3.appendChild(p1);
                //        var div4=document.createElement('div');
                //        div4.classList.add('a4');
                //        F_div.appendChild(div4);
                //        var del=document.createElement('del');
                //        del.classList.add('a4-1');
                //        del.innerHTML='￥99.99';
                //        div4.appendChild(del);
                //        var p2=document.createElement('p');
                //        p2.classList.add('a4-2');
                //        p2.innerHTML="￥"+key.g_price.toFixed(2);
                //        div4.appendChild(p2);
                //        var div5=document.createElement('div');
                //        div5.classList.add('a5'); 
                //        F_div.appendChild(div5);
                //        var span3=document.createElement('span');
                //        span3.classList.add('a5-1');
                //        span3.innerHTML='-';
                //        div5.appendChild(span3);
                //     //    console.log(span3)        
                //        var input1=document.createElement('input');
                //        input1.classList.add('a5-2');
                //        input1.value=1;
                //        div5.appendChild(input1);
                //        var span4=document.createElement('span');
                //        span4.classList.add('a5-1');
                //        span4.innerHTML='+';
                //        div5.appendChild(span4);

                //        span3.onclick=function(){
                //         if(this.nextElementSibling.value>1){
                //             this.nextElementSibling.value--;
                //         }
                //         }
                //         span4.onclick=function(){
                //             this.previousElementSibling.value++;
                //     }
                //     var div6=document.createElement('div');
                //     div6.classList.add('a6');
                //     sum=(key.g_price*input1.value).toFixed(2);
                //     div6.innerHTML='￥'+sum;
                //     F_div.appendChild(div6);  
                //     var div7=document.createElement('div');
                //     div7.classList.add('a7');
                //     F_div.appendChild(div7);
                //     var span5=document.createElement('span');
                //     span5.innerHTML='删除';
                //     div7.appendChild(span5); 
                //     var div=document.querySelector('.sp1-1');
                //     var  l_div=document.querySelector('.sp2');
                //     div.insertBefore(frag,l_div);  
                //     // console.log(1)  
                // }
                    //   title.innerHTML='【暑期价】'+r[0].gtitle;
                    //   imgs.src=r[0].gimgs;
                    //   detail.innerHTML=r[0].g_detail; 
                    //   price.innerHTML='￥'+(r[0].g_price).toFixed(2);
                    //   x=(r[0].g_price).toFixed(2);
                    //   sum.innerHTML='￥'+(r[0].g_price*inputs.value).toFixed(2); 
//                  }
//              }
//              xhr.open('get',`/pro/v1/goods`,true);
//              xhr.send();

//             }
// })()


