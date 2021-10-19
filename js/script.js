$(document).ready(function(){
    $('.face').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 940,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
        ]
    });
    const prev = document.querySelector('.slick-prev');
    const next = document.querySelector('.slick-next');
    const all = document.querySelectorAll('.content');
    prev.addEventListener('click', () => {
      setTimeout(() => {
        const getElem = document.querySelector('.slick-center').getAttribute('data-slick-index');
        const infoActive = document.querySelector('.content').getAttribute('data-info-show');
        if(getElem !== infoActive) {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
        else {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
      },1000)
    })

    next.addEventListener('click', () => {
      setTimeout(() => {
        const getElem = document.querySelector('.slick-center').getAttribute('data-slick-index');
        const infoActive = document.querySelector('.content').getAttribute('data-info-show');


        if(getElem !== infoActive) {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
        else {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
      },1000)
    })
});