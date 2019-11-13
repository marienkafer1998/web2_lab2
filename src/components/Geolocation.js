import React from "react";
import {connect} from "react-redux";
import Weather from "./Weather";
import {setGeolocation, loadWeather} from "../redux/actions/geoAction";


export function weatherParams(response) {
    const {
        coord: coords,
        weather: [{  description, icon }],
        main: {
            temp: temperature,
            pressure,
            humidity
        },
        wind: {
            speed: windSpeed
        },
        name: cityName
    } = response;

    return {
        cityName,
        temperature,
        pressure,
        humidity,
        windSpeed,
        icon,
        description,
        coords
    }
}

class Geolocation extends React.Component {

    // componentDidMount() {
    //     this.getGeolocation();
    // }

    render() {
        console.log('rendering', this.props);
        return (
            <div>
                <button
                    onClick={() => this.getGeolocation()}>Get geolocation
                </button>
                {this.props.response &&
                // this.props.response.cod != 200 &&
                <Weather
                    //toLoad={() => this.props.loadWeather(this.props.coords)}
                    weather={weatherParams(this.props.response)}/>}

                {!this.props.coords && <div>Error: there is no geolocation</div>}

            </div>
        );
    }


    getGeolocation() {
        console.log('before getting ' + this.props.response);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                    const coords = {
                        lon: position.coords.longitude.toFixed(2),
                        lat: position.coords.latitude.toFixed(2)
                    };
                    this.props.setGeolocation(coords);
                    this.props.loadWeather(coords);
                    console.log('after getting ' + this.props.response);
                },
                () => {
                    const coords = {
                        lon: 37.62,
                        lat: 55.75

                    }
                    this.props.setGeolocation(coords);
                    this.props.loadWeather(this.props.coords);
                    console.log('after getting ' + this.props.response);

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

// const actions = {
//     setGeolocation,
//     loadWeather
// };

function mapDispatchToProps(dispatch) {
    return {
        setGeolocation: (coords) => {
            dispatch(setGeolocation(coords));
        },

        loadWeather: (coords) => {
            dispatch(loadWeather(coords));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);