import "./App.css";
import { VideoGallery } from "./components/VideoGallery/VideoGallery";

const App = () => {
    return (
        <div className="app">
            <VideoGallery tileAspectRatio={4 / 3} tilePadding={"1rem"}>
                <div>child</div>
                <div>child</div>
                <div>child</div>
                <div>child</div>
            </VideoGallery>
        </div>
    );
};

export default App;
