document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-wrap > ul > li");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".answer-wrap");

      // 모든 활성화 상태를 초기화
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".answer-wrap");
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherAnswer.classList.remove("on");
        }
      });

      // 선택된 아이템 활성화/비활성화
      item.classList.toggle("active");
      answer.classList.toggle("on");
    });
  });
});
