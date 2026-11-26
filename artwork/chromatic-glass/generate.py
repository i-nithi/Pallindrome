"""Generate three independent Chromatic Glass studies, preview and export concept 2.
Run from the project root: blender -b -t 4 --python-exit-code 1 --python artwork/chromatic-glass/generate.py
"""
import bpy, os, math
from math import sin, cos, pi
from mathutils import Vector
ROOT=os.getcwd(); OUT=os.path.join(ROOT,'artwork/chromatic-glass'); MODELS=os.path.join(ROOT,'static/models')
os.makedirs(OUT+'/previews',exist_ok=True); os.makedirs(MODELS,exist_ok=True)

def glass(name, color):
    mat=bpy.data.materials.new(name); mat.diffuse_color=(*color,1); mat.use_nodes=True
    bs=mat.node_tree.nodes.get('Principled BSDF'); bs.inputs['Base Color'].default_value=(*color,1)
    bs.inputs['Metallic'].default_value=.08; bs.inputs['Roughness'].default_value=.14
    bs.inputs['IOR'].default_value=1.43; bs.inputs['Transmission Weight'].default_value=.86
    bs.inputs['Coat Weight'].default_value=.25; bs.inputs['Coat Roughness'].default_value=.12
    return mat

def sheet(name, cfg, mat):
    # Hand-directed broad sheets, with changing width, curvature and folded depth.
    x,y,z,scale,width,bend,fold,twist=cfg
    n=120; m=56; verts=[]; faces=[]
    for i in range(n+1):
        u=i/n; yy=(u-.5)*2*scale+y
        cx=x+bend*sin((u-.5)*pi*.95)+.16*sin(u*pi*2+fold)
        w=width*(.12+.88*sin(pi*u)**.43)
        for j in range(m+1):
            v=j/m*2-1
            # The two sides curl through depth at different rates, as in folded glass.
            xx=cx+v*w+.10*sin(pi*u)*sin(v*pi+fold)
            zz=z+.25*sin(u*pi*1.6+fold)+(.29*sin(v*pi*.75+twist*u)+.10*v*v)*sin(pi*u)**.55
            yy2=yy+.16*sin(v*pi*.8+fold)*sin(pi*u)+.10*v*sin(u*pi*1.4)+.10*(1-v*v)*(2*u-1)
            verts.append((xx,yy2,zz))
            if i and j:
                k=i*(m+1)+j; faces.append((k-m-2,k-m-1,k,k-1))
    mesh=bpy.data.meshes.new(name); mesh.from_pydata(verts,[],faces); mesh.update()
    ob=bpy.data.objects.new(name,mesh); bpy.context.collection.objects.link(ob); ob.data.materials.append(mat)
    for poly in mesh.polygons: poly.use_smooth=True
    mod=ob.modifiers.new('Glass thickness','SOLIDIFY'); mod.thickness=.018; mod.offset=0
    mod=ob.modifiers.new('Polished edges','BEVEL'); mod.width=.012; mod.segments=3
    ob.modifiers.new('Smooth normals','WEIGHTED_NORMAL')
    return ob

def light(name,loc,color,power,size,sizey):
    data=bpy.data.lights.new(name,'AREA'); data.energy=power; data.color=color; data.shape='RECTANGLE'; data.size=size; data.size_y=sizey
    obj=bpy.data.objects.new(name,data); bpy.context.collection.objects.link(obj); obj.location=loc; obj.rotation_euler=(Vector((0,0,0))-obj.location).to_track_quat('-Z','Y').to_euler()

def build(i):
    bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
    scene=bpy.context.scene
    purple=glass('Amethyst glass',(.38,.08,.76)); blue=glass('Cobalt glass',(.025,.18,.65)); cyan=glass('Aquamarine glass',(.035,.58,.72)); pink=glass('Orchid glass',(.64,.07,.42))
    # x, y, depth, height, width, bend, fold, twist. Compositions are open and asymmetric.
    concepts=[
      [((-.52,.08,.03,1.35,.52,.48,.4,1.2),purple),((.24,-.03,-.36,1.1,.65,-.38,1.9,-.8),blue),((.55,.27,.35,.95,.42,.35,2.8,1.6),cyan),((-.02,-.22,.52,.83,.38,-.28,3.5,-1),pink)],
      [((-.45,.18,-.12,1.26,.59,.46,.2,1.35),purple),((.35,.17,-.40,1.03,.67,-.43,1.8,-.9),blue),((.43,-.23,.34,.98,.47,.38,2.8,1.45),cyan),((-.16,-.16,.48,.87,.48,-.38,4.0,-1.15),pink)],
      [((-.41,.05,-.1,1.20,.68,.55,1.1,1.2),pink),((.33,.1,-.38,1.15,.56,-.48,2.1,-1.2),purple),((.48,-.13,.30,.91,.54,.42,.2,1.1),cyan),((-.25,.2,.48,.9,.36,-.25,3.3,-1),blue)] ]
    for j,(cfg,mat) in enumerate(concepts[i]): sheet('Glass fold %d'%j,cfg,mat)
    world=bpy.data.worlds.new('Black studio') if not bpy.data.worlds else bpy.data.worlds[0]; scene.world=world; world.use_nodes=True
    bg=world.node_tree.nodes['Background']; bg.inputs['Color'].default_value=(.012,.012,.025,1); bg.inputs['Strength'].default_value=.22
    light('Violet softbox',(-3,2.4,4),(.56,.25,1),950,4,3)
    light('Cyan softbox',(3,-.3,4),(.18,.65,1),1100,3,4)
    light('Soft white ribbon',(-1,3,5),(1,.92,1),700,4,2)
    light('Rear blue rim',(2,-1,-3),(.18,.35,1),1100,3,4)
    light('Rear pink rim',(-3,-2,-2),(1,.18,.55),650,3,3)
    data=bpy.data.cameras.new('Hero'); camera=bpy.data.objects.new('Hero',data); bpy.context.collection.objects.link(camera); camera.location=(0,0,8); camera.rotation_euler=(0,0,0); data.type='ORTHO'; data.ortho_scale=3.9; scene.camera=camera
    scene.render.engine='CYCLES'; scene.cycles.samples=96; scene.cycles.use_denoising=True; scene.cycles.max_bounces=8
    scene.render.resolution_x=700; scene.render.resolution_y=700; scene.render.resolution_percentage=100; scene.render.image_settings.file_format='PNG'; scene.view_settings.view_transform='AgX'
    scene.render.filepath=f'{OUT}/previews/concept-{i+1}.png'; bpy.ops.render.render(write_still=True)
    if i==1:
        bpy.ops.wm.save_as_mainfile(filepath=OUT+'/chromatic-glass.blend')
        bpy.ops.object.select_all(action='DESELECT')
        for ob in scene.objects:
            if ob.type=='MESH': ob.select_set(True); bpy.context.view_layer.objects.active=ob
        bpy.ops.export_scene.gltf(filepath=MODELS+'/chromatic-glass.glb',export_format='GLB',use_selection=True,export_apply=True,export_yup=False)

for i in range(3): build(i)
