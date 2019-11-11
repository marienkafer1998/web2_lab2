import React from "react";
import { connect } from "react-redux";

import { setGeolocation, fetchGeoError } from "../redux/actions/geoAction";

class Geolocation extends React.Component {
    componentDidMount() {
        this.getGeolocation();
    }

    render() {
        return (
            <div >
                <button
                        onClick={() => this.getGeolocation()}
                >Get geolocation</button>
                {this.props.coords && <p>{this.props.coords.lon}, {this.props.coords.lat}</p>}
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
                },
                () => {
                    this.props.setGeolocation({lon: 37.62, lat: 55.75});
                });
        }
    }
}


function mapStateToProps(state) {
    return {
        coords: state.geo.coords
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setGeolocation: (coords) => {
            dispatch(setGeolocation(coords));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);