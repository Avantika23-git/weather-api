function getData() {
    const city = search.value;
    const apiKey = 'd1c05b8edcca47daa3072454251606'; // Replace with your actual OpenWeatherMap API key

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


    fetch(url)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            temp.innerHTML = res.current.temp_c + "<sup>o</sup>";
            ws.innerHTML = res.current.wind_kph + " m/s";
            hm.innerHTML = res.current.humidity + " %";
        })
        .catch(err => console.error("Error fetching weather:", err));
}




