document.getElementById('downloadButton').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'C:\portfolio';
    link.download = 'Resume-ayush';  // Desired name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
