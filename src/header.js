(function () {
  // ✅ 1) 여기 HTML 붙여넣기
  const HTML = `
  <!-- 여기에 형의 상단 메뉴 HTML 전체 붙여넣기 -->
  `;

  // ✅ 2) 여기 CSS 붙여넣기 (없으면 비워도 됨)
  const CSS = `
  /* 여기에 형의 상단 메뉴 CSS 전체 붙여넣기 */
  `;

  // ✅ 3) 여기 JS 붙여넣기 (없으면 비워도 됨)
  const JS = `
(function(){
  /* =========================
     ✅ PC 전용 가드 (형 원본 의도 유지)
  ========================= */
  try{
    if (window.innerWidth <= 860) return;
  }catch(e){}

  if (window.__SDM_H_V4_FINAL_REV11__) return;
  window.__SDM_H_V4_FINAL_REV11__ = true;

  function findDozDoc(){
    try{
      if (document.getElementById('doz_body')) return document;
      var ifr = document.getElementsByTagName('iframe');
      for (var i=0;i<ifr.length;i++){
        try{
          var d = ifr[i].contentDocument || ifr[i].contentWindow.document;
          if (d && d.getElementById('doz_body')) return d;
        }catch(e){}
      }
    }catch(e){}
    return document;
  }

  var doc = findDozDoc();
  var win = doc.defaultView || window;

  /* =========================
     ✅ 핵심: "진짜 뷰포트 폭" (top 기준)
     - iframe 폭 때문에 media query가 오작동하는 걸 차단
  ========================= */
  function sdmViewportW(){
    try{
      return (window.top && window.top.innerWidth) ? window.top.innerWidth : window.innerWidth;
    }catch(e){
      return window.innerWidth;
    }
  }

  var css = `
:root{
  --sdm-bg:#F3EEE6;
  --sdm-text:#141414;
  --sdm-sub:rgba(0,0,0,.55);
  --sdm-line:rgba(0,0,0,.10);
  --sdm-accent:#5A4633;

  --sdm-core: 960px;
  --sdm-corePad: 18px;
  --sdm-leftInset: 14px;

  --sdm-menuGap: 0px;
  --sdm-colMin: 170px;

  --sdm-row1H: 26px;
  --sdm-row2H: 44px;
  --sdm-navH: 44px;

  --sdm-gap12: 14px;
  --sdm-gap23: 14px;

  --sdm-compactTopH: 22px;

  --sdm-reserveGap: 28px;
  --sdm-pillPadX: 10px;
  --sdm-bodyExtraPad: 16px;

  --sdm-logoH: var(--sdm-row2H);
  --sdm-logoH-compact: 26px;

  /* ===== 모바일 전용 ===== */
  --sdm-mH: 56px;
  --sdm-mPadX: 14px;
  --sdm-mBtnH: 34px;
  --sdm-mRadius: 999px;

  /* ✅ 1) 형이 직접 조절할 수 있게 변수로 뺐다 */
  --sdm-mTitleGap: 3px;      /* 로고-텍스트 간격 (거의 0 느낌) */
  --sdm-mTitleSize: 15px;    /* 타이틀 크기 */
  --sdm-mTitleWeight: 950;   /* 타이틀 굵기 */
  --sdm-mTitleY: 0px;        /* 세로 미세 보정 */

  /* ✅ Notice 라인 */
  --sdm-mNoticeH: 40px;      /* 모바일 notice 라인 높이 */
  --sdm-mNoticePadX: 14px;

  --sdm-drawerW: min(86vw, 360px);
}

#sdmH{
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  z-index: 99999;
  margin: 0 !important;
  background: transparent;
}
#sdmH, #sdmH *{ box-sizing:border-box; }

.sdmH-bar{
  width:100%;
  background: var(--sdm-bg);
  border-bottom: 1px solid var(--sdm-line);
}

.sdmH-inner{
  width: 100%;
  display:grid;
  grid-template-columns: 1fr var(--sdm-core) 1fr;
  grid-template-rows: var(--sdm-row1H) var(--sdm-row2H) var(--sdm-navH);
  align-items: stretch;
  padding: 24px 0 0;
}

/* =========================
   NOTICE badge
========================= */
.sdmNoticeBadge{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  height:18px;
  padding:0 8px;
  border-radius:999px;
  font-size:10.5px;
  font-weight:950;
  letter-spacing:.2px;
  color:#fff;
  background: rgba(90,70,51,.88);
  border: 1px solid rgba(255,255,255,.35);
  margin-right: 8px;
  transform: translateY(-.5px);
}

/* =========================
   ✅ B안: Notice 전용 애니메이션
========================= */
.sdmNoticeTextB{
  display:inline-block;
  min-width:0;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 1;
  letter-spacing: 0px;
  will-change: opacity, letter-spacing, transform, filter;
}
@keyframes sdmNoticeSettle{
  from{
    opacity:0;
    letter-spacing:-.6px;
    transform: translateY(0);
    filter: blur(.0px);
  }
  to{
    opacity:1;
    letter-spacing:0px;
    transform: translateY(0);
    filter: blur(0);
  }
}
.sdmNoticeTextB.sdm-noticein{
  animation: sdmNoticeSettle 520ms ease both;
}
@media (prefers-reduced-motion: reduce){
  .sdmNoticeTextB.sdm-noticein{ animation:none; opacity:1; letter-spacing:0; }
}

/* =========================
   기존 텍스트 인 (타이틀용)
========================= */
@keyframes sdmTextIn{
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.sdm-textin{ animation: sdmTextIn 650ms ease both; }
@media (prefers-reduced-motion: reduce){
  .sdm-textin{ animation:none; }
}

/* ✅ 1/2/3열 동일 구성 */
.sdmH-left,
.sdmH-main,
.sdmH-right{
  display:grid;
  grid-template-rows:
    var(--sdm-row1H)
    var(--sdm-gap12)
    var(--sdm-row2H)
    var(--sdm-gap23)
    var(--sdm-navH);
}

/* MAIN */
.sdmH-main{
  grid-column: 2;
  min-width:0;
  padding: 0 var(--sdm-corePad);
}

.sdmH-kicker,
.sdmH-headline,
.sdmH-compactLine{
  padding-left: calc(var(--sdm-leftInset) + var(--sdm-pillPadX));
  padding-right: 0;
}

/* nav */
.sdmH-nav{
  padding-left: var(--sdm-leftInset);
  padding-right: 0;
}

.sdmH-kicker{
  grid-row: 1;
  display:flex;
  align-items:center;
  font-size: 12px;
  color: var(--sdm-sub);
  letter-spacing: .2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* =========================
   Kicker badges
========================= */
#sdmKicker{
  display:flex;
  align-items:center;
  gap:10px;
}
#sdmKicker .sdmH-kickerMain{
  white-space: nowrap;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: .15px;
}
#sdmKicker .sdmH-kickerBadges{
  display:inline-flex;
  align-items:center;
  gap:6px;
  flex-wrap: nowrap;
}
#sdmKicker .sdmH-kickerBadge{
  display:inline-flex;
  align-items:center;
  height:20px;
  padding:0 8px;
  border-radius:999px;
  background: rgba(90,70,51,.78);
  color:#fff;
  font-size:11px;
  font-weight:800;
  letter-spacing:-0.1px;
  line-height:1;
}

