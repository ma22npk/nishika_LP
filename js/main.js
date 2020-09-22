// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  /* JQuery ハンバーガーメニュー ==========================*/
  $(function () {
    $('.btn-trigger').on('click', function () {
      $(this).toggleClass('active');
      $('.header-list-items').toggleClass('active');
      return false;
    });
  });
  /* JQuery ハンバーガーメニュー ==========================*/
  // スムーススクロール
  jQuery('a[href^="#"]').click(function () {
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top - header;
    if ("fixed" !== jQuery(".header").css("position")) {
      position = jQuery(target).offset().top;
    }
    if (0 > position) {
      position = 0;
    }
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });

  // スクロール判定
  jQuery(window).on("scroll", function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery('.totop').addClass('is-show');
    } else {
      jQuery('.totop').removeClass('is-show');
    }
  });
  jQuery('.header-nav ul li a').click(function () {
    jQuery('.header-nav ul li a').removeClass('is-active');
    jQuery(this).addClass('is-active');
    return false;
  });

  // 背景画像パララックス ===========================
  $(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2;

    if (bgPosition) {
      $('#store').css('background-position', 'center top -' + bgPosition + 'px');
      //$('#contact').css('background-position', 'center top -' + bgPosition + 'px');
    }
  });



  // スリック実装 ===========================
  //htmlが完全に読み込まれてからでないと、jQueryやJavaScriptは正しく機能しない事がおおい
  $(function () {
    //top-sliderに対してslickしろと言う記述
    $('.portfolio-slider').slick({
      autoplay: true, //自動再生
      arrows: true,
      dots: true,
      rows: 1, //行数
      speed: 200,
      easing: 'swing',
      centerMode: true,
      centerPadding: '2%',
      arrows: true,
      fade: false, //スライド切替えをフェードにする
      slidesToShow: 3.4,
      prevArrow: '<div class="slide-btn prev-btn"></div>',
      nextArrow: '<div class="slide-btn next-btn"></div>',
      responsive: [{
        breakpoint: 900,
        settings: {
          centerPadding: '0%',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });
  });

}