import React from "react";
import {useLocation} from "react-router-dom";

function Home(){
    const location = useLocation();
    return(
        <div>
            <h1>Welocome Home </h1>
            <h2>
                {location.state.name}
            </h2>
            <h2>
                password
                {location.state.password}
            </h2>
        </div>
    )
}

export default Home;