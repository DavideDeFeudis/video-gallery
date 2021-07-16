import { useState, useEffect, useRef } from "react";
import "./VideoGallery.css";

interface Props {
    children: React.ReactNode;
    tileAspectRatio: Number;
    tilePadding: String;
}

export const VideoGallery: React.FC<Props> = ({ children }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const galleryRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const observer = createResizeObserver();
        observer.observe(galleryRef.current);
        return () => observer.disconnect();
    }, []);

    const createResizeObserver = () => {
        return new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setWidth(width);
            setHeight(height);
        });
    };

    return (
        <div className="video-gallery" ref={galleryRef}>
            {children}
        </div>
    );
};
