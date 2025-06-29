function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  const scrollGallery = modal.querySelector('.scroll-gallery');
  if (scrollGallery) {
    scrollGallery.scrollTop = 0;

    const images = scrollGallery.querySelectorAll('img');
    let loaded = 0;

    images.forEach(img => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === images.length) {
            scrollGallery.scrollTo({ top: 0, behavior: 'auto' });
          }
        });
      }
    });

    // Fallback in case all images were already loaded
    if (loaded === images.length) {
      scrollGallery.scrollTo({ top: 0, behavior: 'auto' });
    }

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
  const modal =
