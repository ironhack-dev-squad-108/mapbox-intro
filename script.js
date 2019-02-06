// Initiale configuration
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

// Add a marker
var marker = new mapboxgl.Marker({
  color: 'red',
  draggable: true
})
  .setLngLat([13.411026,52.5219216])
  .addTo(map);