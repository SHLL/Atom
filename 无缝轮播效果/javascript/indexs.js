// 6. 向左箭头
 $('.prev').click(function() {
   --i;
   if (i == -1) {
     i = $('.hot li').length - 2;
     $('.hot').css({left: -($('.hot li').length - 1) * width});
   }
   $('.hot').stop().animate({left: -i * width}, speed);
   dotChange();
 });
 // 自动切换图片
 function imgChange() {
   ++i;
   isCrack();
   dotChange();
 }
 // 无缝轮播
 function isCrack() {
   if (i == $('.hot li').length) {
     i = 1;
     $('.hot').css({left: 0});
   }
   $('.hot').stop().animate({left: -i * width}, speed);
 }
 // 自动切换对应的圆点
 function dotChange() {
   if (i == $('.hot li').length - 1) {
     $('.dot li').eq(0).addClass('on').siblings().removeClass('on');
   } else {
     $('.dot li').eq(i).addClass('on').siblings().removeClass('on');
   }
 }
});
