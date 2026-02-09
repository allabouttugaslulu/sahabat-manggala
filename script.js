function openModal(type) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modal-text");

  if (type === "anonim") {
    text.innerHTML = `
      <h3>Curhat Anonim</h3>
      <p>Kamu bisa bercerita secara anonim. Ceritamu akan didengar dengan empati dan dijaga kerahasiaannya.</p>
    `;
  }

  if (type === "peer") {
    text.innerHTML = `
      <h3>Peer Counselor</h3>
      <p>Kamu akan didampingi oleh sesama mahasiswa terlatih yang siap mendengarkan dan menemani.</p>
    `;
  }

  if (type === "pro") {
    text.innerHTML = `
      <h3>Konseling Profesional</h3>
      <p>Layanan konseling dengan tenaga profesional sesuai kebutuhanmu.</p>
    `;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
