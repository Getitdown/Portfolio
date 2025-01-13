gsap.from(".header", {
  delay: 1,
  duration: 2,
  y: -20,
  ease: "power1.out",
  opacity: 0,
});
gsap.from(".myFoto", { x: 30, duration: 1, opacity: 0, delay: 3 });
gsap.from(".aboutMe", { x: -30, duraton: 4, delay: 4.5, opacity: 0 });
gsap.from(".heading", { delay: 2, duration: 2, opacity: 0, y: -100 });
gsap.from(".project-preview", { y: 100, delay: 2, duration: 2, opacity: 0 });
gsap.from(".content", { x: -30, duraton: 1, delay: 3, opacity: 0 });
gsap.from(".experience-item", { y: 100, delay: 2, duration: 2, opacity: 0 });

const button = document.querySelector(".btn");
button.addEventListener("click", myFunction);

function myFunction() {
  window.location.href = "contact.html";
}
