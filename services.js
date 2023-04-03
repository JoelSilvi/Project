let tl = gsap.timeline({ repeat: 0, yoyo: true });

tl.from(".box-int", {
  duration: 5,
  scale: 0,
  stagger: 0.5,
  delay: 2,
});

gsap.from(".btn", { duration: 2, y: "-100%", ease: "bounce" });
