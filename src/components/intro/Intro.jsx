import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";

function Intro(props) {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed: 40,
            strings: ["`NextJs`", "`Material-UI`", "`Redux-Toolkit`"],
        })
    },[])

    return (
        <div className={'intro'} id={'intro'}>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>Hi There, I'm</h3>
                    <h2>Mehdi Fadaei</h2>
                    <h3>
                        work with <span ref={textRef}/>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Intro;