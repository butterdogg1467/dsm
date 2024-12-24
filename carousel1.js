document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    let images = Array.from(track.children);
    const imgWidth = images[0].getBoundingClientRect().width;
  
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      track.prepend(clone);
    });
  
    images = Array.from(track.children);
    const totalImages = images.length / 3; 
    let currentIndex = totalImages; 
  
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  
    const moveCarousel = (direction) => {
      if (direction === 'right') {
        currentIndex++;
      } else if (direction === 'left') {
        currentIndex--;
      }
  
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  
      track.addEventListener(
        'transitionend',
        () => {
          track.style.transition = 'none';
  
          if (currentIndex >= images.length - totalImages) {
            currentIndex = totalImages;
          } else if (currentIndex < totalImages) {
            currentIndex = images.length - totalImages - 1;
          }
  
          track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
        },
        { once: true }
      );
    };
  
    let startX = 0;
    let deltaX = 0;
  
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      track.style.transition = 'none';
    };
  
    const handleTouchMove = (e) => {
      deltaX = e.touches[0].clientX - startX;
      track.style.transform = `translateX(${-currentIndex * imgWidth + deltaX}px)`;
    };
  
    const handleTouchEnd = () => {
      if (deltaX > 50) {
        moveCarousel('left');
      } else if (deltaX < -50) {
        moveCarousel('right');
      } else {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
      }
  
      startX = 0;
      deltaX = 0;
    };
  
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);
  
    rightBtn.addEventListener('click', () => moveCarousel('right'));
    leftBtn.addEventListener('click', () => moveCarousel('left'));
  });
  