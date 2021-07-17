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

[Dosant](https://github.com/Dosant)

## License

MIT © [Davide De Feudis](https://github.com/DavideDeFeudis)
