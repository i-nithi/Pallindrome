"""Extract the final loader image and derive its transparent emblem for Blender."""
import subprocess
from pathlib import Path
import numpy as np
from PIL import Image
from scipy import ndimage as ndi
root=Path.cwd(); out=root/'artwork/loader-reference'; out.mkdir(parents=True,exist_ok=True)
subprocess.run(['ffmpeg','-v','error','-ss','4.95','-i',str(root/'static/video/palindrome-logo-reveal.mp4'),'-frames:v','1','-update','1',str(out/'final.png'),'-y'],check=True)
a=np.asarray(Image.open(out/'final.png').convert('RGB'))
mask=ndi.binary_closing(a.max(axis=2)>18,iterations=1)
labels,_=ndi.label(mask); sizes=np.bincount(labels.ravel()); mask=np.isin(labels,np.flatnonzero((sizes>30)&(np.arange(len(sizes))>0)))
holes=ndi.binary_fill_holes(mask)&~mask; labels,_=ndi.label(holes); sizes=np.bincount(labels.ravel()); mask|=np.isin(labels,np.flatnonzero((sizes<5000)&(np.arange(len(sizes))>0)))
rgba=np.dstack((a,mask.astype('uint8')*255)); Image.fromarray(rgba[105:625,380:900,:]).save(out/'emblem-source.png')
