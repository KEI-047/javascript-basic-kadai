//ロード
$(window).on('load', function() {
    console.log('loadイベントが発生しました');
    });

//スクロール
$(function(){
    $(window).on('scroll', function() {
        console.log('scrollイベントが発生しました');
    });
});

