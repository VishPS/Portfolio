const animatedBackground = document.getElementById('animated-background');

function createMeteor() {
  const meteor = document.createElement('div');
  meteor.className = 'meteor';
  meteor.style.top = `${Math.random() * 100}%`;
  meteor.style.left = `${Math.random() * 100}%`;
  animatedBackground.appendChild(meteor);
  setTimeout(() => {
    meteor.remove();
  }, 2000 + Math.random() * 3000); // remove meteor after 2-5 seconds
}

setInterval(createMeteor, 100); // create a new meteor every 100ms
