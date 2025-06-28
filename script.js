// Modal logic for Aventura
let currentSlideIndex = 0;

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'block';
  currentSlideIndex = 0;

  const slides = modal.querySelectorAll('.modal-slide');
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

function changeSlide(direction) {
  const modal = document.getElementById('aventuraModal');
  const slides = modal.querySelectorAll('.modal-slide');

  // Hide current
  slides[currentSlideIndex].style.display = 'none';

  // Update index
  currentSlideIndex += direction;

  // Wrap around
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  // Show new slide
  slides[currentSlideIndex].style.display = 'block';
}

// Optional: Close modal on background click
window.addEventListener('click', function (e) {
  const modal = document.getElementById('aventuraModal');
  if (e.target === modal) {
    closeModal('aventuraModal');
  }
});
