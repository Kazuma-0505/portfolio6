// スライダー１
  const slider1 = new Swiper('.slide1', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
          delay:4000,
          disableOnInteraction: false
      }, 
  })

//Advantage&Safty

  const mainSlider = new Swiper('.slider3', {
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: '.advantage .swiper-button-next',
        prevEl: '.advantage .swiper-button-prev',
    },
  });

  //サムネイル
  const Thumbnail = new Swiper('.thumbs', {
    slidesPerView: 5.0,
    loop:true,
    centeredSlides:true,
    slideToClickedSlide: true,
    spaceBetween:1,
  });

  // スライドが変わった時にイベントが発生する slideChange というAPIを使う
  // スライダーをスライドした時にサムネイルを移動させる
  mainSlider.on('slideChange', () => {
    // realIndex は現在activeになっているスライドの番号が入っている
    Thumbnail.slideToLoop(mainSlider.realIndex);
  });
  // サムネイルをスライドした時にメインスライドを連動させる(上記と逆)
  Thumbnail.on('slideChange', () => {
    mainSlider.slideToLoop(Thumbnail.realIndex);
  });
// safty

  const mainSliders = new Swiper('.slider4', {
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: '.safty .swiper-button-next',
        prevEl: '.safty .swiper-button-prev',
    },
  });

  const Thumbnails = new Swiper('.thumb', {
    slidesPerView: 5.0,
    loop:true,
    centeredSlides:true,
    slideToClickedSlide: true,
    spaceBetween:1,
  });

  mainSliders.on('slideChange', () => {
    Thumbnails.slideToLoop(mainSliders.realIndex);
  });

  Thumbnails.on('slideChange', () => {
    mainSliders.slideToLoop(Thumbnails.realIndex);
  });


//Buy

const mainSlider6 = new Swiper('#slider', {
  loop:true,
  centeredSlides: true,
  navigation: {
      nextEl: '#slider .swiper-button-next',
      prevEl: '#slider .swiper-button-prev',
  },
});

const Thumbnail6 = new Swiper('#thumbs', {
  slidesPerView: 5.0,
  loop:true,
  centeredSlides:true,
  slideToClickedSlide: true,
  spaceBetween:1,
});

mainSlider6.on('slideChange', () => {
  Thumbnail6.slideToLoop(mainSlider6.realIndex);
});
Thumbnail6.on('slideChange', () => {
  mainSlider6.slideToLoop(Thumbnail6.realIndex);
});
