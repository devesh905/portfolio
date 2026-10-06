import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker script
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
          className="fixed inset-0 bg-[#141413]/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="border border-[#E5E5DE] rounded-lg w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden shadow-2xl bg-[#FBFBF9] text-[#141413]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5DE] bg-white">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-[#183654]" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#141413]">
                    Curriculum Vitae
                  </h3>
                  <span className="text-[11px] text-[#787A72] font-mono block">
                    Devesh Kumar Upadhyay &bull; Full-Stack &amp; .NET Systems Engineer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={resumeUrl}
                  download="DeveshKumarUpadhyay_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close resume viewer"
                  className="rounded border border-[#E5E5DE] p-1.5 text-[#787A72] hover:text-[#141413] hover:border-[#C8C8BE] bg-[#FBFBF9] transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Document Render Area */}
            <div className="flex-1 bg-[#F3F3ED] overflow-y-auto flex flex-col items-center py-6 px-4">
              <div className="bg-white border border-[#E5E5DE] p-2 rounded shadow-sm max-w-full overflow-x-auto">
                <Document
                  file={resumeUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex flex-col items-center justify-center py-24 px-12">
                      <div className="w-7 h-7 border-2 border-[#183654] border-t-transparent rounded-full animate-spin mb-3" />
                      <p className="text-[#787A72] font-mono text-xs">Loading curriculum vitae document...</p>
                    </div>
                  }
                  error={
                    <div className="text-center py-16 px-6">
                      <p className="text-red-700 text-xs font-semibold mb-2">
                        Unable to render in-browser document preview.
                      </p>
                      <a
                        href={resumeUrl}
                        download
                        className="text-[#183654] hover:underline text-xs font-mono"
                      >
                        Click here to download PDF directly
                      </a>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(700, window.innerWidth - 64)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="max-w-full"
                  />
                </Document>
              </div>
            </div>

            {/* Pagination Controls */}
            {numPages > 1 && (
              <div className="flex items-center justify-center gap-5 py-3 border-t border-[#E5E5DE] bg-white text-xs">
                <button
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  className="w-7 h-7 rounded border border-[#E5E5DE] bg-[#FBFBF9] flex items-center justify-center text-[#4A4C46] hover:text-[#141413] disabled:opacity-30 cursor-pointer"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="text-[#787A72] font-mono text-xs">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  className="w-7 h-7 rounded border border-[#E5E5DE] bg-[#FBFBF9] flex items-center justify-center text-[#4A4C46] hover:text-[#141413] disabled:opacity-30 cursor-pointer"
                >
                  <ChevronRight size={14} />
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
