
  // Portfolio
  document.addEventListener('DOMContentLoaded', () => {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      const portfolioImages = document.querySelectorAll('.portfolio-item img');
      const imageViewer = document.getElementById('imageViewer');
      const fullImage = document.getElementById('fullImage');
      const closeBtn = document.querySelector('.close-btn');

      // Initial filter
      filterItems('pixel');

      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              const filter = button.getAttribute('data-filter');

              // Update active button
              filterButtons.forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');

              // Filter portfolio items
              filterItems(filter);
          });
      });

      function filterItems(filter) {
          portfolioItems.forEach(item => {
              if (item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      }

      portfolioImages.forEach(item => {
          item.addEventListener('click', () => {
              fullImage.src = item.src;
              imageViewer.style.display = 'block';
          });
      });

      closeBtn.addEventListener('click', () => {
          imageViewer.style.display = 'none';
      });

      imageViewer.addEventListener('click', (e) => {
          if (e.target === imageViewer) {
              imageViewer.style.display = 'none';
          }
      });
  });