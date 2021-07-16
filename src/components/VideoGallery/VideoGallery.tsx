import { useState } from "react";
import "./VideoGallery.css";

interface Props {
    children: React.ReactNode;
    tileAspectRatio: Number;
    tilePadding: String;
}

export const VideoGallery: React.FC<Props> = ({ children }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return <div className="video-gallery">{children}</div>;
};
