const tileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const initialZoom = 13;

const map = L.map("map").setView([0, 0], initialZoom);

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
    ammenities: {
      changeroom: true,
      toys: true,
      playground: false,
      garden: false,
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
    ammenities: {
      changeroom: false,
      toys: false,
      playground: true,
      garden: false,
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
    ammenities: {
      changeroom: true,
      toys: true,
      playground: false,
      garden: true,
    },
  },
];

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

getLocation();

function success(pos) {
  const crd = pos.coords;
  map.setView([crd.latitude, crd.longitude], initialZoom);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// const popup = L.popup().setContent(`<h5>Hello</h5>`);
const popup = (item) => {
  let popup = L.popup().setContent(`<h4>${item.name}</h4>`);

  return popup;
};

function getCaffees() {
  locations.forEach((item) => {
    L.marker([item.coordinates.latitude, item.coordinates.longitude])
      .bindPopup(
        `
          <h3>${item.name}</h3>
          <h5>${item.address.street}</h5>
          <h5>${item.address.postcode} ${item.address.city}</h5>
          <span>
          ${
            !item.ammenities
              ? "No ammeities"
              : item.ammenities.changeroom &&
                "Change" &&
                item.ammenities.toys &&
                "Toys"
          }
          </span> 
        `
      )
      .openPopup()
      .addTo(map);
  });
}
getCaffees();

L.tileLayer(tileUrl, {
  attribution,
  maxZoom: 20,
}).addTo(map);
