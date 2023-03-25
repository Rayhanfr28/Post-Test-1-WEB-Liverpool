const form = document.querySelector("form");
const storageKey = "user_data";

function storeData(username, email, password) {
  const data = JSON.parse(localStorage.getItem(storageKey)) || [];
  data.push({ username, email, password });

  localStorage.setItem(storageKey, JSON.stringify(data));
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  storeData(username, email, password);
  alert("Registrasi berhasil!");
  window.location.href = "zlogin.html";

  form.reset();
});
