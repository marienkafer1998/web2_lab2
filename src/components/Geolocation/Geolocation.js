import React from "react";
import {connect} from "react-redux";
import MainWeather from "../MainWeather/MainWeather";
import {setGeolocation, loadWeatherWithCoords} from "../../redux/actions";
import Loader from "../Loader/Loader";
import {Button, Container, Col, Row} from "reactstrap";




class Geolocation extends React.Component {

    componentDidMount() {
        this.getGeolocation();
    }

    render() {
        console.log('rendering', this.props);
        let body =
            <Container>
                {/*<Col>*/}
                {/*Weather is here*/}
                {/*</Col>*/}
                <Col>
                    <Button color="secondary" size="lg"
                        onClick={() => this.getGeolocation()}>Get geolocation
                    </Button>
                    {this.props.response && this.props.coords &&
                    <MainWeather
                        onFetch={() => this.props.loadWeatherWithCoords(this.props.coords)}
                        weather={this.props.response}/>
                    }
                    {!this.props.response && <Loader />}

                    {!this.props.coords && <div>Error: there is no geolocation</div>}
                </Col>
            </Container>

        return (
            <Container className="weather">
                {body}
            </Container>
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