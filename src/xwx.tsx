import React from 'react';
import {face} from "./faceTypes";
import {XwxCallbackFunction} from "./owo";
import './xwx.css';


interface xwxProps {
    XwxStat: face
    XwxId: number
    XwxCallback: XwxCallbackFunction
}


export function Xwx({XwxStat, XwxId, XwxCallback}: xwxProps) {
    let str;
    if (XwxStat == 0) {
        str = "awa"
    } else if (XwxStat > 0) {
        str = "xwx"
    } else {
        str = "owo"
    }

    return (
        <button className={"xwx"} onClick={() => {
            XwxCallback(XwxId)
        }}>
            {str}
        </button>

    )

}