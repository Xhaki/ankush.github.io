setInterval(() => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById('clock').textContent = formattedTime;
}, 1000);


