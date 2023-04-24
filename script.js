function createStars() {
    const stars = 500;
    const section = document.querySelector('section');
    for(let i = 0; i < stars; i++) {
      let star = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 2;
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.width = 1 + size + 'px';
      star.style.height = 1 + size + 'px';
      section.appendChild(star);
    }
  }
  
  createStars();

  const body = document.querySelector('body');

let isScrolling;

// Add the 'hide-thumb' class when scrolling starts
body.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  body.classList.add('hide-thumb');

  isScrolling = setTimeout(() => {
    // Remove the 'hide-thumb' class when scrolling stops
    body.classList.remove('hide-thumb');
  }, 100);
});



  