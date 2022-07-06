const tileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const initialZoom = 15;

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

getLocation();

function success(pos) {
  const crd = pos.coords;

  marker.setLatLng([crd.latitude, crd.longitude]);
  map.setView([crd.latitude, crd.longitude], initialZoom);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getCaffees() {
  // market.setLatLng([])
}

const map = L.map("map").setView([0, 0], initialZoom);
const marker = L.marker([0, 0]).addTo(map);

L.tileLayer(tileUrl, {
  attribution,
  maxZoom: 20,
}).addTo(map);
