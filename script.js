// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Get the scroll gallery
    const scrollGallery = modal.querySelector('.scroll-gallery');
    if (scrollGallery) {
      // Force immediate scroll reset
      scrollGallery.scrollTop = 0;
      
      // Additional force: temporarily change and restore the scroll behavior
      const originalOverflow = scrollGallery.style.overflowY;
      scrollGallery.style.overflowY = 'hidden';
      
      // Force reflow
      scrollGallery.offsetHeight;
      
      // Restore overflow and reset scroll
      scrollGallery.style.overflowY = originalOverflow || 'auto';
      scrollGallery.scrollTop = 0;
      
      // Final backup with animation frame
      requestAnimationFrame(() => {
        scrollGallery.scrollTop = 0;
        
        // Also try scrolling the first image into view
        const firstImage = scrollGallery.querySelector('img:first-child');
        if (firstImage) {
          firstImage.scrollIntoView({ 
            block: 'start',
            behavior: 'instant' 
          });
        }
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
