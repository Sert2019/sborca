<script>
  // Получаем параметры из URL
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  if (name) {
    document.getElementById('productName').textContent = name;
  }
</script>
