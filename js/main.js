// Example: Dynamically update the scrolling text content
const scrollingText = document.querySelector('.scrolling-text');
if (scrollingText) {
  scrollingText.innerHTML = `
    Born in Montana <br>
    Joined U.S. Navy <br>
    Attended Naval Nuclear Training Pipeline <br>
    Worked on Electrical Generation Systems <br>
    Worked on Nuclear Reactor Components <br>
    Worked on Nuclear Support Systems <br>
    Made the Rank of Chief Petty Officer <br>
    Retired from U.S. Navy <br>
    Works on CNC Machines <br>
    Performs Electrical Troubleshooting & Repairs <br>
    Performs Mechanical Troubleshooting & Repairs <br>
    Performs Electronic Troubleshooting & Repairs <br>
    Lives in Newport Oregon <br>
    Attending Oregon State University <br>
    Majoring in Computer Systems Engineering <br>
    Experience with Python, Rust, JavaScript, SQLite <br>
    Experience with UI/UX design <br>
    Project Manager for Capstone Project <br>
    Built Data Acquisition System for Capstone <br>
    Skilled Woodworker <br>
    Enjoys Creating Digital Art <br>
    Enjoys Spending Time Outdoors <br>
    Is a Skilled Technician <br>
    Is a Problem Solver <br>
    Is a Leader <br>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  // After navigation is loaded (for load-components.js compatibility)
  setTimeout(() => {
    const navLinks = document.querySelectorAll('nav a[data-preview]');
    
    navLinks.forEach(link => {
      const preview = link.querySelector('.nav-preview');
      const previewImage = link.getAttribute('data-preview');
      
      if (preview && previewImage) {
        preview.style.backgroundImage = `url(${previewImage})`;
        console.log('Set preview image:', previewImage); // Debug line
      }
    });
  }, 100); // Small delay to ensure navigation is loaded
});

document.addEventListener('DOMContentLoaded', function() {
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    const note = document.createElement('p');
    note.className = 'browser-note';
    note.innerHTML = "Firefox users: If the video doesn't play, click the shield icon in the address bar and disable Enhanced Tracking Protection for this site.";
    document.querySelector('.video-container').appendChild(note);
  }
});