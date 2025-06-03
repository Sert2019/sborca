<script>
  document.getElementById('goToBuild').onclick = function() {
    // Получаем название товара
    const productName = "Процессор Intel Core i3-12100 OEM";
    // Кодируем и передаем в URL
    window.location.href = "build.html?name=" + encodeURIComponent(productName);
  }
</script>
