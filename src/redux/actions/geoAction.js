
export const Actions = {
    SET_GEOLOCATION: "SET_GEOLOCATION",
}

export function setGeolocation(coords) {
    return {
        type: Actions.SET_GEOLOCATION,
        payload: coords
    }
}
