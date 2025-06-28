let currentSlideIndex = 0;

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
  showSlide(currentSlideIndex);
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.style.overflow = 'auto'; // Restore scroll
  currentSlideIndex = 0; // Reset slide index for next open
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.modal-slide');
  currentSlideIndex += direction;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  } else if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  showSlide(currentSlideIndex);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.modal-slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
