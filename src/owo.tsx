import React, {useState} from "react";
import {face} from "./faceTypes";
import {Xwx} from "./xwx";
import './owo.css';

export type XwxCallbackFunction = (id: number) => void;


function Owo() {
    const [xwx, setXwx] = useState(new Array(9).fill(face.AWA))

    const XwxClick: XwxCallbackFunction = (id: number) => {
        const result = xwx.slice();
        result[id] = face.OWO
        setXwx(result)
    }
    return (
        <>
            <div className={"xwxWrapper"}>
            <Xwx XwxStat={xwx[0]} XwxId={0} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[1]} XwxId={1} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[2]} XwxId={2} XwxCallback={XwxClick}/>
            {/*<br/>*/}
            <Xwx XwxStat={xwx[3]} XwxId={3} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[4]} XwxId={4} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[5]} XwxId={5} XwxCallback={XwxClick}/>
            {/*<br/>*/}
            <Xwx XwxStat={xwx[6]} XwxId={6} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[7]} XwxId={7} XwxCallback={XwxClick}/>
            <Xwx XwxStat={xwx[8]} XwxId={8} XwxCallback={XwxClick}/>
            </div>

        </>
    )
}

export default Owo;