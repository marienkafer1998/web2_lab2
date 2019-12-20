import React from "react";
import { connect } from "react-redux";
import {
    Container, Row, Col
} from 'reactstrap';
import AddFavorite from "../AddFavorite/AddFavorite";
import Weather from "../Weather/Weather";
import {addFavorite, deleteFavorite, loadFavourites, loadWeatherWithName} from "../../redux/actions";
import "../Weather/Weather.css";



class Favorites extends React.Component {
    componentDidMount() {
        this.props.loadFavourites();
    }

    render() {
        console.log(this.props.favorites.entries());
        let header, body;
        header = <Container>
            <Row>
                <Col>
                <h1 className={"fav"}>Favorites</h1>
                </Col>
                <Col sm={{ size: 5, offset: 1 }}>
                    <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />
                </Col>
            </Row>
        </Container>;
        body =
            <Row>
            {
                [...this.props.favorites.entries()].map((entry) => {
                    return (
                        <Col xs="6">
                        <Weather
                            onFetch={() => this.props.loadWeatherWithName(entry[0])}
                            onDelete={() => this.props.deleteFavorite(entry[0])}
                            weather={entry[1]} /> </Col>
                    );
                })
            }
</Row>



        return (
            <Container className="favorite-weather">
                {header}
                {body}
            </Container>


        );
    }

    handleAddFavorite(e) {
        e.preventDefault();
        const cityName = e.currentTarget.elements.cityName.value;
        e.currentTarget.elements.cityName.value = "";
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
        },
        loadFavourites: () => {
            dispatch(loadFavourites())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);