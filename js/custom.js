$(function () {
  const showcaseProducts = new Siema({
    selector: '.showcase-products',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => { },
    onChange: () => { },
  });

  setInterval(() => showcaseProducts.next(), 2500)
});

