document.addEventListener('DOMContentLoaded', function () {
    const galleryImage = document.getElementById('gallery-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const images = [
        'images/p1.png',
        'images/p2.png',
        'images/p4.png'
    ];

    let currentIndex = 0;

    function showImage(index) {
        galleryImage.src = images[index];
        galleryImage.alt = `Image ${index + 1} of ${images.length}`;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    showImage(currentIndex);
});
