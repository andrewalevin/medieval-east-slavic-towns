import { useEffect, useRef } from "react";
import { createMap } from "./map";

export default function App() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const map = createMap(ref.current);
        return () => map.remove();
    }, []);

    return <div ref={ref} style={{ width: "100vw", height: "100vh" }} />;
}