import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { limitString } from './../Utility/Utility'

function Home() {
    /* get the context instance */
    const { getData } = UseBaseContext();
    const [data, setData] = useState([]);
    const [isSortReversed, setIsSortReversed] = useState(false);
    let textInput = React.createRef();

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            // console.log(textInput.current.value);
            setData([...data, textInput.current.value]);
            clearInput();
        }
    }

    const clearInput = () => {
        textInput.current.value = '';
    }

    const clear = () => {
        setData([]);
    }


    /* have the loop in the const */
    const loop = data.map((singleData, index) => (
        <div className="col-lg-4 offset-4 loop" key={index}>
            <div className="text">{singleData}</div>
        </div>
    ));

    const sortDown = () => {
        if (!isSortReversed)
            return;

        setIsSortReversed(false);
        let outputData = data;
        setData(outputData.reverse());
    }

    const sortUp = () => {
        if (isSortReversed)
            return;

        setIsSortReversed(true);
        let outputData = data;
        setData(outputData.reverse());
    }

    /* all of the maon content goes here  */
    return (
        <section className="home-page m-top-3">
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="main-container">
                            {/* Hello {getData("search")} */}

                            {/* lets loop things here */}
                            <div className="row center">
                                <div className="col-lg-4 offset-4">
                                    <input type="text" className="m-right-3" onKeyPress={handleKeyPress} ref={textInput} />
                                    <button className="btn btn-primary button" onClick={sortUp}>&#x2191;</button>
                                    <button className="btn btn-primary button" onClick={sortDown}>&#x2193;</button>
                                    <button className="btn btn-warning button" onClick={clear}>&#x2297;</button>
                                </div>
                                {loop}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;