$(document).ready(function(){
    $('.team-page__wrapper').slick({
        centerMode: true,
        swipe: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 940,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
        ]
    });
    const prev = document.querySelector('.slick-prev'),
          next = document.querySelector('.slick-next'),
          elementsDiv = document.createElement('div'),
          personal = document.createElement('div');
          personal.classList.add('personal');
          document.querySelector('.team-page__wrapper').after(personal);
          elementsDiv.classList.add('personal__content');
    const persons = [ 
      {
        dataInfoShow: -1,
        name: 'DEAN PONTO',
        specialization: 'Partner | Co-Creative Director & Strategy Lead',
        description: `Dean, a graduate of Arts Centre in Pasadena USA, has led hundreds of campaigns for regional, national
        and (likely) galactic clients. He has held several senior creative positions including Creative Director of
        TBWA/Vancouver. With dozens of industry awards, he’s a well-travelled creative leader, Sci-Fi nerd and master
        of strategic brand positioning.`,
      },
      {
        dataInfoShow: 0,
        name: 'MATEA CUMPF',
        specialization: 'Designer',
        description: `Matea is a graduate of the Wilson School of Design’s Graphic Design for Marketing program, as well as from
        Langara College’s Design Formation multidisciplinary program. Together with her background in sales and
        customer service, and her skills in image creation and creative solutions, she loves to step outside of her comfort
        zone. With her foot fidgeting under the table, she is happy and ready to jump into any problem or project.`,
      },
      {
        dataInfoShow: 1,
        name: 'ALBERT NORMANDIN',
        specialization: 'Photographer',
        description: `A long time ago, Albert bought a one-way ticket to New York City with a dream of working for the legendary
        American photographer, Jay Maisel. His leap of faith actually paid off. After three and a half years with Maisel,
        he escaped back to Canada to begin his photographic career. In Vancouver, Albert has established an
        extensive list of clients and prestigious assignments. Meanwhile, he continues to experiment with light,
        colour, and is ever easily distracted by shiny things.`,
      },
      {
        dataInfoShow: 2,
        name: 'LYNDSEY JACKSON',
        specialization: 'BUSINESS DEVELOPMENT MANAGER',
        description: `As a BCIT BBA Graduate, Lyndsey brings multi-industry sales and customer service experience to the team.
        As an account and project manager by day, and fashion designer by night, Lyndsey has a diverse background
        and portfolio. As dynamic and creative as she is solutions-oriented, Lyndsey will explore all avenues to solve
        a problem. Then she’ll go home and make you a killer pair of trousers.`,
      },
      {
        dataInfoShow: 3,
        name: 'VIDA JURCIC',
        specialization: 'Partner | Co-Creative & Design Director CGD, RGD',
        description: `Vida, a graduate of both Emily Carr and Capilano University, is a hands-on designer and founding partner of Hangar 18. She has sat on numerous design competition juries and panels. In her spare time she plays mandolin and
        performs in a Morris dance troupe, an artform which involves sticks, ribbons, bells and hankies. When not
        lecturing Dean, she lectures and mentors design students at the Idea School of Design at Capilano University.`,
      },
    ]
    function returnElem() {
      const activeClass = document.querySelector('.slick-center');
      const activeDataSlickIndex = activeClass.getAttribute('data-slick-index');
      return( persons.find((prevent) => {
        if(prevent.dataInfoShow == activeDataSlickIndex) {
                elementsDiv.setAttribute('data-info-show', `${prevent.dataInfoShow}`);
                elementsDiv.classList.add('active');
                elementsDiv.innerHTML = `
                <div class="personal__content__descr">
                  <h2>${prevent.name}</h2>
                  <h4>${prevent.specialization}</h4>
                </div>
                <p class="personal__content__auto-descr">${prevent.description}</p>
            `;
          personal.append(elementsDiv);
        }
      }));
    }
    next.addEventListener('click', returnElem)
    prev.addEventListener('click', returnElem)
    returnElem();
});
