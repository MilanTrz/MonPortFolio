document.addEventListener("DOMContentLoaded", () => {
  fetch('src/components/Navbar/Navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    });
});
  fetch('src/components/Footer/Footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });