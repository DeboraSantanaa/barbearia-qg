window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) { 
      navbar.classList.add('bg-colored');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-colored');
    }
  });