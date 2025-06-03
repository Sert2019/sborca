const btn = document.getElementById('springBtn');

btn.addEventListener('click', () => {
  // Удаляем класс, чтобы анимация могла повторяться
  btn.classList.remove('animated');
  // Запускаем анимацию с небольшой задержкой для сброса
  setTimeout(() => {
    btn.classList.add('animated');
  }, 10);
});

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const images = document.querySelectorAll('.cont img');

  images.forEach(img => {
    const title = img.getAttribute('title')?.toLowerCase() || '';
    const parentLink = img.closest('a');

    if (parentLink) {
      if (!query || title.includes(query)) {
        parentLink.style.display = '';
      } else {
        parentLink.style.display = 'none';
      }
    }
  });
});

