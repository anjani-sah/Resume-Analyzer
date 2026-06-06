const API_BASE = "/api";

export async function analyzeResume(file: File): Promise<Response> {
  const formData = new FormData();
  formData.append("resume", file);
  return fetch(`${API_BASE}/analyze`, {
    method: "POST",
    body: formData,
  });
}
