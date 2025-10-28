document.addEventListener('DOMContentLoaded', function () {
  const signinForm = document.getElementById('signinForm');
  const resetForm = document.getElementById('resetForm');
  const errorEl = document.getElementById('error');
  const resetMsg = document.getElementById('resetMsg');
  const forgot = document.getElementById('forgot');
  const signup = document.getElementById('signup');

  const showError = (el, msg) => { el.hidden = false; el.textContent = msg; };
  const clearError = (el) => { if (el) { el.hidden = true; el.textContent = ''; } };

  const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  const isPhone = s => /^(\+?\d{7,15})$/.test(s.replace(/[()\s-]/g, ''));

  // ✅ Sign In Form
  if (signinForm) {
    signinForm.addEventListener('submit', e => {
      e.preventDefault();

      const user = signinForm.user.value.trim();
      const pass = signinForm.pass.value.trim();

      if (!user) return showError(errorEl, 'Enter email or phone.');
      if (!(isEmail(user) || isPhone(user))) return showError(errorEl, 'Invalid email or phone.');
      if (!pass) return showError(errorEl, 'Enter password.');

      // ✅ Show success message
      clearError(errorEl);
      errorEl.hidden = false;
      errorEl.style.background = 'rgba(0,255,128,0.05)';
      errorEl.style.borderLeftColor = 'rgba(0,255,128,0.8)';
      errorEl.style.color = '#fff';
      errorEl.textContent = 'Login successful';

      // ✅ Redirect to dashboard
      setTimeout(() => {
        localStorage.setItem('isLoggedIn', 'true');
        signinForm.reset();
        window.location.replace('dashboard.html'); // ✅ replaces current history entry
      }, 1000);
    });
  }

  // ✅ Reset Password Form
  if (resetForm) {
    resetForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = resetForm.email.value.trim();
      if (!email) {
        resetMsg.textContent = 'Please enter your email or phone.';
        resetMsg.style.color = '#ffd2d2';
        return;
      }
      resetMsg.style.color = '#e6ffd8';
      resetMsg.textContent = 'If that account exists, a reset link has been sent.';
      setTimeout(() => window.location.replace('index.html'), 2200);
    });
  }

  // ✅ Optional demo links
  if (forgot) forgot.addEventListener('click', e => { e.preventDefault(); window.location.href = 'page1.html'; });
  if (signup) signup.addEventListener('click', e => { e.preventDefault(); alert('Signup link clicked — add signup page.'); });
});
