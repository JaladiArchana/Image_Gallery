const filterButtons = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.btn.active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;
const galleryImgs = Array.from(document.querySelectorAll('.gallery-item img'));

galleryImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function showImage(index) {
  if (index >= galleryImgs.length) currentIndex = 0;
  if (index < 0) currentIndex = galleryImgs.length - 1;
  lightboxImg.src = galleryImgs[currentIndex].src;
}

nextBtn.addEventListener('click', () => showImage(++currentIndex));
prevBtn.addEventListener('click', () => showImage(--currentIndex));
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
