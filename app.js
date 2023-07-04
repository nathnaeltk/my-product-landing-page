particlesJS('particles-js', {
  particles: {
    number: {
      value: 80, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 800 // Increase or decrease the particle density
      }
    },
    color: {
      value: '#ffffff' // White particles
    },
    shape: {
      type: 'circle' // Change the particle shape if desired
    },
    opacity: {
      value: 0.5, // Adjust particle opacity
      random: true
    },
    size: {
      value: 5 // Adjust particle size
    },
    move: {
      enable: true,
      speed: 3 // Adjust particle movement speed
    }
  }
});
