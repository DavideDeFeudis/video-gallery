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
    padding: string;
}

interface TileStyle {
    width?: string;
    height?: string;
    padding?: string;
}

export const VideoGallery: React.FC<Props> = ({ children, tileAspectRatio, padding }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [tileStyle, setTileStyle] = useState<TileStyle>({});
    const innerBoxRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const outerBoxRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const childrenCount = React.Children.count(children);

    useEffect(() => {
        const observer = createResizeObserver();
        observer.observe(outerBoxRef.current);
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const { width: tileWidth, height: tileHeight, cols } = calculateLayout(width, height, childrenCount, tileAspectRatio);
        innerBoxRef.current.style.setProperty("--width", tileWidth + "px");
        innerBoxRef.current.style.setProperty("--cols", cols + "");
        outerBoxRef.current.style.padding = `${padding}`;

        setTileStyle({
            width: `${tileWidth}px`,
            height: `${tileHeight}px`,
            padding: `${padding}`,
        });
    }, [width, height, childrenCount, tileAspectRatio, padding]);

    const createResizeObserver = () => {
        return new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setWidth(width);
            setHeight(height);
        });
    };

    const handleTileClick = (e: React.MouseEvent<HTMLElement>, child: React.ReactChild) => {
        // console.log(e.target);
        // console.log(e.currentTarget);
        // console.log(child);
        // console.log(typeof child);
        // console.log(children[0].props);
        // console.log(children);
        // console.log(React.Children.toArray(children));
        // console.log(React.Children.toArray(children).filter((c) => c === child));
        // console.log(children.filter((c: React.ReactChild) => c === child));
        // const subRows = React.Children.toArray(this.props.children).filter((child, i) => {
        //     return child.props.someProp;
        // });
    };

    return (
        <div className="outer-box" ref={outerBoxRef}>
            <div className="inner-box" ref={innerBoxRef}>
                {/* try converting it to an array and then filtering it, maybe convert it to a map */}
                {children.map((child: React.ReactChild, i: number) => (
                    <div key={i} style={tileStyle} onClick={(e) => handleTileClick(e, child)}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
