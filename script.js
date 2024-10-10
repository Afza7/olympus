document.addEventListener('DOMContentLoaded', () => {
 
    const carouselContainer = document.querySelector('.carousel-container');
    const items = carouselContainer.querySelectorAll('.carousel-item');

    let currentIndex = 0;
    const totalItems = items.length;

    function showItem(index) {
        carouselContainer.scrollTo({
            left: items[index].offsetLeft,
            behavior: 'smooth'
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }, 3000);

    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.character-info').style.display = 'block';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.character-info').style.display = 'none';
        });
    });
});
