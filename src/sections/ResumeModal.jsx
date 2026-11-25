import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, FileText } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="border border-[#e2dad0] rounded-xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden shadow-2xl bg-white text-[#171412]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2dad0] bg-[#efe9df]">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-[#ff4829]" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#171412]">
                    Curriculum Vitae
                  </h3>
                  <span className="text-[11px] text-[#77716e] font-mono block">
                    Devesh Kumar Upadhyay &bull; Backend-Focused Full-Stack (.NET 8 / React / Next.js)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={resumeUrl}
                  download="DeveshKumarUpadhyay_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#ff4829] hover:bg-[#e03a1d] rounded-md transition-all cursor-pointer shadow-sm"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume viewer"
                  className="rounded-md border border-[#d6cebf] p-1.5 text-[#77716e] hover:text-[#171412] hover:border-[#ff4829] bg-white transition-colors cursor-pointer shadow-sm"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Document Render Area */}
            <div className="flex-1 bg-[#f6f4f0] overflow-y-auto flex flex-col items-center py-6 px-4 space-y-4">
              <div className="bg-white border border-[#e2dad0] p-3 rounded-xl shadow-md max-w-full overflow-x-auto">
                <Document
                  file={resumeUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex flex-col items-center justify-center py-24 px-12">
                      <div className="w-7 h-7 border-2 border-[#ff4829] border-t-transparent rounded-full animate-spin mb-3" />
                      <p className="text-[#77716e] font-mono text-xs">Loading curriculum vitae document...</p>
                    </div>
                  }
                  error={
                    <div className="text-center py-16 px-6">
                      <p className="text-[#ff4829] text-xs font-semibold mb-2">
                        Unable to render in-browser document preview.
                      </p>
                      <a
                        href={resumeUrl}
                        download="DeveshKumarUpadhyay_Resume.pdf"
                        className="text-xs font-mono text-[#ff4829] hover:underline font-bold"
                      >
                        Download PDF directly
                      </a>
                    </div>
                  }
                >
                  {numPages &&
                    Array.from(new Array(numPages), (el, index) => (
                      <div key={`page_${index + 1}`} className="mb-4 last:mb-0">
                        <Page
                          pageNumber={index + 1}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          className="shadow-sm"
                          width={Math.min(window.innerWidth - 64, 780)}
                        />
                      </div>
                    ))}
                </Document>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