.sdmH-headline{
  grid-row: 3;
  display:flex;
  align-items:center;
  font-size: clamp(26px, 2.6vw, 38px);
  font-weight: 900;
  letter-spacing: -0.8px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sdmH-nav{
  grid-row: 5;
  height: var(--sdm-navH);
  display:flex;
  align-items:center;
}

.sdmH-compactLine{
  display:none;
  font-size: 12px;
  color: rgba(0,0,0,.62);
  letter-spacing: -0.15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items:center;
}

/* ✅ 상위메뉴 5칸 그리드 */
.sdmH-menu{
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  grid-template-columns: repeat(5, minmax(var(--sdm-colMin), 1fr));
  column-gap: var(--sdm-menuGap);
  align-items:center;
  height: var(--sdm-navH);
  white-space: nowrap;
  width: 100%;
}

.sdmH-item{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  min-width:0;
}

.sdmH-link{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  height: var(--sdm-navH);
  text-decoration:none;
  color:inherit;
  font-weight: 850;
  font-size: 14.5px;
  letter-spacing: .2px;
  padding: 0 10px 0 0;
  border-radius: 10px;
}

.sdmH-linkText{
  display:inline-flex;
  align-items:center;
  padding: 6px var(--sdm-pillPadX);
  border-radius: 999px;
  background: transparent;
}
.sdmH-item:hover .sdmH-linkText{
  background: rgba(255,255,255,.55);
}

/* LEFT */
.sdmH-left{
  grid-column: 1;
  min-width:0;
  justify-items:end;
  padding-right: 10px;
}

.sdmH-logoTop{
  grid-row: 3;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  text-decoration:none;
}
.sdmH-logoTop img{
  height: var(--sdm-logoH);
  width:auto;
  display:block;
}

.sdmH-row3Wrap{
  grid-row: 5;
  height: var(--sdm-navH);
  display:flex;
  align-items:center;
  justify-content:flex-end;
}

.sdmH-logoCompact{ display:none; }
.sdmH-logoCompact img{
  height: var(--sdm-logoH-compact);
  width:auto;
  display:block;
  transform: translateY(1px);
}

.sdmH-column{
  height: var(--sdm-navH);
  display:inline-flex;
  align-items:center;
  gap: 8px;
  text-decoration:none;
  color: inherit;
  font-weight: 800;
  white-space: nowrap;
}
.sdmH-columnText{ font-size: 13px; letter-spacing: -.2px; }

.sdmH-badge{
  position: relative;
  display:inline-flex;
  align-items:center;
  height: 20px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 900;
  color:#fff;
  background: var(--sdm-accent);
  letter-spacing: .3px;
  overflow:hidden;
}
.sdmH-spark{
  position:absolute;
  inset:-45% -45%;
  background:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,.85), rgba(255,255,255,0) 35%),
    radial-gradient(circle at 70% 60%, rgba(255,255,255,.7), rgba(255,255,255,0) 40%);
  transform: translateX(-70%) rotate(12deg);
  animation: sdmSpark 1.8s ease-in-out infinite;
  mix-blend-mode: overlay;
  pointer-events:none;
}
@keyframes sdmSpark{
  0%   { transform: translateX(-80%) rotate(12deg); opacity:.14; }
  35%  { opacity:.70; }
  65%  { opacity:.30; }
  100% { transform: translateX(75%) rotate(12deg); opacity:.12; }
}

/* RIGHT */
.sdmH-right{
  grid-column: 3;
  min-width:0;
  justify-items:start;
  padding-left: 10px;
}

.sdmH-cta{
  grid-row: 5;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  color: var(--sdm-accent);
  font-weight: 900;
  font-size: 12.5px;
  white-space:nowrap;

  height: 28px;
  padding: 0 10px;

  border-radius: 999px;
  border: 1px solid rgba(90,70,51,.22);
  background: rgba(255,255,255,.45);
  line-height: 1;

  align-self: center;
  justify-self: start;

  transition: transform .12s ease, background .12s ease;
}
.sdmH-cta:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,.65);
}

/* ✅ 기본상태 여백 */
.sdmH-reserve{
  height: var(--sdm-reserveGap);
  background: var(--sdm-bg);
}

/* =========================
   DROPDOWN (PC Hover)
========================= */
.sdmD{
  width:100%;
  background: var(--sdm-bg);
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  pointer-events:none;
  overflow:hidden;
  transition: opacity .16s ease, transform .16s ease, max-height .22s ease;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
#sdmH.sdm-open .sdmD{
  max-height: 1600px;
  opacity: 1;
  transform: translateY(0);
  pointer-events:auto;
  border-top: 1px solid var(--sdm-line);
  border-bottom: 1px solid var(--sdm-line);
  box-shadow: 0 18px 40px rgba(0,0,0,.10);
}

.sdmD-inner{
  width:100%;
  display:grid;
  grid-template-columns: 1fr var(--sdm-core) 1fr;
  padding: 14px 0 10px;
}
.sdmD-main{
  grid-column:2;
  padding: 0 var(--sdm-corePad);
}
.sdmD-grid{
  display:grid;
  grid-template-columns: repeat(5, minmax(var(--sdm-colMin), 1fr));
  column-gap: var(--sdm-menuGap);
  align-items:flex-start;
  justify-content:stretch;
  white-space: nowrap;
  width: 100%;
  padding-left: var(--sdm-leftInset);
  padding-right: 0;
}
.sdmD-col{
  min-width:0;
  padding-left: var(--sdm-pillPadX);
}
.sdmD-sec{ margin: 0 0 14px; }
.sdmD-title{ display:none; }
.sdmD-list{ display:flex; flex-direction:column; gap: 14px; }
.sdmD-a{
  text-decoration:none;
  color: rgba(0,0,0,.70);
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 1.25;
  white-space: nowrap;
  overflow: visible;
  text-overflow: clip;
}
.sdmD-a:hover{
position: relative;
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  transition: color .12s ease;
}
/* =========================
   ✅ 하위메뉴 hover: 세로바 + (바+gap)만큼 우측 밀림
========================= */
:root{
  --sdmSubBarW: 3px;      /* 바 두께 (살짝 두껍게) */
  --sdmSubBarGap: 8px;    /* 바와 텍스트 사이 gap */
}

/* 텍스트만 움직이기 위해 span으로 감싸 쓸 예정 */
.sdmD-a .sdmD-t{
  display:inline-block;
  transform: translateX(0);
  transition: transform .14s ease;
}

/* 세로 바 */
.sdmD-a:before{
  content:"";
  position:absolute;
  left:0;
  top:50%;
  width: var(--sdmSubBarW);
  height: 1.25em; /* 텍스트 높이와 거의 같게 */
  transform: translateY(-50%);
  border-radius: 3px;
  background: rgba(90,70,51,0);
  transition: background .14s ease;
}

/* hover 시: 바 보이고, 텍스트만 (바+gap)만큼 이동 */
.sdmD-a:hover:before{
  background: rgba(90,70,51,.36);
}
.sdmD-a:hover .sdmD-t{
  transform: translateX(calc(var(--sdmSubBarW) + var(--sdmSubBarGap)));
}

/* =========================
   전체 의료서비스(PC)
========================= */
.sdmD-bottom{ padding: 12px 0 0; }

.sdmAllToggle{
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  padding: 10px 0 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
  user-select:none;
}
.sdmAllToggle .sdmAllText{
  font-size: 12.5px;
  font-weight: 950;
  letter-spacing: -0.15px;
  color: rgba(0,0,0,.78);
}
#sdmH.sdm-allopen .sdmAllToggle .sdmAllText{ color: var(--sdm-accent); }

