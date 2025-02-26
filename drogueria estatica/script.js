<script>
  document.addEventListener("DOMContentLoaded", function () {
    const cruces = document.querySelectorAll(".cruz");

    cruces.forEach((cruz) = {
      const randomTop = Math.random() * 120 - 10; // Rango: -10% a 110%
      const randomLeft = Math.random() * 120 - 10; // Rango: -10% a 110%
      cruz.style.top = `${randomTop}%`;
      cruz.style.left = `${randomLeft}%`;
    });
  });
</script>
