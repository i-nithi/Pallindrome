# Pallindrome emblem

The source asset is `static/img/pallindrome-logo.png`. Since it is raster artwork, the generator extracts its alpha silhouette and produces a closed, thick relief mesh with a rounded perimeter, a domed gold region, and a shallow raised treatment on the dark lettering. The original 1024-pixel image supplies the exact front-surface color and script; it is not a standalone flat plane. The resulting relief is an approximation of the shape and depth inferred from the raster, not original vector or CAD geometry.

From the repository root, regenerate the Blender scene, preview and GLB:

```sh
blender -b -t 4 --python-exit-code 1 --python artwork/logo-emblem/generate.py
npm run build
```

The editable scene is `pallindrome-emblem.blend`, the studio render is `preview.png`, and the website model is `static/models/pallindrome-emblem.glb`. The Blender preview and website use different lighting. The GLB embeds the image and is uncompressed because the local Blender installation has no Draco encoder.
