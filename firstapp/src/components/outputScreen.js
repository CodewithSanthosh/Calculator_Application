import React from "react";
//import outputScreenRow from "./outputScreenRow";
import OutputScreenRow from "./outputScreenRow";

const OutputScreen = (props) => {
    return(
        <div className="screen">
       <OutputScreenRow value={props.question}/>
       <OutputScreenRow value={props.answer}/>
        </div>
    );
};

export default OutputScreen;