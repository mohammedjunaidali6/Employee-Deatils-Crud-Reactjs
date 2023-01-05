import React, {useState} from 'react';

export const Usestate = () => {
    const [message, setMessage] = useState('Welcome Visitor');

    const handleChange = () =>{
        setMessage('Thanks for subscribing');
    }
    
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={handleChange}>Subscribe</button>
        </div>
    )
}