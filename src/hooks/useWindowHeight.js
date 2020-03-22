import { useState, useEffect } from 'react'

function getWindowHeight() {
    const { innerHeight: Height } = window;
    return Height
}

export default function useWindowHeight() {
    const [windowHeight, setWindowHeight] = useState(
        getWindowHeight()
    );

    useEffect(() => {
        function handleResize() {
            setWindowHeight(getWindowHeight());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowHeight;
}