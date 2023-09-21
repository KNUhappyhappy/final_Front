import React, {useState} from "react";


function LoginPopup (props) {
    function onClose(){
        props.onClose();
    }
    return (
        <div onClick={onClose}>
            <div>팝업</div>
            <div onClick={() => {onClose(false)}}></div>
        </div>
        
    )
}

export default LoginPopup;