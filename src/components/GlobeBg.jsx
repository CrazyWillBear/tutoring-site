import {useEffect, useRef} from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

export default Globe;

function Globe() {
    const ref = useRef();

    useEffect(() => {
        const effect = GLOBE({
            el: ref.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.5,
            color: 0x096B68,
            color2: 0x096B68,
            backgroundColor: 0x129990,
            size: 1.5
        });

        return () => {
            effect.destroy();
        };
    }, []);

    return <div ref={ref} style={{width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1}}/>;
}

