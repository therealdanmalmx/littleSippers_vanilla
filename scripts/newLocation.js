// import axios from 'axios';


// export default axios.create({
//     baseURL: "http://localhost:1337/",
//     headers: {
//         "Content-type": "application/json",
//     },
// });

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
    })

    console.log({icons});
    // console.log(amenities.forEach((amen) => console.log(amen)));

    const options = {
        method: 'POST',
        body: {
            data: {
                name,
                street,
                postal_code: postalcode,
                city,
                latitude,
                longitude,
                amenities: JSON.stringify(amenities)
            }
        }
    };

console.log(options.body.data.amenities);

    fetch('http://localhost:1337/api/cafes', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    // alert('New location added')
}

const editLocation = () => {
    alert('Edit location')
}

// {name: 'Daniel Malmgren de Oliveira', street: 'Torgilsgatan 16C', postalcode: '506 38', city: 'Borås', latitude: '57', …}