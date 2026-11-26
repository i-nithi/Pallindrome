"""Generate Infinite Flow variations. Run: blender -b -t 4 --python artwork/chromatic-silk/generate.py"""
import bpy, math, os, sys
from mathutils import Vector
from math import sin, cos, pi
ROOT = os.getcwd()
OUT = os.path.join(ROOT, 'artwork/chromatic-silk')
MODELS = os.path.join(ROOT, 'static/models')
os.makedirs(OUT + '/previews', exist_ok=True); os.makedirs(MODELS, exist_ok=True)

def material(name, color, metal, rough, coat=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*color,1)
    p.inputs['Metallic'].default_value=metal; p.inputs['Roughness'].default_value=rough
    p.inputs['Coat Weight'].default_value=coat; p.inputs['Coat Roughness'].default_value=.15
    return m

def ribbon(name, controls, width, twist, mat):
    # A cubic gesture with a rolling cross-section creates a continuous silk band.
    n=160; m=24; verts=[]; faces=[]
    p=[Vector(v) for v in controls]
    def point(t): return (1-t)**3*p[0]+3*(1-t)**2*t*p[1]+3*(1-t)*t*t*p[2]+t**3*p[3]
    for i in range(n+1):
        t=i/n; center=point(t); tangent=(point(min(1,t+.001))-point(max(0,t-.001))).normalized()
        normal=Vector((-tangent.y,tangent.x,0)).normalized()
        angle=twist[0]+twist[1]*t+.22*sin(t*pi*2)
        edge=normal*cos(angle)+Vector((0,0,1))*sin(angle)
        breadth=width*(.06+.94*sin(pi*t)**.55)*(1+.1*sin(pi*t*2))
        for j in range(m+1):
            v=(j/m-.5)*2
            co=center+edge*(v*breadth)+Vector((0,0,1))*(.07*(1-v*v)*sin(pi*t))
            verts.append(tuple(co))
            if i and j:
                k=i*(m+1)+j; faces.append((k,k-1,k-m-2,k-m-1))
    mesh=bpy.data.meshes.new(name); mesh.from_pydata(verts,[],faces); mesh.update()
    ob=bpy.data.objects.new(name,mesh); bpy.context.collection.objects.link(ob); ob.data.materials.append(mat)
    for poly in mesh.polygons: poly.use_smooth=True
    solid=ob.modifiers.new('Fine rolled edge','SOLIDIFY'); solid.thickness=.012; solid.offset=0
    bevel=ob.modifiers.new('Polished edge','BEVEL'); bevel.width=.008; bevel.segments=3
    ob.modifiers.new('Smooth edge normals','WEIGHTED_NORMAL')
    return ob

def strand(name, coords, radius, mat):
    cu=bpy.data.curves.new(name,'CURVE'); cu.dimensions='3D'; cu.resolution_u=24; cu.bevel_depth=radius; cu.bevel_resolution=4
    sp=cu.splines.new('BEZIER'); sp.bezier_points.add(len(coords)-1)
    for b,co in zip(sp.bezier_points,coords): b.co=co; b.handle_left_type='AUTO'; b.handle_right_type='AUTO'
    ob=bpy.data.objects.new(name,cu); bpy.context.collection.objects.link(ob); ob.data.materials.append(mat); return ob

def area(name, loc, color, power, size, target=(0,0,0), size_y=None):
    d=bpy.data.lights.new(name,'AREA'); d.energy=power; d.color=color; d.shape='RECTANGLE'; d.size=size; d.size_y=size_y or size
    ob=bpy.data.objects.new(name,d); bpy.context.collection.objects.link(ob); ob.location=loc; ob.rotation_euler=(Vector(target)-ob.location).to_track_quat('-Z','Y').to_euler()

