(() => {
  const form = document.getElementById('registerForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passInput = document.getElementById('password');
  const errEl = document.getElementById('regError');

  const showError = (msg) => {
    errEl.hidden = false;
    errEl.textContent = msg;
  };
  const clearError = () => {
    errEl.hidden = true;
    errEl.textContent = '';
  };

  const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  const isPhone = (s) => {
    const cleaned = s.replace(/[()\s-]/g, '');
    return /^(\+?\d{7,15})$/.test(cleaned);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passInput.value;

    if (!name) { showError('Please enter your full name.'); nameInput.focus(); return; }
    if (!email || !isEmail(email)) { showError('Please enter a valid email.'); emailInput.focus(); return; }
    if (!phone || !isPhone(phone)) { showError('Please enter a valid phone number.'); phoneInput.focus(); return; }
    if (!password) { showError('Please enter a password.'); passInput.focus(); return; }

    // Simulated registration success
    clearError();
    alert('Registration successful (demo). Redirecting to Sign In...');
    form.reset();
    window.location.href = 'index.html';
  });
})();
