from io import BytesIO

from PyPDF2 import PdfReader


class PDFExtractionError(Exception):
    pass


def extract_text_from_pdf(file_storage) -> str:
    try:
        reader = PdfReader(BytesIO(file_storage.read()))
    except Exception as exc:  # pragma: no cover - library-specific failures
        raise PDFExtractionError("Unable to open the uploaded PDF.") from exc
    finally:
        file_storage.stream.seek(0)

    pages = []
    for page in reader.pages:
        pages.append(page.extract_text() or "")

    text = "\n".join(pages).strip()
    if not text:
        raise PDFExtractionError(
            "No readable text was found in the PDF. Upload a text-based resume instead of a scanned image."
        )

    return " ".join(text.split())