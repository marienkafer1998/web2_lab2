import React from "react";


export default function AddFavorite(props) {
    return (
        <form  onSubmit={(e) => props.onSubmit(e)}>
            <input type="text" name="cityName" placeholder="City" required={true} />
            <input type="submit" value="Add to favorite"/>
        </form>
    );
}

