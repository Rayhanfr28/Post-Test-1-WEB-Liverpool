const form = document.querySelector('form');
const storageKey = 'data_course';

function storeData(nama, email, kelas, course, gender, reason) {
const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];
data.push({nama, email, kelas, course, gender, reason});
sessionStorage.setItem(storageKey, JSON.stringify(data));}
form.addEventListener('submit', (event) => {
event.preventDefault();

const nama = form.nama.value;
const email = form.email.value;
const kelas = form.elements.kelas.value;
const course = Array.from(form.querySelectorAll('input[name="course"]:checked')).map((input) => input.value);
const gender= form.elements.gender.value;
const reason= form.elements.reason.value;

storeData(nama, email, kelas, course, gender, reason);
alert('Data Berhasil di simpan');
window.location.href = "datatampil.html";
form.reset();
});
