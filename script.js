// Initial configuration
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 8,
  center: [2.3354096,48.8744289]
});

// Add a marker
var marker = new mapboxgl.Marker({
  color: 'red',
  draggable: true
})
  .setLngLat([13.411026,52.5219216])
  .addTo(map);

// If we can use navigator.geolocation in this browser
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    let lng = position.coords.longitude
    let lat = position.coords.latitude
    map.setCenter([lng,lat])
    let userMarker = new mapboxgl.Marker({
      color: 'green'
    })
      .setLngLat([lng,lat])
      .addTo(map)
  })
}

let coordinates = [
  {lng: -3.7004502,lat:40.3925362}, // Madrid
  {lng: 2.3354096,lat:48.8744289}, // Paris
  {lng: 2.1881167,lat:41.3977391}, // Barcelona
]
var ironhackMarkers = []

for (let i = 0; i < coordinates.length; i++) {
  let newMarker = new mapboxgl.Marker({
    color: '#32c3ff'
  })
    .setLngLat([coordinates[i].lng,coordinates[i].lat])
    .addTo(map)
  ironhackMarkers.push(newMarker)
}
