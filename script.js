// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position to show first image - try multiple elements
    setTimeout(() => {
      // Try the modal itself
      modal.scrollTop = 0;
      
      // Try the modal-content
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
      
      // Try the scroll-gallery
      const scrollGallery = modal.querySelector('.scroll-gallery');
      if (scrollGallery) {
        scrollGallery.scrollTop = 0;
      }
      
      // Force scroll to first image
      const firstImage = modal.querySelector('img');
      if (firstImage) {
        firstImage.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }, 10);
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
