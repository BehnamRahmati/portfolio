import { useState, useEffect } from "react";

const useScroll = (initialValue:boolean) => {
    const [scrolled , setScrolled] = useState(initialValue);

    useEffect(() => {
        window.addEventListener('scroll' ,_ => {
            if(window.scrollY >= 60 ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        })
    }, []);


    return [scrolled];
}

export default useScroll;