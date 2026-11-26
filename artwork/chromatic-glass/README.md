# Chromatic Glass

This is a new four-sheet glass sculpture, independent of the earlier hero models. Blender generates three variations, previews them with Cycles, and exports concept 2 as the website model.

```sh
blender -b -t 4 --python-exit-code 1 --python artwork/chromatic-glass/generate.py
npm run build
```

The editable scene is `chromatic-glass.blend`, previews are in `previews/`, and the glTF asset is `static/models/chromatic-glass.glb`. Adjust each concept's sheet positions, width, fold and twist in `generate.py` to regenerate. The Blender previews use Cycles studio lights; the website uses Three.js lighting, the glTF transmission material and a subtle runtime iridescent layer, so the reflections will differ. The hero renderer caps device pixel ratio, stops while off-screen, and renders a still frame for reduced motion. A lightweight illustration is shown when WebGL or loading fails.
