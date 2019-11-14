import React from "react";
import { connect } from "react-redux";

import AddFavorite from "./AddFavorite";
import Weather from "./Weather";
import { addFavorite, deleteFavorite, loadWeatherWithName } from "../redux/actions/actions";



class Favorites extends React.Component {

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />

                <div>
                    {
                        [...this.props.favorites.entries()].map((entry) => {
                            return (
                                <Weather
                                    onFetch={() => this.props.loadWeatherWithName(entry[0])}
                                    onDelete={() => this.props.deleteFavorite(entry[0])}
                                    weather={entry[1]} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    handleAddFavorite(e) {
        e.preventDefault();
        const cityName = e.currentTarget.elements.cityName.value;
        this.props.addFavorite(cityName);
        console.log(this.props.favorites.entries());

    }
}


function mapStateToProps(state) {
    return {
        favorites: state.fav.favorites,
        error: state.fav.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addFavorite: (cityName) => {
            dispatch(addFavorite(cityName));
        },

        deleteFavorite: (cityName) => {
            dispatch(deleteFavorite(cityName));
        },

        loadWeatherWithName: (cityName) => {
            dispatch(loadWeatherWithName(cityName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);