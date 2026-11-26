"""Make a thick, image-derived relief of the supplied logo, preserving its color and lettering.
Run at repository root: blender -b -t 4 --python-exit-code 1 --python artwork/logo-emblem/generate.py
"""
import bpy, os, numpy as np
from scipy import ndimage as ndi
from mathutils import Vector
ROOT=os.getcwd(); OUT=ROOT+'/artwork/logo-emblem'; os.makedirs(OUT,exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
# Blender image pixels are bottom-up, matching glTF UV coordinates.
source=bpy.data.images.load(ROOT+'/static/img/pallindrome-logo.png',check_existing=False)
image=bpy.data.images.load(ROOT+'/static/img/pallindrome-logo.png',check_existing=False)
image.scale(384,384); image.update()
pixels=np.array(image.pixels[:],dtype=np.float32).reshape((384,384,4))
alpha=pixels[:,:,3]; raw=alpha>.72
labels,count=ndi.label(raw); sizes=np.bincount(labels.ravel()); keep=np.flatnonzero(sizes>200); keep=keep[keep!=0]
mask=np.isin(labels,keep); mask=ndi.binary_closing(mask,iterations=1)
# The source's transparency defines the silhouette, and its dark script is
# sculpted above the yellow surface rather than approximated with a font.
r,g,b=pixels[:,:,0],pixels[:,:,1],pixels[:,:,2]
yellow=(r>.58)&(g>.38)&(b<.28)&mask
near_gold=ndi.binary_dilation(yellow,iterations=5)
dark=(np.maximum.reduce([r,g,b])<.22)&near_gold&mask
edge=ndi.distance_transform_edt(mask)
yellow_depth=ndi.gaussian_filter(yellow.astype(float),2)
letter_depth=ndi.gaussian_filter(dark.astype(float),.65)
# Rounded perimeter, domed gold and a raised script, all with genuine depth.
height=.075+.055*np.clip(edge/6,0,1)+.055*yellow_depth+.004*letter_depth
height+=.010*np.sin(np.linspace(0,np.pi,384))[None,:]
verts=[]; uv=[]; indices=np.full((384,384),-1,dtype=np.int32)
for y in range(384):
    for x in range(384):
        if mask[y,x]:
            indices[y,x]=len(verts); verts.append(((x/383-.5)*3.4,(y/383-.5)*3.4,float(height[y,x])))
            uv.append((x/383,y/383))
front=len(verts)
verts += [(x,y,-.11) for x,y,z in verts]; uv += uv[:]
faces=[]; boundary={}
for y in range(383):
    for x in range(383):
        q=(int(indices[y,x]),int(indices[y,x+1]),int(indices[y+1,x+1]),int(indices[y+1,x]))
        if min(q)<0: continue
        faces.append(q); faces.append(tuple(front+k for k in reversed(q)))
        for a,b in zip(q,q[1:]+q[:1]):
            key=(min(a,b),max(a,b))
            if key in boundary: del boundary[key]
            else: boundary[key]=(a,b)
for a,b in boundary.values(): faces.append((a,front+a,front+b,b))
mesh=bpy.data.meshes.new('Logo sculpted relief'); mesh.from_pydata(verts,[],faces); mesh.update()
obj=bpy.data.objects.new('Pallindrome dimensional emblem',mesh); bpy.context.collection.objects.link(obj)
uv_layer=mesh.uv_layers.new(name='Original artwork')
for poly in mesh.polygons:
    for li in poly.loop_indices: uv_layer.data[li].uv=uv[mesh.loops[li].vertex_index]
    poly.use_smooth=True
mat=bpy.data.materials.new('Original chromatic enamel'); mat.use_nodes=True
nodes=mat.node_tree.nodes; bs=nodes.get('Principled BSDF'); tex=nodes.new('ShaderNodeTexImage'); tex.image=source
mat.node_tree.links.new(tex.outputs['Color'],bs.inputs['Base Color']); bs.inputs['Metallic'].default_value=.18; bs.inputs['Roughness'].default_value=.36; bs.inputs['Coat Weight'].default_value=.4; bs.inputs['Coat Roughness'].default_value=.16
obj.data.materials.append(mat); source.pack()
world=bpy.data.worlds.new('Black studio') if not bpy.data.worlds else bpy.data.worlds[0]; bpy.context.scene.world=world; world.use_nodes=True
world.node_tree.nodes['Background'].inputs['Color'].default_value=(.008,.008,.012,1); world.node_tree.nodes['Background'].inputs['Strength'].default_value=.2

def area(name,loc,color,power,size,sizey):
    d=bpy.data.lights.new(name,'AREA'); d.energy=power; d.color=color; d.shape='RECTANGLE'; d.size=size; d.size_y=sizey
    o=bpy.data.objects.new(name,d); bpy.context.collection.objects.link(o); o.location=loc; o.rotation_euler=(Vector((0,0,0))-o.location).to_track_quat('-Z','Y').to_euler()
area('Large softbox',(-2,3,5),(1,.91,1),420,4,3)
area('Cyan rim',(3,1,3),(.35,.8,1),350,3,4)
area('Purple rim',(-3,-1,2),(.6,.3,1),300,3,3)
camera_data=bpy.data.cameras.new('Front camera'); camera=bpy.data.objects.new('Front camera',camera_data); bpy.context.collection.objects.link(camera); camera.location=(0,0,8); camera.rotation_euler=(0,0,0); camera_data.type='ORTHO'; camera_data.ortho_scale=3.8; bpy.context.scene.camera=camera
scene=bpy.context.scene; scene.render.engine='CYCLES'; scene.cycles.samples=48; scene.cycles.use_denoising=True; scene.render.resolution_x=800; scene.render.resolution_y=800; scene.render.resolution_percentage=100; scene.render.image_settings.file_format='PNG'; scene.view_settings.view_transform='Standard'; scene.render.filepath=OUT+'/preview.png'; bpy.ops.render.render(write_still=True)
bpy.ops.wm.save_as_mainfile(filepath=OUT+'/pallindrome-emblem.blend')
bpy.ops.object.select_all(action='DESELECT'); obj.select_set(True); bpy.context.view_layer.objects.active=obj
bpy.ops.export_scene.gltf(filepath=ROOT+'/static/models/pallindrome-emblem.glb',export_format='GLB',use_selection=True,export_yup=False)
