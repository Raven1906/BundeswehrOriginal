// Sanfte Scroll-Animation (sichtbar, aber ruhig)
document.querySelectorAll("section").forEach(sec=>{
  sec.addEventListener("mouseenter",()=>{
    sec.style.filter="brightness(1.05)";
  });
  sec.addEventListener("mouseleave",()=>{
    sec.style.filter="brightness(1)";
  });
});
