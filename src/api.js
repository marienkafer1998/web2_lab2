export function extractWeatherParams(apiResponse) {
    const {
        coord: coords,
        weather: [{ icon, description }],
        main: {
            temp: temperature,
            pressure,
            humidity
        },
        wind: {
            speed: windSpeed
        },
        name: cityName
    } = apiResponse;

    return {
        cityName,
        temperature,
        pressure,
        humidity,
        windSpeed,
        icon,
        description,
        coords
    }
}
