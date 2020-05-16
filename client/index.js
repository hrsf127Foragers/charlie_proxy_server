$(function() {
  $(window).scroll(() => {
    checkOffset();
  });

  function checkOffset() {
    // console.log('sidebar offset => ', $('.top_static_right').offset().top)
    // console.log('sidebar height => ', $('.top_static_right').height())
    // console.log('consider offset => ', $('.might_consider_container').offset().top)

    let scrollTop = $(window).scrollTop();
    // console.log('scrolled height => ', scrollTop)

    let currentHeight = scrollTop + $('.top_static_right').offset().top - 90

    // console.log('current height => ', currentHeight)

    if(currentHeight > 6240) {
      // $('#top_static_right').css("position": "absolute");
      // console.log('\n $$$$$$ STOP $$$$$$$\n')
    }
  }
})