let tl = gsap.timeline({ repeat: 0, yoyo: true });

tl.from(".box-int", {
  duration: 4,
  scale: 0,
  stagger: 1.2,
  delay: 1,
});

gsap.from(".btn", { duration: 2, y: "-100%", ease: "bounce" });
