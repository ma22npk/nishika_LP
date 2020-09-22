// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  // JQuery フェードイン ===========================
  $(window).on("scroll", function () {
    //データフェードインをHTMLに付与する
    $('[data-fadeIn]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('is-over');
      }
    });
    //データフェードインをHTMLに付与する
    $('[data-zoom-up]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('data-zoom-up');
      }
    });
    //データフェードイン右をHTMLに付与する
    $('[data-fadeId-right]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('is-over');
      }
    });
    //データフェードイン右をHTMLに付与する
    $('[data-fadeId-left]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('is-over');
      }
    });
    //データフェードイン右をHTMLに付与する
    $('[data-fadeId-up]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('is-over');
      }
    });
    //データフェードイン右をHTMLに付与する
    $('[data-fadeId-bottom]').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2)) {
        $(el).addClass('is-over');
      }
    });
    // コロリン ===========================
    if ($(window).scrollTop() > 300) {
      $('.circle-banner').addClass('is-over');
    } else {
      $('.circle-banner').removeClass('is-over');
    }
    if ($(window).scrollTop() > $('.footer').offset().top - 1000) {
      $('.circle-banner').removeClass('is-over');
    }

  });

  // モーダルの設定 ===========================
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const modalImg = document.getElementById('modalImg');
  const modalTtlId = document.getElementById('modal-ttl');
  const modalTxtId = document.getElementById('modal-txt');



  mask.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    //maskをクリックした時と同じ処理を呼び出す
    //mask.click();
  });

  const floorImgBig = document.getElementById('floor-item-big')
  const floorImgMain = document.getElementById('floor-item-main')
  const floorImgPair = document.getElementById('floor-item-pair')
  const floorImgCounter = document.getElementById('floor-item-counter')

  const modalOpen = function () {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  };

  floorImgBig.addEventListener('click', () => {
    modalOpen();
    modalImg.src = "/images/floor_images/floor_big_floor.png";
    modalTtlId.innerText = "お座敷";
    modalTxtId.innerText = "4名様～6名様迄ＯＫの掘り炬燵座敷。テーブルをつなげて最大で大人12名様でご利用可能です。団体のお客様や小さなお子様連れのお客様におすすめです。";
  });
  floorImgMain.addEventListener('click', () => {
    modalOpen();
    modalImg.src = "/images/floor_images/floor_main.png";
    modalTtlId.innerText = "テーブル席";
    modalTxtId.innerText = "2名～4名様迄ＯＫのテーブル半個室。大切な仲間と最高の時間を。";

  });
  floorImgPair.addEventListener('click', () => {
    modalOpen();
    modalImg.src = "/images/floor_images/floor_pair.png";
    modalTtlId.innerText = "ペアシート";
    modalTxtId.innerText = "ゆったりスペースのペアシート。女性2名のお客様にもおすすめです。";

  });
  floorImgCounter.addEventListener('click', () => {
    modalOpen();
    modalImg.src = "/images/floor_images/floor_counter.png";
    modalTtlId.innerText = "カウンター席";
    modalTxtId.innerText = "臨場感溢れる鉄板付きカウンター席！プロが作る鉄板焼きを目の前で。";
  });



}