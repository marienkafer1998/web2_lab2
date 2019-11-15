import React from "react";
import {Container} from "reactstrap";


export default function Loader(props) {
    return (
        <Container>

            <h1 >Please, wait, weather is loading...</h1>


            <img src={"https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif"} alt="Weather is loading" width={"100px"} />

        </Container>
    );
}