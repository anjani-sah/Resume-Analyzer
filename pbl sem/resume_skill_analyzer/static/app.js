const fileInput = document.getElementById("resume");
const fileName = document.getElementById("file-name");
const dropzone = document.getElementById("upload-dropzone");

if (fileInput && fileName && dropzone) {
    fileInput.addEventListener("change", () => {
        const selectedFile = fileInput.files?.[0];
        fileName.textContent = selectedFile ? selectedFile.name : "Machine-readable PDF resumes work best.";
    });

    ["dragenter", "dragover"].forEach((eventName) => {
        dropzone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropzone.classList.add("dragover");
        });
    });

    ["dragleave", "drop"].forEach((eventName) => {
        dropzone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropzone.classList.remove("dragover");
        });
    });
}