const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

router.get('/v1/search/:input',(req,res)=>{
     let $gname=req.params.input;
    //  console.log($gname);
     let sql="select title from wares where title like ? ";
     pool.query(sql,['%'+$gname+'%'],(err,a)=>{
         if(err) throw err;
        //   console.log(a);
         if(a.length==0)
         {res.send("0");}
         else{res.send(a);}
         
     })
});

// router.get('/v2/goods/:gname',(req,res)=>{
//     var $gname=req.params.gname;
//     var count=[];
//     var sql="select * from wares where title like ? ";
//     pool.query(sql,['%'+$gname+'%'],(err,a)=>{
//         if(err) throw err;
//         count.push(a);
//        console.log(count[0]);
//         // res.send(a)
//         // if(a.length==0)
//         // {res.send("0");}
//         // else{res.send(a);}
// })
// });

// router.get("/v2/goods/:gname&:count",(req,res)=>{
//         var $gname=req.params.gname;
//         var $count=req.params.count;
//          var  sql1=`select title from wares where title like  ?`;
//         var output={pageSize:4};//每页8个商品
//         var sql2="select * from wares limit ?,4";
//         pool.query(sql1+sql2,['%'+$gname+'%',$count],(err,result)=>{
//             if(err) throw err;
//             output.count=result.length;//获得总记录数
//             output.pageCount=Math.ceil(output.count/output.pageSize);//计算总页数
//     //         output.products = result.slice(output.pno*8,output.pno*8+8);
//             // console.log(result)
//             res.writeHead(200,{
//                 "Content-Type":"application/json charset=utf-8",
//                 "Access-Control-Allow-Origin":"*"
//             })
//             
//             res.write(JSON.stringify(output));
//             res.end();
//         })
//     });



router.get('/v1/search1/:input',(req,res)=>{
    let $input=req.params.input;
   //  console.log($gname);
    let sql="select wid from wares where title=? ";
    pool.query(sql,[$input],(err,a)=>{
        if(err) throw err;
       //   console.log(a);
        if(a.length==0)
        {res.send("0");}
        else{res.send(a);}
        
    })
});

router.put('/v2/insert',(req,res)=>{
    var $imgs=req.body;
    // console.log(imgs);
    var sql='insert into goodgoods set ?';
    pool.query(sql,[$imgs],(err,a)=>{
        if(err)throw err;
        
        if(a.affectedRows==0){res.send('0');}
        if(a.affectedRows>0){res.send('1');}
    });    
});

router.get('/v1/gain',(req,res)=>{
    var sql='select imgs from goodGoods';
    pool.query(sql,(err,a)=>{
        if(err)throw err;
        res.send(a);
    });
});

router.get('/v1/gain1',(req,res)=>{
    var sql='select uname,u_imgs from tb_user';
    pool.query(sql,(err,a)=>{
        if(err)throw err;
        res.send(a);
    });
})

router.get('/v1/login1/:uname&:upwd',(req,res)=>{
      var $uname=req.params.uname;
      var $upwd=req.params.upwd;
    //   console.log($uname,$upwd);
      var sql="select uname,upwd from tb_user where uname=? and upwd=?";
      pool.query(sql,[$uname,$upwd],(err,a)=>{
          if(err)throw err;
          if(a.length==0){res.send('0');}
          if(a.length>0){res.send(a);}
      })
});

router.get('/v1/login2/:phone',(req,res)=>{
    var $phone=req.params.phone;
    var sql="select uname,phone from tb_user where phone=?";
    pool.query(sql,[$phone],(err,a)=>{
        if(err)throw err;
        if(a.length==0){res.send("0");}
        if(a.length==1){
            var x,y="";
            for(var i=0;i<6;i++){
            x=parseInt(Math.random()*10);
            y+=x;
            } 
           res.send(y);
        }
    });
 });   

router.get('/v1/goods/:wid',(req,res)=>{
    var $id=req.params.wid;
    var sql="select * from wares where wid=?";
    pool.query(sql,[$id],(err,a)=>{
        if(err) throw err;
        res.send(a);
    });
});  



router.get('/v1/res1/:phone',(req,res)=>{
    var phone=req.params.phone;
    var sql="select phone from tb_user where phone=?";
    pool.query(sql,[phone],(err,a)=>{
        if(err)throw err;
        if(a.length==0){res.send("0");}
        if(a.length>0){res.send("1");}
    });
})

router.post('/v1/res2',(req,res)=>{
    var obj=req.body;
    var sql="insert into tb_user set ?";
    pool.query(sql,[obj],(err,a)=>{
        if(err)throw err;
        if(a.affectedRows>0){res.send("1");}
    });
})

router.get('/v1/res3/:uname',(req,res)=>{
   var  $uname=req.params.uname;
   var sql="select uname from tb_user where uname=?";
   pool.query(sql,[$uname],(err,a)=>{
       if(err) throw err;
       if(a.length==0){res.send("0");}
       else{
              res.send("1");
       }
   });
});

router.post('/v1/shopping',(req,res)=>{
    var obj=req.body;
    var sql="insert into goods set ?";
    pool.query(sql,[obj],(err,a)=>{
        if(err)throw err;
        if(a.affectedRows>0){res.send("1");}
    });
});
router.get('/v1/shopping1/:id',(req,res)=>{
    var $id=req.params.id;
    var sql="select waresId from goods where waresId=?";
    pool.query(sql,[$id],(err,a)=>{
        if(err)throw err;
        if(a.length==0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
})
router.get('/v1/goods',(req,res)=>{
    var sql="select * from goods";
    pool.query(sql,(err,a)=>{
        if(err)throw err;
        res.send(a);
    });
})

router.get('/v1/delete/:gid',(req,res)=>{
    $gid=req.params.gid;
    var sql='delete from goods where gid=?';
    pool.query(sql,[$gid],(err,a)=>{
        if(err) throw err;
        if(a.affectedRows>=1){
            res.send('1')
        }else{
            res.send('0')
        }
    });
});



module.exports=router;