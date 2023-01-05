import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Notify(){

    const NotifyMessage = () =>{
        toast('Successfully toasted!')
    }

    return(
        <div>
            <ToastContainer position="top-right"/>
            <button onClick={NotifyMessage}>NotifyMe</button>
        </div>
    )
}

export default Notify;
