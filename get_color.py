
from PIL import Image
import sys
import collections

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        colors = img.getcolors(img.size[0] * img.size[1])
        # Sort by count
        most_frequent = sorted(colors, key=lambda x: x[0], reverse=True)[0]
        rgb = most_frequent[1]
        hex_color = '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])
        return hex_color
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(get_dominant_color(sys.argv[1]))
    else:
        print("Please provide image path")
