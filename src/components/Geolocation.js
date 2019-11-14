import React from "react";
import {connect} from "react-redux";
import Weather from "./Weather";
import {setGeolocation, loadWeatherWithCoords} from "../redux/actions/actions";
import Loader from "./Loader";




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
                {this.props.response && this.props.coords &&
                <Weather
                    onFetch={() => this.props.loadWeatherWithCoords(this.props.coords)}
                    weather={this.props.response}/>
                    }
                {!this.props.response && <Loader />}

                {!this.props.coords && <div>Error: there is no geolocation</div>}

            </div>
        );
    }


    getGeolocation() {
        console.log('in getGeoloc ' + this.props.response);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                    const coords = {
                        lon: position.coords.longitude.toFixed(2),
                        lat: position.coords.latitude.toFixed(2)
                    };
                    this.props.setGeolocation(coords);
                    this.props.loadWeatherWithCoords(coords);
                    console.log('after getting ' + this.props.response);
                },
                () => {
                    const coords = {
                        lon: 37.62,
                        lat: 55.75

                    }
                    this.props.setGeolocation(coords);
                    this.props.loadWeatherWithCoords(this.props.coords);
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
//     loadWeatherWithCoords
// };

function mapDispatchToProps(dispatch) {
    return {
        setGeolocation: (coords) => {
            dispatch(setGeolocation(coords));
        },

        loadWeatherWithCoords: (coords) => {
            dispatch(loadWeatherWithCoords(coords));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);