.sdmAll{
  overflow:hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  transition: max-height .26s ease, opacity .18s ease, transform .18s ease;
  border-bottom: 0;
  margin-bottom: 12px;

  padding-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,.06);
  box-shadow: 0 10px 20px rgba(0,0,0,.10);
  background: rgba(243,238,230,.92);
  padding: 10px 14px;

  position: relative;
  left: 50%;
  transform: translateX(-50%) translateY(-6px);
  width: min(1320px, calc(100vw - 64px));
}
#sdmH.sdm-allopen .sdmAll{
  max-height: 1400px;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.sdmAllGrid{
  padding-left: var(--sdm-leftInset);
  padding-right: 0;
  margin-top: 6px;
  border-top: 0;

  background: rgba(255,255,255,.22);
  border-radius: 14px;
  padding: 12px 14px;
}
.sdmAllRow{
  display:grid;
  grid-template-columns: 220px 1fr;
  gap: 14px;
  align-items:center;
  padding: 10px 0;
  border-top: 1px solid rgba(0,0,0,.07);
}
.sdmAllRow:first-child{ border-top: 0; }

.sdmAllTitle{
  position:relative;
  font-size: 14px;
  font-weight: 950;
  letter-spacing: -0.2px;
  color: rgba(0,0,0,.84);
  margin: 0;
  line-height: 1.25;
  text-align: right;
  padding-right: 12px;
  white-space: nowrap;
}
.sdmAllTitle:before{ content:none; }
.sdmAllTitle:after{
  content:"";
  position:absolute;
  right: 0;
  top: 2px;
  width: 2px;
  height: 14px;
  border-radius: 2px;
  background: rgba(90,70,51,.28);
}
.sdmAllItems{
  display:flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  align-items:flex-start;
}
.sdmAllA{
  display:inline-block;
  text-decoration:none;
  color: rgba(0,0,0,.72);
  font-size: 12.5px;
  font-weight: 550;
  letter-spacing: -0.1px;
  line-height: 1.25;
  padding: 3px 8px;
  border-radius: 10px;
  white-space: nowrap;
}
/* =========================
   ✅ 전체의료서비스 "위첨자 빨간 별" 강조
========================= */
@keyframes sdmStarTwinkle{
  0%   { transform: translate(2px,-6px) scale(.92); filter: drop-shadow(0 0 0 rgba(255,0,0,0)); opacity:.82; }
  50%  { transform: translate(2px,-7px) scale(1.08); filter: drop-shadow(0 0 6px rgba(255,0,0,.35)); opacity:1; }
  100% { transform: translate(2px,-6px) scale(.92); filter: drop-shadow(0 0 0 rgba(255,0,0,0)); opacity:.82; }
}

.sdmAllA.is-hot{
  position: relative;
  font-weight: 550; /* 텍스트도 살짝만 힘 */
}

.sdmAllA.is-hot:after{
  content:"✦";
  position:absolute;
  right: -2px;
  top: 0;
  transform: translate(2px,-6px); /* 위첨자 느낌 */
  font-size: 11px;
  line-height: 1;
  color: #E02020; /* 빨간 별 */
  animation: sdmStarTwinkle 1.3s ease-in-out infinite;
}

.sdmAllA:hover{
  color: var(--sdm-accent);
  background: rgba(255,255,255,.42);
  text-decoration: none;
  font-weight: 800;
}


/* =========================
   COMPACT (PC)
========================= */
#sdmH.sdm-compact .sdmH-inner{
  grid-template-rows: calc(var(--sdm-compactTopH) + var(--sdm-navH));
  padding: 12px 0 0;
}
#sdmH.sdm-compact .sdmH-left,
#sdmH.sdm-compact .sdmH-main,
#sdmH.sdm-compact .sdmH-right{
  grid-template-rows: var(--sdm-compactTopH) var(--sdm-navH);
}
#sdmH.sdm-compact .sdmH-kicker,
#sdmH.sdm-compact .sdmH-headline{ display:none; }
#sdmH.sdm-compact .sdmH-compactLine{ display:flex; grid-row: 1; }
#sdmH.sdm-compact .sdmH-nav{ grid-row: 2; }
#sdmH.sdm-compact .sdmH-logoTop{ display:none; }
#sdmH.sdm-compact .sdmH-row3Wrap{ grid-row: 2; }
#sdmH.sdm-compact .sdmH-logoCompact{
  display:inline-flex;
  align-items:center;
  height: var(--sdm-navH);
  margin-right: 12px;
  text-decoration:none;
}
#sdmH.sdm-compact .sdmH-cta{ grid-row: 2; }
#sdmH.sdm-compact .sdmH-reserve{ height: 0; }

/* =========================
   ✅ MOBILE UI (기존 그대로)
========================= */
.sdmM{ display:none; }

.sdmMbar{
  height: var(--sdm-mH);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
  padding: 0 var(--sdm-mPadX);
}

/* left cluster */
.sdmM-left{
  display:flex;
  align-items:center;
  gap: 10px;
  min-width: 0;
}

.sdmM-ham{
  width: var(--sdm-mBtnH);
  height: var(--sdm-mBtnH);
  padding: 0;
  border-radius: 12px;
  border: 1px solid rgba(90,70,51,.18);
  background: rgba(255,255,255,.55);
  display:inline-flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}

.sdmM-hamIcon{
  width: 18px; height: 12px;
  position:relative;
  display:block;
}
.sdmM-hamIcon:before,
.sdmM-hamIcon:after,
.sdmM-hamIcon i{
  content:"";
  position:absolute;
  left:0; right:0;
  height:2px;
  border-radius: 2px;
  background: rgba(90,70,51,.88);
}
.sdmM-hamIcon:before{ top:0; }
.sdmM-hamIcon i{ top:5px; }
.sdmM-hamIcon:after{ bottom:0; }

.sdmM-brand{
  display:flex;
  align-items:center;
  gap: var(--sdm-mTitleGap);
  min-width: 0;
}
.sdmM-logo{
  display:inline-flex;
  align-items:center;
  text-decoration:none;
  flex:0 0 auto;
}
.sdmM-logo img{
  height: 26px;
  width:auto;
  display:block;
}

.sdmM-title{
  flex:1;
  min-width:0;
  font-size: var(--sdm-mTitleSize);
  font-weight: var(--sdm-mTitleWeight);
  letter-spacing: -0.35px;
  color: rgba(0,0,0,.88);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(var(--sdm-mTitleY));
}

/* right cluster */
.sdmM-right{
  display:flex;
  align-items:center;
  gap: 8px;
  flex:0 0 auto;
}
.sdmM-pill{
  height: var(--sdm-mBtnH);
  padding: 0 14px;
  border-radius: var(--sdm-mRadius);
  border: 1px solid rgba(0,0,0,.12);
  background: rgba(255,255,255,.55);
  color: rgba(0,0,0,.85);
  font-weight: 950;
  font-size: 12.5px;
  letter-spacing: -.2px;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  line-height: 1;
  white-space: nowrap;
}
.sdmM-pill:active{ transform: translateY(1px); }

.sdmMDiv{
  width:100%;
  height:1px;
  background: rgba(0,0,0,.10);
}

.sdmMNoticeLine{
  height: var(--sdm-mNoticeH);
  display:flex;
  align-items:center;
  padding: 0 var(--sdm-mNoticePadX);
  gap: 10px;
}
.sdmMNoticeLine .sdmNoticeBadge{ margin-right: 6px; }
.sdmMNoticeLine .sdmNoticeTextB{
  max-width: 100%;
}

