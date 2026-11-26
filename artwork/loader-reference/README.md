# Loader-matched emblem

The final video frame is the visual reference for this model. From the project root, regenerate the transparent color source, Blender relief, preview and GLB with:

```sh
python3 artwork/loader-reference/extract.py
blender -b -t 4 --python-exit-code 1 --python artwork/loader-reference/generate.py
npm run build
```

The video is a rendered raster, so the geometry and depth are inferred from its silhouette and pixels; this is a thick, beveled relief with the video frame used as its color map, not the original video's source 3D model. `loader-emblem.blend` is editable and `preview.png` is the Blender render. The website initially displays the color map without additional lighting to match the frame, then blends into its studio-lit Three.js material during the move. If the model does not load promptly, the page falls back to the ordinary entrance.