def build(variant):
    bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
    for material_data in list(bpy.data.materials): bpy.data.materials.remove(material_data)
    scene=bpy.context.scene
    left=material('Violet silk',(.16,.018,.35),.72,.34,.16)
    right=material('Cyan silk',(.006,.13,.34),.75,.31,.18)
    mag=material('Magenta silk',(.29,.015,.17),.7,.34,.16)
    # Three deliberately different open gestures, never a closed emblem or loop.
    concepts=[
      [([(-1.38,-1.02,-.1),(-.85,.65,.05),(.15,1.64,.10),(1.27,1.30,.04)],.24,(-.35,2.3),left),
       ([(-1.36,-.48,-.30),(-.40,-1.35,.00),(.40,.70,.22),(1.23,.65,.05)],.22,(.8,-1.8),right),
       ([(-.82,-1.35,-.2),(-.20,-.62,.34),(.18,.42,-.18),(.93,1.46,.06)],.14,(-.5,2.1),mag)],
      [([(-1.35,-.90,-.12),(-.83,.86,.06),(.23,1.65,.18),(1.40,1.13,.02)],.26,(-.35,2.25),left),
       ([(-1.27,-1.23,-.34),(-.31,-.48,.16),(.06,.77,.25),(1.36,.32,-.02)],.24,(.6,-1.9),right),
       ([(-1.30,-.29,-.40),(-.37,-1.25,-.24),(.60,-.83,.15),(1.18,.64,.19)],.15,(.4,1.4),mag),
       ([(-.85,-1.39,-.15),(-.31,-.78,.33),(.23,.08,.45),(.67,.94,.11)],.08,(-.3,1.5),right)],
      [([(-1.50,-.72,-.05),(-.88,1.17,.15),(.53,1.34,.10),(1.42,.86,.12)],.25,(.35,2.5),left),
       ([(-1.08,-1.41,-.36),(-.36,-.12,.24),(.21,-.68,.20),(1.41,.52,-.1)],.25,(-.5,2.0),right),
       ([(-1.25,-.35,-.38),(-.4,-1.19,-.1),(.52,.35,.25),(.78,1.38,.16)],.16,(.7,-1.2),mag)] ]
    for i,(points,width,twist,mat) in enumerate(concepts[variant]):
        ribbon('Chromatic fold %d'%i,points,width,twist,mat)
    world=bpy.data.worlds.new('Dark studio') if not bpy.data.worlds else bpy.data.worlds[0]; scene.world=world; world.use_nodes=True; world.node_tree.nodes['Background'].inputs['Color'].default_value=(.012,.012,.025,1); world.node_tree.nodes['Background'].inputs['Strength'].default_value=.3
    area('Large violet softbox',(-3,2.5,4),(.62,.22,1),700,4,(0,0,0),2.5)
    area('Cyan softbox',(3,1,3),(.15,.67,1),850,3,(0,0,0),4)
    area('Soft white key',(-1,4,4),(1,.91,.94),380,4,(0,0,0),1.4)
    area('Blue rim',(2,-2,-2),(.07,.25,1),900,3,(0,0,0),3)
    area('Gold accent',(-.3,-1,3),(1,.65,.23),115,1.5)
    camdata=bpy.data.cameras.new('Hero camera'); cam=bpy.data.objects.new('Hero camera',camdata); bpy.context.collection.objects.link(cam)
    cam.location=(0,0,7.8); cam.rotation_euler=(0,0,0); camdata.type='ORTHO'; camdata.ortho_scale=3.8; scene.camera=cam
    scene.render.engine='CYCLES'; scene.cycles.samples=48; scene.cycles.use_denoising=True
    scene.render.resolution_x=700; scene.render.resolution_y=700; scene.render.resolution_percentage=100
    scene.render.image_settings.file_format='PNG'; scene.render.film_transparent=False
    scene.view_settings.view_transform='AgX'
    scene.render.filepath=f'{OUT}/previews/variation-{variant+1}.png'; bpy.ops.render.render(write_still=True)
    if variant==1:
        bpy.ops.wm.save_as_mainfile(filepath=OUT+'/chromatic-silk.blend')
        # Export geometry only; lights and camera stay in the editable source.
        bpy.ops.object.select_all(action='DESELECT')
        for obj in list(scene.objects):
            if obj.type in {'MESH','CURVE'}:
                obj.select_set(True); bpy.context.view_layer.objects.active=obj
        bpy.ops.export_scene.gltf(filepath=MODELS+'/chromatic-silk.glb',export_format='GLB',use_selection=True,export_apply=True,export_yup=False)

for i in range(3): build(i)
