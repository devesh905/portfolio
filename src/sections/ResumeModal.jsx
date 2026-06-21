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
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel border border-slate-800/80 rounded-[28px] w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900/60">
              <h3 className="text-white font-bold text-lg font-sans">Curriculum Vitae</h3>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer shadow-md"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="rounded-full bg-slate-900 border border-slate-850 p-2 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Resume Viewer Container */}
            <div className="flex-1 bg-slate-950/40 overflow-y-auto flex flex-col items-center py-6 px-4">
              <div className="bg-slate-900 border border-slate-800/60 p-2 rounded-2xl shadow-xl max-w-full overflow-x-auto">
                <Document
                  file={resumeUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex flex-col items-center justify-center py-24 px-12">
                      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-slate-400 font-mono text-xs">Parsing CV Document...</p>
                    </div>
                  }
                  error={
                    <div className="text-center py-20 px-8">
                      <p className="text-red-400 text-sm font-semibold mb-2">
                        Unable to render document preview.
                      </p>
                      <a
                        href={resumeUrl}
                        download
                        className="text-cyan-400 hover:text-cyan-350 text-xs font-mono underline"
                      >
                        Direct download link
                      </a>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(600, window.innerWidth - 64)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="max-w-full"
                  />
                </Document>
              </div>
            </div>

            {/* Pagination Controls */}
            {numPages > 1 && (
              <div className="flex items-center justify-center gap-6 py-4 border-t border-slate-900/60 bg-slate-950/20">
                <button
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-all cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-slate-400 font-mono text-xs">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 disabled:opacity-30 disabled:hover:text-slate-300 disabled:hover:border-slate-800 transition-all cursor-pointer"
                >
                  <ChevronRight size={16} />
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
