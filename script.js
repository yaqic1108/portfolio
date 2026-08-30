const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open menu");
  });
});

// Contact form handler
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formsubmit.co/yaqichew@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        // Show success message
        formStatus.style.display = "block";
        
        // Clear the form
        contactForm.reset();
        contactForm.querySelector("button").disabled = true;
        
        // Re-enable button after 3 seconds
        setTimeout(() => {
          contactForm.querySelector("button").disabled = false;
          formStatus.style.display = "none";
        }, 3000);
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
      console.error("Form submission error:", error);
    }
  });
}

document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const images = [...carousel.querySelectorAll(".project-carousel-image")];
  const previousButton = carousel.querySelector("[data-carousel-previous]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const count = carousel.querySelector("[data-carousel-count]");
  let activeIndex = 0;

  const showImage = step => {
    images[activeIndex].classList.remove("is-active");
    images[activeIndex].hidden = true;
    images[activeIndex].style.display = "none";
    activeIndex = (activeIndex + step + images.length) % images.length;
    images[activeIndex].classList.add("is-active");
    images[activeIndex].hidden = false;
    images[activeIndex].style.display = "";
    if (count) count.textContent = `${activeIndex + 1} / ${images.length}`;
  };

  previousButton?.addEventListener("click", () => showImage(-1));
  nextButton?.addEventListener("click", () => showImage(1));
});

// Research Poster PDF Handler
const expandPosterBtn = document.getElementById("expandPosterBtn");

expandPosterBtn?.addEventListener("click", () => {
  window.open("../Files/surgicalinstrumentposter.pdf", "_blank", "noopener,noreferrer");
});

