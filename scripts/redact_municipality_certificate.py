from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "private-source" / "municipality-experience-original.pdf"
OUTPUT = ROOT / "public" / "certificates" / "municipality-experience.pdf"

reader = PdfReader(str(SOURCE))
writer = PdfWriter()

for page_number, page in enumerate(reader.pages):
    if page_number == 0:
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        overlay_buffer = BytesIO()
        overlay_canvas = canvas.Canvas(overlay_buffer, pagesize=(width, height))

        # The source is a full-page scan. This rectangle covers only the national
        # identity number while preserving the person's name and certificate text.
        overlay_canvas.setFillColorRGB(1, 1, 1)
        overlay_canvas.rect(167, 547, 73, 27, stroke=0, fill=1)
        overlay_canvas.save()

        overlay_buffer.seek(0)
        overlay_page = PdfReader(overlay_buffer).pages[0]
        page.merge_page(overlay_page)

    writer.add_page(page)

with OUTPUT.open("wb") as stream:
    writer.write(stream)

print(OUTPUT)
