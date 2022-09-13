const addNewLocation = () => {
  const amenities = [];
  const name = document.querySelector("input[name='name']").value;
  const street = document.querySelector("input[name='street']").value;
  const postalcode = document.querySelector("input[name='postalcode']").value;
  const city = document.querySelector("input[name='city']").value;
  const latitude = document.querySelector("input[name='latitude']").value;
  const longitude = document.querySelector("input[name='longitude']").value;
  const icons = document.querySelectorAll("input[type='checkbox']");
  icons.forEach((icon) => {
    icon.checked && amenities.push(icon.value);
  });

  const BASE_URL = "http://localhost:1337";

  const input = {
    name,
    street,
    postal_code: postalcode,
    city,
    latitude,
    longitude,
  };

  const dataInput = JSON.stringify({ input });

  console.log({ input });

  fetch("http://localhost:1337/api/cafes", {
    method: "POST",
    cache: "no-cache",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: input }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => console.log(JSON.stringify(response)))
    .catch((err) => console.error(err));
};

// const editLocation = () => {
//   alert("Edit location");
// };
