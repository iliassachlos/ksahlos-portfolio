import Aos from "aos";
import { useEffect } from "react";

function AosInitialization() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return null;
}

export default AosInitialization;
