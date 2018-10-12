/* nav bar hide & show */
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hadScrolled();
    didScroll = false;
  }
}, 250);

function hadScrolled() {
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $('header')
      .removeClass('head')
      .addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header')
        .removeClass('nav-up')
        .addClass('head');
    }
  }
  lastScrollTop = st;
}
