import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js needs its worker script — loaded from a CDN matching the installed version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Close on Escape key, with proper cleanup to avoid leaked listeners
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
    setPageNumber(1);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0e17] border border-white/10 rounded-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg">Resume</h3>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="text-white/60 hover:text-white transition-colors p-1"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-white/5 overflow-y-auto flex flex-col items-center py-4">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <p className="text-white/50 text-sm py-10">Loading resume...</p>
                }
                error={
                  <p className="text-red-400 text-sm py-10">
                    Couldn't load the resume preview.
                  </p>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(640, window.innerWidth - 64)}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>

            {numPages > 1 && (
              <div className="flex items-center justify-center gap-4 py-3 border-t border-white/10">
                <button
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  className="text-white/60 hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-white/50 text-sm font-mono">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  className="text-white/60 hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
