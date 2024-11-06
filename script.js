document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "path/to/your/file.txt"; // Replace with the actual file path
    link.download = "file.txt"; // Specify the file name for download

    // Append link to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the link after triggering the download
    document.body.removeChild(link);
});
