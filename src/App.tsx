import "./App.css";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";

const App = () => {
    return (
        <div className="app">
            <VideoGallery tileAspectRatio={4 / 3} tilePadding={"1rem"}>
                {[0, 1, 2].map((item) => (
                    <video className="child" key={item}></video>
                ))}
            </VideoGallery>
        </div>
    );
};

export default App;
