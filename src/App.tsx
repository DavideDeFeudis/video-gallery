import "./App.css";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";

const App = () => {
    return (
        <div className="app">
            <VideoGallery tileAspectRatio={4 / 3} padding={".5rem"}>
                {[0, 1, 2].map((item) => (
                    <video className="child" key={item}></video>
                ))}
            </VideoGallery>
        </div>
    );
};

export default App;
