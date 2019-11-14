import React from "react";
import "./Favorites.css";
import Button from "reactstrap/es/Button";



export default function AddFavorite(props) {
    return (
        <form  onSubmit={(e) => props.onSubmit(e)}>
            <input  text-transform="capitalize" className={"adder"} type="text" name="cityName" placeholder="Add new city" required={true} />
            <Button type="submit" >+</Button>
        </form>
    );
}

