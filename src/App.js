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

