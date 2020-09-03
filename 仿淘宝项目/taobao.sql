set names utf8;
drop database if exists taobao;
create database taobao charset=utf8;
use taobao;
create table picture(
    tmig varchar(50)
);

create table tb_user(
    uid int primary key auto_increment,
    uname varchar(10),
    upwd varchar(20),
    phone varchar(15),
    u_imgs VARCHAR(20),
    sex bool
);
insert into tb_user values(null,'k','abc123','12345678911','./图片/头像.jpg',1);
create table goods(
    gid int primary key auto_increment,
    gtitle varchar(10),
    g_price decimal(7,2),
    g_detail varchar(100),
    gimgs VARCHAR(50),
    waresId  int 
    
    -- id int,foreign key goods  references wares(wid)
);
create table goodGoods(
   gid int primary key auto_increment,
   imgs varchar(50)
);
create table wares(
   wid int PRIMARY KEY auto_increment,
   wprice DECIMAL(6,2),  
   title VARCHAR(50),
   assess int,
   detail varchar(100),
   num int,
   imgs1 VARCHAR(50)
);
insert into wares values(null,49.00,'大头家，方头奶奶鞋',4000,'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',1000,'./图片/好货图片/好货图1.jpg_.webp');
insert into wares values(null,30.00,'体育运动是能缓解人的心情',3218,'如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。',1500,'./图片/好货图片/好货图2.jpg_.webp');
insert into wares values(null,62.00,'来自厨房的热情',4432,'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。',2100,'./图片/好货图片/好货图3.jpg_.webp');
insert into wares values(null,62.00,'你爱我吗，爱我就点我',4432,'官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！',2100,'./图片/好货图片/好货图4.jpg_.webp');
insert into wares values(null,54.00,'冬暖夏凉，你值得拥有',13001,'尝试 Vue.js 最简单的方法是使用 Hello World 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以创建一个 .html 文件，然后通过如下方式引入 Vue：',1900,'./图片/好货图片/好货图5.jpg_.webp');
insert into wares values(null,83.00,'来自美食的诱惑',554,'安装教程给出了更多安装 Vue 的方式。请注意我们不推荐新手直接使用 vue-cli，尤其是在你还不熟悉基于 Node.js 的构建工具时。',2500,'./图片/好货图片/好货图6.jpg_.webp');



insert into goodGoods values(null,'./图片/好货图片/好货图1.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/好货图2.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/好货图3.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/好货图4.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/好货图5.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/好货图6.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街1.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街2.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街3.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街4.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街5.jpg_.webp');
insert into goodGoods values(null,'./图片/好货图片/爱逛街6.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图1.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图2.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图3.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图4.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图5.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图6.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图7.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图8.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图9.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图10.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图11.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/好店图12.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图1.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图2.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图3.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图4.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图5.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图6.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图7.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图8.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图9.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图10.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图11.jpg_.webp');
insert into goodGoods values(null,'./图片/好店图片/直播图12.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚1.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚2.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚3.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚4.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚5.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚6.jpg_.webp');
insert into goodGoods values(null,'./图片/时尚/时尚7.jpg');
insert into goodGoods values(null,'./图片/品质特色/品质生活家1.png');
insert into goodGoods values(null,'./图片/品质特色/品质生活家.png_100x100q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家2.png_100x100q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家3.png_100x100q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家4.png_120x120q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家5.png_120x120q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家6.png_120x120q90.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家7.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家8.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/品质生活家9.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图1.jpg');
insert into goodGoods values(null,'./图片/品质特色/特色图2.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图3.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图4.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图5.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图6.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图7.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图8.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图9.jpg_.webp');
insert into goodGoods values(null,'./图片/品质特色/特色图10.jpg_.webp');
insert into goodGoods values(null,'./图片/实惠专业/实惠图1.jpg_.webp');
insert into goodGoods values(null,'./图片/实惠专业/实惠图2.jpg_.webp');
insert into goodGoods values(null,'./图片/实惠专业/实惠图3.jpg_.webp');
insert into goodGoods values(null,'./图片/实惠专业/实惠图4.jpg_.webp');
insert into goodGoods values(null,'./图片/实惠专业/实惠图5.jpg_.webp');

