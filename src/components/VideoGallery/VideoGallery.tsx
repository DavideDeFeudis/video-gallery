import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./VideoGallery.css";

const calculateLayout = (containerWidth: number, containerHeight: number, tileCount: number, aspectRatio: number) => {
    let bestLayout = {
        area: 0,
        cols: 0,
        rows: 0,
        width: 0,
        height: 0,
    };

    for (let cols = 1; cols <= tileCount; cols++) {
        const rows = Math.ceil(tileCount / cols);
        const hScale = containerWidth / (cols * aspectRatio);
        const vScale = containerHeight / rows;
        let width;
        let height;
        if (hScale <= vScale) {
            width = Math.floor(containerWidth / cols);
            height = Math.floor(width / aspectRatio);
        } else {
            height = Math.floor(containerHeight / rows);
            width = Math.floor(height * aspectRatio);
        }
        const area = width * height;
        if (area > bestLayout.area) {
            bestLayout = {
                area,
                width,
                height,
                rows,
                cols,
            };
        }
    }
    return bestLayout;
};

interface Props {
    children: any;
    tileAspectRatio: number;
    tilePadding: string;
}

export const VideoGallery: React.FC<Props> = ({ children, tileAspectRatio, tilePadding }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [childStyle, setChildStyle] = useState({});
    const galleryRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const wrapperRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const childrenCount = React.Children.count(children);

    useEffect(() => {
        const observer = createResizeObserver();
        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const { width: tileWidth, height: tileHeight, cols } = calculateLayout(width, height, childrenCount, tileAspectRatio);
        console.log("childrenCount:", childrenCount);
        console.log("tileWidth:", tileWidth);
        console.log("tileHeight:", tileHeight);
        console.log("cols:", cols);
        galleryRef.current.style.setProperty("--width", tileWidth + "px");
        galleryRef.current.style.setProperty("--cols", cols + "");

        setChildStyle({
            width: `${tileWidth}px`,
            height: `${tileHeight}px`,
            padding: `${tilePadding}`,
        });
    }, [width, height, childrenCount, tileAspectRatio, children, tilePadding]);

    const createResizeObserver = () => {
        return new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setWidth(width);
            setHeight(height);
        });
    };

    return (
        <div className="wrapper" ref={wrapperRef}>
            <div className="video-gallery" ref={galleryRef}>
                {children.map((child: React.ReactChild, i: number) => (
                    <div className="child" key={i} style={childStyle}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
