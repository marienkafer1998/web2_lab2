
const API_BASE_URL = "http://localhost:8000";


export const Actions = {
    SET_GEOLOCATION: "SET_GEOLOCATION",
    GET_RESPONSE: "GET_RESPONSE",
    GET_RESPONSE_NAME: "GET_RESPONSE_NAME",
    ADD_FAVORITE: "ADD_FAVORITE",
    DELETE_FAVORITE: "DELETE_FAVORITE",
};

export function setGeolocation(coords) {
    return {
        type: Actions.SET_GEOLOCATION,
        payload: coords
    }
}

export function loadWeatherWithCoords(coords) {
    const API_URL = `${API_BASE_URL}/weather/coordinates?lat=${coords.lat}&lon=${coords.lon}`;

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
    const API_URL = `${API_BASE_URL}/weather?cityName=${cityName}`;
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
    const API_URL = `${API_BASE_URL}/favourites`;
    return function (dispatch) {
        fetch(API_URL,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: cityName})
        }).then(() => {
            dispatch({
                type: Actions.ADD_FAVORITE,
                payload: cityName
            });
        })
    }
}

export function deleteFavorite(cityName) {
    const API_URL = `${API_BASE_URL}/favourites`;
    return function (dispatch) {
        fetch(API_URL,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: cityName})
        }).then(() => {
            dispatch({
                type: Actions.DELETE_FAVORITE,
                payload: cityName
            });
        })
    };
}

export function loadFavourites() {
    const API_URL = `${API_BASE_URL}/favourites`;
    return function (dispatch) {
        fetch(API_URL).then(response=>{
            response.json().then(favourites => {
                favourites.forEach((item)=>{
                    dispatch({
                        type: Actions.ADD_FAVORITE,
                        payload: item.name
                    })
                })
            })
        })
    }
}