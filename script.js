// Vertical scroll modal for Aventura
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position to show first image
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
      modalContent.scrollTop = 0;
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
