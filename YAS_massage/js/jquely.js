$(function(){
 $('.global-nav').each(function () {
 var $window = $(window),
 $header = $(this),
         // ヘッダーのデフォルト位置を取得
         headerOffsetTop = $header.offset().top;
 
         // ウィンドウのスクロールイベントを監視
         $window.on('scroll', function () {
         // ウィンドウのスクロール量をチェックし、クラスを付加と削除を行う
         if ($window.scrollTop() > headerOffsetTop) {
          $header.addClass('nav-fixed');
          } else {
          $header.removeClass('nav-fixed');
         }
     });
     // ウィンドウのスクロールイベントを発生させる
     // (ヘッダーの初期位置を調整するため)
     $window.trigger('scroll');
 });
});

