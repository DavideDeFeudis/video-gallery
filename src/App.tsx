import { useEffect, useState } from "react";
import "./App.css";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";

const App = () => {
    const [children, setChildren] = useState<number[]>([0, 1, 2]);

    // useEffect(() => {
    //     for (let i = 0; i < 3; i++) {
    //         setChildren((prev) => [...prev, i + 1]);
    //     }
    // }, []);

    return (
        <div className="app">
            <VideoGallery tileAspectRatio={4 / 3} tilePadding={"1rem"}>
                {children.map((item) => (
                    <video className="child" key={item}></video>
                ))}
            </VideoGallery>
        </div>
    );
};

export default App;
