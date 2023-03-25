const form = document.querySelector("form");
const storageKey = "user_data";
const storageKey2 = "user_login";

function login(username, password) {
  const data = JSON.parse(localStorage.getItem(storageKey));
  const user = data.find((user) => user.username === username && user.password === password);
  if (user) {
    localStorage.setItem(storageKey2, JSON.stringify(user));
    alert("Login berhasil!");
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  login(username, password);
  form.reset();
});
