const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const waBtn = document.getElementById("modal-wa");

function openModal(type) {
  modal.style.display = "flex";
  waBtn.style.display = "none";

  if (type === "anonim") {
    title.innerText = "Deskripsi Layanan Curhat Anonim";
    desc.innerText =
      "Curhat dilakukan melalui formulir daring yang dijaga kerahasiaannya.";
  }

  if (type === "peer") {
    title.innerText = "Cara Mendaftar Layanan Peer Counselor";
    desc.innerText =
      "Isi formulir pendaftaran, lalu kamu akan dihubungi oleh peer counselor. Hubungi CP untuk konfirmasi.";
    waBtn.style.display = "block";
    waBtn.href = "https://wa.me/6281318195588";
  }

  if (type === "pro") {
    title.innerText = "Cara Mendaftar Konseling Profesional";
    desc.innerText =
      "Isi formulir, kemudian akan diarahkan untuk proses lanjutan dengan profesional. Hubungi CP untuk konfirmasi";
    waBtn.style.display = "block";
    waBtn.href = "https://wa.me/6281318195588";
  }
}

function closeModal() {
  modal.style.display = "none";
}

const cards = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

