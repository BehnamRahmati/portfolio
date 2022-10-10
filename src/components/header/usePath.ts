import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const usePath = (initialValue: string) => {
    const [pathname, setPathname] = useState(initialValue);
    const router = useRouter();
    useEffect(() => {
        setPathname(router.pathname)
    }, [router.pathname]);

    return [pathname]
}

export default usePath;