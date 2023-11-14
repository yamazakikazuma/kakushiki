const anchorElements = document.querySelectorAll('a');
const headLabel = document.querySelector('.section-about__head-label');
const headerElement = document.querySelector('header');
const sidebarElement = document.querySelector('.side_bar');
const sectionTopWrap = document.querySelector('.section-top__wrap');
const sectionServiceWork = document.querySelector('.section-service__work');
const workBoxElements = document.querySelectorAll('.work-box');
const hamburgerLine1 = document.querySelector('.hamburger__line--1');
const hamburgerLine2 = document.querySelector('.hamburger__line--2');
const hamburgerLine3 = document.querySelector('.hamburger__line--3');
const spNav = document.querySelector('.sp-nav');

document.addEventListener('DOMContentLoaded', function () {
  const descriptionElements = document.querySelectorAll('.description');
  const topImg = document.querySelector('.section-top__img');
  descriptionElements.forEach(description => {
    description.classList.add('blur');
  });
  topImg.classList.add('blur');
});

    window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');

        spNav.addEventListener('click', function () {
          nav.classList.remove('open');
      });
  
      // // blackBgをクリックしたら閉じる処理を追加
      // blackBg.addEventListener('click', function () {
      //     nav.classList.remove('open');
      // });
    });
    // blackBg.addEventListener('click', function () {
    //     nav.classList.remove('open');
    // });
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

  const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };

  //初期style
  const initialStyles = {
    bodyColor: document.body.style.color,
    bodyBackgroundColor: document.body.style.backgroundColor,
    bodyTransition: document.body.style.transition,
    anchorColor: null,
    headerBackgroundColor: null,
    sidebarBackgroundColor: null,
    backgroundImage: document.querySelector('.section-top__wrap').style.backgroundImage,
  };

  function callback(entries, observer) {
    entries.forEach(entry => {
      const isSpScreen = window.innerWidth <= 950;
      if (entry.isIntersecting) {

        // スタイルを変更
        document.body.style.color = '#FFF';
        document.body.style.backgroundColor = '#000';
        document.body.style.transition = '0.5s';

        anchorElements.forEach(anchor => {
          anchor.style.color = '#FFF';
        });
        headLabel.style.opacity = '0.5';
        headLabel.style.transition = '0.1s';

        headerElement.style.backgroundColor = '#000';
        headerElement.style.transition = '0.5s';

        if(sidebarElement){
          sidebarElement.style.backgroundColor = '#000';
          sidebarElement.style.transition = '0.5s';
        }
        sectionTopWrap.style.backgroundImage = 'none';
        sectionTopWrap.style.transition = '0.5s';

          hamburgerLine1.style.backgroundColor = '#FFF';
          hamburgerLine1.style.transition = '0.5s';
          hamburgerLine2.style.backgroundColor = '#FFF';
          hamburgerLine2.style.transition = '0.5s';
          hamburgerLine3.style.backgroundColor = '#FFF';
          hamburgerLine3.style.transition = '0.5s';
          spNav.style.backgroundColor = '#000'
          spNav.style.transition = '0.5s';


      } else {
        document.body.style.color = initialStyles.bodyColor;
        document.body.style.backgroundColor = initialStyles.bodyBackgroundColor;
        document.body.style.transition = '0.5s';

        anchorElements.forEach(anchor => {
          anchor.style.color = initialStyles.anchorColor;
          anchor.style.transition = '0.5s';
        });
        headLabel.style.opacity = '0.1';
        headLabel.style.transition = '0.1s';

        headerElement.style.backgroundColor = initialStyles.headerBackgroundColor;
        headerElement.style.transition = '0.5s';

        sectionTopWrap.style.backgroundImage = initialStyles.backgroundImage;
        sectionTopWrap.style.transition = '0.5s';

        if(sidebarElement){
          sidebarElement.style.backgroundColor = initialStyles.sidebarBackgroundColor;
          sidebarElement.style.transition = '0.5s';
        }

          hamburgerLine1.style.backgroundColor = '#000';
          hamburgerLine1.style.transition = '0.5s';
          hamburgerLine2.style.backgroundColor = '#000';
          hamburgerLine2.style.transition = '0.5s';
          hamburgerLine3.style.backgroundColor = '#000';
          hamburgerLine3.style.transition = '0.5s';
          spNav.style.backgroundColor = '#FFF'
          spNav.style.transition = '0.5s';

      }
    });
  }
  const observer = new IntersectionObserver(callback, options);
  const targetElement = document.querySelector('.section-about');
  observer.observe(targetElement);



function slideCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add('slideAnimeLeftRight');
      const innerElement = element.querySelector('.leftAnimeInner');
      innerElement.classList.add('slideAnimeRightLeft');
    }
  });
}
const slideObserver = new IntersectionObserver(slideCallback, options2);
const leftAnimeElements = document.querySelectorAll('.leftAnime');
leftAnimeElements.forEach(element => {
  slideObserver.observe(element);
});


  const fadeUpCall = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(sectionServiceWork);
        workBoxElements.forEach((box, index) => {
          box.classList.add('fadeUp');
          if (index === 1) {
            box.classList.add('delay-time02');
            box.classList.add('fadeUp');
          } else if(index === 2){
            box.classList.add('delay-time04');
            box.classList.add('fadeUp');
          }
        });
      }
    });
  };
const fadeUpServe = new IntersectionObserver(fadeUpCall, options2);
fadeUpServe.observe(sectionServiceWork);


const  sectionService= document.querySelector('.section-service__wrap');
const options3 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.0,
};

function lineCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target1 = document.querySelector('.target1');
      const target2 = document.querySelector('.target2');
      const descriptionService = document.querySelector('.section-service__description');
      target1.classList.add('line');
      target2.classList.add('line2');
      descriptionService.classList.add('lineinappear');
      observer.unobserve(sectionService);
    }
  });
}

const lineCall = new IntersectionObserver(lineCallback, options3);
lineCall.observe(sectionService);
