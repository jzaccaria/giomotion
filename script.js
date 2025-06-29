// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const scrollGallery = modal.querySelector('.scroll-gallery');
    if (scrollGallery) {
      // Prevent scroll anchoring from interfering
      scrollGallery.style.overflowAnchor = 'none';

      // Rebuild scroll gallery to force reset
      const originalHTML = scrollGallery.innerHTML;
      scrollGallery.innerHTML = '';
      scrollGallery.offsetHeight; // Force reflow
      scrollGallery.innerHTML = originalHTML;

      // Scroll to top immediately and after short delay (fallback)
      scrollGallery.scrollTop = 0;
      setTimeout(() => {
        scrollGallery.scrollTop = 0;
      }, 100);

      // Debugging output (remove if not needed)
      const images = scrollGallery.querySelectorAll('img');
      images.forEach((img, index) => {
        console.log(`Image ${index + 1}: ${img.getAttribute('src')}`);
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

// Optional: Close modal when clicking outside modal content
window.addEventListener('click', function (e) {
  const aventuraModal = document.getElementById('aventuraModal');
  if (aventuraModal && e.target === aventuraModal) {
    closeModal('aventuraModal');
  }
});
