const heroText = document.querySelector(".hero-text");

gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        onUpdate: self => {
            heroText.textContent = self.progress < 0.35 ? "Одна ідея" : "Безліч форм";
        }
    }
})
.to(".image-container img", {
    scale: 3,
    opacity: 0,
    transformOrigin: "center center",
    ease: "power1.inOut"
})
.to(".hero-text", {
    scale: 0.9,
    opacity: 0.8,
    ease: "power1.inOut"
}, 0);


document.querySelectorAll(".project-video").forEach((wrap) => {
    const video = wrap.querySelector("video");

    wrap.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            wrap.classList.add("is-playing");
        } else {
            video.pause();
            wrap.classList.remove("is-playing");
        }
    });

    video.addEventListener("ended", () => {
        wrap.classList.remove("is-playing");
    });
});
