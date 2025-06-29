// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    // First hide the modal to reset its state
    modal.style.display = 'none';
    
    // Force a reflow
    modal.offsetHeight;
    
    // Now show it and reset scroll
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Multiple attempts to reset scroll position
    requestAnimationFrame(() => {
      // Reset all possible scroll containers
      modal.scrollTop = 0;
      
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTop = 0;
        modalContent.scrollLeft = 0;
      }
      
      const scrollGallery = modal.querySelector('.scroll-gallery');
      if (scrollGallery) {
        scrollGallery.scrollTop = 0;
        scrollGallery.scrollLeft = 0;
      }
      
      // Force the first image to be at the top
      const firstImage = modal.querySelector('img:first-child');
      if (firstImage) {
        firstImage.scrollIntoView({ 
          block: 'start', 
          inline: 'start',
          behavior: 'instant' 
        });
      }
      
      // Additional reset after another frame
      requestAnimationFrame(() => {
        if (modalContent) modalContent.scrollTop = 0;
        if (scrollGallery) scrollGallery.scrollTop = 0;
      });
    });
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
