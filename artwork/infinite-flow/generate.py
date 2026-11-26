"""Generate Infinite Flow variations. Run: blender -b -t 4 --python artwork/infinite-flow/generate.py"""
import bpy, math, os, sys
from mathutils import Vector
from math import sin, cos, pi
ROOT = os.getcwd()
OUT = os.path.join(ROOT, 'artwork/infinite-flow')
MODELS = os.path.join(ROOT, 'static/models')
os.makedirs(OUT + '/previews', exist_ok=True); os.makedirs(MODELS, exist_ok=True)

def material(name, color, metal, rough, coat=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*color,1)
    p.inputs['Metallic'].default_value=metal; p.inputs['Roughness'].default_value=rough
    p.inputs['Coat Weight'].default_value=coat; p.inputs['Coat Roughness'].default_value=.15
    return m

def ribbon(name, side, layer, variant, mat):
    # Four hand-directed arcs, with the edge moving in depth independently of the spine.
    n=160; m=24; verts=[]; faces=[]
    for i in range(n+1):
        t=i/n; a=pi*t; sign=side
        x=sign*(.13 + (1.05+variant*.08)*sin(a)**.82) + (.07+variant*.025)*sin(2*a+layer)
        y=1.42-2.84*t + .08*sin(a*2+layer)
        z=.10*sin(a*2+layer*.6)+layer*.12 + .12*cos(a*1.4+side)
        width=(.10+.27*sin(a)**.65)*(1 + .18*sin(3*a+side+variant*.5))
        # The ribbons twist through space, with irregular rolled edges.
        twist=.35*sin(a*1.8+side*.7+layer) + variant*.09
        for j in range(m+1):
            v=(j/m-.5)*2
            xx=x+sign*v*width*(.76+.22*sin(a))
            yy=y+v*width*.25*cos(a)
            zz=z+v*width*sin(twist) + .18*(1-v*v) + .025*sin(t*27+v*4+side)*sin(a)
            verts.append((xx,yy,zz))
            if i and j:
                k=i*(m+1)+j; faces.append((k,k-1,k-m-2,k-m-1))
    mesh=bpy.data.meshes.new(name); mesh.from_pydata(verts,[],faces); mesh.update()
    ob=bpy.data.objects.new(name,mesh); bpy.context.collection.objects.link(ob); ob.data.materials.append(mat)
    for p in mesh.polygons: p.use_smooth=True
    solid=ob.modifiers.new('Fine rolled edge','SOLIDIFY'); solid.thickness=.025; solid.offset=0
    bevel=ob.modifiers.new('Soft edge','BEVEL'); bevel.width=.014; bevel.segments=3
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
    left=material('Violet liquid chrome',(.19,.018,.42),.88,.20,.35)
    right=material('Cyan liquid chrome',(.008,.19,.48),.9,.17,.3)
    mag=material('Magenta silk',(.36,.015,.24),.82,.24,.3)
    gold=material('Pale molten gold',(.66,.34,.065),.84,.2,.25)
    ribbon('Violet main',-1,0,variant,left); ribbon('Cyan main',1,0,variant,right)
    # Separate smaller inner leaves add depth without duplicating the silhouette.
    for side, mat in [(-1,mag),(1,right)]:
        ob=ribbon('Inner fold',side,-1.6,variant+1,mat); ob.scale=(.73,.78,.8); ob.location.z=-.22; ob.rotation_euler.z=side*.11
    # Fine molten streams cross the void, not a central primitive.
    for j in range(7):
        off=(j-3)*.075
        pts=[(-.46, -.32+off,-.02+j*.018),(-.27,-.15+off*1.4,.13+sin(j)*.04),(-.06,.02+off+.035*sin(j*1.4),.23),(.18,.12+off*.7+.04*cos(j),.16),(.43,.32+off*.5,-.02)]
        strand('Gold filament %02d'%j,pts,.008+(j%3)*.003,gold)
    for j in range(3):
        off=(j-1)*.1
        strand('Gold counterflow %02d'%j,[(-.35,.28+off,.01),(-.14,.13+off,.17),(.08,-.04+off,.22),(.34,-.29+off,.0)],.007,gold)
    world=bpy.data.worlds.new('Dark studio') if not bpy.data.worlds else bpy.data.worlds[0]; scene.world=world; world.use_nodes=True; world.node_tree.nodes['Background'].inputs['Color'].default_value=(.012,.012,.025,1); world.node_tree.nodes['Background'].inputs['Strength'].default_value=.3
    area('Large violet softbox',(-3,2.5,4),(.62,.22,1),700,4,(0,0,0),2.5)
    area('Cyan softbox',(3,1,3),(.15,.67,1),850,3,(0,0,0),4)
    area('Soft white key',(-1,4,4),(1,.91,.94),650,3,(0,0,0),1.4)
    area('Blue rim',(2,-2,-2),(.07,.25,1),900,3,(0,0,0),3)
    area('Gold accent',(-.3,-1,3),(1,.65,.23),115,1.5)
    camdata=bpy.data.cameras.new('Hero camera'); cam=bpy.data.objects.new('Hero camera',camdata); bpy.context.collection.objects.link(cam)
    cam.location=(0,0,7.8); cam.rotation_euler=(0,0,0); camdata.type='ORTHO'; camdata.ortho_scale=3.9; scene.camera=cam
    scene.render.engine='CYCLES'; scene.cycles.samples=64; scene.cycles.use_denoising=True
    scene.render.resolution_x=700; scene.render.resolution_y=700; scene.render.resolution_percentage=100
    scene.render.image_settings.file_format='PNG'; scene.render.film_transparent=False
    scene.view_settings.view_transform='AgX'
    scene.render.filepath=f'{OUT}/previews/variation-{variant+1}.png'; bpy.ops.render.render(write_still=True)
    if variant==1:
        bpy.ops.wm.save_as_mainfile(filepath=OUT+'/infinite-flow.blend')
        # Export geometry only; lights and camera stay in the editable source.
        bpy.ops.object.select_all(action='DESELECT')
        for obj in list(scene.objects):
            if obj.type in {'MESH','CURVE'}:
                obj.select_set(True); bpy.context.view_layer.objects.active=obj
        bpy.ops.export_scene.gltf(filepath=MODELS+'/infinite-flow.glb',export_format='GLB',use_selection=True,export_apply=True,export_yup=False)

for i in range(3): build(i)
