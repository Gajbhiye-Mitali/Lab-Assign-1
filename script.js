let isLogin = true;

function toggleForm() {
  const title = document.getElementById('form-title');
  const emailInput = document.getElementById('email');
  const button = document.querySelector('button');
  const toggleText = document.getElementById('toggle-text');

  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = 'Login';
    emailInput.style.display = 'none';
    button.innerText = 'Login';
    toggleText.innerHTML = `Don't have an account? <span onclick="toggleForm()">Register</span>`;
  } else {
    title.innerText = 'Register';
    emailInput.style.display = 'block';
    button.innerText = 'Register';
    toggleText.innerHTML = `Already have an account? <span onclick="toggleForm()">Login</span>`;
  }
}
