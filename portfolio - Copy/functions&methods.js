// =============================
// NAVBAR LINK HANDLING
// =============================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default # jump
    const targetId = link.dataset.target;

    // Close all overlays before opening new one
    document.querySelectorAll('.activity-overlay').forEach(o => o.classList.remove('active'));

    // If Home, scroll smoothly to hero section
    if (targetId === "home") {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    } else {
      // Otherwise open overlay by ID
      const overlay = document.getElementById(targetId);
      if (overlay) {
        overlay.classList.add("active");
      }
    }
  });
});

// =============================
// CLOSE BUTTON HANDLING
// =============================
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.activity-overlay').classList.remove('active');
  });
});

// Optional: close overlay if background is clicked
document.querySelectorAll('.activity-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});

// =============================
// WEEKLY LEARNINGS THUMBNAILS
// =============================
const thumbnails = document.querySelectorAll('.thumbnail');
const weekDetails = document.querySelectorAll('.week-detail');
const thumbnailsContainer = document.querySelector('.learning-thumbnails');

// When thumbnail clicked → hide thumbnails, show week detail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const weekNum = thumbnail.getAttribute('data-week');

    thumbnailsContainer.style.display = 'none'; // hide thumbnails

    weekDetails.forEach(detail => {
      detail.classList.remove('active');
      if (detail.id === `week-${weekNum}-detail`) {
        detail.classList.add('active');
      }
    });
  });
});

// Back button → show thumbnails again
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    weekDetails.forEach(detail => detail.classList.remove('active'));
    thumbnailsContainer.style.display = 'flex'; // show thumbnails again
  });
});
