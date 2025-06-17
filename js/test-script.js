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
  // 선택지 클릭 이벤트
  document.querySelectorAll('.img-option, .option-button').forEach((el, idx) => {
    el.addEventListener('click', function () {
      // 선택/해제
      if (el.classList.contains('selected')) {
        el.classList.remove('selected');
      } else {
        // 최대 선택 개수 제한
        const selected = document.querySelectorAll('.img-option.selected, .option-button.selected');
        if (selected.length < maxSelect[pageNum]) {
          el.classList.add('selected');
        } else if (maxSelect[pageNum] === 1) {
          selected.forEach(s => s.classList.remove('selected'));
          el.classList.add('selected');
        }
      }
    });
  });

  // 다음으로 버튼 클릭 시 저장
  document.querySelectorAll('.nav-button').forEach(btn => {
    if (btn.textContent.includes('다음으로')) {
      btn.addEventListener('click', function (e) {
        const selected = Array.from(document.querySelectorAll('.img-option.selected, .option-button.selected'));
        if (selected.length === 0) {
          alert('선택지를 선택해 주세요.');
          e.preventDefault();
          return;
        }
        // 선택값 저장
        answers[pageNum - 1] = selected.map(el => el.textContent.trim());
        localStorage.setItem('lushhour_answers', JSON.stringify(answers));
        window.location.href = nextPages[pageNum - 1];
      });
    }
  });
}