
export function getParams(response) {
    const {
        coord: coords,
        weather: [{description, icon}],
        main: {
            temp: temperature,
            pressure,
            humidity
        },
        wind: {
            speed: windSpeed
        },
        name: cityName
    } = response;

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