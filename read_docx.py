
import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Namespace map usually found in docx
            namespaces = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            
            text_parts = []
            # Find all paragraphs
            for p in tree.findall('.//w:p', namespaces):
                # Find all runs in the paragraph
                paragraph_text = []
                for r in p.findall('.//w:r', namespaces):
                    # Find text in the run
                    t = r.find('.//w:t', namespaces)
                    if t is not None and t.text:
                        paragraph_text.append(t.text)
                
                if paragraph_text:
                    text_parts.append(''.join(paragraph_text))
            
            return '\n'.join(text_parts)
            
    except Exception as e:
        return f"Error reading docx: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_docx.py <path_to_docx>")
    else:
        file_path = sys.argv[1]
        if os.path.exists(file_path):
            print(read_docx(file_path))
        else:
            print(f"File not found: {file_path}")
