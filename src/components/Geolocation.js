import React from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import { setGeolocation } from "../redux/actions/geoAction";

const API_KEY = "c98ceead6e7b88c9c865eaf7bdbb291d";


class Geolocation extends React.Component {
    componentDidMount() {
        this.getGeolocation();
    }
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
  }

    getWeather = async (e) => {

        e.preventDefault();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&lat=${this.props.coords.lat}&lon${this.props.coords.lon}`);
        const data = await api_call.json();

        console.log(api_call);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        })

    }

    render() {
        return (
            <div>
                <button
                        onClick={() => this.getGeolocation()}>Get geolocation</button>
                {this.props.coords &&  <Weather getWeather={this.getWeather}
            temperature={this.state.temperature}/>}
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
        coords: state.geo.coords,
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