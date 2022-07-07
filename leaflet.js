const tileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const initialZoom = 15;

const map = L.map("map").setView([0, 0], initialZoom);
let marker = L.marker([0, 0]).addTo(map);

const locations = [
  {
    id: 1,
    name: "Espresso House Knalleland",
    address: {
      street: "Lundbygatan 1",
      city: "Borås",
      postcode: "506 38",
    },
    coordinates: {
      latitude: 57.73296,
      longitude: 12.93726,
    },
  },
  {
    id: 2,
    name: "Espresso House Borås Station",
    address: {
      street: "Stationsgatan 16",
      city: "Borås",
      postcode: "503 38",
    },
    coordinates: {
      latitude: 57.72057,
      longitude: 12.93258,
    },
  },
  {
    id: 3,
    name: "Café Viskan",
    address: {
      street: "Södra Strandgatan 6",
      city: "Borås",
      postcode: " 503 35",
    },
    coordinates: {
      latitude: 57.71984,
      longitude: 12.94025,
    },
  },
];

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

getLocation();

function success(pos) {
  const crd = pos.coords;

  // marker.setLatLng([crd.latitude, crd.longitude]);
  map.setView([crd.latitude, crd.longitude], initialZoom);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getCaffees() {
  locations.forEach((item) => {
    L.marker([item.coordinates.latitude, item.coordinates.longitude]).addTo(
      map
    );
  });
}
getCaffees();

L.tileLayer(tileUrl, {
  attribution,
  maxZoom: 20,
}).addTo(map);
