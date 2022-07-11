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
      latitude: "57.73296",
      longitude: "12.93726",
    },
    ammenities: {
      changeroom: true,
      toys: true,
      books: true,
      playground: true,
      garden: true,
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
      latitude: "57.72057",
      longitude: "12.93258",
    },
    ammenities: {
      changeroom: true,
      toys: false,
      books: true,
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
      postcode: "503 35",
    },
    coordinates: {
      latitude: "57.71984",
      longitude: "12.94025",
    },
    ammenities: {
      changeroom: true,
      toys: true,
      books: true,
      playground: false,
      garden: true,
    },
  },
  {
    id: 4,
    name: "Waynes Coffee",
    address: {
      street: "Drottninggatan 33",
      city: "Stockholm",
      postcode: "111 51",
    },
    coordinates: {
      latitude: "59.33151",
      longitude: "18.06369",
    },
    ammenities: {
      changeroom: true,
      toys: false,
      books: true,
      playground: false,
      garden: true,
    },
  },
  {
    id: 5,
    name: "Caffetteria del corso",
    address: {
      street: "Drottninggatan 56",
      city: "Stockholm",
      postcode: "111 21",
    },
    coordinates: {
      latitude: "59.33029",
      longitude: "18.06489",
    },
    ammenities: {
      changeroom: true,
      toys: true,
      books: true,
      playground: true,
      garden: false,
    },
  },
  {
    id: 6,
    name: "Viktors Kaffe",
    address: {
      street: "Geijersgatan 7",
      city: "Göteborg",
      postcode: "411 34",
    },
    coordinates: {
      latitude: "57.69775",
      longitude: "11.97663",
    },
    ammenities: {
      changeroom: true,
      toys: true,
      books: true,
      playground: true,
      garden: false,
    },
  },
  {
    id: 7,
    name: "Café Berlin",
    address: {
      street: "Vasagatan 46",
      city: "Göteborg",
      postcode: "411 37",
    },
    coordinates: {
      latitude: "57.69981",
      longitude: "11.97188",
    },
    ammenities: {
      changeroom: true,
      toys: true,
      books: true,
      playground: false,
      garden: true,
    },
  },
];

const lsicon = L.icon({
  iconUrl: "/img/baby.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
});

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(pos) {
  const crd = pos.coords;
  map.setView([crd.latitude, crd.longitude], initialZoom);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const getAmmenities = (item) => {
  const list = [];
  for (const [key, value] of Object.entries(item.ammenities)) {
    if (value === true) {
      list.push(key);
    }
  }

  return list
    .map(
      (item) =>
        `<img class="ammenities-icons" src=img/${item}.png alt=${item} />`
    )
    .join("");
};

function checkIcons() {}
checkIcons();

function getCaffees() {
  locations.forEach((item) => {
    L.marker(
      [Number(item.coordinates.latitude), Number(item.coordinates.longitude)],
      { icon: lsicon }
    )
      .bindPopup(
        `
            <h3>${item.name}</h3>
            <h5 class="street-address">${item.address.street}</h5>
            <h5 class="other-address">${item.address.postcode} ${
          item.address.city
        }</h5>
            ${getAmmenities(item)}
            `
      )
      .openPopup()
      .addTo(map);
  });
}
function getIcon() {
  // let content = document.querySelector(".ammenities-icons");
  let content = document.querySelectorAll(".ammenities-icons");
  // let icons = document.querySelectorAll(".ammenities-icons");
  // content.on("click", function () {
  //   console.log("click");
  // });
  content.forEach((icon) => {
    icon.on("click", function () {
      alert("Clicked");
    });
  });
}
getLocation();
getCaffees();
getIcon();

L.tileLayer(tileUrl, {
  attribution,
  maxZoom: 20,
}).addTo(map);
