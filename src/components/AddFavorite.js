import React from "react";


const AddFavorites = (props) => {
    return (
        <form className="add-favorite">
            <input className="input" type="text" name="city" placeholder="City" required={true} />
            <input className="button" type="submit" value="Add to favorite"/>
        </form>
    );
}

export default AddFavorites;