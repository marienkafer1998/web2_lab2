export const LOCAL_STORAGE_KEY = "favorites";

export default function getFavoritesFromStorage(key = LOCAL_STORAGE_KEY) {
    const storageContent = JSON.parse(localStorage.getItem(key));
    let favorites = [];
    if (storageContent !== null && Array.isArray(storageContent))
        favorites = storageContent;
    return new Map(favorites.map(cityName => [cityName, undefined]));
}