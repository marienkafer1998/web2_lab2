
const API_BASE_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=c98ceead6e7b88c9c865eaf7bdbb291d"


export const Actions = {
    SET_GEOLOCATION: "SET_GEOLOCATION",
    GET_RESPONSE: "GET_RESPONSE",
    GET_RESPONSE_NAME: "GET_RESPONSE_NAME",
    ADD_FAVORITE: "ADD_FAVORITE",
    DELETE_FAVORITE: "DELETE_FAVORITE",
    }

export function setGeolocation(coords) {
    return {
        type: Actions.SET_GEOLOCATION,
        payload: coords
    }
}

export function loadWeatherWithCoords(coords) {
    const API_URL = `${API_BASE_URL}&lat=${coords.lat}&lon=${coords.lon}`;

    return function (dispatch) {
        fetch(API_URL)
            .then(response => {
                    response.json()
                        .then(json => {
                            console.log(json);
                            if (response.ok) {
                                dispatch(getResponseCoords(json));
                            }
                        })
                }
            )
    }
}


export function loadWeatherWithName(cityName) {
    const API_URL = `${API_BASE_URL}&q=${cityName}`;
    console.log(API_URL);

    return function(dispatch) {
        fetch(API_URL)
            .then(response => {
                    response.json()
                        .then(json => {
                            console.log(response, json);

                            if (json.cod === 200) {
                                console.log("City input ", cityName);

                                dispatch(getResponseName(cityName, json));
                            } else {
                                dispatch(deleteFavorite(cityName));
                            }
                        })
                }
            )
    }
}


export function getResponseCoords(response) {
    return {
        type: Actions.GET_RESPONSE,
        payload: response
    }
}

export function getResponseName(cityName, response ) {
    return {
        type: Actions.GET_RESPONSE_NAME,
        payload: {
            cityName,
            response
        }
    }
}


export function addFavorite(cityName) {
    return {
        type: Actions.ADD_FAVORITE,
        payload: cityName
    };
}

export function deleteFavorite(cityName) {
    return {
        type: Actions.DELETE_FAVORITE,
        payload: cityName
    };
}