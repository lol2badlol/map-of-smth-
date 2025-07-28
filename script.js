const map = L.map('map').setView([44.3439, 11.7167], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(crash => {
      L.marker([crash.lat, crash.lng])
        .addTo(map)
        .bindPopup(`<strong>${crash.title}</strong><br>${crash.description}`);
    });
  });