/* overlay + drawer */
.sdmMOverlay{
  position:fixed;
  inset:0;
  background: rgba(0,0,0,.34);
  opacity:0;
  pointer-events:none;
  transition: opacity .18s ease;
  z-index: 100000;
}
.sdmMDrawer{
  position:fixed;
  top:0; left:0;
  height:100vh;
  width: var(--sdm-drawerW);
  background: rgba(243,238,230,.98);
  border-right: 1px solid rgba(0,0,0,.10);
  box-shadow: 18px 0 40px rgba(0,0,0,.20);
  transform: translateX(-105%);
  transition: transform .22s ease;
  z-index: 100001;
  display:flex;
  flex-direction:column;
}

#sdmH.sdmM-open .sdmMOverlay{ opacity:1; pointer-events:auto; }
#sdmH.sdmM-open .sdmMDrawer{ transform: translateX(0); }

.sdmMDrawerTop{
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 14px 14px 10px;
  border-bottom: 1px solid rgba(0,0,0,.08);
  background: rgba(243,238,230,.98);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
}

.sdmMDrawerBrand{
  display:flex;
  align-items:center;
  gap: 10px;
  min-width:0;
}
.sdmMDrawerBrand img{
  height: 24px;
  width:auto;
  display:block;
}
.sdmMDrawerTitle{
  font-size: 13px;
  font-weight: 950;
  letter-spacing: -.2px;
  color: rgba(0,0,0,.86);
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}

.sdmMClose{
  width: 36px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.55);
  cursor:pointer;
}
.sdmMClose:before{
  content:"×";
  display:block;
  font-size: 20px;
  font-weight: 900;
  line-height: 32px;
  text-align:center;
  color: rgba(0,0,0,.68);
}

.sdmMDrawerBody{
  padding: 12px 14px 18px;
  overflow:auto;
  -webkit-overflow-scrolling: touch;
}

/* “3초 선택” */
.sdmM3Pick{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 4px 0 16px;
}
.sdmM3Pick a{
  height: 42px;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.40);
  text-decoration:none;
  color: rgba(0,0,0,.84);
  font-weight: 950;
  font-size: 13px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 14px;
}
.sdmM3Pick a span:last-child{
  color: rgba(0,0,0,.45);
  font-weight: 900;
}

/* accordion */
.sdmMAcc{
  border-top: 1px solid rgba(0,0,0,.08);
  padding-top: 10px;
}
.sdmMAccItem{
  border-bottom: 1px solid rgba(0,0,0,.07);
  padding: 8px 0;
}
.sdmMAccBtn{
  width:100%;
  border:0;
  background: transparent;
  padding: 10px 2px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
}
.sdmMAccBtn span{
  font-size: 13px;
  font-weight: 950;
  letter-spacing: -.2px;
  color: rgba(0,0,0,.84);
}
.sdmMAccBtn i{
  width: 22px; height: 22px;
  border-radius: 999px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  color: rgba(0,0,0,.55);
  font-style: normal;
  font-weight: 900;
}
.sdmMAccBody{
  max-height: 0;
  overflow:hidden;
  opacity: 0;
  transform: translateY(-4px);
  transition: max-height .24s ease, opacity .18s ease, transform .18s ease;
}
.sdmMAccItem.open .sdmMAccBody{
  max-height: 900px;
  opacity: 1;
  transform: translateY(0);
}
.sdmMAccList{
  padding: 6px 0 10px 2px;
  display:flex;
  flex-direction:column;
  gap: 10px;
}
.sdmMAccList a{
  text-decoration:none;
  color: rgba(0,0,0,.72);
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.25;
}
.sdmMAccList a:active{ opacity: .75; }

.sdmMAllBtn{
  margin-top: 14px;
  width: 100%;
  height: 42px;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.55);
  cursor:pointer;
  font-weight: 950;
  color: rgba(0,0,0,.80);
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
}

.sdmMAllBox{
  margin-top: 10px;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,.08);
  background: rgba(255,255,255,.25);
  padding: 10px 10px;
  overflow:hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  transition: max-height .26s ease, opacity .18s ease, transform .18s ease;
}
#sdmH.sdmM-allopen .sdmMAllBox{
  max-height: 2000px;
  opacity: 1;
  transform: translateY(0);
}
.sdmMAllRow{
  padding: 10px 4px;
  border-top: 1px solid rgba(0,0,0,.06);
}
.sdmMAllRow:first-child{ border-top:0; }
.sdmMAllTitle{
  font-size: 12.5px;
  font-weight: 950;
  color: rgba(0,0,0,.82);
  margin-bottom: 8px;
}
.sdmMAllItems{
  display:flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}
.sdmMAllItems a{
  font-size: 11.5px;
  font-weight: 650;
  text-decoration:none;
  color: rgba(0,0,0,.70);
  background: rgba(255,255,255,.42);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 999px;
  padding: 5px 10px;
}

/* body lock */
html.sdm-lock, body.sdm-lock{ overflow:hidden !important; }

/* =========================
   ✅ 수정 핵심: media query 제거/대체
   - iframe 폭이 좁아도 top 폭이 PC면 PC UI 강제
   - #sdmH.sdm-mobile 일 때만 모바일 UI 표시
========================= */
#sdmH.sdm-mobile .sdmH-inner{ display:none !important; }
#sdmH.sdm-mobile .sdmH-reserve{ display:none !important; }
#sdmH.sdm-mobile .sdmD{ display:none !important; }
#sdmH.sdm-mobile .sdmM{ display:block !important; }
`;

  function injectStyle(){
    var st = doc.getElementById('sdmH_style');
    if (!st){
      st = doc.createElement('style');
      st.id = 'sdmH_style';
      doc.head.appendChild(st);
    }
    st.textContent = css;
  }

  var html = `
