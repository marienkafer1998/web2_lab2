import React from "react";
import Geolocation from "./components/Geolocation";
import Favorites from "./components/Favorites";


class App extends React.Component {
    render() {
        return(
            <div>
                <Geolocation />
                <Favorites />
            </div>
        )

    }

}


export default App;



// class App extends React.Component {
//   state = {
//       temperature: undefined,
//       city: undefined,
//       country: undefined,
//       humidity: undefined,
//       description: undefined,
//       error: undefined
//   }
//   getWeather = async (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//     console.log(city);
//     console.log(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city},${country}`);
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city},${country}`);
//     console.log(api_call);
//     const data = await api_call.json();
//     if (city && country) {
//         console.log(data);
//         this.setState({
//             temperature: data.main.temp,
//             city: data.name,
//             country: data.sys.country,
//             humidity: data.main.humidity,
//             description: data.weather[0].description,
//             error: ""
//         })
//     } else {
//         this.setState({
//             temperature: undefined,
//             city: undefined,
//             country: undefined,
//             humidity: undefined,
//             description: undefined,
//             error: "Please, enter the values"
//         });
//
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Form getWeather={this.getWeather}/>
//         <Weather
//             temperature={this.state.temperature}
//             city={this.state.city}
//             country={this.state.country}
//             humidity={this.state.humidity}
//             description={this.state.description}
//             error={this.state.error}/>
//       </div>
//     );
//   }
//
// }

