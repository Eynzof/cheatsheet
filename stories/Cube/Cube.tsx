import React from 'react';
import './Cube.css'

// @ts-ignore
const Cube = (props) => {

    return (
        <div className="atom-blocks">
            <div className="atoms">
                {[...Array(9)].map((e, i) => i).map((i) => <div className="atom" key={i} style={{backgroundColor: `rgba(255, 241, 108, ${1-i*0.07})`}}></div>)}
            </div>

            <p className="atoms-heading">grid-template-columns: repeat(3, 1fr);<br/>grid-template-rows: repeat(3, 1fr);
            </p>
        </div>
    );
};

Cube.propTypes = {};

export default Cube;