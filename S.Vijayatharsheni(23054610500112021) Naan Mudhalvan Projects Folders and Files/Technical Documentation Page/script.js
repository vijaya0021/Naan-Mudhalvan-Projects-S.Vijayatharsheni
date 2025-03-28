function openPDF(filename) {
    const pdfWindow = window.open(filename, '_blank');
    if (!pdfWindow) {
        alert("Please allow pop-ups to view the document.");
    }
}