// 1. 답변 불러오기
const answers = JSON.parse(localStorage.getItem('lushhour_answers') || '[]');

// 2. 키워드 집계
const keywordCount = {};
answers.flat().forEach(ans => {
  cocktails.forEach(cocktail => {
    cocktail.hashtags.forEach(tag => {
      // 선택지와 해시태그가 일부라도 일치하면 카운트
      if (ans.replace('#', '').includes(tag.replace('#', ''))) {
        keywordCount[tag] = (keywordCount[tag] || 0) + 1;
      }
    });
  });
});

// 3. 칵테일별 점수 계산
cocktails.forEach(cocktail => {
  cocktail.score = cocktail.hashtags.reduce(
    (sum, tag) => sum + (keywordCount[tag] || 0), 0
  );
});

// 4. 점수순 정렬 후 상위 3개 추출
const top3 = cocktails
  .slice() // 원본 배열 보존
  .sort((a, b) => b.score - a.score)
  .slice(0, 3);

// 5. 결과 카드 자동 변경
const cardEls = document.querySelectorAll('.cards .card');
top3.forEach((cocktail, idx) => {
  if (!cardEls[idx]) return;
  cardEls[idx].querySelector('.cocktail-img').src = cocktail.img;
  cardEls[idx].querySelector('.cocktail-img').alt = cocktail.name_en;
  cardEls[idx].querySelector('.cocktail-title').textContent = cocktail.name_en;
  cardEls[idx].querySelector('.cocktail-subtitle').textContent = cocktail.name_ko;
  cardEls[idx].querySelector('.hashtags').innerHTML = cocktail.hashtags
    .map(tag => `<span class="hashtag">${tag}</span>`).join('');
  cardEls[idx].querySelector('.recipe').innerHTML = cocktail.recipe;
  cardEls[idx].querySelector('.btn').href = cocktail.link;
});