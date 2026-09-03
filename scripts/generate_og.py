from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og.png"

WIDTH, HEIGHT = 1200, 630
COAL = "#11110f"
COAL_SOFT = "#1b1b18"
INK = "#f4f0e7"
MUTED = "#b9b3a8"
ACCENT = "#d97745"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


image = Image.new("RGB", (WIDTH, HEIGHT), COAL)
draw = ImageDraw.Draw(image)

# A quiet editorial composition: typography and a custom monogram, without
# template-like grids, glowing dots, fake terminals, or invented metrics.
draw.rectangle((0, 0, 20, HEIGHT), fill=ACCENT)
draw.rectangle((760, 0, WIDTH, HEIGHT), fill=COAL_SOFT)

# MA monogram.
stroke = 5
draw.line([(72, 104), (72, 50), (94, 82), (116, 50), (116, 104)], fill=ACCENT, width=stroke)
draw.line([(134, 104), (152, 50), (174, 104)], fill=INK, width=stroke)
draw.line([(141, 84), (166, 84)], fill=INK, width=stroke)

draw.text((200, 61), "MOHAMMAD ABDELFATTAH", font=font("segoeuib.ttf", 22), fill=INK)
draw.text((954, 67), "TULKARM, PALESTINE", font=font("consola.ttf", 14), fill=MUTED)

draw.text((72, 180), "Secure .NET systems", font=font("segoeuib.ttf", 64), fill=INK)
draw.text((72, 253), "for real operations.", font=font("segoeuib.ttf", 64), fill=INK)

draw.text((800, 200), "BACKEND", font=font("segoeuib.ttf", 42), fill=ACCENT)
draw.text((800, 248), "DEVELOPER", font=font("segoeuib.ttf", 42), fill=INK)

draw.line([(72, 390), (700, 390)], fill="#44413b", width=2)
draw.text((72, 425), "ASP.NET CORE  ·  C#  ·  SQL SERVER", font=font("consola.ttf", 20), fill=MUTED)
draw.text((72, 474), "Backend systems · Data workflows · Practical software", font=font("segoeui.ttf", 25), fill=INK)

draw.rectangle((800, 390, 1128, 520), outline="#45423c", width=2)
draw.text((824, 414), "SELECTED WORK", font=font("consola.ttf", 15), fill=ACCENT)
draw.text((824, 452), "Municipal system contribution", font=font("segoeuib.ttf", 19), fill=INK)
draw.text((824, 484), "23+ endpoints · 22 tests", font=font("segoeui.ttf", 18), fill=MUTED)

draw.text((72, 570), "github.com/mohammadimad", font=font("consola.ttf", 15), fill=MUTED)

image.save(OUTPUT, optimize=True)
print(OUTPUT)
