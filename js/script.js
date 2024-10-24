// Set the user's name when the page loads
window.onload = function() {
    const userName = prompt("Please enter your name:");
    document.getElementById('userName').innerText = userName || 'Guest';
  };
  
  // Form submission with validation and direct output
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission
  
    // Validasi form
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();
    
    if (name === "" || birthdate === "" || !gender || message === "") {
        alert("Please fill in all the required fields.");
        return;
    }
  
    // Ambil nilai gender
    const genderValue = gender.value;
  
    // Tampilkan pesan di halaman
    const formResponse = document.getElementById('form-response');
    formResponse.innerHTML = `
      <p>Thank you, <strong>${name}</strong>.</p>
      <p>Your details:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Date of Birth:</strong> ${birthdate}</li>
        <li><strong>Gender:</strong> ${genderValue}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
    `;
    
    // Reset form
    this.reset();
  });
  
  // Display current time
  function currentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(currentTime, 1000);