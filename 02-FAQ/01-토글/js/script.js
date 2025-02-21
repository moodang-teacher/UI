document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-wrap > ul > li");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".answer-wrap");

      item.classList.toggle("active");
      answer.classList.toggle("on");
    });
  });
});
