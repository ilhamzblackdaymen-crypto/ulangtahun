function openAndShowLetter() {
  const musik = document.getElementById("laguUltah");
  const door = document.getElementById("main-door");
  const letter = document.getElementById("letter-container");
  const trigger = document.getElementById("door-trigger");

  // Putar musik saat klik pertama
  musik.play().catch((error) => {
    console.log("Musik gagal putar: ", error);
  });

  // Animasi buka amplop
  door.classList.add("open");

  // Delay munculnya kertas surat
  setTimeout(() => {
    trigger.style.opacity = "0";
    trigger.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      trigger.style.display = "none";
      letter.classList.add("visible");
    }, 800);
  }, 1200);
}

