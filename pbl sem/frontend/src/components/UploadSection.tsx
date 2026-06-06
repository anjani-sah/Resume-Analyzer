import { useState, useCallback } from "react";
import { Upload, FileText, Loader2, AlertCircle } from "lucide-react";
import type { AnalysisResult, AnalysisResponse } from "../types";
import { analyzeResume } from "../lib/api";

interface UploadSectionProps {
  onResult: (result: AnalysisResult) => void;
}

export default function UploadSection({ onResult }: UploadSectionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback((f: File) => {
    if (!f.name.toLowerCase().endsWith(".pdf")) {
      setError("Only PDF files are supported.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("File must be smaller than 5 MB.");
      return;
    }
    setError(null);
    setFile(f);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const res = await analyzeResume(file);
      const data: AnalysisResponse = await res.json();
      if (data.error) {
        setError(data.error);
      } else if (data.result) {
        onResult(data.result);
      }
    } catch {
      setError("Network error. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[88vh] px-6 py-16 max-w-5xl w-full">
      <h2
        className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-1px] text-center font-normal max-w-3xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Upload your{" "}
        <em className="not-italic text-[hsl(var(--muted-foreground))]">resume</em>
      </h2>

      <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-2xl mt-6 leading-relaxed text-center">
        Drop a PDF and get instant AI-powered analysis with skill mapping, scoring, and a growth roadmap.
      </p>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`animate-fade-rise-delay mt-12 w-full rounded-2xl p-16 sm:p-20 text-center transition-all cursor-pointer liquid-glass ${
          dragging ? "scale-[1.02]" : ""
        }`}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <input
          id="file-input"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />

        {file ? (
          <div className="flex flex-col items-center gap-3">
            <FileText className="w-14 h-14 text-[hsl(var(--muted-foreground))]" />
            <span className="text-[hsl(var(--foreground))] text-lg sm:text-xl font-medium">{file.name}</span>
            <span className="text-[hsl(var(--muted-foreground))] text-sm">
              {(file.size / 1024).toFixed(0)} KB · Click or drop to replace
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Upload className="w-16 h-16 text-[hsl(var(--muted-foreground))]" />
            <span className="text-[hsl(var(--foreground))] text-xl sm:text-2xl font-medium">
              Drag & drop your PDF here
            </span>
            <span className="text-[hsl(var(--muted-foreground))] text-sm">
              or click to browse · max 5 MB
            </span>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!file || loading}
        className={`mt-8 liquid-glass rounded-full px-14 py-5 text-base text-[hsl(var(--foreground))] transition-all cursor-pointer ${
          !file || loading ? "opacity-40 cursor-not-allowed" : "hover:scale-[1.03]"
        }`}
      >
        {loading ? (
          <span className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin" />
            Analyzing…
          </span>
        ) : (
          "Run Analysis"
        )}
      </button>
    </section>
  );
}
