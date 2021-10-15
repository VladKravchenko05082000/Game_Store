$(document).ready(function () {
	$('#tab__01').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    variableWidth: true,
    infinity:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        variableWidth: true,
        infinity:true,
        dots: false,
        speed: 800
      }
    }
  ]
  });
  $('#tab__02').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    variableWidth: true,
    infinity:true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
        variableWidth: true,
        infinity:true,
        dots: false,
        speed: 800
      }
    }
  ]
  });
  $('#tab__03').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    variableWidth: true,
    infinity:true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
        variableWidth: true,
        infinity:true,
        dots: false,
        speed: 800
      }
    }
  ]
  });
});