<div id="sdmH">
  <div class="sdmH-bar">

    <!-- =========================
         ✅ MOBILE BAR (<=860px)
    ========================= -->
    <div class="sdmM" aria-label="Mobile Header">
      <div class="sdmMbar">

        <div class="sdmM-left">
          <button class="sdmM-ham" id="sdmMham" type="button" aria-label="메뉴 열기" aria-expanded="false">
            <span class="sdmM-hamIcon" aria-hidden="true"><i></i></span>
          </button>

          <div class="sdmM-brand">
            <a class="sdmM-logo" href="/" aria-label="여의도 수담의원">
              <img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/33f5d0e079c72.png" alt="여의도 수담의원" />
            </a>
            <div class="sdmM-title" id="sdmMTitleText">여의도 수담의원</div>
          </div>
        </div>

        <div class="sdmM-right">
          <a class="sdmM-pill" href="/nonpay" id="sdmCost">비용·문의</a>
        </div>

      </div>

      <div class="sdmMDiv" aria-hidden="true"></div>

      <div class="sdmMNoticeLine" aria-live="polite">
        <span class="sdmNoticeBadge" aria-hidden="true">NOTICE</span>
        <span class="sdmNoticeTextB" id="sdmMNoticeText">점심 휴게시간 PM 13:30–14:30</span>
      </div>

      <div class="sdmMOverlay" id="sdmMOverlay" aria-hidden="true"></div>

      <aside class="sdmMDrawer" id="sdmMDrawer" aria-hidden="true">
        <div class="sdmMDrawerTop">
          <div class="sdmMDrawerBrand">
            <img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/33f5d0e079c72.png" alt="여의도 수담의원" />
            <div class="sdmMDrawerTitle">여의도 수담의원</div>
          </div>
          <button class="sdmMClose" id="sdmMClose" type="button" aria-label="메뉴 닫기"></button>
        </div>

        <div class="sdmMDrawerBody" id="sdmMDrawerBody">

          <div class="sdmM3Pick" aria-label="빠른 선택">
            <a href="/daily"><span>피곤·컨디션 회복(수액)</span><span>›</span></a>
            <a href="/cgm"><span>혈당·다이어트</span><span>›</span></a>
            <a href="/aesthetic"><span>리프팅·피부</span><span>›</span></a>
          </div>

          <div class="sdmMAcc" id="sdmMAcc"></div>

          <button class="sdmMAllBtn" id="sdmMAllToggle" type="button" aria-expanded="false">
            수담의원 전체 의료서비스 보기
          </button>

          <div class="sdmMAllBox" id="sdmMAllBox" aria-hidden="true"></div>

          <a class="sdmMAllBtn" href="/nonpay" id="sdmMQuickCost">
            치료비용 확인하고 바로 문의하기
          </a>

        </div>
      </aside>
    </div>

    <!-- =========================
         ✅ DESKTOP (기존 PC UI 유지)
    ========================= -->
    <div class="sdmH-inner" id="sdmInner">

      <div class="sdmH-left">
        <div></div>
        <a class="sdmH-logoTop" href="/" aria-label="여의도 수담의원">
          <img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/06d0dafc76ac9.png" alt="여의도 수담의원" />
        </a>

        <div class="sdmH-row3Wrap">
          <a class="sdmH-logoCompact" href="/" aria-label="여의도 수담의원(컴팩트)">
            <img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/33f5d0e079c72.png" alt="여의도 수담의원" />
          </a>

          <a class="sdmH-column" href="/column">
            <span class="sdmH-columnText">수담건강컬럼</span>
            <span class="sdmH-badge" aria-label="NEW POSTING">
              NEW POSTING
              <span class="sdmH-spark" aria-hidden="true"></span>
            </span>
          </a>
        </div>
      </div>

      <div class="sdmH-main">
        <div class="sdmH-compactLine" id="sdmCompactLine" aria-live="polite">
          <span class="sdmNoticeBadge" aria-hidden="true">NOTICE</span>
          <span class="sdmNoticeTextB" id="sdmDNoticeText">점심 휴게시간 PM 13:30–14:30</span>
        </div>

        <div class="sdmH-kicker" id="sdmKicker">
          <span class="sdmH-kickerMain">세브란스 가정의학과 전문의 진료</span>
          <span class="sdmH-kickerBadges" aria-label="진료과목">
            <span class="sdmH-kickerBadge">내과</span>
            <span class="sdmH-kickerBadge">피부과</span>
            <span class="sdmH-kickerBadge">가정의학과</span>
          </span>
        </div>

        <div class="sdmH-headline" id="sdmHeadline">아름다울 일상을 진료합니다</div>

        <nav class="sdmH-nav" aria-label="Primary Navigation">
          <ul class="sdmH-menu" role="menubar" id="sdmMenu">
            <li class="sdmH-item" data-key="about"><a class="sdmH-link" href="/about"><span class="sdmH-linkText">ABOUT CLINIC</span></a></li>
            <li class="sdmH-item" data-key="anti"><a class="sdmH-link" href="/protocol"><span class="sdmH-linkText">젊음유지 클리닉</span></a></li>
            <li class="sdmH-item" data-key="cgm"><a class="sdmH-link" href="/cgm"><span class="sdmH-linkText">혈당다이어트</span></a></li>
            <li class="sdmH-item" data-key="daily"><a class="sdmH-link" href="/daily"><span class="sdmH-linkText">일상치료센터</span></a></li>
            <li class="sdmH-item" data-key="skin"><a class="sdmH-link" href="/aesthetic"><span class="sdmH-linkText">피부시술·관리</span></a></li>
          </ul>
        </nav>
      </div>

      <div class="sdmH-right">
        <div></div>
        <div></div>
        <a class="sdmH-cta" href="/recommend">나에게 맞는 검사, 치료, 시술 추천받기</a>
      </div>

    </div>

    <div class="sdmH-reserve" id="sdmReserve" aria-hidden="true"></div>

    <div class="sdmD" id="sdmDrop" aria-hidden="true">
      <div class="sdmD-inner">
        <div></div>
        <div class="sdmD-main">

          <div class="sdmD-grid" id="sdmDropGrid"></div>

          <div class="sdmD-bottom">
            <div class="sdmAll" id="sdmAll" aria-hidden="true">
              <div class="sdmAllGrid" id="sdmAllGrid"></div>
            </div>

            <button class="sdmAllToggle" id="sdmAllToggle" type="button" aria-expanded="false">
              <div class="sdmAllText" id="sdmAllText">수담의원 전체 의료서비스 보기</div>
            </button>
          </div>

        </div>
        <div></div>
      </div>
    </div>

  </div>
