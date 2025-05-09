window.onload = function() {
  setTimeout(() => {
    alert("🎉 Promo Spesial! Daftar sekarang & dapatkan diskon 30% untuk kelas pertama!");

    // Setelah alert, kosongkan input form
    const inputs = document.querySelectorAll("form input");
    inputs.forEach(input => input.value = "");
  }, 1000);
};

// Fungsi untuk menampilkan notifikasi dan reset form
function kirimPesan() {
  alert("📩 Pesan Anda terkirim! Kami akan segera menghubungi Anda.");
  document.getElementById("kontakForm").reset(); // Reset form setelah alert
  return false; // Mencegah reload halaman
}
