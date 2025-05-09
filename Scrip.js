window.onload = function() {
  setTimeout(() => {
    alert("🎉 Promo Spesial! Daftar sekarang & dapatkan diskon 30% untuk kelas pertama!");

    // Setelah alert, kosongkan input form
    const inputs = document.querySelectorAll("form input");
    inputs.forEach(input => input.value = "");
  }, 1000);
};
