function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  const scrollGallery = modal.querySelector('.scroll-gallery');
  if (scrollGallery) {
    scrollGallery.scrollTop = 0;

    // Safety fallback after render
    setTimeout(() => {
      scrollGallery.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Optional: close modal when clicking outside the content
window.addEventListener('click', (e) => {
  const modal = document.getElementById('aventuraModal');
  if (modal && e.target === modal) {
    closeModal('aventuraModal');
  }
});
