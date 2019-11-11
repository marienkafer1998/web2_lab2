

const API_KEY = "c98ceead6e7b88c9c865eaf7bdbb291d";



export const Actions = {
    SET_GEOLOCATION: "SET_GEOLOCATION",
    GET_RESPONSE: "GET_RESPONSE"
}

export function setGeolocation(coords) {
    return {
        type: Actions.SET_GEOLOCATION,
        payload: coords
    }
}

export function loadWeather(coords) {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&lat=${coords.lat}&lon=${coords.lon}`;
    return function(dispatch) {
        fetch(API_URL)
            .then(response => {
                    response.json()
                        .then(json => {
                            console.log(response, json);
                            dispatch(getResponse(json));
                        })
                }
            )
    }
}

export function getResponse(response) {
    return {
        type: Actions.GET_RESPONSE,
        payload: response
    }
}
