// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // NUCLEAR OPTION: Completely rebuild the scroll gallery to force reset
    const scrollGallery = modal.querySelector('.scroll-gallery');
    if (scrollGallery) {
      // Store the current HTML content
      const originalHTML = scrollGallery.innerHTML;
      
      // Clear and rebuild the gallery
      scrollGallery.innerHTML = '';
      
      // Force a reflow
      scrollGallery.offsetHeight;
      
      // Restore the content
      scrollGallery.innerHTML = originalHTML;
      
      // Ensure we're at the top
      scrollGallery.scrollTop = 0;
      
      // Double-check after images load
      setTimeout(() => {
        scrollGallery.scrollTop = 0;
      }, 100);
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
