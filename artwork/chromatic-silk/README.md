# Chromatic Silk

Three open ribbon concepts are generated with Blender. Variation 2 is used by the hero.

```sh
blender -b -t 4 --python-exit-code 1 --python artwork/chromatic-silk/generate.py
npm run build
```

The script writes previews to `previews/`, the editable scene to `chromatic-silk.blend`, and the selected glTF to `static/models/chromatic-silk.glb`. Edit the cubic control points, widths, twist, material parameters, or softboxes in the script to refine the sculpture. Blender's studio lighting differs from the generated Three.js environment used by the website. The GLB is uncompressed and contains no texture images.
