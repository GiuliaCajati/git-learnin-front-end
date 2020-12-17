

import React, {useState} from 'react';

function About(props) {
    const [ count, setCount] = useState("null")
    
    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

export default About;