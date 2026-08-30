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

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const name = nameInput?.value || "";
    const email = emailInput?.value || "";
    const message = messageInput?.value || "";

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Format the message for email
    const emailContent = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    
    // Try to copy to clipboard
    navigator.clipboard.writeText(emailContent).then(() => {
      alert(`Email content copied to clipboard!\n\nSend to: yaqichew@gmail.com\nSubject: Portfolio inquiry from ${name}\n\nYour message:\n${emailContent}`);
    }).catch(err => {
      // Fallback if clipboard fails
      alert(`Your message:\n\nTo: yaqichew@gmail.com\nSubject: Portfolio inquiry from ${name}\n\n${emailContent}`);
    });
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

