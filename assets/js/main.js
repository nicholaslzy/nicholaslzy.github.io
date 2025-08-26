document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__item-inner');
    const hoverImage = document.getElementById('hover-image');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const imageSrc = item.parentElement.getAttribute('data-image');
            hoverImage.src = '../assets/images/' + imageSrc;
            hoverImage.style.display = 'block';
        });

        item.addEventListener('mouseout', () => {
            hoverImage.style.display = 'none';
        });
    });
});
