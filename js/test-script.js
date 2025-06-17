// 선택 결과를 저장할 배열
let answers = JSON.parse(localStorage.getItem('lushhour_answers') || '[]');

// 각 테스트별 최대 선택 개수
const maxSelect = {
  1: 2, 2: 2, 3: 2, 4: 2, 5: 1, 6: 1
};

// 현재 페이지 번호 추출 (test1.html → 1)
const pageNum = (() => {
  const match = location.pathname.match(/test(\d)\.html$/);
  return match ? parseInt(match[1], 10) : null;
})();

const nextPages = [
  "test2.html",
  "test3.html",
  "test4.html",
  "test5.html",
  "test6.html",
  "../result/result.html"
];

if (pageNum) {
  const max = maxSelect[pageNum];
  const nextBtn = Array.from(document.querySelectorAll('.nav-button')).find(btn => btn.textContent.includes('다음으로'));

  // 선택지 클릭 이벤트
  document.querySelectorAll('.img-option, .option-button').forEach((el) => {
    el.addEventListener('click', function () {
      const selected = document.querySelectorAll('.img-option.selected, .option-button.selected');
      if (el.classList.contains('selected')) {
        el.classList.remove('selected');
      } else {
        if (selected.length < max) {
          el.classList.add('selected');
        } else if (max === 1) {
          selected.forEach(s => s.classList.remove('selected'));
          el.classList.add('selected');
        }
      }
      // 선택 개수에 따라 다음 버튼 활성/비활성
      const nowSelected = document.querySelectorAll('.img-option.selected, .option-button.selected').length;
      if (nextBtn) nextBtn.disabled = (nowSelected !== max);
    });
  });

  // 페이지 진입 시 버튼 비활성화
  if (nextBtn) nextBtn.disabled = true;

  // 다음으로 버튼 클릭 시 저장 및 이동
  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      const selected = Array.from(document.querySelectorAll('.img-option.selected, .option-button.selected'));
      if (selected.length !== max) {
        e.preventDefault();
        return;
      }
      // 선택값 저장
      answers[pageNum - 1] = selected.map(el => el.textContent.trim());
      localStorage.setItem('lushhour_answers', JSON.stringify(answers));
      window.location.href = nextPages[pageNum - 1];
    });
  }
}