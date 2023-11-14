const sectionService = document.querySelector('.section-service__wrap');
const sectionServiceImg = document.querySelectorAll('.section-service__img');
const sectionServiceDescription = document.querySelectorAll('.section-service__description');

console.log(sectionServiceDescription)

const options2 = {
  root: null, // ルート要素をビューポートに設定
  rootMargin: '0px',
  threshold: 0.6, // ターゲットが50％以上ビューポートに表示されたらコールバックを実行
};

// Intersection Observerコールバック
const callback2 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // ターゲットがビューポートに入ったらクラスを追加
      sectionServiceImg.forEach(img => {
        img.classList.add('animate__animated', 'animate__fadeInDown');
      });
      sectionServiceDescription.forEach(description => {
        description.classList.add('animate__animated', 'animate__fadeInLeft');
      });
      // 一度だけ実行する場合は、以下のコードを追加
      observer.unobserve(sectionService);
    }
  });
};

const observer2 = new IntersectionObserver(callback2, options2);
observer.observe(sectionService);
