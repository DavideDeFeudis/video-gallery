import { useState } from "react";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";
import "./App.css";

const App = () => {
    const [videos, setVideos] = useState<number[]>([]);

    const addVideo = () => {
        setVideos([...videos, videos.length]);
    };

    const removeVideo = () => {
        const temp = [...videos];
        temp.pop();
        setVideos(temp);
    };

    return (
        <div className="app">
            <div className="button-group">
                <button onClick={addVideo}>Add video</button>
                <button onClick={removeVideo}>Remove video</button>
            </div>
            <VideoGallery>
                {videos.map((item) => (
                    <video key={item}></video>
                ))}
            </VideoGallery>
        </div>
    );
};

export default App;
