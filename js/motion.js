// motion.js
// GSAP 및 ScrollTrigger 애니메이션 제어 스크립트
window.addEventListener("load", () => {

  const track = document.querySelector(".flow-track");
  const items = document.querySelectorAll(".flow-item");

  // 2번 복제
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const distance = track.scrollWidth / 2;

  gsap.to(track, {
    x: -distance,
    duration: 10,
    ease: "none",
    repeat: -1
  });

});