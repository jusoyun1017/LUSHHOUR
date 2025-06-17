document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".img-option");
  const nextButton = document.querySelector(".nav-button:last-of-type");
  const selected = new Set();

  // 현재 페이지 번호 추출
  const page = parseInt(window.location.pathname.match(/\d+/)?.[0] || "1");
  const isAutoNext = page >= 5; // 5~6페이지는 자동 이동

  const updateNextButtonState = () => {
    if (!isAutoNext) {
      nextButton.disabled = selected.size !== 2;
      nextButton.style.opacity = selected.size === 2 ? "1" : "0.5";
      nextButton.style.cursor = selected.size === 2 ? "pointer" : "not-allowed";
    }
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.classList.contains("selected")) {
        option.classList.remove("selected");
        selected.delete(option);
      } else {
        const max = isAutoNext ? 1 : 2;
        if (selected.size < max) {
          option.classList.add("selected");
          selected.add(option);
        }
      }

      // 자동 이동 (5~6페이지에서 1개 선택 시)
      if (isAutoNext && selected.size === 1) {
        const nextPage = `test${page + 1}.html`;
        window.location.href = nextPage;
      } else {
        updateNextButtonState();
      }
    });
  });

  // 버튼 클릭 시 (1~4페이지에서만)
  if (!isAutoNext) {
    nextButton.addEventListener("click", () => {
      if (selected.size === 2) {
        const nextPage = `test${page + 1}.html`;
        window.location.href = nextPage;
      }
    });
  }

  updateNextButtonState();
});
