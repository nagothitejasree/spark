document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const authModal = document.getElementById('authModal');
  const closeModal = document.querySelector('.close');
  const showLogin = document.getElementById('showLogin');
  const showSignup = document.getElementById('showSignup');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const logoutBtn = document.getElementById('logoutBtn');

  // Load registered user from localStorage
  let registeredUser = JSON.parse(localStorage.getItem('registeredUser')) || null;

  // Open modal
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      authModal.style.display = 'block';
      showLoginForm();
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      authModal.style.display = 'block';
      showSignupForm();
    });
  }

  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      authModal.style.display = 'none';
    });
  }

  // Toggle forms
  if (showLogin && showSignup) {
    showLogin.addEventListener('click', showLoginForm);
    showSignup.addEventListener('click', showSignupForm);
  }

  function showLoginForm() {
    showLogin.classList.add('active');
    showSignup.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  }

  function showSignupForm() {
    showSignup.classList.add('active');
    showLogin.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }

  // Prevent browser autofill
  document.querySelectorAll('input').forEach(input => {
    input.autocomplete = 'off';
  });

  // Handle Signup
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value;

      if (name && email && password) {
        registeredUser = { name, email, password };
        localStorage.setItem('registeredUser', JSON.stringify(registeredUser));
        alert('Signup successful! You can now log in.');
        showLoginForm();
      }
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailOrUser = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      if (
        registeredUser &&
        (registeredUser.email === emailOrUser || registeredUser.name === emailOrUser)
      ) {
        if (registeredUser.password === password) {
          alert('Login successful!');
          authModal.style.display = 'none';
          window.location.href = 'dashboard2.html';
        } else {
          alert('Wrong password.');
        }
      } else {
        alert('User not found. Please sign up first.');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission if inside a form
        alert("First you have to register.");
        searchInput.value = ''; // Optional: clear input after message
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const messageBox = document.getElementById('searchMessage');

  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        messageBox.style.display = 'block';
        searchInput.value = '';
      }
    });
  

const bloodRequests = [
  { group: "B+", location: "KGH", contact: "9493449440" },
  { group: "O+", location: "Gopalapatnam", contact: "9988776655" },
  { group: "AB-", location: "MVP", contact: "9845678123" }
];

function handleSearch(e) {
  e.preventDefault();
  const group = document.getElementById("searchBloodGroup").value;
  const location = document.getElementById("searchLocation").value.toLowerCase();
  const resultsDiv = document.getElementById("searchResults");

  const results = bloodRequests.filter(req =>
    (group === "" || req.group === group) &&
    (location === "" || req.location.toLowerCase().includes(location))
  );

  resultsDiv.innerHTML = results.length === 0
    ? "<p>No matching blood requests found.</p>"
    : results.map(r => `
      <div class="service-box">
        <h3>${r.group} Needed</h3>
        <p><strong>Location:</strong> ${r.location}</p>
        <p><strong>Contact:</strong> ${r.contact}</p>
      </div>
    `).join('');
}
  }function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");
    window.location.href = "home.html"; // Change to your homepage
  } else {
    alert("Invalid email or password. Try again.");
  }
}
  