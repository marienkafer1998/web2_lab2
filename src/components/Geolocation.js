import React from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import { setGeolocation, loadWeather } from "../redux/actions/geoAction";

class Geolocation extends React.Component {
    componentDidMount() {
        this.getGeolocation();
    }

    render() {
        return (
            <div>
                <button
                        onClick={() => this.getGeolocation()}>Get geolocation</button>
                {this.props.coords &&  <Weather />}
            </div>
        );
    }



    getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                    const coords = {
                        lon: position.coords.longitude,
                        lat: position.coords.latitude
                    };
                    this.props.setGeolocation(coords);
                    this.props.loadWeather(coords);
                },
                () => {
                    this.props.setGeolocation({lon: 37.62, lat: 55.75});
                    this.props.loadWeather(this.props.coords);

                });
        }
    }
}


function mapStateToProps(state) {
    return {
        coords: state.geo.coords,
        response: state.geo.response
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setGeolocation: (coords) => {
            dispatch(setGeolocation(coords));
        },

        loadWeather: (coords) => {
            dispatch(loadWeather(coords));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);