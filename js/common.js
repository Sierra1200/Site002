$(function () {
    // コピーライト
    $('.copyright p').text(getCopyrightStr());

    // タグリスト
    $('header .tag-area').hide();
    $('.tag').on('click', function(){
        $('header .tag-area').slideToggle(300);
        $('header').toggleClass('tag-active');
    });

    // ハンバーガーメニュー
    let header = $('header');
    let menu_toggle = $('.menu-toggle');
    let sp_menu = $('.menu.sp');
    let cover = $('.cover');
    $('.menu-toggle').on('click', function() {
        header.toggleClass('show');
        menu_toggle.toggleClass('show');
        sp_menu.toggleClass('show');
        cover.toggleClass('show');
        if (cover.hasClass('show'))
        {
            cover.on('click', function() {
                header.removeClass('show');
                menu_toggle.removeClass('show');
                sp_menu.removeClass('show');
                cover.removeClass('show');
            });
        }
    });
});

function getNowYear() {
    return new Date().getFullYear();
}

function getCopyrightStr() {
    return '©' + getNowYear() + ' カエデの箱庭 - Kaede\'s Garden';
}