// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // The key fix: Reset scroll position of the scroll-gallery specifically
    const scrollGallery = modal.querySelector('.scroll-gallery');
    if (scrollGallery) {
      // Force immediate scroll reset
      scrollGallery.scrollTop = 0;
      
      // Double-check with requestAnimationFrame
      requestAnimationFrame(() => {
        scrollGallery.scrollTop = 0;
      });
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Optional: Close modal when clicking outside content
window.addEventListener('click', function (e) {
  const aventuraModal = document.getElementById('aventuraModal');
  if (aventuraModal && e.target === aventuraModal) {
    closeModal('aventuraModal');
  }
});
