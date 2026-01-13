// src/footer.js
// ✅ FIX: JS를 문자열로 감싸지 않고, "실제 코드"로 바로 실행합니다.
// - CSS만 문자열로 <style>에 주입
// - 나머지 로직은 그대로 실행 (템플릿리터럴/PROFILE_HTML 포함 OK)

(function () {
  // ✅ footer.txt에서 <style> ... </style> 안쪽 "전부"를 CSS에 붙여넣기
  const CSS = `
:root{
  --sdF-bg:#4A423D;
  --sdF-text:#F5F2ED;
  --sdF-sub:rgba(245,242,237,.72);
  --sdF-dim:rgba(245,242,237,.48);
  --sdF-line:rgba(245,242,237,.12);

  --sdF-max:1180px;
  --sdF-padX:28px;

  --sdF-title:18px;
  --sdF-subSize:12.4px;
  --sdF-meta:11.6px;
  --sdF-nav:12.6px;
  --sdF-body:12.8px;

  --sdF-radius:16px;

  /* ✅ 전체 높이 */
  --sdF-stageH:420px;

  /* ✅ 하단 배너 공간(더 넉넉하게) */
  --sdF-bottomPadExtra:44px;

  /* ✅ 서비스 한 행 셀 높이/간격 */
  --sdF-rowPad:10px;

  /* ✅ 가로 페이드 폭 (강화) */
  --sdF-fade:110px;

  /* ✅ 프로필 사진 높이(고정): footer 높이 안 변함 */
  --sdF-profPhotoH:132px;
}

#sdmF_mount{ display:none; }

#sdFooterPC{
  background:var(--sdF-bg);
  color:var(--sdF-text);
  width:100%;
  position:relative;
  overflow:hidden;
  padding:40px 0 calc(46px + var(--sdF-bottomPadExtra));
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
#sdFooterPC:before{
  content:"";
  position:absolute; inset:-120px;
  background:
    radial-gradient(ellipse at 50% 10%, rgba(255,255,255,.05), transparent 58%),
    radial-gradient(ellipse at 20% 80%, rgba(0,0,0,.16), transparent 58%),
    radial-gradient(ellipse at 80% 70%, rgba(0,0,0,.10), transparent 58%);
  pointer-events:none;
}

#sdFooterPC .sdF-inner{
  position:relative;
  max-width:var(--sdF-max);
  margin:0 auto;
  padding:0 var(--sdF-padX);
}

#sdFooterPC .sdF-grid{
  display:grid;
  grid-template-columns: 0.68fr 2.32fr;
  gap:26px;
  align-items:stretch;
}

/* divider between left/right */
#sdFooterPC .sdF-left{
  position:relative;
  padding-right:18px;
}
#sdFooterPC .sdF-left:after{
  content:"";
  position:absolute;
  top:0; right:-13px; bottom:0;
  width:1px;
  background:linear-gradient(to bottom, transparent, var(--sdF-line), transparent);
  opacity:.85;
}

/* LEFT */
#sdFooterPC .sdF-title{
  font-size:var(--sdF-title);
  font-weight:600;
  letter-spacing:-0.01em;
}
#sdFooterPC .sdF-sub{
  margin-top:6px;
  font-size:var(--sdF-subSize);
  color:var(--sdF-sub);
  letter-spacing:-0.01em;
}
#sdFooterPC .sdF-meta{
  margin-top:18px;
  font-size:var(--sdF-meta);
  color:rgba(245,242,237,.62);
  line-height:1.7;
  letter-spacing:-0.01em;
}
#sdFooterPC .sdF-meta .line{ margin-top:4px; }
#sdFooterPC .sdF-meta .k{ opacity:.78; margin-right:8px; }
#sdFooterPC .sdF-copy{
  margin-top:14px;
  font-size:11px;
  color:var(--sdF-dim);
  letter-spacing:-0.01em;
}

/* CTA box (subtle) */
#sdFooterPC .sdF-ctaBox{
  padding:12px 12px 10px;
  border-radius:14px;
  background:rgba(255,255,255,.018);
  border:1px solid rgba(255,255,255,.06);
  box-shadow:none;
  margin-bottom:22px;
}
#sdFooterPC .sdF-ctaBoxTitle{
  font-size:11.2px;
  letter-spacing:-0.01em;
  color:rgba(245,242,237,.58);
  margin-bottom:10px;
}
#sdFooterPC .sdF-ctas{ margin:0; }

#sdFooterPC .sdF-ctas{
  display:flex;
  flex-direction:column;
  gap:10px;
}
#sdFooterPC .sdF-cta{
  display:flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
  color:var(--sdF-text);
  opacity:.90;
  transition:opacity .18s ease, transform .18s ease;
}
#sdFooterPC .sdF-cta:hover{ opacity:1; transform:translateY(-1px); }
#sdFooterPC .sdF-ico{
  width:30px; height:30px;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,.035);
  border:1px solid rgba(255,255,255,.07);
  overflow:hidden;
}
#sdFooterPC .sdF-ico img{
  width:16px; height:16px;
  display:block;
  filter:brightness(1.05) contrast(1.05);
}
#sdFooterPC .sdF-ctaText{ display:flex; flex-direction:column; gap:1px; line-height:1.2; }
#sdFooterPC .sdF-ctaText .t{ font-size:12.2px; letter-spacing:-0.01em; opacity:.92; }
#sdFooterPC .sdF-ctaText .s{ font-size:11.2px; color:rgba(245,242,237,.60); letter-spacing:-0.01em; }

/* RIGHT */
#sdFooterPC .sdF-right{
  display:flex;
  flex-direction:column;
  min-height:var(--sdF-stageH);
}
#sdFooterPC .sdF-tabs{
  display:flex;
  gap:8px;
  align-items:center;
  flex-wrap:wrap;
  padding-top:2px;
  margin-bottom:12px;
}
#sdFooterPC .sdF-tab{
  border:1px solid rgba(255,255,255,.12);
  background:transparent;
  color:rgba(245,242,237,.78);
  font-size:var(--sdF-nav);
  padding:8px 12px;
  border-radius:999px;
  cursor:pointer;
  letter-spacing:-0.01em;
  transition:background .18s ease, border-color .18s ease, color .18s ease, transform .18s ease;
}
#sdFooterPC .sdF-tab:hover{ transform:translateY(-1px); }
#sdFooterPC .sdF-tab[aria-selected="true"]{
  color:rgba(245,242,237,.95);
  background:rgba(255,255,255,.06);
  border-color:rgba(255,255,255,.18);
}

/* stage fixed height */
#sdFooterPC .sdF-stage{
  position:relative;
  height:var(--sdF-stageH);
  overflow:hidden;
}
#sdFooterPC .sdF-panel{
  position:absolute;
  inset:0;
  opacity:0;
  pointer-events:none;
  transform:translateY(4px);
  transition:opacity .18s ease, transform .18s ease;
}
#sdFooterPC .sdF-panel.show{
  opacity:1;
  pointer-events:auto;
  transform:translateY(0);
}

/* profile/philosophy */
#sdFooterPC .sdF-ph{
  font-size:var(--sdF-body);
  line-height:1.85;
  color:rgba(245,242,237,.86);
  letter-spacing:-0.01em;
  max-width:980px;
  padding-right:12px;

  /* ✅ 스테이지 높이는 유지 + 내용은 내부에서 스크롤 */
  overflow:auto;
  -webkit-overflow-scrolling:touch;
  padding-bottom:10px;
}
#sdFooterPC .sdF-ph .head{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  align-items:baseline;
  margin-bottom:10px;
}
#sdFooterPC .sdF-ph .name{
  font-weight:700;
  color:rgba(245,242,237,.95);
  font-size:13.2px;
  letter-spacing:-0.01em;
}
#sdFooterPC .sdF-ph .subline{
  font-size:12.2px;
  font-weight:600;
  color:rgba(245,242,237,.78);
  letter-spacing:-0.01em;
}

/* ✅ 프로필 사진 카드 (지도 박스 결) */
#sdFooterPC .sdF-profPhoto{
  height:var(--sdF-profPhotoH);
  border-radius:var(--sdF-radius);
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.06);
  box-shadow:0 14px 40px rgba(0,0,0,.18);
  overflow:hidden;
  margin:2px 0 12px;
  position:relative;
}

/* ✅ 프로필 사진 2장 좌우 배치 */
#sdFooterPC .sdF-profPhotoRow{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px;
  margin:2px 0 12px;
}
#sdFooterPC .sdF-profPhotoRow .sdF-profPhoto{
  margin:0; /* 기존 margin(2px 0 12px) 충돌 방지 */
}

#sdFooterPC .sdF-profPhoto img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;                 /* ✅ 세로/가로 여유는 잘라먹음 */
  object-position:center 35%;       /* ✅ 얼굴/상단 쪽이 살짝 살아남게(원하면 숫자 조절) */
  filter:saturate(1.02) contrast(1.02) brightness(.98);
}
#sdFooterPC .sdF-profPhoto:after{
  content:"";
  position:absolute; inset:0;
  background:linear-gradient(to bottom, rgba(0,0,0,.12), rgba(0,0,0,0) 40%, rgba(0,0,0,.10));
  pointer-events:none;
  opacity:.55;
}

/* 2col blocks */
#sdFooterPC .sdF-ph .cols{
  display:grid;
  grid-template-columns: 1fr 1.25fr;
  gap:10px; /* ✅ v9에서 형이 줄인 값 유지 */
  margin-top:12px;
}
#sdFooterPC .sdF-ph .blkTitle{
  font-size:12.2px;
  opacity:.9;
  margin-bottom:6px;
  font-weight:600;
}
#sdFooterPC .sdF-ph ul{
  margin:0;
  padding-left:16px;
  color:rgba(245,242,237,.78);
}
#sdFooterPC .sdF-ph li{ margin:4px 0; }

/* services layout */
#sdFooterPC .sdF-svcWrap{
  height:100%;
  overflow:hidden;
  padding-right:4px;
}
#sdFooterPC .sdF-svcTable{
  height:100%;
  display:flex;
  flex-direction:column;
  gap:0;
}

/* ✅ 구분선: 은은 */
#sdFooterPC .sdF-svcRow{
  display:grid;
  grid-template-columns: 170px 1fr;
  column-gap:18px;
  align-items:center;
  padding: var(--sdF-rowPad) 0;
  border-top:1px solid rgba(245,242,237,.06);
}

/* cells */
#sdFooterPC .sdF-catCell{
  font-weight:700;
  letter-spacing:-0.01em;
  color:rgba(245,242,237,.92);
  font-size:12.8px;
  white-space:nowrap;
}

/* ✅ one-line + horizontal wheel + stronger fade */
#sdFooterPC .sdF-itemsCell{
  position:relative;
  overflow-x:auto;
  overflow-y:hidden;
  white-space:nowrap;
  scrollbar-width:none;
  padding-right:62px;
}
#sdFooterPC .sdF-itemsCell::-webkit-scrollbar{ height:0px; }

/* fade overlays (stronger) */
#sdFooterPC .sdF-itemsCell:before,
#sdFooterPC .sdF-itemsCell:after{
  content:"";
  position:absolute;
  top:0; bottom:0;
  width:var(--sdF-fade);
  pointer-events:none;
  opacity:0;
  transition:opacity .18s ease;
}
#sdFooterPC .sdF-itemsCell:before{
  left:0;
  background:linear-gradient(to right,
    rgba(74,66,61,1) 0%,
    rgba(74,66,61,.92) 38%,
    rgba(74,66,61,0) 100%
  );
}
#sdFooterPC .sdF-itemsCell:after{
  right:0;
  background:linear-gradient(to left,
    rgba(74,66,61,1) 0%,
    rgba(74,66,61,.92) 38%,
    rgba(74,66,61,0) 100%
  );
}
#sdFooterPC .sdF-itemsCell.hasLeftFade:before{ opacity:1; }
#sdFooterPC .sdF-itemsCell.hasRightFade:after{ opacity:1; }

/* ✅ “더 있음” 힌트 */
#sdFooterPC .sdF-moreHint{
  position:absolute;
  right:12px;
  top:50%;
  transform:translateY(-50%) translateX(-2px);

  width:36px; height:36px;
  border-radius:999px;

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:22px;
  font-weight:700;
  line-height:1;

  color:rgba(255,255,255,.98);
  background:rgba(255,255,255,.18);
  border:1px solid rgba(255,255,255,.22);

  box-shadow:0 18px 40px rgba(0,0,0,.34);
  opacity:0;
  pointer-events:none;

  transition:opacity .18s ease, transform .18s ease;
}
#sdFooterPC .sdF-itemsCell.hasRightFade .sdF-moreHint{
  opacity:1;
  transform:translateY(-50%) translateX(0);
}

#sdFooterPC .sdF-link{
  display:inline-block;
  color:rgba(245,242,237,.78);
  text-decoration:none;
  font-size:12.1px;
  letter-spacing:-0.01em;
  margin-right:14px;
  transition:color .18s ease;
}
#sdFooterPC .sdF-link:hover{ color:rgba(245,242,237,.95); }

/* location */
#sdFooterPC .sdF-mapCard{
  height:100%;
  border-radius:var(--sdF-radius);
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.06);
  box-shadow:0 14px 40px rgba(0,0,0,.18);
  overflow:hidden;
}
#sdFooterPC .sdF-mapHead{
  padding:12px 14px;
  border-bottom:1px solid rgba(245,242,237,.10);
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
}
#sdFooterPC .sdF-mapHead .left{
  display:flex;
  align-items:baseline;
  gap:10px;
  flex-wrap:wrap;
}
#sdFooterPC .sdF-mapHead .t{
  font-size:12.6px;
  opacity:.95;
  font-weight:600;
}
#sdFooterPC .sdF-mapHead .desc{
  font-size:11.6px;
  opacity:.62;
  font-weight:400;
  letter-spacing:-0.01em;
}
#sdFooterPC .sdF-badge{
  display:inline-block;
  padding:2px 7px;
  border-radius:999px;
  font-size:10.8px;
  line-height:1.5;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.06);
  color:rgba(245,242,237,.78);
  margin:0 2px;
}
#sdFooterPC .sdF-mapHead .mini{ font-size:11px; opacity:.62; white-space:nowrap; }

#sdFooterPC #sdF_naverMap{
  width:100%;
  height: calc(100% - 46px - 62px);
  background:rgba(0,0,0,.12);
}
#sdFooterPC .sdF-mapInfo{
  padding:12px 14px 14px;
  font-size:12px;
  line-height:1.65;
  color:rgba(245,242,237,.78);
}
#sdFooterPC .sdF-mapInfo strong{ color:rgba(245,242,237,.92); font-weight:700; }

/* ✅ 참여학회: 2열 × 3행 */
#sdFooterPC .sdF-ph ul.sdF-list2col{
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px; /* ✅ 형이 원하는 값 유지 */
  row-gap: 6px;
}
#sdFooterPC .sdF-ph ul.sdF-list2col li{
  margin: 0;
  position: relative;
  padding-left: 14px;
}
#sdFooterPC .sdF-ph ul.sdF-list2col li::before{
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  opacity: .55;
}

/* PC only */
@media (max-width: 860px){
  #sdFooterPC{ display:none !important; }
}
`;

  function injectCssOnce() {
    if (!CSS || !CSS.trim()) return;
    if (document.querySelector('style[data-sd-shared="footer"]')) return;
    const style = document.createElement("style");
    style.setAttribute("data-sd-shared", "footer");
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function runFooterLogic() {
    function sdmViewportW() {
      try { return (window.top && window.top.innerWidth) ? window.top.innerWidth : window.innerWidth; }
      catch (e) { return window.innerWidth; }
    }
    if (sdmViewportW() <= 860) return;

    if (window.__SDM_FOOTER_PC_V9_1__) return;
    window.__SDM_FOOTER_PC_V9_1__ = true;

    function findDozDoc() {
      try {
        if (document.getElementById('doz_body')) return document;
        var ifr = document.getElementsByTagName('iframe');
        for (var i = 0; i < ifr.length; i++) {
          try {
            var d = ifr[i].contentDocument || ifr[i].contentWindow.document;
            if (d && d.getElementById('doz_body')) return d;
          } catch (e) { }
        }
      } catch (e) { }
      return document;
    }

    function ready(fn) {
      if (document.readyState === 'complete' || document.readyState === 'interactive') fn();
      else document.addEventListener('DOMContentLoaded', fn);
    }

    ready(function () {
      var doc = findDozDoc();
      var win = doc.defaultView || window;

      if (doc.getElementById('sdFooterPC')) return;

      var NAVER_NCP_KEY_ID = "bjduigrnb7";
      var GEOCODE_QUERY = "서울특별시 영등포구 여의대방로 69길 19, 수담의원";

      var ICO_BLOG = "https://cdn.imweb.me/upload/S20250626bc7495188971b/3bcc53cb95ce0.png";
      var ICO_INSTA = "https://cdn.imweb.me/upload/S20250626bc7495188971b/e3610f0aedf9c.png";
      var ICO_NAVER_RESERVE = "https://cdn.imweb.me/upload/S20250626bc7495188971b/ce6ea9fa4d24e.png";
      var ICO_NAVER_TALK = "https://cdn.imweb.me/upload/S20250626bc7495188971b/73a6434ec447b.png";

      var DOC_PHOTO = "https://cdn.imweb.me/upload/S20250626bc7495188971b/a9f97eea57a50.png";
      var DOC_PHOTO_2 = "https://cdn.imweb.me/upload/S20250626bc7495188971b/c362cbfd70ac5.png";

      var LINKS = {
        naverReserve: "https://naver.me/5iTdhw37",
        talk: "https://talk.naver.com/profile/w4emvp",
        blog: "https://blog.naver.com/soodam_clinic",
        instaDM: "https://www.instagram.com/soodam_clinic"
      };

      var FALLBACK_LAT = 37.5219;
      var FALLBACK_LNG = 126.9246;

      var PROFILE_HTML = `
        <div class="sdF-profPhotoRow" aria-label="Doctor Photos">
          <div class="sdF-profPhoto" aria-label="Doctor Photo 1">
            <img src="${DOC_PHOTO}" alt="박우진 원장">
          </div>
          <div class="sdF-profPhoto" aria-label="Doctor Photo 2">
            <img src="${DOC_PHOTO_2}" alt="박우진 원장">
          </div>
        </div>

        <div class="head">
          <span class="name">박우진 원장</span>
          <span class="subline">가정의학과 전문의</span>
        </div>

        <div style="color:rgba(245,242,237,.84);">
          세상은 빠르게 발전했지만, 사람은 변하지 않았습니다. 과학과 의학이 아무리 발전해도 건강엔 지름길이 있을 수 없습니다.<br>
          사람의 질환과 노화는 무심코 지나친 일상의 결과입니다.
          미용을 포함한 일상의 문제를 의과학적인 원리를 바탕으로<br>충분히 쉽고 명확하게 이해시켜 드리고자 노력하고 있으며,
          개개인에게 맞는 본질적인 건강의 해법을 찾을 수 있도록 함께 하겠습니다.
        </div>

        <div class="cols">
          <div>
            <div class="blkTitle">약력</div>
            <ul>
              <li>을지대학교 의과대학 의학과 졸업</li>
              <li>강남세브란스병원 가정의학과 전문의 수료</li>
              <li>전, 인천성모병원 응급의료센터 내과전담교수</li>
              <li>현, 강남세브란스병원 가정의학과 외래교수</li>
            </ul>
          </div>
          <div>
            <div class="blkTitle">참여학회</div>
            <ul class="sdF-list2col">
              <li>대한가정의학회</li>
              <li>대한스포츠의학회</li>
              <li>대한기능의학회</li>
              <li>대한비만미용학회</li>
              <li>한국영양의학회</li>
              <li>대한초음파의학회</li>
            </ul>
          </div>
        </div>
      `;

      var SERVICES = [
        { cat: "젊음유지 클리닉", items: [
          { label: "자가혈 줄기세포치료", url: "#" },
          { label: "NAD+ 항노화치료", url: "#" },
          { label: "항산화 클리닉", url: "#" },
          { label: "Running with Doc", url: "#" },
          { label: "건강기능식품 처방", url: "#" }
        ]},
        { cat: "혈당다이어트", items: [
          { label: "혈당습관개선 다이어트", url: "#" },
          { label: "연속혈당측정기 처방", url: "#" },
          { label: "10일간의 집중혈당관리", url: "#" },
          { label: "대사밸런스 수액치료", url: "#" },
          { label: "만성질환관리 첫시작", url: "#" }
        ]},
        { cat: "기능의학 혈액검사", items: [
          { label: "항산화·노화 검사", url: "#" },
          { label: "비타민·미네랄 유전자", url: "#" },
          { label: "음식물반응 검사", url: "#" },
          { label: "NK 세포 활성도", url: "#" },
          { label: "생활피로검진", url: "#" },
          { label: "중금속·독성 검사", url: "#" },
          { label: "소변 유기산 검사", url: "#" },
          { label: "위험·혈뇌누수 검사", url: "#" }
        ]},
        { cat: "맞춤 주사+수액치료", items: [
          { label: "항산화치료", url: "#" },
          { label: "에너지·항산화 종합치료", url: "#" },
          { label: "면역활성 항산화치료", url: "#" },
          { label: "암환자 면역주사", url: "#" },
          { label: "여성 항노화치료", url: "#" },
          { label: "난임부부 치료", url: "#" },
          { label: "오메가-3 균형", url: "#" }
        ]},
        { cat: "아플 때 찾는 수액치료", items: [
          { label: "감기몸살 수액치료", url: "#" },
          { label: "장염설사 수액치료", url: "#" },
          { label: "숙취증상 개선치료", url: "#" },
          { label: "간회복 프로그램", url: "#" },
          { label: "피부염 개선치료", url: "#" },
          { label: "빈혈치료", url: "#" }
        ]},
        { cat: "리프팅", items: [
          { label: "정밀 초음파 리프팅(리프테라2)", url: "#" },
          { label: "고출력 고주파 리프팅(올페이스)", url: "#" },
          { label: "무통증 고주파 리프팅(G-WAVE)", url: "#" }
        ]},
        { cat: "스킨부스터", items: [
          { label: "줄기세포 피부이식", url: "#" },
          { label: "리쥬란", url: "#" },
          { label: "쥬베룩", url: "#" },
          { label: "코리아", url: "#" },
          { label: "릴리이드", url: "#" },
          { label: "키오머2", url: "#" },
          { label: "쥬베룩볼륨", url: "#" }
        ]},
        { cat: "보톡스·기타시술", items: [
          { label: "초음파 가이드 보톡스", url: "#" },
          { label: "주름·스킨보톡스", url: "#" },
          { label: "점·판상·비립종 제거", url: "#" },
          { label: "프락셀", url: "#" },
          { label: "이중턱(V-OLET)", url: "#" }
        ]},
        { cat: "에스테틱", items: [
          { label: "여드름 특화 솔루션", url: "#" },
          { label: "프리미엄 스킨케어", url: "#" },
          { label: "여드름 일상관리", url: "#" },
          { label: "에스테틱 기기관리", url: "#" }
        ]}
      ];

      function buildServicesHTML() {
        return SERVICES.map(function (group) {
          var links = group.items.map(function (it) {
            return '<a class="sdF-link" href="' + (it.url || '#') + '">' + it.label + '</a>';
          }).join('');

          return (
            '<div class="sdF-svcRow">' +
              '<div class="sdF-catCell">' + group.cat + '</div>' +
              '<div class="sdF-itemsCell">' +
                links +
                '<span class="sdF-moreHint" aria-hidden="true">›</span>' +
              '</div>' +
            '</div>'
          );
        }).join('');
      }

      var html = `
        <footer id="sdFooterPC" aria-label="Soodam Clinic Footer">
          <div class="sdF-inner">
            <div class="sdF-grid">

              <div class="sdF-left">
                <div class="sdF-ctaBox">
                  <div class="sdF-ctaBoxTitle">수담의원 건강컨텐츠 및 바로 문의·예약하기</div>

                  <div class="sdF-ctas" aria-label="Quick Links">
                    <a class="sdF-cta" href="${LINKS.blog}" target="_blank" rel="noopener">
                      <span class="sdF-ico"><img src="${ICO_BLOG}" alt=""></span>
                      <span class="sdF-ctaText">
                        <span class="t">수담건강컬럼 보러가기</span>
                        <span class="s">블로그에서 기록을 봅니다</span>
                      </span>
                    </a>

                    <a class="sdF-cta" href="${LINKS.instaDM}" target="_blank" rel="noopener">
                      <span class="sdF-ico"><img src="${ICO_INSTA}" alt=""></span>
                      <span class="sdF-ctaText">
                        <span class="t">인스타그램 DM 으로 문의하기</span>
                        <span class="s">영업시간 내 응답</span>
                      </span>
                    </a>

                    <a class="sdF-cta" href="${LINKS.naverReserve}" target="_blank" rel="noopener">
                      <span class="sdF-ico"><img src="${ICO_NAVER_RESERVE}" alt=""></span>
                      <span class="sdF-ctaText">
                        <span class="t">네이버 플레이스 예약하기</span>
                        <span class="s">가장 빠른 확정</span>
                      </span>
                    </a>

                    <a class="sdF-cta" href="${LINKS.talk}" target="_blank" rel="noopener">
                      <span class="sdF-ico"><img src="${ICO_NAVER_TALK}" alt=""></span>
                      <span class="sdF-ctaText">
                        <span class="t">네이버 톡톡 문의하기</span>
                        <span class="s">간단 문의 · 상담 안내</span>
                      </span>
                    </a>
                  </div>
                </div>

                <div class="sdF-title">여의도 수담의원</div>
                <div class="sdF-sub">아름다울 일상을 진료합니다.</div>

                <div class="sdF-meta">
                  <div class="line"><span class="k">FAX</span>070-8733-7007</div>
                  <div class="line"><span class="k">병원번호</span>02-8706-7696</div>
                  <div class="line"><span class="k">대표자</span>박우진</div>
                  <div class="line"><span class="k">사업자등록번호</span>755-37-01269</div>
                  <div class="line"><span class="k">진료과목</span>가정의학과 · 내과 · 피부과</div>
                  <div class="line"><span class="k">업태</span>건강기능식품판매업 · 의료기기판매업</div>
                </div>

                <div class="sdF-copy">© 2025 Soodam Clinic. All rights reserved.</div>
              </div>

              <div class="sdF-right">
                <div class="sdF-tabs" role="tablist" aria-label="Footer Tabs">
                  <button class="sdF-tab" type="button" data-key="sv" aria-selected="true">전체의료서비스</button>
                  <button class="sdF-tab" type="button" data-key="lc" aria-selected="false">위치안내</button>
                  <button class="sdF-tab" type="button" data-key="ph" aria-selected="false">의료진소개 · 진료철학</button>
                </div>

                <div class="sdF-stage" aria-label="Footer Stage">

                  <div class="sdF-panel sdF-svcWrap show" id="sdF_sv">
                    <div class="sdF-svcTable">${buildServicesHTML()}</div>
                  </div>

                  <div class="sdF-panel" id="sdF_lc">
                    <div class="sdF-mapCard">
                      <div class="sdF-mapHead">
                        <div class="left">
                          <div class="t">여의도 수담의원 위치안내</div>
                          <div class="desc">
                            자주식 주차가능 ·
                            여의도역/여의나루역
                            <span class="sdF-badge">9</span><span class="sdF-badge">5</span>
                            도보 10분 ·
                            샛강역
                            <span class="sdF-badge">9</span><span class="sdF-badge">신림선</span>
                            도보 7분
                          </div>
                        </div>
                        <div class="mini">NAVER MAP</div>
                      </div>
                      <div id="sdF_naverMap" aria-label="Naver Map"></div>
                      <div class="sdF-mapInfo">
                        <div><strong>수담의원</strong></div>
                        <div style="margin-top:6px;">서울특별시 영등포구 여의대방로 69길 19</div>
                        <div style="margin-top:3px;">전화: 02-8706-7696</div>
                      </div>
                    </div>
                  </div>

                  <div class="sdF-panel sdF-ph" id="sdF_ph">${PROFILE_HTML}</div>

                </div>
              </div>

            </div>
          </div>
        </footer>
      `;

      var body = doc.getElementById('doz_body') || doc.body;
      var wrap = doc.createElement('div');
      wrap.innerHTML = html;
      body.appendChild(wrap.firstElementChild);

      var footer = doc.getElementById('sdFooterPC');
      var tabs = footer.querySelectorAll('.sdF-tab');
      var panels = {
        sv: footer.querySelector('#sdF_sv'),
        lc: footer.querySelector('#sdF_lc'),
        ph: footer.querySelector('#sdF_ph')
      };
      var mapInited = false;

      function show(key) {
        tabs.forEach(function (t) {
          t.setAttribute('aria-selected', (t.dataset.key === key) ? 'true' : 'false');
        });
        Object.keys(panels).forEach(function (k) {
          if (k === key) panels[k].classList.add('show');
          else panels[k].classList.remove('show');
        });
        if (key === 'lc' && !mapInited) {
          initMapFlow();
          mapInited = true;
        }
        requestAnimationFrame(updateAllFades);
      }

      tabs.forEach(function (t) {
        t.addEventListener('click', function () { show(t.dataset.key); });
      });

      function updateFade(el) {
        if (!el) return;
        var max = el.scrollWidth - el.clientWidth;
        var left = el.scrollLeft;

        if (max <= 2) {
          el.classList.remove('hasLeftFade', 'hasRightFade');
          return;
        }
        if (left > 1) el.classList.add('hasLeftFade');
        else el.classList.remove('hasLeftFade');

        if (left < max - 1) el.classList.add('hasRightFade');
        else el.classList.remove('hasRightFade');
      }

      function bindWheelHorizontal(el) {
        if (!el) return;
        el.addEventListener('wheel', function (e) {
          if (e.shiftKey) return;
          var delta = (Math.abs(e.deltaX) > Math.abs(e.deltaY)) ? e.deltaX : e.deltaY;
          if (Math.abs(delta) < 1) return;

          e.preventDefault();
          el.scrollLeft += delta;
          updateFade(el);
        }, { passive: false });

        el.addEventListener('scroll', function () { updateFade(el); }, { passive: true });
        updateFade(el);
      }

      function updateAllFades() {
        var cells = footer.querySelectorAll('.sdF-itemsCell');
        cells.forEach(function (c) { updateFade(c); });
      }

      var itemCells = footer.querySelectorAll('.sdF-itemsCell');
      itemCells.forEach(function (cell) { bindWheelHorizontal(cell); });

      function loadNaverMaps(cb) {
        try {
          if (win.naver && win.naver.maps && win.naver.maps.Map) return cb();
        } catch (e) { }

        if (win.__SDM_NAVERMAP_LOADING__) {
          var tt = setInterval(function () {
            try {
              if (win.naver && win.naver.maps && win.naver.maps.Map) {
                clearInterval(tt); cb();
              }
            } catch (e) { }
          }, 80);
          setTimeout(function () { try { clearInterval(tt); } catch (e) { } }, 9000);
          return;
        }
        win.__SDM_NAVERMAP_LOADING__ = true;

        win.__sdmFooterInitMap__ = function () { cb(); };

        var s = doc.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src =
          "https://oapi.map.naver.com/openapi/v3/maps.js" +
          "?ncpKeyId=" + encodeURIComponent(NAVER_NCP_KEY_ID) +
          "&submodules=geocoder" +
          "&callback=__sdmFooterInitMap__";

        win.navermap_authFailure = function () {
          var el = doc.getElementById('sdF_naverMap');
          if (el) {
            el.innerHTML = '<div style="padding:14px;font-size:12px;line-height:1.6;opacity:.75;">지도 인증 실패.<br>ncpKeyId/도메인 등록을 확인해주세요.</div>';
          }
        };

        (doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(s);
      }

      function initNaverMap() {
        var el = doc.getElementById('sdF_naverMap');
        if (!el) return;

        var map = new win.naver.maps.Map(el, {
          center: new win.naver.maps.LatLng(FALLBACK_LAT, FALLBACK_LNG),
          zoom: 14,
          zoomControl: true,
          zoomControlOptions: { position: win.naver.maps.Position.RIGHT_CENTER }
        });

        var marker = new win.naver.maps.Marker({
          position: new win.naver.maps.LatLng(FALLBACK_LAT, FALLBACK_LNG),
          map: map
        });

        try {
          if (win.naver.maps.Service && win.naver.maps.Service.geocode) {
            win.naver.maps.Service.geocode({ query: GEOCODE_QUERY }, function (status, response) {
              if (status !== win.naver.maps.Service.Status.OK) return;
              var items = (response && response.v2 && response.v2.addresses) ? response.v2.addresses : [];
              if (!items.length) return;

              var x = parseFloat(items[0].x);
              var y = parseFloat(items[0].y);
              if (!isFinite(x) || !isFinite(y)) return;

              var latlng = new win.naver.maps.LatLng(y, x);
              map.setCenter(latlng);
              marker.setPosition(latlng);
              map.setZoom(16);
            });
          }
        } catch (e) { }
      }

      function initMapFlow() {
        if (!NAVER_NCP_KEY_ID) {
          var el = doc.getElementById('sdF_naverMap');
          if (el) el.innerHTML = '<div style="padding:14px;font-size:12px;opacity:.75;">ncpKeyId가 비어있습니다.</div>';
          return;
        }
        loadNaverMaps(initNaverMap);
      }

      show('sv');
    });
  }

  function injectAll() {
    if (document.getElementById("sd-shared-footer-root")) return;

    const root = document.createElement("div");
    root.id = "sd-shared-footer-root";
    root.style.display = "none";
    document.body.appendChild(root);

    injectCssOnce();
    runFooterLogic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAll);
  } else {
    injectAll();
  }
})();
