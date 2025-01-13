document.getElementById('downloadLink').addEventListener('click', function() {
    // URL to the PDF file
    const fileUrl = 'Resume-ayush.pdf'; // Replace with your actual PDF path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Resume-ayush'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});