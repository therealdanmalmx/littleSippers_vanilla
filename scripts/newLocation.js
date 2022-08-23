// import axios from 'axios';


// export default axios.create({
//     baseURL: "http://localhost:1337/",
//     headers: {
//         "Content-type": "application/json",
//     },
// });

const addNewLocation = async () => {
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

    const stringifiedAmenities = JSON.stringify(amenities)

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
        data: JSON.stringify({
            name,
            street,
            postal_code: postalcode,
            city,
            latitude,
            longitude,
        })
    };
    console.log('data2', options.data.amenities);

    try {
        const response = await fetch('http://localhost:1337/api/cafes', options);
        const json = await response.json();
        console.log('data', json);
        return json;

    } catch (error) {
        console.error(error)
    }

    // fetch('http://localhost:1337/api/cafes', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log({response})
    //         return response;
    //     })
    //     .catch(err => console.error(err));
}

const editLocation = () => {
    alert('Edit location')
}