gsap.from(".header", { duration: 2, y: "-100%", ease: "bounce" });
gsap.from(".liMenu", { duration: 2, opacity: 0, delay: 1, stagger: 0.7 });

gsap.from(".img-principal", {
  duration: 5,
  x: "-100%",
  ease: "elastic",
});

gsap.fromTo(
  ".double_container",
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 2, opacity: 1, scale: 1, rotation: 0 }
);

let tl = gsap.timeline({ repeat: 0, yoyo: true });
// tl.from(".logo", {
//   duration: 2,
//   rotate: 360,
// });

tl.from(".knowledge", {
  duration: 4,
  scale: 0,
  backgroundColor: "black",
  borderRadius: "50",
  stagger: 0.5,
  delay: 4,
});

gsap.from(".box-show", { duration: 1, opacity: 0, delay: 5, stagger: 1 });
