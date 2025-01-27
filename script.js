document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const videoUrl = document.getElementById('videoUrl');
  const result = document.getElementById('result');

  downloadBtn.addEventListener('click', async () => {
    const url = videoUrl.value.trim();
    
    if (!url) {
      showMessage('Please enter an Instagram video URL', 'error');
      return;
    }

    if (!isValidInstagramUrl(url)) {
      showMessage('Please enter a valid Instagram video URL', 'error');
      return;
    }

    showMessage('Processing your request...', 'info');
    
    // Simulate API call (In real implementation, you would call your backend API)
    try {
      await simulateDownload();
      showMessage('Video processed successfully! Click the button below to download', 'success');
      
      // Create download button
      const downloadLink = document.createElement('a');
      downloadLink.href = '#'; // In real implementation, this would be the actual video URL
      downloadLink.className = 'download-link';
      downloadLink.innerHTML = '<i class="fas fa-download"></i> Download Video';
      downloadLink.onclick = (e) => {
        e.preventDefault();
        alert('In a real implementation, this would download the video!');
      };
      
      result.appendChild(downloadLink);
    } catch (error) {
      showMessage('Error processing video. Please try again.', 'error');
    }
  });

  function isValidInstagramUrl(url) {
    return url.includes('instagram.com/');
  }

  function showMessage(message, type) {
    result.innerHTML = `<div class="message ${type}">${message}</div>`;
  }

  function simulateDownload() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});