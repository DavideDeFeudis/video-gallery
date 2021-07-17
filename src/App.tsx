import { useEffect, useState } from "react";
import "./App.css";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";

const App = () => {
    const [children, setChildren] = useState<number[]>([]);

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            setChildren((prev) => [...prev, i + 1]);
        }
    }, []);

    return (
        <div className="app">
            <VideoGallery tileAspectRatio={4 / 3} tilePadding={"1rem"}>
                {children.map((item) => (
                    <div key={item}>child {item}</div>
                ))}
            </VideoGallery>
        </div>
    );
};

export default App;
