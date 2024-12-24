document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let images = Array.from(track.children);
    const imgWidth = images[0].getBoundingClientRect().width + 3 * 2; 

    const duplicateImages = () => {
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            track.appendChild(clone);
        });
    };

    duplicateImages();
    images = Array.from(track.children); 
    const totalImages = images.length;
    let currentIndex = 3;

    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * imgWidth}px)`; 

    const moveCarousel = (direction) => {
        if (direction === 'right') {
            currentIndex++;
        } else if (direction === 'left') {
            currentIndex--;
        }

        track.style.transition = 'transform 0.3s ease-in-out';
        track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;

        track.addEventListener('transitionend', () => {
            track.style.transition = 'none';

            if (currentIndex >= images.length - 3) {
                currentIndex = 3; 
            }

            if (currentIndex < 3) {
                currentIndex = images.length - 4;
            }

            track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
        }, { once: true });
    };

    nextButton.addEventListener('click', () => moveCarousel('right'));
    prevButton.addEventListener('click', () => moveCarousel('left'));
});