</div>
`;

  function mountHeader(){
    var old = doc.getElementById('sdmH');
    if (old) old.parentNode.removeChild(old);
    var wrap = doc.createElement('div');
    wrap.innerHTML = html;
    doc.body.insertBefore(wrap.firstElementChild, doc.body.firstChild);
  }

  /* =========================
     ✅ 상단 드롭다운(PC) 데이터 (형 원본 그대로)
  ========================= */
  var DATA = [
    { key:"about", secs:[ { title:"ABOUT CLINIC", items:[
      { t:"수담의원 소개", href:"#about_intro" },
      { t:"원내미술작품", href:"#about_art" },
      { t:"주차 및 찾아오는길", href:"#about_location" },
      { t:"비급여비용 고시(비번)", href:"#about_nonpay" }
    ]} ]},

    { key:"anti", secs:[ { title:"젊음유지 클리닉", items:[
      { t:"자가혈 줄기세포치료", href:"#protocol_prpstem" },
      { t:"NAD+ 항노화치료", href:"#protocol_nad" },
      { t:"항산화 클리닉", href:"#protocol_anti" },
      { t:"Running with Doc", href:"#protocol_running" },
      { t:"건강기능식품 처방", href:"#protocol_supp" }
    ]} ]},

    { key:"cgm", secs:[ { title:"혈당다이어트", items:[
      { t:"혈당습관개선 다이어트", href:"#cgm_habit" },
      { t:"연속혈당측정기 처방", href:"#cgm_rx" },
      { t:"10일간의 집중혈당관리", href:"#cgm_10days" },
      { t:"대사밸런스 수액치료", href:"#cgm_metabol_iv" },
      { t:"만성질환관리 첫시작", href:"#cgm_chronic_start" },
    ]} ]},

    { key:"daily", secs:[ { title:"일상치료센터", items:[
      { t:"개별추천 검사·치료", href:"#daily_reco" },
      { t:"기능의학·혈액검사", href:"#daily_func" },
      { t:"맞춤 주사·수액치료", href:"#daily_iv" },
      { t:"성인필수예방접종", href:"#daily_vax" }
    ]} ]},

    { key:"skin", secs:[ { title:"피부시술·관리", items:[
      { t:"개인맞춤 정밀 리프팅", href:"#skin_lifting" },
      { t:"줄기세포 피부시술", href:"#skin_stem" },
      { t:"자연스러운 볼륨채움", href:"#skin_volume" },
      { t:"스킨부스터 클리닉", href:"#skin_booster" },
      { t:"초음파보톡스·기타시술", href:"#skin_toxetc" },
      { t:"MEDICAL AESTHETIC", href:"#skin_medical" }
    ]} ]}
  ];

  /* =========================
     ✅ 전체 의료서비스(형 원본 그대로)
  ========================= */
  var ALL = [
    { title:"젊음유지 클리닉", items:[
      { t:"자가혈 줄기세포치료", href:"#all_protocol_prpstem" },
      { t:"NAD+ 항노화치료", href:"#all_protocol_nad" },
      { t:"항산화 클리닉", href:"#all_protocol_anti" },
      { t:"Running with Doc", href:"#all_protocol_running" },
      { t:"건강기능식품 처방", href:"#all_protocol_supp" }
    ]},
    { title:"혈당다이어트", items:[
      { t:"혈당습관개선 다이어트", href:"#all_cgm_habit" },
      { t:"연속혈당측정기 처방", href:"#all_cgm_rx" },
      { t:"10일간의 집중혈당관리", href:"#all_cgm_10days" },
      { t:"대사밸런스 수액치료", href:"#all_cgm_metabol_iv" },
      { t:"만성질환관리 첫시작", href:"#all_cgm_chronic_start" },
    ]},
    { title:"기능의학 혈액검사", items:[
{ t:"항산화능력 검사", href:"#all_antiox_test" },
      { t:"비타민·미네랄 유전자", href:"#all_gene_vit" },
      { t:"음식불내증 검사", href:"#all_food" },
      { t:"NK 세포 활성도", href:"#all_nk" },
      { t:"생활피로검진", href:"#all_fatigue" },
      { t:"중금속 중독 검사", href:"#all_metal" },
      { t:"소변 유기산 검사", href:"#all_oat" },
      { t:"위염·헬리코박터 검사", href:"#all_hp" }
    ]},
    { title:"맞춤 주사·수액치료", items:[
      { t:"항산화치료", href:"#all_iv_anti" },
      { t:"에너지·항산화 종합치료", href:"#all_iv_energy" },
      { t:"면역활성화치료", href:"#all_iv_immune" },
      { t:"암환자 면역주사", href:"#all_iv_cancer" },
      { t:"여성특화치료", href:"#all_iv_women" },
      { t:"난임부부특화치료", href:"#all_iv_fertility" },
      { t:"오메가-3 균형", href:"#all_iv_omega" }
    ]},
    { title:"아플 때 찾는 수액치료", items:[
      { t:"감기몸살 수액치료", href:"#all_iv_cold" },
      { t:"장염설사 수액치료", href:"#all_iv_gi" },
      { t:"숙취증상 개선치료", href:"#all_iv_hangover" },
      { t:"간회복 프로그램", href:"#all_iv_liver" },
      { t:"피부염 개선치료", href:"#all_iv_derm" },
      { t:"빈혈치료", href:"#all_iv_anemia" }
    ]},
    { title:"리프팅", items:[
      { t:"정밀 초음파 리프팅 (리프테라2)", href:"#all_lift_liftera2" },
      { t:"고출력 고주파 리프팅 (쿨페이즈)", href:"#all_lift_coolphase" },
      { t:"무통증 고주파 리프팅 (G-WAVE)", href:"#all_lift_gwave" }
    ]},
    { title:"스킨부스터", items:[
      { t:"줄기세포 피부이식", href:"#all_booster_stem" },
      { t:"리쥬란", href:"#all_booster_rejuran" },
      { t:"쥬베룩", href:"#all_booster_juvelook" },
      { t:"로리앙", href:"#all_booster_lorient" },
      { t:"릴리이드", href:"#all_booster_lilied" },
      { t:"키오머2", href:"#all_booster_kiomer" },
      { t:"쥬베룩볼륨", href:"#all_booster_juvelookvol" }
    ]},
    { title:"보톡스·기타시술", items:[
      { t:"초음파 가이드 보톡스", href:"#all_tox_us" },
      { t:"주름·스킨보톡스", href:"#all_tox_wrinkle" },
      { t:"점·편사·비립종 제거", href:"#all_etc_remove" },
      { t:"프락셀", href:"#all_etc_fraxel" },
      { t:"이중턱(V-OLET)", href:"#all_etc_volet" }
    ]},
    { title:"에스테틱", items:[
      { t:"여드름 특화 솔루션", href:"#all_est_acne" },
      { t:"프리미엄 스킨케어", href:"#all_est_premium" },
      { t:"여드름 일상관리", href:"#all_est_daily" },
      { t:"에스테틱 기기관리", href:"#all_est_device" }
    ]}
  ];

  function escapeHtml(str){
    return String(str)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#039;');
  }

  function initLogic(){
    var H = doc.getElementById('sdmH');

    // ✅ 핵심: top 폭 기준으로 모바일 여부 판정
    function isMobile(){
      return sdmViewportW() <= 860;
    }

    // ✅ 핵심: CSS media 대신 클래스 토글
    function applyResponsiveClass(){
      if(!H) return;
      if(isMobile()) H.classList.add('sdm-mobile');
      else H.classList.remove('sdm-mobile');
    }

    // PC refs
    var drop = doc.getElementById('sdmDrop');
    var grid = doc.getElementById('sdmDropGrid');
    var menu = doc.getElementById('sdmMenu');
    var allToggle = doc.getElementById('sdmAllToggle');
    var allText = doc.getElementById('sdmAllText');
    var allWrap = doc.getElementById('sdmAll');
    var allGrid = doc.getElementById('sdmAllGrid');

    // Mobile refs
    var ham = doc.getElementById('sdmMham');
    var overlay = doc.getElementById('sdmMOverlay');
    var drawer = doc.getElementById('sdmMDrawer');
    var closeBtn = doc.getElementById('sdmMClose');
    var mAcc = doc.getElementById('sdmMAcc');
    var mAllToggle = doc.getElementById('sdmMAllToggle');
    var mAllBox = doc.getElementById('sdmMAllBox');
    var mDrawerBody = doc.getElementById('sdmMDrawerBody');

    var mTitleEl = doc.getElementById('sdmMTitleText');
    var mNoticeEl = doc.getElementById('sdmMNoticeText');
    var dNoticeEl = doc.getElementById('sdmDNoticeText');

    var pinned = false; // PC 전체보기 pinned
    var mOpen = false;

// ✅ 전체의료서비스에서 "별(✦)로 강조" 할 항목들 (텍스트 기준)
var HOT_ITEMS = new Set([
'항산화능력 검사',
  '연속혈당측정기 처방',
  '혈당습관개선 다이어트',
  'NAD+ 항노화치료',
  '항산화 클리닉',
  '자가혈 줄기세포치료'
]);

    function getRootVarPx(name){
      try{
        var v = (win.getComputedStyle(doc.documentElement).getPropertyValue(name) || '').trim();
        var n = parseFloat(v);
        return isNaN(n) ? 0 : n;
      }catch(e){ return 0; }
    }

    function syncBodyOffset(){
      var extra = getRootVarPx('--sdm-bodyExtraPad');
      var h = H ? (H.getBoundingClientRect().height || 0) : 0;
      var padTop = Math.ceil(h + extra);

      doc.documentElement.style.scrollPaddingTop = padTop + 'px';

      var doz = doc.getElementById('doz_body');
      if (doz){
        doz.style.paddingTop = padTop + 'px';
        doz.style.marginTop = '0px';
      }
      doc.body.style.paddingTop = '0px';
    }

    /* =========================
       PC: render dropdown + ALL
    ========================= */
    function renderDrop(){
      if(!grid) return;
      grid.innerHTML = DATA.map(function(col){
        var secs = (col.secs || []);
        var secHtml = secs.map(function(sec){
          var items = (sec.items || []).map(function(it){
            return '<a class="sdmD-a" href="'+it.href+'"><span class="sdmD-t">'+escapeHtml(it.t)+'</span></a>';
          }).join('');
          return '<div class="sdmD-sec"><div class="sdmD-list">'+items+'</div></div>';
        }).join('');
        return '<div class="sdmD-col" data-col="'+escapeHtml(col.key)+'">'+secHtml+'</div>';
      }).join('');
    }

    function renderAll(){
      if(!allGrid) return;
      allGrid.innerHTML = ALL.map(function(card){
        var items = (card.items || []).map(function(it){
          var hot = HOT_ITEMS.has(it.t) ? ' is-hot' : '';
return '<a class="sdmAllA'+hot+'" href="'+it.href+'">'+escapeHtml(it.t)+'</a>';
        }).join('');
        return ''+
          '<div class="sdmAllRow">' +
            '<div class="sdmAllTitle">'+escapeHtml(card.title)+'</div>' +
            '<div class="sdmAllItems">'+items+'</div>' +
          '</div>';
      }).join('');
    }

    function openDrop(){
      if(!H || !drop) return;
      H.classList.add('sdm-open');
      drop.setAttribute('aria-hidden','false');
      syncBodyOffset();
      requestAnimationFrame(syncBodyOffset);
      setTimeout(syncBodyOffset, 180);
    }
    function closeDrop(){
      if(!H || !drop) return;
      if (pinned) return;
      H.classList.remove('sdm-open');
      drop.setAttribute('aria-hidden','true');
      syncBodyOffset();
      requestAnimationFrame(syncBodyOffset);
    }

    function setAllOpen(on){
      pinned = !!on;
      if(!H) return;

      if (pinned){
        H.classList.add('sdm-allopen');
        openDrop();
        if (allToggle) allToggle.setAttribute('aria-expanded','true');
        if (allWrap) allWrap.setAttribute('aria-hidden','false');
        if (allText) allText.textContent = '전체의료서비스 닫기';
      } else {
        H.classList.remove('sdm-allopen');
        if (allToggle) allToggle.setAttribute('aria-expanded','false');
        if (allWrap) allWrap.setAttribute('aria-hidden','true');
        if (allText) allText.textContent = '수담의원 전체 의료서비스 보기';
      }
      syncBodyOffset();
      requestAnimationFrame(syncBodyOffset);
      setTimeout(syncBodyOffset, 180);
    }

    /* =========================
       Mobile: Drawer + Accordion
    ========================= */
    function lockBody(on){
      try{
        if(on){
          doc.documentElement.classList.add('sdm-lock');
          doc.body.classList.add('sdm-lock');
        }else{
          doc.documentElement.classList.remove('sdm-lock');
          doc.body.classList.remove('sdm-lock');
        }
      }catch(e){}
    }

    function openMobile(){
      if(!H) return;
      mOpen = true;
      H.classList.add('sdmM-open');
      if (ham) ham.setAttribute('aria-expanded','true');
      if (overlay) overlay.setAttribute('aria-hidden','false');
      if (drawer) drawer.setAttribute('aria-hidden','false');
      lockBody(true);
      syncBodyOffset();
    }

    function closeMobile(){
      if(!H) return;
      mOpen = false;
      H.classList.remove('sdmM-open');
      if (ham) ham.setAttribute('aria-expanded','false');
      if (overlay) overlay.setAttribute('aria-hidden','true');
      if (drawer) drawer.setAttribute('aria-hidden','true');
      lockBody(false);
      syncBodyOffset();
    }

    function renderMobileAccordion(){
      if(!mAcc) return;
      mAcc.innerHTML = DATA.map(function(col){
        var labelMap = {
          about: 'ABOUT CLINIC',
          anti: '젊음유지 클리닉',
          cgm: '혈당다이어트',
          daily: '일상치료센터',
          skin: '피부시술·관리'
        };
        var title = labelMap[col.key] || col.key;

        var items = [];
        (col.secs || []).forEach(function(sec){
          (sec.items || []).forEach(function(it){ items.push(it); });
        });

        var listHtml = items.map(function(it){
          return '<a href="'+it.href+'">'+escapeHtml(it.t)+'</a>';
        }).join('');

        return ''+
          '<div class="sdmMAccItem" data-key="'+escapeHtml(col.key)+'">'+
            '<button class="sdmMAccBtn" type="button" aria-expanded="false">'+
              '<span>'+escapeHtml(title)+'</span>'+
              '<i aria-hidden="true">+</i>'+
            '</button>'+
            '<div class="sdmMAccBody" aria-hidden="true">'+
              '<div class="sdmMAccList">'+listHtml+'</div>'+
            '</div>'+
          '</div>';
      }).join('');
    }

    function smoothScrollDrawerTo(el, topPadding){
      if(!mDrawerBody || !el) return;
      var pad = (typeof topPadding === 'number') ? topPadding : 10;

      var topBar = (drawer && drawer.querySelector('.sdmMDrawerTop')) ? drawer.querySelector('.sdmMDrawerTop') : null;
      var topH = topBar ? (topBar.getBoundingClientRect().height || 0) : 0;

      var bodyRect = mDrawerBody.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      var target = (elRect.top - bodyRect.top) + mDrawerBody.scrollTop - topH - pad;

      var current = mDrawerBody.scrollTop;
      if (Math.abs(target - current) < 18) return;

      mDrawerBody.scrollTo({ top: Math.max(0, target), behavior:'smooth' });
    }

    function bindMobileAccordion(){
      if(!mAcc) return;

      mAcc.addEventListener('click', function(e){
        var btn = e.target.closest ? e.target.closest('.sdmMAccBtn') : null;
        if(!btn) return;

        e.preventDefault();

        var item = btn.parentNode;
        var isOpen = item.classList.contains('open');

        var items = mAcc.querySelectorAll('.sdmMAccItem');
        for(var i=0;i<items.length;i++){
          items[i].classList.remove('open');
          var b = items[i].querySelector('.sdmMAccBtn');
          var body = items[i].querySelector('.sdmMAccBody');
          var icon = items[i].querySelector('.sdmMAccBtn i');
          if(b) b.setAttribute('aria-expanded','false');
          if(body) body.setAttribute('aria-hidden','true');
          if(icon) icon.textContent = '+';
        }

        if(!isOpen){
          item.classList.add('open');
          btn.setAttribute('aria-expanded','true');
          var body2 = item.querySelector('.sdmMAccBody');
          var icon2 = item.querySelector('.sdmMAccBtn i');
          if(body2) body2.setAttribute('aria-hidden','false');
          if(icon2) icon2.textContent = '−';

          setTimeout(function(){
            smoothScrollDrawerTo(btn, 10);
          }, 40);
        }
      });

      mAcc.addEventListener('click', function(e){
        var a = e.target.closest ? e.target.closest('a') : null;
        if(a && a.getAttribute('href')){
          closeMobile();
        }
      });
    }

    function renderMobileAll(){
      if(!mAllBox) return;
      mAllBox.innerHTML = ALL.map(function(card){
        var items = (card.items || []).map(function(it){
          return '<a href="'+it.href+'">'+escapeHtml(it.t)+'</a>';
        }).join('');
        return ''+
          '<div class="sdmMAllRow">'+
            '<div class="sdmMAllTitle">'+escapeHtml(card.title)+'</div>'+
            '<div class="sdmMAllItems">'+items+'</div>'+
          '</div>';
      }).join('');
    }

    function setMobileAll(on){
      if(!H) return;

      if(on){
        H.classList.add('sdmM-allopen');
        if (mAllToggle) mAllToggle.setAttribute('aria-expanded','true');
        if (mAllBox) mAllBox.setAttribute('aria-hidden','false');
        if (mAllToggle) mAllToggle.textContent = '전체의료서비스 닫기';

        setTimeout(function(){
          smoothScrollDrawerTo(mAllToggle, 6);
        }, 60);

      }else{
        H.classList.remove('sdmM-allopen');
        if (mAllToggle) mAllToggle.setAttribute('aria-expanded','false');
        if (mAllBox) mAllBox.setAttribute('aria-hidden','true');
        if (mAllToggle) mAllToggle.textContent = '수담의원 전체 의료서비스 보기';
      }
    }

    /* =========================
       PC hover handlers
    ========================= */
    var hoverInside=false;
    function bindDesktopHover(){
      if(!menu || !drop || !H) return;
      menu.addEventListener('mouseenter', function(){
        if(isMobile()) return;
        hoverInside=true; openDrop();
      });
      menu.addEventListener('mouseleave', function(){
        if(isMobile()) return;
        hoverInside=false;
        setTimeout(function(){ if(!hoverInside) closeDrop(); }, 140);
      });
      drop.addEventListener('mouseenter', function(){
        if(isMobile()) return;
        hoverInside=true; openDrop();
      });
      drop.addEventListener('mouseleave', function(){
        if(isMobile()) return;
        hoverInside=false;
        setTimeout(function(){ if(!hoverInside) closeDrop(); }, 140);
      });
      H.addEventListener('mouseleave', function(){
        if(isMobile()) return;
        hoverInside=false;
        setTimeout(function(){ if(!hoverInside) closeDrop(); }, 160);
      });

      if (allToggle){
        allToggle.addEventListener('click', function(e){
          if(isMobile()) return;
          e.preventDefault();
          e.stopPropagation();
          setAllOpen(!H.classList.contains('sdm-allopen'));
        });
      }
    }

    function updateCompact(){
      if(!H) return;
      if(isMobile()){
        H.classList.remove('sdm-compact');
        return;
      }
      var y = win.scrollY || doc.documentElement.scrollTop || 0;
      if(y > 40) H.classList.add('sdm-compact');
      else H.classList.remove('sdm-compact');
      syncBodyOffset();
    }

    function bindMobileDrawer(){
      if(!H) return;

      if(ham){
        ham.addEventListener('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          if(!isMobile()) return;
          if(mOpen) closeMobile(); else openMobile();
        });
      }
      if(closeBtn){
        closeBtn.addEventListener('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          closeMobile();
        });
      }
      if(overlay){
        overlay.addEventListener('click', function(){
          closeMobile();
        });
      }

      doc.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && mOpen) closeMobile();
      });

      if(mAllToggle){
        mAllToggle.addEventListener('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          setMobileAll(!H.classList.contains('sdmM-allopen'));
        });
      }

      if(mAllBox){
        mAllBox.addEventListener('click', function(e){
          var a = e.target.closest ? e.target.closest('a') : null;
          if(a && a.getAttribute('href')) closeMobile();
        });
      }
    }

    /* =========================
       INITIAL
    ========================= */
    applyResponsiveClass();   // ✅ 추가: 첫 렌더에서 PC/모바일 강제 결정

    renderDrop();
    renderAll();
    if (allWrap) allWrap.setAttribute('aria-hidden','true');

    renderMobileAccordion();
    bindMobileAccordion();
    renderMobileAll();
    if (mAllBox) mAllBox.setAttribute('aria-hidden','true');

    bindDesktopHover();
    bindMobileDrawer();

    syncBodyOffset();
    updateCompact();

    var t=null;
    function onResize(){
      clearTimeout(t);
      t=setTimeout(function(){
        applyResponsiveClass(); // ✅ 추가: 리사이즈 때도 top 폭 기준으로 강제
        if(!isMobile() && mOpen) closeMobile();
        syncBodyOffset();
        updateCompact();
      }, 80);
    }
    win.addEventListener('resize', onResize);

    win.addEventListener('scroll', function(){
      if(isMobile()) return;
      if(!pinned && H.classList.contains('sdm-open')) closeDrop();
      updateCompact();
    }, { passive:true });

    setTimeout(function(){ applyResponsiveClass(); syncBodyOffset(); updateCompact(); }, 200);
    setTimeout(function(){ applyResponsiveClass(); syncBodyOffset(); updateCompact(); }, 600);
    setTimeout(function(){ applyResponsiveClass(); syncBodyOffset(); updateCompact(); }, 1100);

    /* =========================
       ✅ 1) 모바일 타이틀 Rotator (형 원본 그대로)
    ========================= */
    var TITLE_ITEMS = [
      '여의도 수담의원',
      '아름다울 일상을 진료합니다',
      '가정의학과 전문의 진료',
      '젊음유지 클리닉'
    ];
    var titleIdx = 0;
    var TITLE_INTERVAL_MS = 3000;

    function setTitleText(nextText){
      if (!mTitleEl) return;
      mTitleEl.classList.remove('sdm-textin');
      void mTitleEl.offsetWidth;
      mTitleEl.textContent = nextText;
      requestAnimationFrame(function(){
        mTitleEl.classList.add('sdm-textin');
      });
    }
    setTitleText(TITLE_ITEMS[0]);

    if (!win.__SDM_TITLE_TIMER__){
      win.__SDM_TITLE_TIMER__ = win.setInterval(function(){
        titleIdx = (titleIdx + 1) % TITLE_ITEMS.length;
        setTitleText(TITLE_ITEMS[titleIdx]);
      }, TITLE_INTERVAL_MS);
    }

    /* =========================
       ✅ 6) NOTICE Rotator (형 원본 그대로)
    ========================= */
    var NOTICE_ITEMS = [
      '점심 휴게시간 PM 13:30–14:30',
      '2026.01.01(목) 휴진입니다. 새해 복 많이 받으세요!',
      '연말·연초 예약이 빠르게 마감됩니다. DM으로 일정 먼저 남겨주세요',
      '비급여 비용은 “비용·문의”에서 바로 확인 가능합니다'
    ];
    var noticeIdx = 0;
    var NOTICE_INTERVAL_MS = 5000;

    function animateNoticeB(el, text){
      if(!el) return;
      el.classList.remove('sdm-noticein');
      void el.offsetWidth;
      el.textContent = text;
      requestAnimationFrame(function(){
        el.classList.add('sdm-noticein');
      });
    }

    function setNoticeAll(nextText){
      animateNoticeB(mNoticeEl, nextText);
      animateNoticeB(dNoticeEl, nextText);
    }

    setNoticeAll(NOTICE_ITEMS[0]);

    if (!win.__SDM_NOTICE_TIMER__){
      win.__SDM_NOTICE_TIMER__ = win.setInterval(function(){
        noticeIdx = (noticeIdx + 1) % NOTICE_ITEMS.length;
        setNoticeAll(NOTICE_ITEMS[noticeIdx]);
      }, NOTICE_INTERVAL_MS);
    }
  }

  function boot(){
    injectStyle();
    mountHeader();
    initLogic();
  }

  if (doc.readyState === 'loading'){
    doc.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
  

  `;

  // ---- 아래는 건드리지 마 ----
  function inject() {
    // 중복 삽입 방지
    if (document.getElementById("sd-shared-header-root")) return;

    // 1) HTML 삽입
    const root = document.createElement("div");
    root.id = "sd-shared-header-root";
    root.innerHTML = HTML;
    document.body.insertAdjacentElement("afterbegin", root);

    // 2) CSS 삽입
    if (CSS && CSS.trim()) {
      const style = document.createElement("style");
      style.setAttribute("data-sd-shared", "header");
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    // 3) JS 실행
    if (JS && JS.trim()) {
      const script = document.createElement("script");
      script.setAttribute("data-sd-shared", "header");
      script.textContent = JS;
      document.body.appendChild(script);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
