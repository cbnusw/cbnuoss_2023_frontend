import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ pdfFileURL }) {
  const [numPages, setNumPages] = useState(0);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <Document file={pdfFileURL} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from({ length: numPages }, (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          scale={1.75}
        />
      ))}
    </Document>
  );
}
