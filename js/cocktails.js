const cocktails = [
  {
    name_en: "Appletini",
    name_ko: "애플 마르티니",
    img: "cocktail_list/images/애플마티니.jpg",
    hashtags: [
      "#초보자", "#힙합", "#새콤한", "#약한 탄산", "#적당한 도수"
    ],
    recipe: `
      1. 쉐이커에 얼음을 채워줍니다.<br>
      2. 보드카 30ml, 애플 리큐어 30ml, 레몬 주스 15ml, 설탕 시럽 10ml를 넣습니다.<br>
      3. 쉐이커를 잘 흔들어 재료를 섞어줍니다.<br>
      4. 혼합물을 스트레이너를 사용해 칵테일 잔에 따릅니다.<br>
      <b>TIP!</b> 사과 조각으로 맛있는 장식을 취하는 건 어떨까요?
    `,
    link: "recipe/appletini.html"
  },
  {
    name_en: "B&B",
    name_ko: "비앤비",
    img: "cocktail_list/images/비앤비.jpg",
    hashtags: [
      "#유럽 바", "#오페라", "#달콤하고 부드러운", "#탄산 없음", "#적당한 도수"
    ],
    recipe: `
      1. 하이볼 잔에 얼음을 채워줍니다.<br>
      2. 브랜디 30ml를 넣습니다.<br>
      3. 베네딕틴 30ml를 추가합니다.<br>
      4. 막대기로 잘 저어줍니다.<br>
      5. 마지막으로 장식용 레몬 조각을 올려주면 완성!
    `,
    link: "recipe/b&b.html"
  },
  {
    name_en: "Bloody Mary",
    name_ko: "블러디 메리",
    img: "cocktail_list/images/블러디메리.jpg",
    hashtags: [
      "#사막 리조트", "#힙합", "#매운", "#약한 탄산", "#적당한 도수"
    ],
    recipe: `
      1. 하이볼 잔에 얼음을 채워줍니다.<br>
      2. 보드카 45ml를 넣습니다.<br>
      3. 토마토 주스 90ml를 붓습니다.<br>
      4. 레몬 즙 15ml, 우스터소스 2dashes, 타바스코 소스 2dashes를 추가합니다.<br>
      5. 소금과 후추를 약간 넣고, 막대기로 잘 저어줍니다.<br>
      <b>TIP!</b> 셀러리 스틱과 레몬 조각으로 가니쉬를 하면 더욱 좋아요!
    `,
    link: "recipe/bloody_mary.html"
  },
  {
    name_en: "Caipirinha",
    name_ko: "카이피리냐",
    img: "cocktail_list/images/카이피리냐.jpg",
    hashtags: [
      "#바닷가에서", "#힙합", "#새콤한", "#강한 탄산", "#높은 도수"
    ],
    recipe: `
      1. 먼저, 라임을 8조각으로 자릅니다.<br>
      2. 큰 잔에 라임 조각과 설탕 2큰술을 넣고, 라임을 으깨면서 설탕을 녹입니다.<br>
      3. 카샤사 50ml를 붓고, 얼음을 추가합니다.<br>
      4. 잘 저어준 후, 얼음을 추가로 넣어줍니다.<br>
      <b>TIP!</b> 라임 조각으로 맛있는 장식을 취하는 건 어떨까요?
    `,
    link: "recipe/caipirinha.html"
  },
  {
    name_en: "Campari Soda",
    name_ko: "캄파리 소다",
    img: "cocktail_list/images/캄파리소다.jpg",
    hashtags: [
      "#초보자", "#클래식", "#풍부한", "#탄산 없음", "#적당한 도수"
    ],
    recipe: `
      1. 먼저, 하이볼 잔에 얼음을 채워줍니다.<br>
      2. 캄파리 30ml를 붓습니다.<br>
      3. 소다수 100ml를 천천히 부어줍니다.<br>
      4. 잘 저어준 후, 얼음을 추가로 넣어줍니다.<br>
      <b>TIP!</b> 레몬 조각으로 맛있는 장식을 취하는 건 어떨까요?
    `,
    link: "recipe/campari_soda.html"
  },
  {
    name_en: "Cosmopolitan",
    name_ko: "코스모폴리탄",
    img: "cocktail_list/images/코스모폴리탄.jpg",
    hashtags: [
      "#루프탑 바", "#힙합", "#새콤한", "#약간의 탄산", "#적당한 도수"
    ],
    recipe: `
      1. 쉐이커에 얼음을 채워줍니다.<br>
      2. 보드카 30ml, 트리플 섹 15ml, 크랜베리 주스 30ml, 라임 주스 15ml를 넣습니다.<br>
      3. 쉐이커를 잘 흔들어 재료를 섞어줍니다.<br>
      4. 혼합물을 스트레이너를 사용해 칵테일 잔에 따릅니다.<br>
      <b>TIP!</b> 레몬 조각이나 라임으로 장식해보는 건 어떨까요?
    `,
    link: "recipe/cosmopolitan.html"
  },
  {
    name_en: "Daiquiri",
    name_ko: "다이키리",
    img: "cocktail_list/images/다이키리.jpg",
    hashtags: [
      "#바닷가에서", "#라틴 음악이 들리는", "#상큼한", "#약간의 탄산", "#높은 도수"
    ],
    recipe: `
      1. 칵테일 세이커에 럼, 라임 주스, 설탕을 넣고 바 스푼으로 저어서 설탕을 녹여줍니다.<br>
      2. 얼음을 넣고 8~10초 가량 흔들어줍니다.<br>
      3. 얼음을 체로 걸러내 차갑게 식힌 마티니 글라스에 따라줍니다.
    `,
    link: "recipe/daiquiri.html"
  },
  {
    name_en: "French 75",
    name_ko: "프렌치 75",
    img: "cocktail_list/images/프렌치75.jpg",
    hashtags: [
      "#크루즈", "#클래식", "#새콤한", "#약간의 탄산", "#적당한 도수"
    ],
    recipe: `
      1. 먼저, 쉐이커에 얼음을 채워줍니다.<br>
      2. 진 30ml, 레몬 주스 15ml, 설탕 시럽 10ml를 넣습니다.<br>
      3. 쉐이커를 잘 흔들어 재료를 섞어줍니다.<br>
      4. 혼합물을 스트레이너를 사용해 칵테일 잔에 따릅니다.<br>
      5. 마지막으로 샴페인 60ml를 조심스럽게 부어줍니다.
    `,
    link: "recipe/french75.html"
  },
  {
    name_en: "Irish Coffee",
    name_ko: "아이리시 커피",
    img: "cocktail_list/images/아이리쉬커피.jpg",
    hashtags: [
      "#따뜻하고 포근한", "#오페라", "#달콤하고 부드러운", "#탄산 없음", "#적당한 도수"
    ],
    recipe: `
      1. 먼저, 아메리카노를 준비합니다.<br>
      2. 아메리카노에 아이리시 위스키 30ml를 추가합니다.<br>
      3. 설탕 1큰술을 넣고 잘 저어줍니다.<br>
      4. 마지막으로 휘핑 크림을 위에 올려주면 완성!
    `,
    link: "recipe/irish_coffee.html"
  },
  {
    name_en: "Long Island Iced Tea",
    name_ko: "롱 아일랜드 아이스티",
    img: "cocktail_list/images/롱아일랜드아이스티.jpg",
    hashtags: [
      "#신나는 파티", "#화려한 음악", "#달콤하고 부드러운 맛", "#역전의 탄산", "#섬세한 도수"
    ],
    recipe: `
      1. 하이볼 잔에 얼음을 채워줍니다.<br>
      2. 보드카, 데킬라 블랑코, 화이트럼, 쿠앵트로, 진 15ml씩 넣어줍니다.<br>
      3. 레몬 주스 30ml, 설탕시럽 20ml를 넣습니다.<br>
      4. 그 위에 콜라를 부워주면 완성!<br>
      <b>TIP!</b> 레몬 조각으로 맛있는 장식을 취하는 건 어떨까요?
    `,
    link: "recipe/Long_Island_Iced_Tea.html"
  },
  {
    name_en: "Manhattan",
    name_ko: "맨해튼",
    img: "cocktail_list/images/맨해튼.jpg",
    hashtags: [
      "#조용한 밤", "#클래식", "#달콤하고 부드러운", "#탄산 없음", "#적당한 도수"
    ],
    recipe: `
      1. 믹싱 글라스에 얼음을 채워줍니다.<br>
      2. 라이 위스키 50ml에 스위트 베르무트 20ml를 넣고 섞어줍니다.<br>
      3. 앙고스투라 비터스 1dash를 넣고 다시 섞어줍니다.<br>
      4. 칵테일 글라스에 체리와 함께 따라줍니다.<br>
      5. 마지막으로 칵테일 체리를 올려 장식하면 완성!
    `,
    link: "recipe/manhattan.html"
  },
  {
    name_en: "Margarita",
    name_ko: "마르가리타",
    img: "cocktail_list/images/마르가리타.jpg",
    hashtags: [
      "#신나는 파티", "#힙합", "#새콤한", "#강한 탄산", "#높은 도수"
    ],
    recipe: `
      1. 잔의 림 부분의 절반을 소금으로 리밍해줍니다. 원한다면 생략할 수 있습니다.<br>
      2. 셰이커에 라임 주스, 트리플 섹, 데킬라와 얼음을 모두 넣고 잘 흔들어줍니다.<br>
      3. 얼음을 걸러내 차갑게 식힌 칵테일 글라스에 따라줍니다.
    `,
    link: "recipe/margarita.html"
  },
  {
    name_en: "Martini",
    name_ko: "마르티니",
    img: "cocktail_list/images/마르티니.jpg",
    hashtags: [
      "#루프탑 바", "#연회장", "#와인 풍미", "#묵직함", "#높은 도수"
    ],
    recipe: `
      1. 믹싱 글라스에 얼음을 넣고 진과 베르무트를 넣습니다.<br>
      2. 잘 저어줍니다.<br>
      3. 차갑게 식힌 마티니 글라스에 얼음을 걸러내고 따라줍니다.<br>
      <b>TIP!</b> 레몬 필(껍질)로 오일을 뿌리거나, 칵테일 픽을 사용해 올리브로 장식해보는 건 어떨까요?
    `,
    link: "recipe/martini.html"
  },
  {
    name_en: "Mezcal Negroni",
    name_ko: "메즈칼 네그로니",
    img: "cocktail_list/images/메즈칼네그로니.jpg",
    hashtags: [
      "#독특한 취향", "#힙합", "#매운", "#탄산 없음", "#높은 도수"
    ],
    recipe: `
      1. 믹싱 글라스에 얼음을 채워줍니다.<br>
      2. 메즈칼 30ml, 스위트 버몬트 30ml, 캄파리 30ml를 넣습니다.<br>
      3. 재료를 잘 섞어줍니다.<br>
      4. 칵테일 글라스에 얼음을 채우고 섞은 재료를 따라줍니다.<br>
      5. 마지막으로 오렌지 껍질을 장식으로 올려주면 완성!
    `,
    link: "recipe/mezcal_negroni.html"
  },
  {
    name_en: "Mimosa",
    name_ko: "미모사",
    img: "cocktail_list/images/미모사.jpg",
    hashtags: [
      "#초보자", "#인디 음악", "#상큼한", "#탄산 없음", "#가벼운 도수"
    ],
    recipe: `
      1. 잔에 오렌지 주스를 먼저 붓습니다.<br>
      2. 그 위에 프로세코를 천천히 부어줍니다.<br>
      3. 바 스푼으로 잘 저어주고 각얼음을 넣어 시원하게 즐깁니다.<br>
      <b>TIP!</b> 원한다면 오렌지 필 트위스트로 가니쉬를 해보세요!
    `,
    link: "recipe/Mimosa.html"
  },
  {
    name_en: "Mojito",
    name_ko: "모히또",
    img: "cocktail_list/images/모히또.jpg",
    hashtags: [
      "#신나는 파티", "#록", "#상큼한", "#강한 탄산", "#높은 도수↑"
    ],
    recipe: `
      1. 하이볼 잔에 민트 잎과 백설탕을 넣고, 라임 주스를 추가합니다.<br>
      2. 막대기로 민트 잎을 살짝 눌러 향을 우려냅니다.<br>
      3. 럼 45ml를 넣고, 얼음을 채워줍니다.<br>
      4. 탄산수를 부어주고, 잘 섞어줍니다.<br>
      5. 마지막으로 장식용 라임 조각과 설탕을 올려주면 완성!
    `,
    link: "recipe/mojito.html"
  },
  {
    name_en: "Negroni",
    name_ko: "네그로니",
    img: "cocktail_list/images/네그로니.jpg",
    hashtags: [
      "#따뜻하고 포근한", "#발라드", "#쌉쌀하고 깊은", "#탄산 없음", "#높은 도수"
    ],
    recipe: `
      1. 올드 패션드 글라스에 얼음을 채워줍니다.<br>
      2. 얼음 위에 비터 캄파리, 진, 스위트 레드 베르무트를 모두 부어주고 잘 저어줍니다.<br>
      3. 오렌지 슬라이스 반 조각을 넣어 가니시 해줍니다.
    `,
    link: "recipe/negroni.html"
  },
  {
    name_en: "Old Fashioned",
    name_ko: "올드 패션드",
    img: "cocktail_list/images/올드패션드.jpg",
    hashtags: [
      "#조용한 밤", "#발라드", "#쌉쌀하고 깊은", "#탄산 없음", "#높은 도수"
    ],
    recipe: `
      1. 먼저, 작은 잔에 설탕과 앙고스투라 비터스를 넣고, 약간의 물을 추가하여 설탕을 녹입니다.<br>
      2. 버번 위스키 60ml를 넣고, 얼음을 추가합니다.<br>
      3. 잘 저어준 후, 오렌지 껍질을 짜서 향을 더합니다.<br>
      4. 마지막으로 장식용 체리를 올려주면 완성!
    `,
    link: "recipe/old_fashioned.html"
  },
  {
    name_en: "Piña Colada",
    name_ko: "피나 콜라다",
    img: "cocktail_list/images/피나콜라다.jpg",
    hashtags: [
      "#따뜻하고 포근한", "#클래식", "#크리미하고 부드러운", "#탄산 없음", "#가벼운 도수"
    ],
    recipe: `
      1. 먼저, 믹서기에 얼음을 넣습니다.<br>
      2. 화이트럼 30ml, 코코넛 크림 30ml, 파인애플 주스 90ml를 넣습니다.<br>
      3. 믹서를 작동시켜 재료가 잘 섞이도록 합니다.<br>
      4. 혼합물을 칵테일 잔에 붓고, 원한다면 파인애플 조각이나 체리로 장식합니다.
    `,
    link: "recipe/pina_colada.html"
  },
  {
    name_en: "Sangria",
    name_ko: "산그리아",
    img: "cocktail_list/images/산그리아.jpg",
    hashtags: [
      "#와이너리", "#인디 음악", "#풍부한", "#탄산 없음", "#높은 도수"
    ],
    recipe: `
      1. 큰 잔에 얼음을 채워줍니다.<br>
      2. 레드 와인 150ml를 붓습니다.<br>
      3. 오렌지 주스 50ml와 브랜디 30ml를 추가합니다.<br>
      4. 설탕 1큰술을 넣고 잘 저어줍니다.<br>
      5. 오렌지 슬라이스, 레몬 슬라이스, 사과 조각을 넣어 장식합니다.
    `,
    link: "recipe/sangria.html"
  },
  {
    name_en: "Sazerac",
    name_ko: "사제락",
    img: "cocktail_list/images/사제락.jpg",
    hashtags: [
      "#산 속 오두막", "#발라드", "#풍부한", "#탄산 없음", "#높은 도수"
    ],
    recipe: `
      1. 먼저, 작은 잔에 아브세인트를 붓고, 잔을 기울여서 안쪽에 코팅합니다.<br>
      2. 큰 잔에 설탕과 페이쇼트 비터스를 넣고, 약간의 물을 추가하여 설탕을 녹입니다.<br>
      3. 라이 위스키 60ml를 넣고, 얼음을 추가합니다.<br>
      4. 잘 저어준 후, 아브세인트로 코팅한 잔에 따라 붓습니다.<br>
      5. 마지막으로 레몬 껍질을 짜서 향을 더하고, 장식으로 올려주면 완성!
    `,
    link: "recipe/sazerac.html"
  },
  {
    name_en: "Whiskey Sour",
    name_ko: "위스키 사워",
    img: "cocktail_list/images/위스키샤워.jpg",
    hashtags: [
      "#조용한 밤", "#인디 음악", "#새콤달콤한 과일", "#강한 탄산", "#높은 도수"
    ],
    recipe: `
      1. 먼저, 하이볼 잔에 얼음을 채워줍니다.<br>
      2. 위스키 60ml를 넣습니다.<br>
      3. 레몬 주스 30ml와 설탕 시럽 20ml를 넣습니다.<br>
      4. 잘 저어준 후, 얼음을 추가로 넣어줍니다.<br>
      <b>TIP!</b> 레몬 조각으로 맛있는 장식을 취하는 건 어떨까요?
    `,
    link: "recipe/whiskey_sour.html"
  }
];