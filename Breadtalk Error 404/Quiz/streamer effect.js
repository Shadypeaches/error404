document.getElementById('triggerEffect').addEventListener('click', function() {
    const container = document.getElementById('streamer-container');
  
    for (let i = 0; i < 20; i++) { // Number of streamers
      const streamer = document.createElement('div');
      streamer.className = 'streamer';
      streamer.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      streamer.style.animationDuration = `${2 + Math.random() * 2}s`; // Random duration
  
      // Append to the container
      container.appendChild(streamer);
  
      // Remove streamer after animation
      setTimeout(() => {
        streamer.remove();
      }, 4000); // Duration should match the longest animation time
    }
  });
  