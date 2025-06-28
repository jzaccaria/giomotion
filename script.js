// Modal functionality
let slideIndex = 0;

function openModal(projectId) {
  const modal = document.getElementById(`${projectId}Modal`);
  modal.style.display = 'flex';
  slideIndex = 0;
  showSlides(slideIndex);
}

function closeModal(projectId) {
  const modal = document.getElementById(`${projectId}Modal`);
  modal.style.display = 'none';
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.modal-slide');
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? 'block' : 'none';
  });
}

// Close modal on outside click
window.addEventListener('click', function (event) {
  const modal = document.getElementById('aventuraModal');
  if (event.target === modal) {
    closeModal('aventura');
  }
});
