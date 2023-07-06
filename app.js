particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 1000 // Increase or decrease the particle density
      }
    },
    color: {
      value: '#ffffff' // White particles
    },
    shape: {
      type: 'circle' // Change the particle shape if desired
    },
    opacity: {
      value: 0.2, // Adjust particle opacity
      random: true
    },
    size: {
      value: 4 // Adjust particle size
    },
    move: {
      enable: true,
      speed: 2.5 // Adjust particle movement speed
    }
  }
});

function toggleSidebar(element) {
  const sidebar = document.getElementById('sidebar');
  const hamburger = element;
  sidebar.classList.toggle('sidebar-active');
  hamburger.classList.toggle('active');
}

