function openModal(type) {
  const text = {
    anonim: "Curhat Anonim dilakukan melalui formulir daring yang dijaga kerahasiaannya.",
    peer: "Dukungan langsung dari peer counselor terlatih.",
    pro: "Rujukan kepada psikolog dari UPK bagi kasus yang membutuhkan penanganan lebih lanjut."
  };

  document.getElementById("modal-text").innerText = text[type];
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
