# Video Gallery

> A flex container that sets the size of its children so that they occupy as much area as possible.

## Usage

```jsx
<VideoGallery tileAspectRatio={4 / 3} tilePadding={"1rem"}>
    {videos.map((video) => (
        <video key={video.id}></video>
    ))}
</VideoGallery>
```

## Props

| Prop            | Type   |
| --------------- | ------ |
| tileAspectRatio | number |
| tilePadding     | string |

## Credits

[Dosant](https://dev.to/antondosov/building-a-video-gallery-just-like-in-zoom-4mam) and
[fzembow](https://github.com/fzembow/rect-scaler) for the layout calculation.

## License

MIT © [Davide De Feudis](https://github.com/DavideDeFeudis)
