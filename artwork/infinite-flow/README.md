# Infinite Flow

`generate.py` creates three Cycles previews and saves variation 2 as the editable Blender scene and production GLB. Run from the repository root with Blender 5:

```sh
blender -b -t 4 --python-exit-code 1 --python artwork/infinite-flow/generate.py
npm run build
```

Previews are written to `previews/variation-1.png` through `variation-3.png`; `infinite-flow.blend` contains the selected variation, lights, and camera. The website asset is `static/models/infinite-flow.glb`. Change the spline positions, ribbon width/twist, materials, or studio lights in the script and rerun to regenerate all outputs. The script exports Blender coordinates without the glTF Y-up conversion because the website uses the same front-facing XY plane as the Blender camera. Blender's Cycles studio lighting is used in the previews; the website uses a generated Three.js environment and colored lights, so reflections will differ. The GLB exports metallic/roughness materials and does not include baked textures or mesh compression.

The hero loader and interactive motion live in `static/ts/heroSculpture.ts`. It uses capped pixel ratio, pauses off-screen, respects reduced motion, and falls back to the static illustration if WebGL or loading fails. No external environment map is required.
