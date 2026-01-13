(function(){
function sdmViewportW(){
  try{
    var w = window.innerWidth || 0;
    var d = (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : 0;
    var vv = (window.visualViewport && window.visualViewport.width) ? Math.round(window.visualViewport.width) : 0;
    var best = w || d || vv || 0;
    // iOS 사파리에서 layout viewport(980) 같은 값이 튀면 clientWidth/visualViewport를 우선
    if (vv && vv < best) best = vv;
    if (d && d < best) best = d;
    return best || window.innerWidth;
  }catch(e){
    return window.innerWidth;
  }
}

// ✅ PC면 모바일 헤더는 아예 실행 금지
if (sdmViewportW() > 860) return;

  /* =========================
     ✅ MOBILE ONLY HEADER (REV-MOBILE-ONLY)
     - PC 코드 완전 제거
     - doz_body 문서 찾을 때까지 폴링 후 주입 (아임웹 iframe 대응)
     - iOS 드로어 스크롤 보장 (body lock을 position:fixed로)
  ========================= */

  // ✅ 중복 실행 방지(안정 키)
  var __KEY = '__SDM_MOBILE_HEADER_V1__';
  if (window[__KEY]) return;
  window[__KEY] = true;
  window.__SDM_MOBILE_HEADER_STATE__ = 'booting';
  try{ console.log('[SDM][M] header boot'); }catch(e){}

function findDozDocOnce(){
    try{
      if (document.getElementById('doz_body')) return document;
      var ifr = document.getElementsByTagName('iframe');
      for (var i=0;i<ifr.length;i++){
        try{
          var d = ifr[i].contentDocument || (ifr[i].contentWindow && ifr[i].contentWindow.document);
          if (d && d.getElementById && d.getElementById('doz_body')) return d;
        }catch(e){}
      }
    }catch(e){}
    return null;
  }

  function waitForDozDoc(cb){
    var start = Date.now();
    var timer = setInterval(function(){
      var d = findDozDocOnce();
      if (d){
        clearInterval(timer);
        cb(d);
        return;
      }
      if (Date.now() - start > 6000){
        clearInterval(timer);
        cb(document);
      }
    }, 120);
  }

  waitForDozDoc(function(doc){
    var win = doc.defaultView || window;

    var css = `
:root{
  --sdm-bg:#F3EEE6;
  --sdm-text:#141414;
  --sdm-sub:rgba(0,0,0,.55);
  --sdm-line:rgba(0,0,0,.10);
  --sdm-accent:#5A4633;

  /* 모바일 */
  --sdm-mH: 56px;
  --sdm-mPadX: 14px;
  --sdm-mBtnH: 34px;
  --sdm-mRadius: 999px;

  /* 타이틀(로고 옆) 조절 가능 */
  --sdm-mTitleGap: 6px;
  --sdm-mTitleSize: 15px;
  --sdm-mTitleWeight: 900;
  --sdm-mTitleY: 0px;

  /* Notice */
  --sdm-mNoticeH: 40px;
  --sdm-mNoticePadX: 14px;

  /* Drawer */
  --sdm-drawerW: min(86vw, 360px);

  /* ✅ Badge 톤다운 레드 */
  --sdm-badgeRed:#A35B5B;         /* 너무 진한 빨강 X */
  --sdm-badgeRedBorder:rgba(0,0,0,.10);
  --sdm-badgeGlow:rgba(163,91,91,.35);

  /* ✅ Hot pill 강조 (연한 테두리 + 펄스) */
  --sdm-hotBorder: rgba(120,90,80,.42); /* 진하지 않게 */
  --sdm-hotGlow1: rgba(120,90,80,.18);
  --sdm-hotGlow2: rgba(120,90,80,.30);
}

/* =========================
   ✅ (FIX 1) 아임웹 기본 헤더/스페이서가 자리 먹는 케이스 방어 (모바일에서만)
   - "자리" 남기는 요소를 최대한 무해하게 0 처리
========================= */
@media (max-width: 980px){
  #header, #doz_header, .doz_header, .doz-header, .site_header, .site-header,
  .mobile_header, .mobile-header, .new_header, .new-header,
  .header_wrap, .header-wrap, .header, .imweb-header, .imweb_header{
    height:0 !important;
    min-height:0 !important;
    padding:0 !important;
    margin:0 !important;
    border:0 !important;
    overflow:hidden !important;
  }
}

/* ✅ 우리가 밀어주는 스페이서 */
#sdmH_spacer{
  height: 0px;
  width: 100%;
}

#sdmH{
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  z-index: 999999;
  margin: 0 !important;
  background: transparent;
}
#sdmH, #sdmH *{ box-sizing:border-box; }

.sdmH-bar{
  width:100%;
  background: var(--sdm-bg);
  border-bottom: 1px solid var(--sdm-line);
}

/* 모바일 바 */
.sdmM{ display:block; }
.sdmMbar{
  height: var(--sdm-mH);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
  padding: 0 var(--sdm-mPadX);
}
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
.sdmM-hamIcon{ width:18px; height:12px; position:relative; display:block; }
.sdmM-hamIcon:before,
.sdmM-hamIcon:after,
.sdmM-hamIcon i{
  content:"";
  position:absolute;
  left:0; right:0;
  height:2px;
  border-radius:2px;
  background: rgba(90,70,51,.88);
}
.sdmM-hamIcon:before{ top:0; }
.sdmM-hamIcon i{ top:5px; }
.sdmM-hamIcon:after{ bottom:0; }

.sdmM-brand{
  display:flex;
  align-items:center;
  gap: var(--sdm-mTitleGap);
  min-width:0;
}
.sdmM-logo{
  display:inline-flex;
  align-items:center;
  text-decoration:none;
  flex:0 0 auto;
}
.sdmM-logo img{ height:26px; width:auto; display:block; }
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
  font-weight: 1400;
  -webkit-text-stroke: 0.65px rgba(0,0,0,.65);
}

.sdmM-right{ display:flex; align-items:center; gap:8px; flex:0 0 auto; }
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
.sdmMDiv{ width:100%; height:1px; background: rgba(0,0,0,.10); }

/* Notice */
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
  transform: translateY(-.5px);
}
.sdmNoticeTextB{
  display:inline-block;
  min-width:0;
  white-space: nowrap;
  opacity: 1;
  letter-spacing: 0px;
  will-change: opacity, letter-spacing, transform;
}
@keyframes sdmNoticeSettle{
  from{ opacity:0; letter-spacing:-.6px; }
  to{ opacity:1; letter-spacing:0px; }
}
.sdmNoticeTextB.sdm-noticein{ animation: sdmNoticeSettle 520ms ease both; }
.sdmNoticeWrap{
  flex: 1;
  min-width: 0;
  overflow: hidden;
  position: relative;
}
.sdmNoticeMarquee{ display:inline-block; white-space:nowrap; will-change: transform; }

.sdmMNoticeLine{
  height: var(--sdm-mNoticeH);
  display:flex;
  align-items:center;
  padding: 0 var(--sdm-mNoticePadX);
  gap: 10px;
}
.sdmMNoticeLine .sdmNoticeBadge{ margin-right:0; }

/* Overlay & Drawer */
.sdmMOverlay{
  position:fixed;
  inset:0;
  background: rgba(0,0,0,.34);
  opacity:0;
  pointer-events:none;
  transition: opacity .18s ease;
  z-index: 1000000;
}
.sdmMDrawer{
  position:fixed;
  top:0; left:0;
  height:100dvh;
  width: var(--sdm-drawerW);
  background: rgba(243,238,230,.98);
  border-right: 1px solid rgba(0,0,0,.10);
  box-shadow: 18px 0 40px rgba(0,0,0,.20);
  transform: translateX(-105%);
  transition: transform .22s ease;
  z-index: 1000001;
  display:flex;
  flex-direction:column;
}
#sdmH.sdmM-open .sdmMOverlay{ opacity:1; pointer-events:auto; }
#sdmH.sdmM-open .sdmMDrawer{ transform: translateX(0); }

/* Drawer top */
.sdmMDrawerTop{
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 14px 14px 10px;
  border-bottom: 1px solid rgba(0,0,0,.08);
  background: rgba(243,238,230,.98);
  display:block;
}
.sdmMDrawerTopRow{
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
.sdmMDrawerBrand img{ height:24px; width:auto; display:block; }
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
  font-size:20px;
  font-weight:900;
  line-height:32px;
  text-align:center;
  color: rgba(0,0,0,.68);
}

#sdmMAllInTop{
  display:none;
  margin-top: 10px;
}
#sdmH.sdmM-allopen #sdmMAllInTop{ display:block; }

/* Drawer scroll */
.sdmMDrawerBody{
  flex: 1;
  padding: 12px 14px 18px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  overscroll-behavior: contain;
}

/* Quick line */
.sdmMQuickTop{ margin: 6px 0 10px; }
.sdmMQuickHr{ height:1px; background: rgba(0,0,0,.10); margin: 8px 0 0; }
.sdmMQuickTitle{
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: -.2px;
  color: rgba(0,0,0,.70);
}
.sdmMQuickTitle b{
  font-weight: 1400;
  color: rgba(0,0,0,.92);
  -webkit-text-stroke: 0.65px rgba(0,0,0,.65);
}

/* 3 picks */
.sdmM3Pick{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 0 0 16px;
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
.sdmM3Pick a .left{
  display:flex;
  align-items:center;
  gap:10px;
  min-width:0;
}
.sdmM3Pick a .txt{
  min-width:0;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.sdmM3Pick a .chev{ color: rgba(0,0,0,.45); font-weight: 900; }

/* ✅ (REQ 2) 배지: 그림자 느낌 제거 + 은은한 글로우만 */
.sdmMTag{
  flex:0 0 auto;
  height: 18px;
  padding: 0 8px;
  border-radius: 999px;

  background: var(--sdm-badgeRed);

  /* ✅ 텍스트 더 선명한 흰색 체감 */
  color: #FFFFFF;
  opacity: 1;

  /* ✅ 굵기 강화 */
  font-weight: 1100;
  font-size: 10px;
  letter-spacing: -.15px;

    font-weight: 950 !important;  /* 또는 900 */
  -webkit-text-stroke: 0 !important;
text-shadow: none !important;

  border: 1px solid var(--sdm-badgeRedBorder);

  /* glow 유지 */
  box-shadow: 0 0 12px var(--sdm-badgeGlow);

  display:inline-flex;
  align-items:center;
  justify-content:center;

  line-height: 1;
  padding-top: 1px;
}
/* accordion */
.sdmMAcc{ border-top: 1px solid rgba(0,0,0,.08); padding-top:10px; }
.sdmMAccItem{ border-bottom: 1px solid rgba(0,0,0,.07); padding: 8px 0; }
.sdmMAccBtn{
  width:100%;
  border:0;
  background:transparent;
  padding: 10px 2px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
}
.sdmMAccBtn span{
  font-size: 15px;
font-weight: 950;
-webkit-text-stroke: 0.55px rgba(0,0,0,.55); /* ✅ 체감 두께 강화 */
  letter-spacing: -.2px;
  color: rgba(0,0,0,.84);
}
.sdmMAccBtn i{
  width:22px; height:22px;
  border-radius:999px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  color: rgba(0,0,0,.55);
  font-style: normal;
  font-weight: 900;
}
.sdmMAccBody{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transform: translateY(-4px);
  transition: max-height .24s ease, opacity .18s ease, transform .18s ease;
}
.sdmMAccItem.open .sdmMAccBody{
  max-height: 900px;
  opacity:1;
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
  font-size: 13px;
  font-weight: 650;
  line-height: 1.50;
}
.sdmMAccList a:active{ opacity: .75; }

/* All btn + box */
.sdmMAllBtn{
  margin-top: 10px;
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
  margin-top: 0;
  border: 0;
  background: rgba(255,255,255,.25);
  padding: 0;
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
  margin-top: 6px;
  border: 1px solid rgba(0,0,0,.08);
  padding: 10px 10px;
}

.sdmMAllRow{ padding: 10px 4px; border-top: 1px solid rgba(0,0,0,.06); }
.sdmMAllRow:first-child{ border-top:0; }
.sdmMAllTitle{
  font-size: 14px;
font-weight: 950;
-webkit-text-stroke: 0.55px rgba(0,0,0,.55); /* 체감 두께 업 */
  color: rgba(0,0,0,.82);
  margin-bottom: 12px;
}
.sdmMAllItems{ display:flex; flex-wrap:wrap; gap: 8px 10px; }
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

/* ✅ (REQ 3) Hot pill: 레이아웃 안 흔들리게 "가짜 두께"만 펄스 */
@keyframes sdmHotPulseShadow{
  0%   { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
  50%  { box-shadow: 0 0 0 3px var(--sdm-hotGlow2); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}

.sdmMAllItems a.sdm-pillHot{
  /* ✅ border는 고정: 레이아웃/줄바꿈 흔들림 방지 */
  border: 1px solid var(--sdm-hotBorder) !important;

  /* ✅ outline 제거: "뒤에 또 하나 생기는" 현상 제거 */
  outline: none !important;

  /* ✅ 두꺼워지는 느낌은 shadow spread로만 */
  animation: sdmHotPulseShadow 1.25s ease-in-out infinite !important;
  will-change: box-shadow;
}

#sdmH.sdmM-allopen #sdmMAllToggle{ display:none; }
#sdmMQuickCost{ margin-top: 10px; }

/* Drawer footer */
.sdmMFooter{
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(0,0,0,.10);
  color: rgba(0,0,0,.55);
  font-size: 11.5px;
  line-height: 1.55;
}
.sdmMFooter strong{ color: rgba(0,0,0,.70); font-weight: 900; }
.sdmMFooterTop{
  display:flex;
  align-items:center;
  gap:8px;
  flex-wrap:wrap;
  margin-bottom: 10px;
}
.sdmMFooterTop .dim{ color: rgba(0,0,0,.45); }
.sdmMFooterGrid{
  display:grid;
  grid-template-columns: 92px 1fr;
  row-gap: 6px;
  column-gap: 10px;
}
.sdmMFooterK{ color: rgba(0,0,0,.48); }
.sdmMFooterV{ color: rgba(0,0,0,.66); font-weight: 800; }
.sdmMFooterCopy{
  margin-top: 10px;
  font-size: 11px;
  color: rgba(0,0,0,.40);
}

/* Title text in */
@keyframes sdmTextIn{
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.sdm-textin{ animation: sdmTextIn 650ms ease both; }
@media (prefers-reduced-motion: reduce){
  .sdmMAllItems a.sdm-pillHot{ animation: none !important; }
}`;

    function injectStyle(){
      var st = doc.getElementById('sdmH_style_mobile_only');
      if (!st){
        st = doc.createElement('style');
        st.id = 'sdmH_style_mobile_only';
        doc.head.appendChild(st);
      }
      st.textContent = css;
    }

    var html = `
<div id="sdmH">
  <div class="sdmH-bar">
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
        <span class="sdmNoticeWrap">
          <span class="sdmNoticeTextB sdmNoticeMarquee" id="sdmMNoticeText">점심 휴게시간 PM 13:30–14:30</span>
        </span>
      </div>

      <div class="sdmMOverlay" id="sdmMOverlay" aria-hidden="true"></div>

      <aside class="sdmMDrawer" id="sdmMDrawer" aria-hidden="true">
        <div class="sdmMDrawerTop">
          <div class="sdmMDrawerTopRow">
            <div class="sdmMDrawerBrand">
              <img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/06d0dafc76ac9.png" alt="여의도 수담의원" />
            </div>
            <button class="sdmMClose" id="sdmMClose" type="button" aria-label="메뉴 닫기"></button>
          </div>

          <div id="sdmMAllInTop" aria-hidden="true">
            <button class="sdmMAllBtn" id="sdmMAllCloseTop" type="button">
              전체의료서비스 닫기
            </button>
          </div>
        </div>

        <div class="sdmMDrawerBody" id="sdmMDrawerBody">

          <div class="sdmMQuickTop">
            <div class="sdmMQuickTitle">가장 많이 찾으시는 치료 바로 <b>문의 · 예약</b></div>
            <div class="sdmMQuickHr" aria-hidden="true"></div>
          </div>

          <!-- ✅ (REQ 2) 배지: 텍스트 옆에 추가 -->
          <div class="sdmM3Pick" aria-label="빠른 선택">
            <a href="/daily">
              <span class="left"><span class="txt">피로회복·항산화치료(수액치료)</span><span class="sdmMTag">추천</span></span>
              <span class="chev">›</span>
            </a>
            <a href="/cgm">
              <span class="left"><span class="txt">혈당습관개선·다이어트</span><span class="sdmMTag">인기</span></span>
              <span class="chev">›</span>
            </a>
            <a href="/aesthetic">
              <span class="left"><span class="txt">리프팅·피부관리</span><span class="sdmMTag">상담많음</span></span>
              <span class="chev">›</span>
            </a>
          </div>

          <div class="sdmMAcc" id="sdmMAcc"></div>

          <button class="sdmMAllBtn" id="sdmMAllToggle" type="button" aria-expanded="false">
            수담의원 전체 의료서비스 보기
          </button>

          <div class="sdmMAllBox" id="sdmMAllBox" aria-hidden="true"></div>

          <a class="sdmMAllBtn" href="/nonpay" id="sdmMQuickCost">
            치료비용 확인하고 바로 문의하기
          </a>

          <div class="sdmMFooter" id="sdmMFooter">
            <div class="sdmMFooterTop">
              <strong>여의도 수담의원</strong>
              <span class="dim">|</span>
              <span>아름다울 일상을 진료합니다.</span>
            </div>

            <div class="sdmMFooterGrid" aria-label="병원 정보">
              <div class="sdmMFooterK">사업자등록번호</div><div class="sdmMFooterV">755-37-01269</div>
              <div class="sdmMFooterK">대표전화</div><div class="sdmMFooterV">010-8706-7696</div>
              <div class="sdmMFooterK">FAX</div><div class="sdmMFooterV">070-8733-7007</div>
              <div class="sdmMFooterK">진료과목</div><div class="sdmMFooterV">보건업 · 가정의학과, 내과, 피부과</div>
            </div>

            <div class="sdmMFooterCopy">© 2025 Yeouido Soodam Clinic. All rights reserved.</div>
          </div>

        </div>
      </aside>
    </div>
  </div>
</div>
`;

    function mountHeader(){
      var old = doc.getElementById('sdmH');
      if (old && old.parentNode) old.parentNode.removeChild(old);

      var wrap = doc.createElement('div');
      wrap.innerHTML = html;
      doc.body.insertBefore(wrap.firstElementChild, doc.body.firstChild);
      window.__SDM_MOBILE_HEADER_STATE__ = 'mounted';
      try{ console.log('[SDM][M] mounted'); }catch(e){}
    }

    var DATA = [
      { key:"about", label:"ABOUT CLINIC", items:[
        { t:"수담의원 소개", href:"#about_intro" },
        { t:"원내미술작품", href:"#about_art" },
        { t:"주차 및 찾아오는길", href:"#about_location" },
        { t:"비급여비용 고시(비번)", href:"#about_nonpay" }
      ]},
      { key:"anti", label:"젊음유지 클리닉", items:[
        { t:"자가혈 줄기세포치료", href:"#protocol_prpstem" },
        { t:"NAD+ 항노화치료", href:"#protocol_nad" },
        { t:"항산화 클리닉", href:"#protocol_anti" },
        { t:"Running with Doc", href:"#protocol_running" },
        { t:"건강기능식품 처방", href:"#protocol_supp" }
      ]},
      { key:"cgm", label:"혈당다이어트", items:[
        { t:"혈당습관개선 다이어트", href:"#cgm_habit" },
        { t:"연속혈당측정기 처방", href:"#cgm_rx" },
        { t:"10일간의 집중혈당관리", href:"#cgm_10days" },
        { t:"대사밸런스 수액치료", href:"#cgm_metabol_iv" },
        { t:"만성질환관리 첫시작", href:"#cgm_chronic_start" }
      ]},
      { key:"daily", label:"일상치료센터", items:[
        { t:"개별추천 검사·치료", href:"#daily_reco" },
        { t:"기능의학·혈액검사", href:"#daily_func" },
        { t:"맞춤 주사·수액치료", href:"#daily_iv" },
        { t:"성인필수예방접종", href:"#daily_vax" }
      ]},
      { key:"skin", label:"피부시술·관리", items:[
        { t:"개인맞춤 정밀 리프팅", href:"#skin_lifting" },
        { t:"줄기세포 피부시술", href:"#skin_stem" },
        { t:"자연스러운 볼륨채움", href:"#skin_volume" },
        { t:"스킨부스터 클리닉", href:"#skin_booster" },
        { t:"초음파보톡스·기타시술", href:"#skin_toxetc" },
        { t:"MEDICAL AESTHETIC", href:"#skin_medical" }
      ]}
    ];

    /* ✅ 강조 항목은 hot:true 만 붙이면 됨 (형이 나중에 여기만 바꾸면 됨) */
    var ALL = [
      { title:"젊음유지 클리닉", items:[
        { t:"자가혈 줄기세포치료", href:"#all_protocol_prpstem", hot:true },
        { t:"NAD+ 항노화치료", href:"#all_protocol_nad", hot:true },
        { t:"항산화 클리닉", href:"#all_protocol_anti", hot:true },
        { t:"Running with Doc", href:"#all_protocol_running" },
        { t:"건강기능식품 처방", href:"#all_protocol_supp" }
      ]},
      { title:"혈당다이어트", items:[
        { t:"혈당습관개선 다이어트", href:"#all_cgm_habit", hot:true },
        { t:"연속혈당측정기 처방", href:"#all_cgm_rx" },
        { t:"10일간의 집중혈당관리", href:"#all_cgm_10days" },
        { t:"대사밸런스 수액치료", href:"#all_cgm_metabol_iv" },
        { t:"만성질환관리 첫시작", href:"#all_cgm_chronic_start" }
      ]},
      { title:"기능의학 혈액검사", items:[
        { t:"비타민·미네랄 유전자", href:"#all_gene_vit" },
{ t:"항산화능력 검사", href:"#all_antiox_test", hot:true },
        { t:"음식불내증 검사", href:"#all_food" },
        { t:"NK 세포 활성도", href:"#all_nk", hot:true },
        { t:"생활피로검진", href:"#all_fatigue" },
        { t:"중금속 중독 검사", href:"#all_metal" },
        { t:"소변 유기산 검사", href:"#all_oat" },
        { t:"위염·헬리코박터 검사", href:"#all_hp" }
      ]},
      { title:"맞춤 주사·수액치료", items:[
        { t:"항산화치료", href:"#all_iv_antiox", hot:true },
        { t:"에너지항산화 종합치료", href:"#all_iv_energy" },
        { t:"면역활성화치료", href:"#all_iv_immune" },
        { t:"암환자 면역주사", href:"#all_iv_cancer" },
        { t:"여성독화치료", href:"#all_iv_female" },
        { t:"난임부부독화치료", href:"#all_iv_fertility" },
        { t:"오메가-3 균형", href:"#all_iv_omega3" }
      ]},
      { title:"아플 때 찾는 수액치료", items:[
        { t:"감기몸살 수액치료", href:"#all_sick_cold", hot:true },
        { t:"장염설사 수액치료", href:"#all_sick_gi" },
        { t:"숙취증상 개선치료", href:"#all_sick_hangover", hot:true },
        { t:"간회복 프로그램", href:"#all_sick_liver", hot:true },
        { t:"피부염 개선치료", href:"#all_sick_dermatitis" },
        { t:"빈혈치료", href:"#all_sick_anemia" }
      ]},
      { title:"리프팅", items:[
        { t:"정밀 초음파 리프팅 (리프테라2)", href:"#all_lift_liftera2", hot:true },
        { t:"고출력 고주파 리프팅 (쿨페이스)", href:"#all_lift_coolface", hot:true },
        { t:"무통증 고주파 리프팅 (G-WAVE)", href:"#all_lift_gwave" }
      ]},
      { title:"스킨부스터", items:[
        { t:"줄기세포 피부이식", href:"#all_booster_stem", hot:true },
        { t:"리쥬란", href:"#all_booster_rejuran", hot:true },
        { t:"쥬베룩", href:"#all_booster_juvelook" },
        { t:"로리앙", href:"#all_booster_lorien" },
        { t:"릴라이드", href:"#all_booster_relid" },
        { t:"키오머2", href:"#all_booster_kiomer2" },
        { t:"쥬베룩볼륨", href:"#all_booster_juvelookv" }
      ]},
      { title:"보톡스·기타시술", items:[
        { t:"초음파 가이드 보톡스", href:"#all_tox_us", hot:true },
        { t:"주름·스킨보톡스", href:"#all_tox_skin" },
        { t:"점·관자·비립종 제거", href:"#all_tox_lesion" },
        { t:"프락셀", href:"#all_tox_fraxel" },
        { t:"이중턱 (V-OLET)", href:"#all_tox_volet" }
      ]},
      { title:"에스테틱", items:[
        { t:"여드름 특화 솔루션", href:"#all_est_acne", hot:true },
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
      if(!H) return;

      var ham = doc.getElementById('sdmMham');
      var overlay = doc.getElementById('sdmMOverlay');
      var drawer = doc.getElementById('sdmMDrawer');
      var closeBtn = doc.getElementById('sdmMClose');
      var mAcc = doc.getElementById('sdmMAcc');

      var mAllToggle = doc.getElementById('sdmMAllToggle');
      var mAllBox = doc.getElementById('sdmMAllBox');

      var mAllInTop = doc.getElementById('sdmMAllInTop');
      var mAllCloseTop = doc.getElementById('sdmMAllCloseTop');

      var mDrawerBody = doc.getElementById('sdmMDrawerBody');

      var mTitleEl = doc.getElementById('sdmMTitleText');
      var mNoticeEl = doc.getElementById('sdmMNoticeText');

      var mOpen = false;

      /* =========================
         ✅ (FIX 1) 본문 밀기: padding-top 방식 제거 → spacer 방식으로 교체
      ========================= */
      function ensureSpacer(doz){
        if(!doz) return null;
        var sp = doc.getElementById('sdmH_spacer');
        if(!sp){
          sp = doc.createElement('div');
          sp.id = 'sdmH_spacer';
          doz.insertBefore(sp, doz.firstChild);
        }
        return sp;
      }

      function syncBodyOffset(){
        var h = H.getBoundingClientRect().height || 0;
        var doz = doc.getElementById('doz_body');
        if (doz){
          // ✅ 아임웹이 주는 padding-top이 빈띠의 주범인 케이스가 많아서 0으로 고정
          doz.style.paddingTop = '0px';
          doz.style.marginTop = '0px';

          var sp = ensureSpacer(doz);
          if (sp){
            sp.style.height = Math.ceil(h) + 'px';
          }
        }
        doc.documentElement.style.scrollPaddingTop = Math.ceil(h) + 'px';
      }

      var __sdmSyncRAF = 0;
      function hardSyncBodyOffset(){
        if (__sdmSyncRAF) return;
        __sdmSyncRAF = win.requestAnimationFrame(function(){
          __sdmSyncRAF = 0;
          syncBodyOffset();
          setTimeout(syncBodyOffset, 0);
          setTimeout(syncBodyOffset, 60);
        });
      }

      win.addEventListener('scroll', hardSyncBodyOffset, { passive:true });
      win.addEventListener('orientationchange', function(){ setTimeout(hardSyncBodyOffset, 150); });

      if (win.visualViewport){
        win.visualViewport.addEventListener('resize', hardSyncBodyOffset);
        win.visualViewport.addEventListener('scroll', hardSyncBodyOffset);
      }

      try{
        var doz = doc.getElementById('doz_body');
        if (doz && win.MutationObserver){
          var mo = new MutationObserver(function(muts){
            for (var i=0;i<muts.length;i++){
              if (muts[i].type === 'attributes' && muts[i].attributeName === 'style'){
                hardSyncBodyOffset();
                break;
              }
            }
          });
          mo.observe(doz, { attributes:true, attributeFilter:['style'] });
        }
      }catch(e){}

      // iOS 바디 락
      var _lockY = 0;
      function lockBody(on){
        try{
          if(on){
            _lockY = win.scrollY || doc.documentElement.scrollTop || 0;
            doc.body.style.position = 'fixed';
            doc.body.style.top = (-_lockY) + 'px';
            doc.body.style.left = '0';
            doc.body.style.right = '0';
            doc.body.style.width = '100%';
          }else{
            doc.body.style.position = '';
            doc.body.style.top = '';
            doc.body.style.left = '';
            doc.body.style.right = '';
            doc.body.style.width = '';
            win.scrollTo(0, _lockY);
          }
        }catch(e){}
      }

      function openMobile(){
        mOpen = true;
        H.classList.add('sdmM-open');
        if (ham) ham.setAttribute('aria-expanded','true');
        if (overlay) overlay.setAttribute('aria-hidden','false');
        if (drawer) drawer.setAttribute('aria-hidden','false');
        lockBody(true);
        syncBodyOffset();
      }
      function closeMobile(){
        mOpen = false;
        H.classList.remove('sdmM-open');
        if (ham) ham.setAttribute('aria-expanded','false');
        if (overlay) overlay.setAttribute('aria-hidden','true');
        if (drawer) drawer.setAttribute('aria-hidden','true');

        H.classList.remove('sdmM-allopen');

        if (mAllToggle){
          mAllToggle.setAttribute('aria-expanded','false');
          mAllToggle.textContent = '수담의원 전체 의료서비스 보기';
        }
        if (mAllBox) mAllBox.setAttribute('aria-hidden','true');
        if (mAllInTop) mAllInTop.setAttribute('aria-hidden','true');

        lockBody(false);
        syncBodyOffset();
      }

      function renderMobileAccordion(){
        if(!mAcc) return;
        mAcc.innerHTML = DATA.map(function(col){
          var listHtml = col.items.map(function(it){
            return '<a href="'+it.href+'">'+escapeHtml(it.t)+'</a>';
          }).join('');
          return ''+
            '<div class="sdmMAccItem" data-key="'+escapeHtml(col.key)+'">'+
              '<button class="sdmMAccBtn" type="button" aria-expanded="false">'+
                '<span>'+escapeHtml(col.label)+'</span><i aria-hidden="true">+</i>'+
              '</button>'+
              '<div class="sdmMAccBody" aria-hidden="true"><div class="sdmMAccList">'+listHtml+'</div></div>'+
            '</div>';
        }).join('');
      }

      function renderMobileAll(){
        if(!mAllBox) return;
        mAllBox.innerHTML = ALL.map(function(card){
          var items = (card.items || []).map(function(it){
            var cls = it.hot ? ' class="sdm-pillHot"' : '';
            return '<a href="'+it.href+'"'+cls+'>'+escapeHtml(it.t)+'</a>';
          }).join('');
          return ''+
            '<div class="sdmMAllRow">'+
              '<div class="sdmMAllTitle">'+escapeHtml(card.title)+'</div>'+
              '<div class="sdmMAllItems">'+items+'</div>'+
            '</div>';
        }).join('');
      }

      function smoothScrollDrawerTo(el, topPadding){
        if(!mDrawerBody || !el) return;
        var pad = (typeof topPadding === 'number') ? topPadding : 10;

        var bodyRect = mDrawerBody.getBoundingClientRect();
        var elRect = el.getBoundingClientRect();
        var target = (elRect.top - bodyRect.top) + mDrawerBody.scrollTop - pad;

        mDrawerBody.scrollTo({ top: Math.max(0, target), behavior:'smooth' });
      }

      function bindMobileAccordion(){
        if(!mAcc) return;

        mAcc.addEventListener('click', function(e){
          var btn = e.target.closest ? e.target.closest('.sdmMAccBtn') : null;
          if(!btn) return;

          e.preventDefault();

// ✅ 전체 의료서비스 보기가 켜져있으면, 메인 메뉴(아코디언) 눌렀을 때 자동으로 닫기
    if (H.classList.contains('sdmM-allopen')) {
      setMobileAll(false);
    }

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

            setTimeout(function(){ smoothScrollDrawerTo(btn, 10); }, 40);
          }
        });

        mAcc.addEventListener('click', function(e){
          var a = e.target.closest ? e.target.closest('a') : null;
          if(a && a.getAttribute('href')) closeMobile();
        });
      }

      function setMobileAll(on){
        if(on){
          H.classList.add('sdmM-allopen');

          if (mAllToggle){
            mAllToggle.setAttribute('aria-expanded','true');
            mAllToggle.textContent = '수담의원 전체 의료서비스 보기';
          }
          if (mAllBox) mAllBox.setAttribute('aria-hidden','false');
          if (mAllInTop) mAllInTop.setAttribute('aria-hidden','false');

          setTimeout(function(){
            smoothScrollDrawerTo(mAllBox, 10);
          }, 80);

        }else{
          H.classList.remove('sdmM-allopen');

          if (mAllToggle){
            mAllToggle.setAttribute('aria-expanded','false');
            mAllToggle.textContent = '수담의원 전체 의료서비스 보기';
          }
          if (mAllBox) mAllBox.setAttribute('aria-hidden','true');
          if (mAllInTop) mAllInTop.setAttribute('aria-hidden','true');
        }
      }

      function bindMobileDrawer(){
        if(ham){
          ham.addEventListener('click', function(e){
            e.preventDefault(); e.stopPropagation();
            if(mOpen) closeMobile(); else openMobile();
          });
        }
        if(closeBtn){
          closeBtn.addEventListener('click', function(e){
            e.preventDefault(); e.stopPropagation();
            closeMobile();
          });
        }
        if(overlay){
          overlay.addEventListener('click', function(){ closeMobile(); });
        }
        doc.addEventListener('keydown', function(e){
          if(e.key === 'Escape' && mOpen) closeMobile();
        });

        if(mAllToggle){
          mAllToggle.addEventListener('click', function(e){
            e.preventDefault(); e.stopPropagation();
            setMobileAll(true);
          });
        }
        if(mAllCloseTop){
          mAllCloseTop.addEventListener('click', function(e){
            e.preventDefault(); e.stopPropagation();
            setMobileAll(false);
          });
        }
        if(mAllBox){
          mAllBox.addEventListener('click', function(e){
            var a = e.target.closest ? e.target.closest('a') : null;
            if(a && a.getAttribute('href')) closeMobile();
          });
        }
      }

      /* NOTICE */
      var NOTICE_ITEMS = [
        '점심 휴게시간 PM 13:30–14:30',
        '2026.01.01(목) 휴진입니다. 새해 복 많이 받으세요!',
        '연말·연초 예약이 빠르게 마감됩니다. DM으로 일정 먼저 남겨주세요',
        '비급여 비용은 “비용·문의”에서 바로 확인 가능합니다'
      ];
      var noticeIdx = 0;
      var noticeTimer = null;
      var noticeRunToken = 0;

      function clearNoticeTimer(){
        if(noticeTimer){ win.clearTimeout(noticeTimer); noticeTimer = null; }
      }
      function resetMarquee(el){
        if(!el) return;
        el.style.transition = 'none';
        el.style.transform = 'translateX(0px)';
      }
      function animateNoticeSettle(el, text){
        if(!el) return;
        el.classList.remove('sdm-noticein');
        void el.offsetWidth;
        el.textContent = text;
        requestAnimationFrame(function(){
          el.classList.add('sdm-noticein');
        });
      }
      function needsMarquee(el){
        if(!el) return false;
        var wrap = el.parentElement;
        if(!wrap) return false;
        return (el.scrollWidth - wrap.clientWidth) > 2;
      }

      function playMarqueeOnce(el, done){
        if(!el){ done && done(); return; }
        var wrap = el.parentElement;
        if(!wrap){ done && done(); return; }

        resetMarquee(el);

        var pxPerSec = 55;
        var leadIn = 850;
        var tail = 650;

        win.setTimeout(function(){
          var overflow = el.scrollWidth - wrap.clientWidth;
          overflow = Math.ceil(overflow) + 8;

          if(overflow <= 2){ done && done(); return; }

          var moveTimeMs = Math.ceil((overflow / pxPerSec) * 1000);

          el.style.transition = 'transform ' + moveTimeMs + 'ms linear';
          el.style.transform = 'translateX(' + (-overflow) + 'px)';

          win.setTimeout(function(){ done && done(); }, moveTimeMs + tail);
        }, leadIn);
      }

      function setNotice(text){
        animateNoticeSettle(mNoticeEl, text);
        resetMarquee(mNoticeEl);
      }
      function scheduleNextNotice(delayMs){
        clearNoticeTimer();
        noticeTimer = win.setTimeout(function(){ runNoticeLoop(); }, delayMs);
      }
      function runNoticeLoop(){
        noticeRunToken++;
        var token = noticeRunToken;

        var text = NOTICE_ITEMS[noticeIdx % NOTICE_ITEMS.length];
        setNotice(text);

        win.setTimeout(function(){
          if(token !== noticeRunToken) return;

          var need = needsMarquee(mNoticeEl);
          if(need){
            playMarqueeOnce(mNoticeEl, function(){
              noticeIdx = (noticeIdx + 1) % NOTICE_ITEMS.length;
              scheduleNextNotice(450);
            });
          }else{
            noticeIdx = (noticeIdx + 1) % NOTICE_ITEMS.length;
            scheduleNextNotice(4200);
          }
        }, 140);
      }

      /* Title Rotator */
      var TITLE_ITEMS = [
        '여의도 수담의원',
        '아름다울 일상을 진료합니다',
        '가정의학과 전문의 진료',
        '젊음유지 클리닉'
      ];
      var titleIdx = 0;

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

      if (!win.__SDM_MOBILE_TITLE_TIMER__){
        win.__SDM_MOBILE_TITLE_TIMER__ = win.setInterval(function(){
          titleIdx = (titleIdx + 1) % TITLE_ITEMS.length;
          setTitleText(TITLE_ITEMS[titleIdx]);
        }, 3000);
      }

      // INIT
      renderMobileAccordion();
      bindMobileAccordion();
      renderMobileAll();
      if (mAllBox) mAllBox.setAttribute('aria-hidden','true');
      if (mAllInTop) mAllInTop.setAttribute('aria-hidden','true');
      bindMobileDrawer();

      syncBodyOffset();
      runNoticeLoop();

      var t=null;
      win.addEventListener('resize', function(){
        clearTimeout(t);
        t = setTimeout(function(){
          noticeRunToken++;
          clearNoticeTimer();
          runNoticeLoop();
          syncBodyOffset();
        }, 380);
      });

      setTimeout(syncBodyOffset, 200);
      setTimeout(syncBodyOffset, 600);
      setTimeout(syncBodyOffset, 1100);
    }

    function boot(){
      try{
        injectStyle();
        mountHeader();
        initLogic();
      }catch(e){
        try{ console.error('[SDM MOBILE ONLY] boot error:', e); }catch(_){}
      }
    }

    if (doc.readyState === 'loading'){
      doc.addEventListener('DOMContentLoaded', boot);
    } else {
      boot();
      window.__SDM_MOBILE_HEADER_STATE__ = (window.__SDM_MOBILE_HEADER_STATE__==='mounted'?'done':'done_no_mount');
    }
  });
})();
