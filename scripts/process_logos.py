from PIL import Image
import os
import glob

input_dir = r"C:\Users\jswnd\.gemini\antigravity-ide\brain\284acdc7-374d-4a86-aaa5-ff5dabb3fca4"
output_dir = r"c:\Users\jswnd\.gemini\antigravity\scratch\Eduquest\public\uni-logos"

# Get the 5 newest files starting with media_
files = sorted(glob.glob(os.path.join(input_dir, "media__1781370*.png")))

def process_image(path, out_name):
    img = Image.open(path).convert("RGBA")
    data = img.getdata()
    
    # Simple algorithm to make white/near-white transparent
    new_data = []
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Upscale
    new_width = max(img.width * 2, 800)
    new_height = int((new_width / img.width) * img.height)
    
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    out_path = os.path.join(output_dir, out_name)
    img.save(out_path, "PNG")
    print(f"Saved {out_path}")

names = ["keele.png", "lsbu.png", "northeastern.png", "northumbria.png", "qub.png"]

for idx, f in enumerate(files):
    if idx < len(names):
        process_image(f, names[idx])
