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
  