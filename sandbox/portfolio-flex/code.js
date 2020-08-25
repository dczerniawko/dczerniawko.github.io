$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();

  const $art1 = $('.art1');
  const art1FromTop = $art1.offset().top
  const art1Height = $art1.outerHeight()

  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top
  const art2Height = $art2.outerHeight()

  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  if (scrollValue > art1FromTop + art1Height - windowHeight) {
    $art1.addClass('active');
  }

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass('active');
  }
})