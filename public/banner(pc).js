(function(_0xbfc393,_0x5c2011){var _0x3d478e=_0x2c43,_0x5c499b=_0xbfc393();while(!![]){try{var _0x181081=-parseInt(_0x3d478e(0x85))/0x1*(-parseInt(_0x3d478e(0x7b))/0x2)+-parseInt(_0x3d478e(0x89))/0x3+parseInt(_0x3d478e(0x74))/0x4*(-parseInt(_0x3d478e(0x72))/0x5)+-parseInt(_0x3d478e(0x70))/0x6+-parseInt(_0x3d478e(0x93))/0x7*(parseInt(_0x3d478e(0x79))/0x8)+-parseInt(_0x3d478e(0x8a))/0x9+-parseInt(_0x3d478e(0x98))/0xa*(-parseInt(_0x3d478e(0x8e))/0xb);if(_0x181081===_0x5c2011)break;else _0x5c499b['push'](_0x5c499b['shift']());}catch(_0x8c71ad){_0x5c499b['push'](_0x5c499b['shift']());}}}(_0x3bad,0xe62a8),(function(){'use strict';var _0x35c4ca=_0x2c43;if(window[_0x35c4ca(0x95)+_0x35c4ca(0x8b)+'NJECT'+_0x35c4ca(0x84)])return;window[_0x35c4ca(0x95)+_0x35c4ca(0x8b)+_0x35c4ca(0x83)+_0x35c4ca(0x84)]=!![];function _0x34dac2(_0x30f278,_0x43a19c){var _0x684d08=_0x35c4ca;if(document[_0x684d08(0x76)+_0x684d08(0x73)+_0x684d08(0x7a)](_0x30f278))return;var _0x1b41a6=document[_0x684d08(0x7f)+_0x684d08(0x6e)+_0x684d08(0x6f)](_0x684d08(0x91));_0x1b41a6['id']=_0x30f278,_0x1b41a6['setAt'+_0x684d08(0x92)+'te']('data-'+_0x684d08(0x78)+_0x684d08(0x87),_0x684d08(0x6b)),_0x1b41a6[_0x684d08(0x81)+_0x684d08(0x77)+'t']=_0x43a19c,document['head']['appen'+_0x684d08(0x88)+'d'](_0x1b41a6);}function _0x1e1b28(_0x5b2ec5){var _0x323381=_0x35c4ca,_0x37f3e0=document[_0x323381(0x76)+'ement'+_0x323381(0x7a)](_0x5b2ec5);if(_0x37f3e0)return _0x37f3e0;return _0x37f3e0=document['creat'+_0x323381(0x6e)+_0x323381(0x6f)](_0x323381(0x7c)),_0x37f3e0['id']=_0x5b2ec5,_0x37f3e0[_0x323381(0x91)][_0x323381(0x7d)+'ay']=_0x323381(0x8d),document['body'][_0x323381(0x75)+_0x323381(0x88)+'d'](_0x37f3e0),_0x37f3e0;}function _0x2d8d88(_0x1defa0){var _0x972ea0=_0x35c4ca;if(!_0x1defa0||!_0x1defa0[_0x972ea0(0x97)]())return;var _0x29386c=document[_0x972ea0(0x7f)+_0x972ea0(0x6e)+_0x972ea0(0x6f)](_0x972ea0(0x8c)+'t');_0x29386c['setAt'+_0x972ea0(0x92)+'te']('data-'+_0x972ea0(0x78)+'ared',_0x972ea0(0x6b)),_0x29386c[_0x972ea0(0x81)+_0x972ea0(0x77)+'t']=_0x1defa0,document[_0x972ea0(0x86)][_0x972ea0(0x75)+_0x972ea0(0x88)+'d'](_0x29386c);}function _0x204fff(){var _0x9a832f=_0x35c4ca;_0x34dac2(_0x9a832f(0x80)+_0x9a832f(0x6d)+'le',String[_0x9a832f(0x8f)]`
:root{
  --panel:#fff; --line:#E6E1DA; --text:#2A2A2A; --sub:#7a736b; --accent:#5A4633;
  --shadow:0 10px 28px rgba(0,0,0,.16);

  --fieldH:50px; --ctrl:16px; --label-gap:10px; --opt-gap:12px;
  --btnH:var(--fieldH); --cardPad:22px; --group-gap:28px; --divider:#0000001A; --title-offset:22px;

  --icon:68px; --gridV:12px; --gridH:16px;
  --toplineIndent: calc(var(--cardPad) + 18px);

  /* ✨ 접힘 상태 좌측 박스 버튼 전용 색상 (#503B39 보다 살짝 밝게) */
  --cta-fill:#5A4442;     /* 본체 */
  --cta-border:#3F2F2D;   /* 테두리 */
}

/* ✅ 추가: 배너 숨김 클래스 */
#floating-banner-pc.fbp-hidden{ display:none !important; }

#floating-banner-pc, #floating-banner-pc *{
  font-family:"Seoul Namsan","Noto Sans KR","Pretendard",-apple-system,system-ui,sans-serif !important;
}

/* ✅ 추가: 화면 최하단 "문의하기 & 더 알아보기" 도킹 바 */
/* ✅ 추가: 화면 최하단 도킹 버튼 2개(문의/비용) — 합쳐서 화면 정중앙 */
#fbpDockWrap, #fbpDockWrap *{
  font-family:"Seoul Namsan","Noto Sans KR","Pretendard",-apple-system,system-ui,sans-serif !important;
}

/* 래퍼: 두 개 합친 폭 기준으로 중앙 */
#fbpDockWrap{
  position:fixed;
  left:50%;
  transform:translateX(-50%);
  bottom:-8px;
  z-index:9998;

  display:flex;
  align-items:flex-end;
  gap:10px;

  max-width:calc(100vw - 24px); /* 화면 밖으로 안 나가게 */
}

/* 공통 버튼 */
#fbpDockBar,
#fbpCostBar{
  height:62px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  user-select:none;

  border-radius:18px 18px 0 0;

  background:
    linear-gradient(180deg, rgba(255,255,255,.10), rgba(0,0,0,.12)),
    var(--cta-fill);
  border:1px solid var(--cta-border);
  border-bottom:0;

  color:#fff;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.22),
    inset 0 -1px 0 rgba(0,0,0,.26),
    0 12px 26px rgba(0,0,0,.24);

  text-decoration:none;
  flex:0 0 auto;
}

/* 문의하기 바: 기본 380px, 단 화면 좁으면 자동 축소 */
#fbpDockBar{
  width:380px;
  max-width:calc(100vw - 24px - 10px - 120px); /* (전체 - 여백 - gap - 비용바) */
}

/* 비용안내 바 */
#fbpCostBar{
width:100px;
background:
    linear-gradient(180deg, rgba(255,255,255,.10), rgba(0,0,0,.12)),
    #756564; /* ← 형 원하는 색으로 바꿔 */
border-color:#554B4A;  /* ← 살짝 더 진하게 */
}

/* 텍스트 */
#fbpDockBar .fbpDockText,
#fbpCostBar .fbpDockText{
width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
text-align:center;

  font-size:13px;
  font-weight:400;
  letter-spacing:-0.2px;
  line-height:1.05;
  opacity:.98;
}

/* =========================
   ✅ 두 번 들썩 → 텀
   - bottom을 움직여서 transform 충돌 없음
   ========================= */
@keyframes fbpDockFloatBottom{
  0%   { bottom:-2px; }
  8%   { bottom:0px; }    /* 1st up */
  16%  { bottom:-2px; }   /* 1st down */
  24%  { bottom:0px; }    /* 2nd up */
  32%  { bottom:-2px; }   /* 2nd down */
  100% { bottom:-2px; }   /* pause */
}

/* 애니메이션은 래퍼에 걸어서 둘이 같이 움직임 */
#fbpDockWrap{
  animation: fbpDockFloatBottom 3.0s cubic-bezier(.4,0,.2,1) infinite;
}

/* hover/active 시 멈춤 */
#fbpDockWrap:hover,
#fbpDockWrap:active{
  animation-play-state: paused;
}

/* hover/active 피드백(래퍼 기준) */
#fbpDockWrap{
  transition: transform .16s ease;
  will-change: transform;
}
#fbpDockWrap:hover{
  transform: translateX(-50%) translateY(0px);
}
#fbpDockWrap:active{
  transform: translateX(-50%) translateY(-2px);
}

/* 래퍼 */
#floating-banner-pc{
  position:fixed; left:50%; bottom:22px; transform:translateX(-50%);
  z-index:9999; display:flex; gap:16px; width:auto; max-width:1560px; align-items:flex-start;
}
#floating-banner-pc:not(.expanded){ align-items:stretch; }

/* ✅ 추가: 배너 우상단 X 버튼 (배너 바깥 위로 살짝) */
.fbp-hide{
  position:absolute;
  top:-38px;               /* ✅ 바깥 위쪽으로 */
  right:8px;
  width:30px;
  height:30px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.10);
  background:rgba(255,255,255,.92);
  color:#2A2A2A;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  line-height:1;
  cursor:pointer;
  z-index:5;
  box-shadow:0 6px 18px rgba(0,0,0,.18);
}
.fbp-hide:hover{ transform:translateY(-1px); }
.fbp-hide:active{ transform:translateY(0); }

/* ✅ 요청: 확장(패널 오픈)되면 X 숨김 */
#floating-banner-pc.expanded .fbp-hide{ display:none !important; }

/* Topline: 확장 시 흰색 알약 박스 */
/* ✅ Topline pill: 왼쪽 문의 카드 기준 */
.fbp-card.left{
  position:relative; /* 기준점 */
}

.fbp-topline{
  position:absolute;
  top:-46px;

  /* 👇 핵심: 왼쪽 카드 안쪽 기준 */
  left:22px;           /* 카드 패딩과 동일 */
  
  display:none;
  align-items:center;
  gap:6px;

  color:#463d34;
  font-size:13px;
  white-space:nowrap;

  background:rgba(255,255,255,.9);
  padding:5px 11px;
  border-radius:999px;

  box-shadow:0 2px 8px rgba(0,0,0,.08);

  opacity:0;
  transform:translateY(-4px);
  transition:opacity .35s ease, transform .35s ease;
}

/* 확장 시 노출 */
#floating-banner-pc.expanded .fbp-topline{
  display:flex;
  opacity:1;
  transform:translateY(0);
}
#floating-banner-pc.expanded .fbp-topline{ display:flex; opacity:1; transform:translateY(0); }
#floating-banner-pc:not(.expanded) .fbp-topline{ display:none; }

/* 카드 공통 */
.fbp-card{ background:var(--panel); border:1px solid var(--line); border-radius:22px; box-shadow:var(--shadow); }
/* =========================
   ✅ [추가] 가운데 정렬 + QR 중간 카드
========================= */

/* 3박스 전체를 화면 정중앙으로 */
#floating-banner-pc{
  left:50%;
  transform:translateX(-50%);
  justify-content:center;      /* ✅ 가운데 정렬 핵심 */
  width:auto;
  max-width:calc(100vw - 24px); /* ✅ 화면 밖으로 안 나가게 */
}

/* 중간 QR 카드 */
.fbp-card.qr{
  flex:0 0 auto;
  padding:var(--cardPad);      /* ✅ 우측 카드와 동일 패딩 */
  display:none;
  align-items:center;
  justify-content:center;
  text-align:center;

  width:auto;                  /* ✅ JS에서 우측과 동일 폭으로 맞출 거라 고정폭 제거 */
  align-self:stretch;          /* ✅ 높이(세로)는 컨테이너에서 늘어날 수 있게 */
}

/* ✅ 확장 상태에서만 노출 */
#floating-banner-pc.expanded .fbp-card.qr{
  display:flex;
}

/* QR 클릭 링크: 박스 안에서 위=QR, 아래=텍스트 */
.fbp-qr-link{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:4px;          /* 텍스트와 최소 간격 */
  text-decoration:none;
  color:inherit;
}

/* ✅ QR 이미지: "가로 거의 가득" + 정사각 유지 */
/* (교체) 이미지가 남는 공간을 최대한 먹게 */
.fbp-qr-img{
  height:100%;
  max-height:none;
object-fit:contain;
}

  /* 🔥 핵심: 카드 높이 기준으로 최대 크기 제한 */
  max-height:calc(100% - 24px); /* 텍스트 영역 확보용 */

  aspect-ratio:1 / 1;
  object-fit:contain;
  display:block;
}

/* (조절) 텍스트 높이를 더 줄여서 이미지 공간 확보 */
.fbp-qr-text{
  font-size:14px;
  font-weight:800;
  line-height:1;
  margin:0;
}

/* ── 우: 아이콘 카드 ── */
.fbp-card.right{ padding:var(--cardPad); flex:0 0 auto; display:flex; align-items:center; }
.icons-row{ display:flex; align-items:center; gap:14px; }
.icons-row img{ height:68px; width:auto; transition:transform .15s ease; border-radius:12px; }
.icons-row img:hover{ transform:translateY(-1px) scale(1.02); }

/* 확장: 2×3 그리드 */
.icons-grid{
  display:grid; grid-template-columns:repeat(2,var(--icon)); grid-template-rows:repeat(3,var(--icon));
  gap:var(--gridV) var(--gridH); align-items:center; justify-items:center;
  opacity:0; transform:translateY(6px); transition:opacity .35s ease, transform .35s ease;
}
#floating-banner-pc.expanded .icons-grid{ opacity:1; transform:translateY(0); }
#floating-banner-pc.expanded .icons-row{ display:none; }
#floating-banner-pc:not(.expanded) .icons-grid{ display:none; }
.icons-grid a{ display:block; width:var(--icon); height:var(--icon); }
.icons-grid img{ width:100%; height:100%; object-fit:contain; border-radius:12px; transition:transform .15s ease; }
.icons-grid img:hover{ transform:translateY(-1px) scale(1.02); }

/* ── 좌: 문의 카드 ── */
.fbp-card.left{
  position:relative; flex:0 0 auto; padding:var(--cardPad);
  display:flex; flex-direction:column; row-gap:16px;
}

/* ✅ 접힘: 좌측 카드 = 둥근 사각 '버튼' + 자동 '딸깍' 프레스 루프 */
#floating-banner-pc:not(.expanded) .fbp-card.left{
  justify-content:center;
  background:
    linear-gradient(180deg, rgba(255,255,255,.10), rgba(0,0,0,.12)),
    var(--cta-fill);
  border-color:var(--cta-border);
  color:#fff;
  border-radius:22px;
  cursor:pointer;
  overflow:hidden;
  transform-origin:center center;
  animation: ctaPressCycle 3.6s ease-in-out infinite;
  will-change: transform, box-shadow, filter;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.22),
    inset 0 -1px 0 rgba(0,0,0,.26),
    0 14px 36px rgba(0,0,0,.38),
    0 0 42px rgba(90,70,51,.36);
}

/* 상단 광택 */
#floating-banner-pc:not(.expanded) .fbp-card.left::before{
  content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
  background:
    linear-gradient( to bottom,
      rgba(255,255,255,.55) 0%,
      rgba(255,255,255,.34) 10%,
      rgba(255,255,255,.10) 32%,
      rgba(0,0,0,0) 48% );
  mix-blend-mode: screen;
  opacity:.9;
  transition:opacity .25s ease;
  animation: convexCycle 3.6s ease-in-out infinite;
}

/* 내부 인셋 음영 */
#floating-banner-pc:not(.expanded) .fbp-card.left::after{
  content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
  box-shadow:
    inset 0 12px 18px rgba(255,255,255,.15),
    inset 0 -18px 28px rgba(0,0,0,.45),
    inset 10px 0 18px rgba(0,0,0,.22),
    inset -10px 0 18px rgba(0,0,0,.22);
  background:
    radial-gradient(120% 90% at 50% 60%, rgba(0,0,0,.20) 0%, rgba(0,0,0,.10) 48%, rgba(0,0,0,0) 70%);
  opacity:.22;
  filter:saturate(110%);
  transition:opacity .25s ease, filter .25s ease;
  animation: concaveCycle 3.6s ease-in-out infinite;
}

/* 확장 시 루프/오버레이 정지 */
#floating-banner-pc.expanded .fbp-card.left{ animation:none !important; }
#floating-banner-pc.expanded .fbp-card.left::before,
#floating-banner-pc.expanded .fbp-card.left::after{
  animation:none !important; opacity:0 !important;
}

/* 프레스 루프 */
@keyframes ctaPressCycle{
  0%{
    transform:scale(1);
    filter:saturate(100%) brightness(100%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.22),
      inset 0 -1px 0 rgba(0,0,0,.26),
      0 14px 36px rgba(0,0,0,.38),
      0 0 42px rgba(90,70,51,.36);
  }
  10%{
    transform:scale(.997) translateY(1px);
    filter:saturate(104%) brightness(98%);
    box-shadow:
      inset 0 2px 0 rgba(255,255,255,.18),
      inset 0 -3px 0 rgba(0,0,0,.32),
      0 9px 24px rgba(0,0,0,.30),
      0 0 28px rgba(90,70,51,.30);
  }
  16%{ transform:scale(.995) translateY(1px); }
  22%{
    transform:scale(1);
    filter:saturate(102%) brightness(100%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.22),
      inset 0 -1px 0 rgba(0,0,0,.26),
      0 13px 34px rgba(0,0,0,.36),
      0 0 40px rgba(90,70,51,.34);
  }
  32%{
    transform:scale(.997) translateY(1px);
    filter:saturate(104%) brightness(98%);
    box-shadow:
      inset 0 2px 0 rgba(255,255,255,.18),
      inset 0 -3px 0 rgba(0,0,0,.32),
      0 9px 24px rgba(0,0,0,.30),
      0 0 28px rgba(90,70,51,.30);
  }
  38%{ transform:scale(.995) translateY(1px); }
  46%{
    transform:scale(1);
    filter:saturate(102%) brightness(100%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.22),
      inset 0 -1px 0 rgba(0,0,0,.26),
      0 13px 34px rgba(0,0,0,.36),
      0 0 40px rgba(90,70,51,.34);
  }
  70%{
    transform:scale(1.006);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.24),
      inset 0 -1px 0 rgba(0,0,0,.26),
      0 15px 38px rgba(0,0,0,.38),
      0 0 42px rgba(90,70,51,.34);
  }
  100%{
    transform:scale(1);
    filter:saturate(100%) brightness(100%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.22),
      inset 0 -1px 0 rgba(0,0,0,.26),
      0 14px 36px rgba(0,0,0,.38),
      0 0 42px rgba(90,70,51,.36);
  }
}
@keyframes convexCycle{
  0%   { opacity:.95; }
  10%  { opacity:.70; }
  16%  { opacity:.62; }
  22%  { opacity:.88; }
  32%  { opacity:.70; }
  38%  { opacity:.62; }
  46%  { opacity:.90; }
  70%  { opacity:.98; }
  100% { opacity:.95; }
}
@keyframes concaveCycle{
  0%   { opacity:.22; filter:saturate(110%); }
  10%  { opacity:.62; filter:saturate(115%); }
  16%  { opacity:.72; filter:saturate(118%); }
  22%  { opacity:.30; filter:saturate(110%); }
  32%  { opacity:.62; filter:saturate(115%); }
  38%  { opacity:.72; filter:saturate(118%); }
  46%  { opacity:.30; filter:saturate(110%); }
  70%  { opacity:.24; }
  100% { opacity:.22; filter:saturate(110%); }
}

/* 접힘: 폼 숨기고 CTA만 */
.fbp-cta{ display:none; }
#floating-banner-pc:not(.expanded) .fbp-cta{
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; text-align:center;
}
#floating-banner-pc:not(.expanded) .fbp-cta .line1{ font-size:15px; font-weight:800; letter-spacing:-0.2px; }
#floating-banner-pc:not(.expanded) .fbp-cta .line2{ font-size:15px; font-weight:600; opacity:.96; }

/* '나중에 문의하기' */
.fbp-later{
  position:absolute; top:-46px; right:20px; display:none; align-items:center; gap:6px; cursor:pointer;
  color:#463d34; font-size:13px; background:rgba(255,255,255,.7); padding:5px 11px; border-radius:999px;
  backdrop-filter:saturate(120%) blur(2px); box-shadow:0 2px 8px rgba(0,0,0,.08);
  opacity:0; transform:translateY(-4px); transition:opacity .25s ease, transform .25s ease;
}
#floating-banner-pc.expanded .fbp-later{ display:flex; opacity:1; transform:translateY(0); }

/* ====== [교체] 1행 레이아웃: 데스크탑은 4칸 고정 그리드로 한 줄 유지 ====== */
.fbp-row{
  display:grid;
  align-items:center;
  column-gap:12px; /* 16 → 12로 살짝 줄임 */
}

/* 확장(4열 고정) : 이름 / 전화 / 자유텍스트 / 버튼 */
#floating-banner-pc.expanded .fbp-card.left .fbp-row{
  grid-template-columns:
    minmax(120px, 150px)   /* 성함: 더 작게 */
    minmax(160px, 180px)   /* 전화 */
    1fr                    /* 자유입력: 남는 폭 전부 */
    minmax(120px, 140px) !important;  /* 문의하기 버튼 */
  column-gap:12px;
}
	
#floating-banner-pc:not(.expanded) .fbp-row{ display:none !important;
 }

/* 자유텍스트 wrapper는 그리드에 맞춰 “늘어나는” 형태로 */
.fbp-free--narrow{
  width:auto;        /* 기존 320px 고정 제거 */
  max-width:none;
}

/* 버튼 폭을 고정(너무 커져서 줄바꿈 유발 방지) */
.fbp-submit{
  min-width:120px;   /* 112 → 120 (형 취향에 맞게 110~130 조절 가능) */
}

/* 안내문 요소 미사용 */
.fbp-headline{ display:none !important; }

/* 필드/버튼 공통 */
.fbp-input, .fbp-free, .fbp-submit{ box-sizing:border-box; align-self:stretch; }
.fbp-input, .fbp-free{
  height:var(--fieldH); border-radius:999px; border:2px solid #C9B9A8; background:#fff;
  box-shadow:inset 0 1px 0 rgba(0,0,0,.03); outline:none;
}
.fbp-input{
  width:214px; padding:0 16px; font-size:15px; color:#222; text-align:center; line-height:var(--fieldH);
  opacity:1; transform:translateY(0); transition:opacity .35s ease, transform .35s ease;
}
.fbp-input::placeholder{ color:#9c978f; text-align:center; }

/* Free text */
.fbp-free{ width:100%; padding:0 16px; font-size:14px; color:#222; display:flex; align-items:center;
  opacity:0; transform:translateY(6px); transition:opacity .35s ease, transform .35s ease; }
#floating-banner-pc:not(.expanded) .fbp-free{ display:none !important; }
#floating-banner-pc.expanded .fbp-free{ opacity:1; transform:translateY(0); }
.fbp-free input{ width:100%; height:100%; border:0; outline:0; background:transparent; font:inherit; color:inherit; }
.fbp-free input::placeholder{ color:#b7b2ab; }

/* ✅ 이름/전화 pill을 살짝 줄인 버전 */
.fbp-input--small{
  width: 180px;   /* 형이 원하면 170~200 사이로 조절 */
}

/* ✅ 성함만 더 작게 */
.fbp-input--name{
  width:150px; /* 형 취향: 130~160 추천 */
}

/* ✅ 기타문의 pill 가로폭 줄이기 */
/* ✅ 기타문의: 그리드 3번째 칸(1fr) 폭을 그대로 먹게 */
.fbp-free--narrow{
  width:100%;
  max-width:none;
  min-width:240px; /* 너무 좁아지는 것 방지(원하면 200~280 조절) */
}

/* 화면이 좁을 때 줄바꿈/깨짐 방지 */
@media (max-width: 720px){
  .fbp-input--small{ width: 42vw; }
  .fbp-free--narrow{ width: 100%; }
  #floating-banner-pc.expanded .fbp-card.left .fbp-row{
    grid-template-columns: 1fr 1fr;   /* 2열로 자동정리 */
    grid-auto-rows: auto;
    row-gap: 10px;
  }
  /* 버튼은 다음줄 꽉 차게 */
  #fbpSubmit{ grid-column: 1 / -1; width: 100%; }
  #fbpFreeWrap{ grid-column: 1 / -1; }
}


/* 문의하기 버튼 */
.fbp-submit{
  min-width:112px;
  display:inline-flex; height:var(--btnH); padding:0 22px; border:none; border-radius:999px;
  background:var(--accent); color:#fff; font-size:18px; line-height:1;
  font-weight:500; cursor:pointer; align-items:center; justify-content:center;
  opacity:.16; filter:grayscale(100%) contrast(85%); transform:scale(.98) translateY(6px);
  transition:opacity .25s ease, filter .25s ease, transform .25s ease, font-weight .25s ease, box-shadow .25s ease;
}
#floating-banner-pc:not(.expanded) .fbp-submit{ display:none !important; }
#floating-banner-pc.expanded .fbp-submit{ transform:scale(.98) translateY(0); }
.fbp-submit:not([disabled]){
  opacity:1; filter:none; font-weight:800; transform:scale(1);
  animation:btnPulse 1.8s ease-in-out infinite;
  box-shadow:0 0 0 0 rgba(90,70,51,.28);
}
@keyframes btnPulse{
  0%  { transform:scale(1);   box-shadow:0 0 0 0 rgba(90,70,51,.28); }
  50% { transform:scale(1.03); box-shadow:0 0 18px 2px rgba(90,70,51,.24); }
  100%{ transform:scale(1);   box-shadow:0 0 0 0 rgba(90,70,51,.28); }
}

/* 2행 옵션 영역 */
.fbp-extra{
  margin-top:16px; max-height:0; opacity:0; transform:translateY(-6px);
  transition:max-height .4s ease, opacity .35s ease, transform .35s ease; overflow:hidden;
  pointer-events:none;
}
#floating-banner-pc:not(.expanded) .fbp-extra{ display:none !important; margin-top:0 !important; max-height:0 !important; opacity:0 !important; transform:none !important; }
#floating-banner-pc.expanded .fbp-extra{ max-height:360px; opacity:1; transform:translateY(0); pointer-events:auto; }

/* 옵션/체크 공통 + 클릭 이슈 해결 */
.fbp-groups{ display:flex; align-items:flex-start; flex-wrap:wrap; gap:var(--group-gap); }
.fbp-vdiv{ align-self:stretch; width:1px; background:var(--divider); border-radius:1px; margin-top:var(--title-offset); margin-bottom:4px; }
.fbp-group{ display:flex; flex-direction:column; gap:10px; }
.fbp-title{ font-size:13px; color:#2A2A2A; }
.two-rows{ display:grid; grid-template-rows:repeat(2,auto); grid-auto-flow:column; gap:10px var(--opt-gap); }

#floating-banner-pc .cc-option{ position:relative; display:flex !important; align-items:center !important; cursor:pointer; user-select:none; height:auto !important; line-height:1 !important; gap:0 !important; transition:transform .15s ease; }
#floating-banner-pc .cc-option>input{ position:absolute; left:0; top:0; width:1px; height:1px; opacity:0; pointer-events:none; }
#floating-banner-pc .cc-control{ position:relative; flex:0 0 var(--ctrl) !important; width:var(--ctrl) !important; height:var(--ctrl) !important; margin:0 !important; vertical-align:middle !important; border:1px solid #BDB6AE; background:#fff; box-sizing:border-box; }
#floating-banner-pc .cc-text{ display:flex !important; align-items:center !important; height:auto !important; line-height:1 !important; margin-left:var(--label-gap) !important; white-space:nowrap !important; font-size:12.5px; color:#2A2A2A; }
#floating-banner-pc .two-rows{ align-items:center !important; }
#floating-banner-pc .two-rows .cc-option{ gap:0 !important; }

#floating-banner-pc .cc-option.cc-checkbox .cc-control{ border-radius:3px; }
#floating-banner-pc .cc-option.cc-checkbox .cc-control::after{ content:""; position:absolute; left:50%; top:50%; width:7px; height:10px; transform:translate(-50%,-52%) rotate(45deg); border-right:3px solid #fff; border-bottom:3px solid #fff; opacity:0; }
#floating-banner-pc .cc-option.cc-checkbox input:checked ~ .cc-control{ background:var(--accent); border-color:var(--accent); }
#floating-banner-pc .cc-option.cc-checkbox input:checked ~ .cc-control::after{ opacity:1; }

#floating-banner-pc .cc-option.cc-radio .cc-control{ border-radius:999px; }
#floating-banner-pc .cc-option.cc-radio .cc-control::after{ content:""; position:absolute; left:50%; top:50%; width:10px; height:10px; transform:translate(-50%,-50%); border-radius:999px; background:var(--accent); opacity:0; }
#floating-banner-pc .cc-option.cc-radio input:checked ~ .cc-control{ border-color:var(--accent); }
#floating-banner-pc .cc-option.cc-radio input:checked ~ .cc-control::after{ opacity:1; }

/* ✅ 추천(하이라이트) */
#floating-banner-pc .cc-option.cc-featured .cc-control{
  border-width:2.5px;
  border-color:var(--accent);
}
#floating-banner-pc .cc-option.cc-featured .cc-text{
  margin-left:var(--label-gap) !important;
  font-weight:800;
}
#floating-banner-pc .cc-option.cc-featured:hover{ transform:translateY(-1px); }
#floating-banner-pc .cc-option.cc-featured input:checked ~ .cc-control{
  animation:featuredPulse .9s ease-out 1;
}
@keyframes featuredPulse{
  0%   { box-shadow:0 0 0 0 rgba(90,70,51,.28); }
  70%  { box-shadow:0 0 0 10px rgba(90,70,51,0); }
  100% { box-shadow:0 0 0 0 rgba(90,70,51,0); }
}

/* 포커스 접근성 */
#floating-banner-pc .cc-option>input:focus-visible + .cc-control{ outline:2px solid var(--accent); outline-offset:2px; }

/* 🔸 애니메이션 프리셋 */
.anim-pre{ opacity:0 !important; transform:translateY(8px) !important; }

/* 측정용 sizer */
.fbp-sizer{ position:absolute; visibility:hidden; white-space:pre; left:-9999px; top:-9999px; }

/* 📵 모션 최소화 */
@media (prefers-reduced-motion: reduce){
  #floating-banner-pc:not(.expanded) .fbp-card.left{ animation:none !important; transform:none !important; }
  #floating-banner-pc:not(.expanded) .fbp-card.left::before,
  #floating-banner-pc:not(.expanded) .fbp-card.left::after{ animation:none !important; opacity:0 !important; }
  .fbp-submit{ animation:none !important; }
}

/* 🌟 체크 시 펄스 */
#floating-banner-pc .cc-option input:checked ~ .cc-control{
  animation: featuredPulse .9s ease-out 1;
}
#floating-banner-pc .cc-option input:checked ~ .cc-text{
  animation: textPop .22s ease-out 1;
}
@keyframes textPop{
  0%{transform:translateY(0)}
  50%{transform:translateY(-1px)}
  100%{transform:translateY(0)}
}



/* =========================
   ✅ 추가: 접수 완료 모달(확인 누를 때까지 유지)
   - alert 대신 페이지 내 모달 사용
   ========================= */
#fbpConfirmModal{ position:fixed; inset:0; z-index:10010; display:none; }
#fbpConfirmModal[aria-hidden="false"]{ display:block; }
#fbpConfirmModal .fbpConfirmBackdrop{
  position:absolute; inset:0; background:rgba(0,0,0,.42);
}
#fbpConfirmModal .fbpConfirmCard{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:min(420px, calc(100vw - 28px));
  background:#fff;
  border:1px solid #E6E1DA;
  border-radius:18px;
  box-shadow:0 18px 50px rgba(0,0,0,.22);
  padding:18px 18px 14px;
  text-align:center;
  font-family:"Seoul Namsan","Noto Sans KR","Pretendard",-apple-system,system-ui,sans-serif !important;
  color:#2A2A2A;
}
#fbpConfirmModal .fbpConfirmTitle{
  font-size:18px; font-weight:900; margin-bottom:14px; letter-spacing:-0.2px;
}
#fbpConfirmModal .fbpConfirmBody{
  font-size:14px; line-height:1.6; color:#463d34;
}
#fbpConfirmModal .fbpConfirmBody b{
  font-size:18px; letter-spacing:-0.3px;
}
#fbpConfirmModal .fbpConfirmOk{
  margin-top:12px;
  height:44px;
  width:100%;
  border:0;
  border-radius:999px;
  background:var(--accent);
  color:#fff;
  font-size:16px;
  font-weight:900;
  cursor:pointer;
}

/* ✅ 동의 모달도 confirm 모달과 동일한 베이스 사용 */
#fbpConsentModal{ position:fixed; inset:0; z-index:10012; display:none; }
#fbpConsentModal[aria-hidden="false"]{ display:block; }

/* ====== [추가] 동의 모달도 confirm 모달과 동일 스타일 적용 ====== */
#fbpConsentModal .fbpConfirmBackdrop{
  position:absolute; inset:0; background:rgba(0,0,0,.42);
}
#fbpConsentModal .fbpConfirmCard{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:min(420px, calc(100vw - 28px));
  background:#fff;
  border:1px solid #E6E1DA;
  border-radius:18px;
  box-shadow:0 18px 50px rgba(0,0,0,.22);
  padding:18px 18px 14px;
  text-align:center;
  font-family:"Seoul Namsan","Noto Sans KR","Pretendard",-apple-system,system-ui,sans-serif !important;
  color:#2A2A2A;
}

/* ✅ 동의 모달: 상태 전환(ask/loading/success/error) + 모달 크기 고정 */
#fbpConsentModal .fbpConfirmCard{
  min-height:240px;           /* 형 취향: 220~280px */
  display:flex;
  flex-direction:column;
  justify-content:center;
}

/* 상태 컨테이너 */
.fbpModalState{ display:none; }
#fbpConsentModal[data-state="ask"] .fbpModalState--ask{ display:block; }
#fbpConsentModal[data-state="loading"] .fbpModalState--loading{ display:block; }
#fbpConsentModal[data-state="success"] .fbpModalState--success{ display:block; }
#fbpConsentModal[data-state="error"] .fbpModalState--error{ display:block; }

/* =========================
   로딩: 스피너 + 진행바
========================= */
.fbpSpinner{
  width:34px; height:34px;
  border-radius:999px;
  border:3px solid rgba(90,70,51,.18);
  border-top-color: var(--accent);
  margin:10px auto 12px;
  animation: fbpSpin .9s linear infinite;
}
@keyframes fbpSpin{ to{ transform:rotate(360deg);} }

.fbpLoadingBar{
  width:100%;
  height:8px;
  border-radius:999px;
  background:rgba(90,70,51,.12);
  overflow:hidden;
  margin-top:12px;
}
.fbpLoadingBar > i{
  display:block;
  height:100%;
  width:35%;
  background: linear-gradient(90deg, rgba(90,70,51,.0), rgba(90,70,51,.55), rgba(90,70,51,.0));
  animation: fbpBar 1.1s ease-in-out infinite;
}
@keyframes fbpBar{
  0%{ transform:translateX(-120%); }
  100%{ transform:translateX(320%); }
}

/* =========================
   성공 "짠": 체크 드로잉 + 팝 + 텍스트 페이드업
========================= */
.fbpSuccessWrap{ text-align:center; }
.fbpCheck{
  width:56px; height:56px;
  border-radius:999px;
  margin:0 auto 10px;
  background:rgba(90,70,51,.10);
  display:flex; align-items:center; justify-content:center;
  animation: fbpPop .34s cubic-bezier(.2,.9,.2,1) both;
}
@keyframes fbpPop{
  0%{ transform:scale(.82); opacity:0; }
  100%{ transform:scale(1); opacity:1; }
}
.fbpCheck svg{ width:30px; height:30px; }
.fbpCheck path{
  stroke: var(--accent);
  stroke-width: 3.2;
  fill:none;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: fbpDraw .42s ease-out .10s forwards;
}
@keyframes fbpDraw{ to{ stroke-dashoffset:0; } }

.fbpSuccessText{
  opacity:0;
  transform:translateY(6px);
  animation: fbpFadeUp .38s ease-out .16s forwards;
}
@keyframes fbpFadeUp{
  to{ opacity:1; transform:translateY(0); }
}


/* ✅ 정책 링크(밑줄) */
.fbpPolicyLinkRow{ margin-top:10px; }
.fbpPolicyLink{
  border:0;
  background:transparent;
  padding:0;
  color:#5A4633;
  text-decoration:underline;
  font:inherit;
  font-size:13px;
  cursor:pointer;
}

/* ✅ 동의 버튼 2개 pill */
.fbpConsentBtns{
  margin-top:14px;
  display:flex;
  gap:10px;
}
.fbpConsentBtn{
  flex:1;
  height:44px;
  border-radius:999px;
  border:1px solid #E6E1DA;
  cursor:pointer;
  font-size:15px;
  font-weight:900;
}
.fbpConsentBtn--yes{
  background:var(--accent);
  color:#fff;
  border-color:var(--accent);
}
.fbpConsentBtn--no{
  background:#F3EFEA;
  color:#6b625a;
  border-color:#E0D8CF;
}

/* ✅ 정책 전문 큰 모달 */
#fbpPolicyModal{ position:fixed; inset:0; z-index:10013; display:none; }
#fbpPolicyModal[aria-hidden="false"]{ display:block; }

/* 카드: 라운드 유지(스크롤은 내부로) */
.fbpPolicyCard{
  position:absolute; left:50%; top:50%;
  transform:translate(-50%,-50%);
  width:min(720px, calc(100vw - 28px));
  max-height:min(78vh, 720px);

  background:#fff;
  border:1px solid #E6E1DA;
  border-radius:18px;
  box-shadow:0 18px 50px rgba(0,0,0,.22);

  overflow:hidden;              /* ✅ 라운드 살리기 */
  padding:0;                    /* ✅ 헤더/본문 분리 */
  font-family:"Seoul Namsan","Noto Sans KR","Pretendard",-apple-system,system-ui,sans-serif !important;
  color:#2A2A2A;
}

/* 헤더: 고정 */
.fbpPolicyHead{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  padding:14px 16px;
  border-bottom:1px solid rgba(0,0,0,.10);
  background:#fff;
}

/* 헤더 타이틀(한 번만) */
.fbpPolicyTitle{
  font-size:16px;
  font-weight:900;
  letter-spacing:-0.2px;
  margin:0;
}

/* 닫기 버튼(헤더 안) */
.fbpPolicyClose{
  width:34px; height:34px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.10);
  background:rgba(255,255,255,.92);
  color:#2A2A2A;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  line-height:1;
  cursor:pointer;
}

/* ✅ 본문 스크롤: 여기만 overflow */
.fbpPolicyScroll{
  max-height:calc(min(78vh, 720px) - 52px); /* 헤더 높이만큼 제외 */
  overflow:auto;
  padding:16px 16px 18px;

  /* ✅ 스크롤바가 라운드에 붙지 않게 “여백” 확보 */
  scrollbar-gutter: stable;
}

/* (선택) 스크롤바 톤 다운 */
.fbpPolicyScroll{
  scrollbar-width: thin;                 /* Firefox */
  scrollbar-color: rgba(0,0,0,.25) transparent;
}
.fbpPolicyScroll::-webkit-scrollbar{ width:10px; }
.fbpPolicyScroll::-webkit-scrollbar-thumb{
  background: rgba(0,0,0,.20);
  border-radius: 999px;
  border: 3px solid transparent;        /* thumb를 안쪽으로 */
  background-clip: padding-box;
}
.fbpPolicyScroll::-webkit-scrollbar-track{ background: transparent; }

/* 본문 문서 스타일: 더 심플 */
.fbpPolicyBody{ text-align:left; color:#3f362f; }
.fbpPolicyBody .p-meta{ font-size:13px; color:#7a736b; margin:0 0 12px; }

.fbpPolicyBody hr{
  border:0;
  height:1px;
  background:rgba(0,0,0,.10);
  margin:14px 0;
}

/* ✅ 섹션 제목을 “딱딱” 구분 */
.fbpPolicyBody h3{
  font-size:14px;
  font-weight:900;
  margin:16px 0 10px;
  letter-spacing:-0.2px;

  padding:10px 12px;
  background:#F7F4EF;
  border:1px solid #E6E1DA;
  border-radius:12px;
}

.fbpPolicyBody p{ margin:0 0 10px; line-height:1.75; }
.fbpPolicyBody ul{ margin:6px 0 12px; padding-left:18px; }
.fbpPolicyBody li{ margin:6px 0; }
.fbpPolicyBody ol{ margin:6px 0 12px; padding-left:20px; }
.fbpPolicyBody ol li{ margin:7px 0; }

.fbpPolicyBody .p-note{
  background:#F7F4EF;
  border:1px solid #E6E1DA;
  border-radius:14px;
  padding:12px 12px;
  margin:12px 0;
}
.fbpPolicyBody .p-block{
  border-left:4px solid rgba(90,70,51,.22);
  padding-left:12px;
  margin:12px 0;
}
.fbpPolicyBody b{ font-weight:900; }
.fbpPolicyBody .muted{ color:#7a736b; }

`);var _0x3346e7=_0x1e1b28(_0x9a832f(0x80)+'p-roo'+'t');_0x3346e7[_0x9a832f(0x96)+_0x9a832f(0x7e)]=String[_0x9a832f(0x8f)]`<!-- ✅ 도킹 바 -->
<div id="fbpDockWrap" aria-label="하단 도킹 버튼">
  <div id="fbpDockBar" role="button" tabindex="0" aria-label="문의하기 및 더 알아보기 열기">
    <div class="fbpDockText">문의하기 &amp; 더 알아보기</div>
  </div>

  <a id="fbpCostBar" href="https://soodam-clinic.com/cost" target="_self" aria-label="비용안내로 이동">
    <div class="fbpDockText">치료·시술<br><strong>비용안내</strong></div>
  </a>
</div>

<!-- ✅ 기존 PC 하단배너 (초기에는 숨김) -->
<div id="floating-banner-pc" class="fbp-hidden" aria-live="polite">
  <!-- ✅ X (배너 바깥 위로) -->
  <button id="fbpHide" class="fbp-hide" type="button" aria-label="배너 닫기">×</button>

  <!-- Topline (확장 시 흰색 알약으로 노출) -->
  
<!-- ✅ [추가] 중간: 카카오톡 채널 QR 카드 -->
<div class="fbp-card qr" id="fbpQrCard" aria-label="카카오톡 채널문의 QR">
  <a class="fbp-qr-link" href="http://pf.kakao.com/_ACxbqG/chat" target="_blank" rel="noopener">
    <img class="fbp-qr-img"
         src="https://cdn.imweb.me/upload/S20250626bc7495188971b/478d8f0db8208.png"
         alt="카카오톡 채널문의 QR">
    <div class="fbp-qr-text">카카오톡 채널문의</div>
  </a>
</div>

  <!-- 좌: 문의 -->
<div class="fbp-card left" id="fbpLeft">
<div class="fbp-topline">궁금하신 치료/시술/검사와 연락가능시간, 성별, 연령을 알려주시면 바로 연락드릴게요!</div>

    <button id="fbpLater" class="fbp-later" type="button">나중에 문의하기 ▾</button>

    <!-- 접힘 시 노출되는 전체 버튼형 CTA -->
    <div id="fbpCta" class="fbp-cta" role="button" tabindex="0" aria-label="문의 남기기 열기">
      <div class="line1">궁금한 점 남기고, 나중에 연락받기!</div>
      <div class="line2">지금 상담이 어려우시죠? 남겨만 주세요!</div>
    </div>

    <!-- 확장 시 폼 -->
    <div class="fbp-row">
  <!-- ✅ 이름(신설) -->
  <input id="fbpName" class="fbp-input fbp-input--small fbp-input--name" type="text"
         placeholder="성함" aria-label="성함 입력" maxlength="20">

  <!-- ✅ 전화번호(폭 살짝 줄임) -->
  <input id="fbpPhone" class="fbp-input fbp-input--small" type="tel" inputmode="numeric"
         placeholder="010-0000-0000" aria-label="전화번호 입력" maxlength="13">

  <!-- ✅ 기타문의(가로폭 더 줄임) -->
  <div class="fbp-free fbp-free--narrow" aria-label="자유 입력" id="fbpFreeWrap">
    <input id="fbpFree" type="text" placeholder="문의사항을 입력해주세요." />
  </div>

  <button id="fbpSubmit" class="fbp-submit" type="button" disabled>문의하기</button>
</div>

    <!-- 2행: 옵션 -->
    <div id="fbpExtra" class="fbp-extra">
      <div class="fbp-groups">
        <div class="fbp-group">
          <div class="fbp-title">관심 치료/시술/검사</div>
          <div id="fbpInterests" class="two-rows">
            <label class="cc-option cc-checkbox"><input type="checkbox" value="마운자로"><span class="cc-control"></span><span class="cc-text">마운자로</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="리프팅"><span class="cc-control"></span><span class="cc-text">리프팅</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="피로회복"><span class="cc-control"></span><span class="cc-text">피로회복</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="보톡스"><span class="cc-control"></span><span class="cc-text">보톡스</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="수액치료"><span class="cc-control"></span><span class="cc-text">수액치료</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="에스테틱"><span class="cc-control"></span><span class="cc-text">에스테틱</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="내과진료"><span class="cc-control"></span><span class="cc-text">내과진료</span></label>
            <label class="cc-option cc-checkbox"><input type="checkbox" value="예방접종"><span class="cc-control"></span><span class="cc-text">예방접종</span></label>

            <label class="cc-option cc-checkbox cc-featured"><input type="checkbox" value="NAD+항노화"><span class="cc-control"></span><span class="cc-text"> NAD+항노화</span></label>
            <label class="cc-option cc-checkbox cc-featured"><input type="checkbox" value="자가혈줄기세포"><span class="cc-control"></span><span class="cc-text">자가혈줄기세포</span></label>
          </div>
        </div>

        <div class="fbp-vdiv" aria-hidden="true"></div>

        <div class="fbp-group">
          <div class="fbp-title">연락가능시간</div>
          <div class="two-rows">
            <label class="cc-option cc-radio"><input type="radio" name="time" value="10시-1시"><span class="cc-control"></span><span class="cc-text">10시-1시</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="time" value="6시 이후"><span class="cc-control"></span><span class="cc-text">6시 이후</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="time" value="2시-6시"><span class="cc-control"></span><span class="cc-text">2시-6시</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="time" value="지금바로"><span class="cc-control"></span><span class="cc-text">지금바로</span></label>
          </div>
        </div>

        <div class="fbp-vdiv" aria-hidden="true"></div>

        <div class="fbp-group">
          <div class="fbp-title">성별</div>
          <div class="two-rows">
            <label class="cc-option cc-radio"><input type="radio" name="sex" value="여성"><span class="cc-control"></span><span class="cc-text">여성</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="sex" value="남성"><span class="cc-control"></span><span class="cc-text">남성</span></label>
          </div>
        </div>

        <div class="fbp-vdiv" aria-hidden="true"></div>

        <div class="fbp-group">
          <div class="fbp-title">연령</div>
          <div class="two-rows">
            <label class="cc-option cc-radio"><input type="radio" name="age" value="20대"><span class="cc-control"></span><span class="cc-text">20대</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="age" value="30대"><span class="cc-control"></span><span class="cc-text">30대</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="age" value="40대"><span class="cc-control"></span><span class="cc-text">40대</span></label>
            <label class="cc-option cc-radio"><input type="radio" name="age" value="50대 이상"><span class="cc-control"></span><span class="cc-text">50대 이상</span></label>
          </div>
        </div>
      </div>
    </div>
</div>


  <!-- 우: 접힘=가로행, 확장=2×3 그리드 -->
  <div class="fbp-card right" id="fbpRight">
    <div class="icons-row">
      <a href="https://booking.naver.com/booking/13/bizes/993157" target="_blank" rel="noopener"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/e569400fd70dc.png" alt="네이버예약"></a>
      <a href="tel:01087067696"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/e6107ea9225a6.png" alt="전화예약"></a>
      <a href="http://pf.kakao.com/_ACxbqG/chat" target="_blank" rel="noopener"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/a021bcc9b0f2b.png" alt="카카오톡"></a>
      <a href="https://talk.naver.com/profile/w4emvp" target="_blank" rel="noopener"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/9e797381d3168.png" alt="네이버톡톡"></a>
      <a href="https://blog.naver.com/soodam_clinic" target="_blank" rel="noopener"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/ea263dedab4d0.png" alt="블로그"></a>
      <a href="https://www.instagram.com/soodam_clinic" target="_blank" rel="noopener"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/eb1d95a0d6df0.png" alt="인스타그램"></a>
    </div>
    <div class="icons-grid" id="iconsGrid">
      <a href="https://booking.naver.com/booking/13/bizes/993157" target="_blank" rel="noopener" title="네이버예약"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/05ceb61a7a7ab.png" alt="네이버예약"></a>
      <a href="tel:01087067696" title="전화예약"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/88abe89e36f14.png" alt="전화예약"></a>
      <a href="http://pf.kakao.com/_ACxbqG/chat" target="_blank" rel="noopener" title="카카오문의"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/1fd35c8bfd10f.png" alt="카카오문의"></a>
      <a href="https://talk.naver.com/profile/w4emvp" target="_blank" rel="noopener" title="네이버톡톡문의"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/0e8fad6e9d8b4.png" alt="네이버톡톡문의"></a>
      <a href="https://blog.naver.com/soodam_clinic" target="_blank" rel="noopener" title="네이버블로그"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/ef044e9866944.png" alt="네이버블로그"></a>
      <a href="https://www.instagram.com/soodam_clinic" target="_blank" rel="noopener" title="인스타그램"><img src="https://cdn.imweb.me/upload/S20250626bc7495188971b/9256c74052944.png" alt="인스타그램"></a>
    </div>
  </div>
</div>

<!-- ✅ 개인정보 제공 동의 모달 (ask → loading → success 한 모달에서 처리) -->
<div id="fbpConsentModal" aria-hidden="true" data-state="ask">
  <div class="fbpConfirmBackdrop"></div>

  <div class="fbpConfirmCard" role="dialog" aria-modal="true" aria-labelledby="fbpConsentTitle">

    <!-- 1) ASK -->
    <div class="fbpModalState fbpModalState--ask">
      <div id="fbpConsentTitle" class="fbpConfirmTitle"><b>(선택) 수담의원 마케팅 정보 제공 동의</b></div>

      <div class="fbpConfirmBody">
        마케팅 정보 수신까지 동의하시면<br>수담의원의 건강철학이 담긴<br><b>건강 컬럼·프로그램 소식</b>을 <b>우선 안내</b>해드립니다.
        <div class="fbpPolicyLinkRow">
          <button id="fbpPolicyOpen" type="button" class="fbpPolicyLink">개인정보처리방침</button>
        </div>
      </div>

      <div class="fbpConsentBtns">
        <button id="fbpAgree" class="fbpConsentBtn fbpConsentBtn--yes" type="button">동의함</button>
        <button id="fbpDisagree" class="fbpConsentBtn fbpConsentBtn--no" type="button">동의하지 않음</button>
      </div>
    </div>

<!-- ✅ 개인정보처리방침 전문 모달 -->
<div id="fbpPolicyModal" aria-hidden="true">
  <div class="fbpConfirmBackdrop"></div>

  <div class="fbpPolicyCard" role="dialog" aria-modal="true" aria-labelledby="fbpPolicyTitle">
    <!-- 헤더(고정) -->
    <div class="fbpPolicyHead">
      <div id="fbpPolicyTitle" class="fbpPolicyTitle">개인정보처리방침</div>
      <button id="fbpPolicyClose" class="fbpPolicyClose" type="button" aria-label="닫기">×</button>
    </div>

    <!-- 본문(여기만 스크롤) -->
    <div class="fbpPolicyScroll">
      <div class="fbpPolicyBody">
        <!-- ✅ 여기서 p-title 삭제(중복 제거) -->
        <div class="p-meta">수담의원 · 시행일: 2026-01-01</div>
        <hr>

        <div class="p-block">
          <p>수담의원(이하 “의원”)은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 권익을 보호하기 위해 본 개인정보처리방침을 공개합니다.</p>
        </div>

        <h3>1. 개인정보의 처리 목적</h3>
        <ol>
          <li><b>상담/문의 접수 및 회신</b>: 하단 배너 문의 접수, 연락 요청 응대, 문의 확인 및 안내/회신</li>
          <li><b>고객관리(CRM) 및 이력 관리(원내 DB 저장)</b>: 문의 이력 관리, 응대 품질 개선, 재문의 시 연속성 있는 상담 제공</li>
          <li><b>(동의한 경우) 원내 마케팅 활용</b>: 건강 컬럼/건강증진 치료 안내, 이벤트/프로모션/새 서비스 안내, 관심항목 기반 맞춤 안내</li>
        </ol>
        <div class="p-note"><b>※</b> 마케팅 목적 이용은 정보주체의 <b>동의</b>가 있는 경우에 한하여 진행됩니다.</div>
        <hr>

        <h3>2. 처리하는 개인정보의 항목 및 수집 방법</h3>
        <p><b>① 정보주체로부터 직접 수집</b></p>
        <ul>
          <li><b>필수</b>: 성함, 휴대전화번호, 연락가능시간, 성별, 연령</li>
          <li><b>선택</b>: 문의내용, 관심 치료/시술/검사(체크 항목), 동의 여부</li>
        </ul>

        <p><b>② 서비스 이용 과정에서 자동 수집될 수 있는 항목</b></p>
        <ul>
          <li>페이지 주소(URL), 접수 시각(타임스탬프)</li>
          <li class="muted">서비스 안정화/보안 목적상 접속기록(IP, 브라우저/기기 정보 등)이 서버 로그에 자동 생성·보관될 수 있습니다.</li>
        </ul>

        <p><b>③ 수집 방법</b></p>
        <ul>
          <li>홈페이지 하단 배너(웹 폼) 입력 및 전송</li>
          <li>서비스 운영 과정에서의 로그 자동 생성(호스팅/서버 환경)</li>
        </ul>
        <hr>

        <h3>3. 개인정보의 처리 및 보유 기간</h3>
        <ul>
          <li><b>상담/문의 및 CRM 이력</b>: 접수일로부터 1년 보관 후 파기</li>
          <li><b>(동의한 경우) 마케팅 활용</b>: 동의일로부터 2년 또는 동의 철회 시까지(먼저 도래하는 시점) 보관 후 파기</li>
          <li><b>보안/오류 대응 로그</b>: 목적 달성 시까지 또는 내부 보안 정책에 따른 기간 보관 후 파기</li>
        </ul>
        <hr>

        <h3>4. 개인정보의 제3자 제공</h3>
        <p>의원은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 정보주체의 사전 동의 또는 법령 근거가 있는 경우에 한하여 제공할 수 있습니다.</p>
        <hr>

        <h3>5. 개인정보 처리의 위탁 및 국외 이전 가능성</h3>
        <p><b>① 원내 시스템</b></p>
        <ul><li>EMR: 닥터팔레트(진료/기록 등 EMR 운영 관련 업무)</li></ul>

        <p><b>② 서비스 운영(호스팅/DB)</b></p>
        <ul>
          <li>호스팅/서버: Vercel</li>
          <li>DB/저장소: Upstash(Redis/KV)</li>
        </ul>
        <div class="p-note">
          <b>※</b> 서비스 운영 환경에 따라 개인정보가 국외(해외 데이터센터)에서 처리·보관될 가능성이 있으며,
          국외 이전이 발생하는 경우 관련 법령에 따라 고지 및 필요한 절차를 이행합니다.
        </div>
        <hr>

        <h3>6. 개인정보의 파기 절차 및 방법</h3>
        <ul>
          <li>보유기간 경과 또는 목적 달성 시 지체 없이 파기</li>
          <li>전자적 파일: 복구 불가능한 방식으로 영구 삭제</li>
          <li>출력물: 분쇄 또는 소각</li>
        </ul>
        <hr>

        <h3>7. 정보주체의 권리 및 행사방법</h3>
        <ul>
          <li>개인정보 열람/정정/삭제/처리정지 요구</li>
          <li>(동의 기반 처리의 경우) 동의 철회</li>
        </ul>
        <p class="muted">요청은 아래 개인정보 보호책임자에게 이메일 또는 전화로 가능합니다.</p>
        <hr>

        <h3>8. 개인정보 보호책임자</h3>
        <ul>
          <li><b>보호책임자</b>: 박우진</li>
          <li><b>연락처</b>: 070-8770-7007</li>
          <li><b>이메일</b>: soodam_clinic@naver.com</li>
          <li><b>주소</b>: 서울특별시 영등포구 여의도동 여의대방로 69길 19, 수담의원</li>
        </ul>

        <hr>
        <p class="muted">본 방침은 2026-01-01부터 적용됩니다. 내용이 변경되는 경우 홈페이지를 통해 공지합니다.</p>
      </div>
    </div>
  </div>
</div>

    <!-- 2) LOADING -->
    <div class="fbpModalState fbpModalState--loading">
      <div class="fbpConfirmTitle">문의 접수 중…</div>
      <div class="fbpConfirmBody">
        잠시만요. 확인하고 있어요.
        <div class="fbpSpinner" aria-hidden="true"></div>
        <div class="fbpLoadingBar" aria-hidden="true"><i></i></div>
      </div>
    </div>

    <!-- 3) SUCCESS -->
    <div class="fbpModalState fbpModalState--success">
      <div class="fbpSuccessWrap">
        <div class="fbpCheck" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>

        <div class="fbpSuccessText">
          <div class="fbpConfirmTitle">문의가 접수되었습니다.</div>
          <div class="fbpConfirmBody">
            연락가능하신 시간에 맞춰 연락드릴게요.<br>
            <b>010-8706-7696</b> 으로 연락드리겠습니다.
          </div>
        </div>

        <button id="fbpConsentOk" class="fbpConfirmOk" type="button" style="margin-top:14px;">확인</button>
      </div>
    </div>

    <!-- 4) ERROR (옵션) -->
    <div class="fbpModalState fbpModalState--error">
      <div class="fbpConfirmTitle">전송에 실패했어요.</div>
      <div class="fbpConfirmBody">
        네트워크 상태를 확인하고 다시 시도해 주세요.
      </div>
      <div class="fbpConsentBtns" style="margin-top:14px;">
        <button id="fbpRetry" class="fbpConsentBtn fbpConsentBtn--yes" type="button">다시 시도</button>
        <button id="fbpCancel" class="fbpConsentBtn fbpConsentBtn--no" type="button">닫기</button>
      </div>
    </div>

  </div>
</div>




<!-- ✅ 접수 완료 모달(확인 누를 때까지 유지) -->
<div id="fbpConfirmModal" aria-hidden="true">
  <div class="fbpConfirmBackdrop"></div>
  <div class="fbpConfirmCard" role="dialog" aria-modal="true" aria-labelledby="fbpConfirmTitle">
    <div id="fbpConfirmTitle" class="fbpConfirmTitle">문의가 접수되었습니다.</div>
    <div class="fbpConfirmBody">
      연락가능하신 시간에 맞춰 연락드릴게요.<br>
      <b>010-8706-7696</b> 으로 연락드리겠습니다.
    </div>
    <button id="fbpConfirmOk" class="fbpConfirmOk" type="button">확인</button>
  </div>
</div>

<!-- 오프스크린 sizer (이전 로직 유지) -->
<span id="fbpSizer" class="fbp-sizer" aria-hidden="true"></span>`,_0x2d8d88(String['raw']`(function(){
  // =========================
  // B 방식: 원격 HTML(fbp.html) 자동 주입 + 기존 로직 실행
  // =========================
  var API_BASE = 'https://soodam-line.vercel.app';   // lead API
  var HTML_URL = 'https://soodam-line.vercel.app/fbp/v1/fbp.html'; // 템플릿

  var $  = function(s){ return document.querySelector(s); };
  var $$ = function(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); };

  function ensureMount(){
    var m = $('#fbpMount');
    if(!m){
      m = document.createElement('div');
      m.id = 'fbpMount';
      document.body.appendChild(m);
    }
    return m;
  }

  function alreadyMounted(){
    // 중복 삽입 방지: 페이지에 이미 banner가 있으면 끝
    return !!$('#floating-banner-pc') || !!document.querySelector('[data-fbp-mounted="1"]');
  }

  function injectHTML(htmlText){
    var mount = ensureMount();

    // mount 안에 표식(중복 방지)
    mount.setAttribute('data-fbp-mounted', '1');

    // 안전하게 파싱 후 필요한 노드만 삽입
    var tpl = document.createElement('template');
    tpl.innerHTML = htmlText;

    // fbp.html에서 필요한 덩어리만 추출해서 mount에 넣기
    // (혹시 통째로 와도 동작하도록 그냥 fragment를 삽입)
    mount.innerHTML = '';
    mount.appendChild(tpl.content);

    // 주입 후 초기화 실행
    initBanner();
  }

  function fetchAndMount(){
    if(alreadyMounted()) return;

    fetch(HTML_URL, { method:'GET', mode:'cors', credentials:'omit' })
      .then(function(res){
        if(!res.ok) throw new Error('HTML fetch 실패: HTTP ' + res.status);
        return res.text();
      })
      .then(injectHTML)
      .catch(function(err){
        console.error('[FBP] mount error:', err);
      });
  }

  // =========================
  // 기존 동작 로직 (형이 주신 script 기반)
  // =========================
  function initBanner(){
    // 주입된 HTML이 없으면 종료
    var banner  = $('#floating-banner-pc');
    if(!banner) return;

    // ====== 요소 ======
    var right   = $('#fbpRight');
    var phone   = $('#fbpPhone');
    var freeWrap= $('#fbpFreeWrap');
    var free    = $('#fbpFree');
    var submit  = $('#fbpSubmit');
    var later   = $('#fbpLater');
    var sizer   = $('#fbpSizer');
    var cta     = $('#fbpCta');
var qrCard  = $('#fbpQrCard');  // ✅ 추가

    var dock    = $('#fbpDockBar');
var dockWrap= $('#fbpDockWrap');   // ✅ 추가 (도킹바 전체 래퍼)
    var hideBtn = $('#fbpHide');

    var confirmModal = $('#fbpConfirmModal');
    var confirmOk    = $('#fbpConfirmOk');

var nameEl = $('#fbpName');

var consentModal = $('#fbpConsentModal');
var policyModal  = $('#fbpPolicyModal');
var policyOpen   = $('#fbpPolicyOpen');
var policyClose  = $('#fbpPolicyClose');

var agreeBtn     = $('#fbpAgree');
var disagreeBtn  = $('#fbpDisagree');
var consentOk    = $('#fbpConsentOk');
var retryBtn     = $('#fbpRetry');
var cancelBtn    = $('#fbpCancel');

// 동의 결과 임시 저장
var pendingConsent = null; // 'yes' | 'no'

    // ====== 가드 (중복 init 방지) ======
    if(banner.getAttribute('data-fbp-inited') === '1') return;
    banner.setAttribute('data-fbp-inited','1');

    // ====== 유틸 ======
    function setPlaceholder(){
      if (!phone) return;
      phone.placeholder = banner.classList.contains('expanded')
        ? '010-0000-0000'
        : '문의주시면, 저희가 연락드릴게요!';
    }

    function sizePhoneWidth(){
      if(!phone || !sizer) return;
      var expanded = banner.classList.contains('expanded');
      if(expanded){ phone.style.removeProperty('width'); return; }

      var cs = getComputedStyle(phone);
      sizer.style.fontSize      = cs.fontSize;
      sizer.style.fontFamily    = cs.fontFamily;
      sizer.style.fontWeight    = cs.fontWeight;
      sizer.style.letterSpacing = cs.letterSpacing;
      sizer.textContent = phone.placeholder || '';

      var textW   = Math.ceil(sizer.getBoundingClientRect().width);
      var padW    = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      var borderW = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
      var extra   = 2;
      var finalW  = Math.max(140, textW + padW + borderW + extra);
      phone.style.width = finalW + 'px';
    }

    function openConfirm(){
      if(!confirmModal) return;
      confirmModal.setAttribute('aria-hidden','false');
    }
    function closeConfirm(){
      if(!confirmModal) return;
      confirmModal.setAttribute('aria-hidden','true');
    }
    if(confirmOk){
      confirmOk.addEventListener('click', closeConfirm);
    }

function setConsentState(state){
  // ask | loading | success | error
  if(!consentModal) return;
  consentModal.setAttribute('data-state', state);

  // 로딩 중 중복 클릭 방지
  var disabled = (state === 'loading');
  if(agreeBtn) agreeBtn.disabled = disabled;
  if(disagreeBtn) disagreeBtn.disabled = disabled;
}

function openConsent(){
  if(!consentModal) return;

  // ✅ 우측 높이 찌꺼기 제거(형이 이미 넣은 거 유지)
  if(right){
    right.style.height = '';
    right.style.setProperty('--icon','68px');
  }

  // 배너는 도킹 상태로 복귀
  if(banner){
    banner.classList.remove('expanded');
    banner.classList.add('fbp-hidden');
  }
  if(dockWrap) dockWrap.style.display = 'flex';

  // ✅ ask로 시작
  setConsentState('ask');
  consentModal.setAttribute('aria-hidden','false');
}

function closeConsent(){
  if(!consentModal) return;
  consentModal.setAttribute('aria-hidden','true');
  setConsentState('ask');
}


// ✅ 개인정보처리방침 전문 모달
function openPolicy(){
  if(!policyModal) return;
  policyModal.setAttribute('aria-hidden','false');
}
function closePolicy(){
  if(!policyModal) return;
  policyModal.setAttribute('aria-hidden','true');
}

if(policyOpen)  policyOpen.addEventListener('click', openPolicy);
if(policyClose) policyClose.addEventListener('click', closePolicy);

    function validate(){
      if(!submit || !phone) return;

      var phoneOk = /^0\d{1,2}-\d{3,4}-\d{4}$/.test((phone.value||'').trim());
      var interestOk = $$('#fbpInterests input[type="checkbox"]:checked').length >= 1;
      var freeOk = (free && free.value ? free.value.trim().length : 0) > 0;

      var timeOk = !!document.querySelector('input[name="time"]:checked');
      var sexOk  = !!document.querySelector('input[name="sex"]:checked');
      var ageOk  = !!document.querySelector('input[name="age"]:checked');

      var nameOk = !!(nameEl && nameEl.value && nameEl.value.trim().length >= 2);

submit.disabled = !( nameOk && phoneOk && timeOk && sexOk && ageOk && (interestOk || freeOk) );
    }

    function syncHeightsAndIcons(){
  if(!banner.classList.contains('expanded')) return;
  if(!right) return;

  var leftEl = document.querySelector('#fbpLeft');
  if(!leftEl) return;

  // 1) 우측 카드 높이 = 좌측 카드 높이
  var h = leftEl.getBoundingClientRect().height;
  right.style.height = String(Math.round(h)) + 'px';

  // 2) 아이콘 그리드 셀 사이즈 자동
  var cs = getComputedStyle(right);
  var pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

  var root = getComputedStyle(document.documentElement);
  var vGap = parseFloat(root.getPropertyValue('--gridV')) || 12;

  var inner = h - pad;
  var cellH = (inner - (vGap*2)) / 3;
  var size = Math.max(52, Math.min(68, Math.floor(cellH)));
  right.style.setProperty('--icon', String(size) + 'px');

  // ✅ 3) QR 카드 폭/높이 = 우측 카드와 동일
  if(qrCard){
    var rw = right.getBoundingClientRect().width;
    qrCard.style.width  = String(Math.round(rw)) + 'px';
    qrCard.style.height = String(Math.round(h)) + 'px';
}
}

    function showBanner(){
      if(!banner) return;
      banner.classList.remove('fbp-hidden');
if(dockWrap) dockWrap.style.display = 'none';  // ✅ 도킹바 숨김
      setPlaceholder();
      sizePhoneWidth();
      validate();
    }

    function hideBanner(){
      if(!banner) return;

      banner.classList.remove('expanded');
      if(right){
        right.style.height = '';
        right.style.setProperty('--icon','68px');
      }
if(qrCard){
  qrCard.style.width = '';
  qrCard.style.height = '';
}

      setPlaceholder();
      sizePhoneWidth();

      banner.classList.add('fbp-hidden');
       if(dockWrap) dockWrap.style.display = 'flex';  // ✅ 다시 보이게 (flex)
    }

    function openPanel(){
      if(banner.classList.contains('fbp-hidden')) showBanner();
      if(banner.classList.contains('expanded')) return;

      banner.classList.add('expanded');

      var els = [$('.fbp-topline'), nameEl, phone, freeWrap, submit, $('#fbpExtra'), $('#iconsGrid')];
      els.forEach(function(el){ if(el) el.classList.add('anim-pre'); });

      requestAnimationFrame(function(){
        els.forEach(function(el){ if(el) el.classList.remove('anim-pre'); });
        setPlaceholder();
        sizePhoneWidth();
        syncHeightsAndIcons();
});
    }

    // ====== 이벤트 ======
    if(dock){
      dock.addEventListener('click', showBanner);
      dock.addEventListener('keydown', function(e){
        if(e.key==='Enter' || e.key===' '){ e.preventDefault(); showBanner(); }
      });
    }
    if(hideBtn){
      hideBtn.addEventListener('click', hideBanner);
    }
    if (cta){
      cta.addEventListener('click', openPanel);
      cta.addEventListener('keydown', function(e){
        if(e.key==='Enter' || e.key===' '){ e.preventDefault(); openPanel(); }
      });
    }

if (nameEl){
  nameEl.addEventListener('focus', openPanel);
  nameEl.addEventListener('click', openPanel);
  nameEl.addEventListener('input', validate);
}

    if (phone){

  function seed010(){
    // 값이 비어있을 때만 010- 자동 주입
    if (!phone.value || !phone.value.trim()){
      phone.value = '010-';
      // 커서를 맨 뒤로
      setTimeout(function(){
        try{
          phone.setSelectionRange(phone.value.length, phone.value.length);
        }catch(e){}
      }, 0);
      validate();
    }
  }

  phone.addEventListener('focus', function(){
    openPanel();
    seed010();
  });

  phone.addEventListener('click', function(){
    openPanel();
    seed010();
  });

  phone.addEventListener('input', function(e){
    var v = e.target.value.replace(/[^\d]/g,'').slice(0,11);
    if(v.indexOf('02')===0){
      if(v.length>2 && v.length<=5) v=v.replace(/(\d{2})(\d+)/,'$1-$2');
      else if(v.length>5 && v.length<=9) v=v.replace(/(\d{2})(\d{3})(\d+)/,'$1-$2-$3');
      else if(v.length>9) v=v.replace(/(\d{2})(\d{4})(\d{4}).*/,'$1-$2-$3');
    }else{
      if(v.length>3 && v.length<=7) v=v.replace(/(\d{3})(\d+)/,'$1-$2');
      else if(v.length>7) v=v.replace(/(\d{3})(\d{4})(\d+).*/,'$1-$2-$3');
    }
    e.target.value = v;
    validate();
  });
}

    if (free){
      free.addEventListener('focus', openPanel);
      free.addEventListener('click', openPanel);
      free.addEventListener('input', validate);
    }
    document.addEventListener('change', function(e){
      var t = e.target;
      if(!t) return;
      if(t.matches && t.matches('#fbpInterests input, input[name="time"], input[name="sex"], input[name="age"]')){
        validate();
        syncHeightsAndIcons();
      }
    });

    if (later){
  later.addEventListener('click', function(){
    // 1) 패널 닫고
    banner.classList.remove('expanded');

    // 2) 높이/QR 리셋
    if(right){
      right.style.height = '';
      right.style.setProperty('--icon','68px');
    }
    if(qrCard){
      qrCard.style.width = '';
      qrCard.style.height = '';
    }

    // 3) 배너 자체 숨기고 도킹바로 복귀 (원하는 UX)
    banner.classList.add('fbp-hidden');
    if(dockWrap) dockWrap.style.display = 'flex';

    // (옵션) 폼 값/선택 유지하고 싶으면 resetForm() 호출 X
    // resetForm(); // 원하면 주석 해제
  });
}

// ====== 제출: 1) 문의하기 클릭 → 동의 모달 먼저 ======
if (submit){
  submit.addEventListener('click', function(){
    if (submit.disabled) return;
    openConsent();
  });
}
function buildPayload(consentValue){
  var arr = function(sel){
    return $$(sel + ':checked').map(function(i){ return i.value; });
  };
  var q = function(sel){
    var el = document.querySelector(sel);
    return el && el.value ? el.value : '';
  };

  return {
    name: (nameEl && nameEl.value ? nameEl.value.trim() : ''),
    phone: (phone.value || '').trim(),
    message: q('#fbpFree'),
    interests: arr('#fbpInterests input'),
    time: q('input[name="time"]:checked'),
    sex:  q('input[name="sex"]:checked'),
    age:  q('input[name="age"]:checked'),
    consent: consentValue, // 'yes' | 'no'
    page: location.href,
    ts: new Date().toISOString()
  };
}

function resetForm(){
  if(nameEl) nameEl.value = '';
  if(phone) phone.value = '';
  if(free) free.value = '';
  $$('#fbpInterests input, input[name="time"], input[name="sex"], input[name="age"]').forEach(function(el){ el.checked=false; });
  validate();
  syncHeightsAndIcons();
}

function sendLead(consentValue){
  var payload = buildPayload(consentValue);

  return fetch(API_BASE + '/api/lead', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(payload),
    mode: 'cors'
  })
  .then(function(res){
    if(!res.ok) return res.text().then(function(t){ throw new Error(t || ('HTTP '+res.status)); });
    return res.json().catch(function(){ return { ok:true }; });
  });
}

function runSend(consentValue){
  setConsentState('loading');

  sendLead(consentValue)
    .then(function(){
      // ✅ 성공 화면으로 전환(‘짠’)
      setConsentState('success');
      resetForm();
    })
    .catch(function(err){
      console.error(err);
      // alert 대신 error 화면
      setConsentState('error');
    });
}

if(agreeBtn){
  agreeBtn.addEventListener('click', function(){
    runSend('yes');
  });
}
if(disagreeBtn){
  disagreeBtn.addEventListener('click', function(){
    runSend('no');
  });
}

// 성공 확인 버튼 → 동의모달 닫기
if(consentOk){
  consentOk.addEventListener('click', function(){
    closeConsent();
  });
}

// 에러 다시시도/닫기
if(retryBtn){
  retryBtn.addEventListener('click', function(){
    // 다시 선택하게 ask로 돌림(가장 안전)
    setConsentState('ask');
  });
}
if(cancelBtn){
  cancelBtn.addEventListener('click', function(){
    closeConsent();
  });
}

    // ====== 초기 상태 ======
  if(dockWrap) dockWrap.style.display = 'flex';   // ✅ 교체
    banner.classList.add('fbp-hidden');

    setPlaceholder();
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(sizePhoneWidth); }
    sizePhoneWidth();
    validate();

    window.addEventListener('resize', function(){
      if(!banner.classList.contains('expanded')) return;
      syncHeightsAndIcons();
    });
  }

  // =========================
  // 시작: DOM 준비되면 fetch→inject→init
  // =========================
  function start(){
    // mount가 없으면 만들어 둠
    ensureMount();

    // 혹시 이미 HTML을 페이지에 직접 넣은 경우도 init만 수행
    if($('#floating-banner-pc')){
      initBanner();
      return;
    }

    fetchAndMount();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', start);
  }else{
    start();
  }
})();`);}document[_0x35c4ca(0x6c)+_0x35c4ca(0x82)]==='loadi'+'ng'?document[_0x35c4ca(0x94)+'entLi'+_0x35c4ca(0x71)+'r']('DOMCo'+_0x35c4ca(0x90)+'Loade'+'d',_0x204fff):_0x204fff();}()));function _0x2c43(_0x59beda,_0x5b4898){_0x59beda=_0x59beda-0x6b;var _0x3bad0e=_0x3bad();var _0x2c4387=_0x3bad0e[_0x59beda];return _0x2c4387;}function _0x3bad(){var _0x273f83=['306616mScCIK','appen','getEl','onten','sd-sh','9168ldaBOR','ById','1258806VSAiRG','div','displ','HTML','creat','sd-fb','textC','State','NJECT','ED__','1fyePxB','head','ared','dChil','5084235KxAtOD','13647447Fcjxui','FBP_I','scrip','none','11sZRQnN','raw','ntent','style','tribu','5089impFzV','addEv','__SD_','inner','trim','65632870ZdGtQW','fbp','ready','p-sty','eElem','ent','4495404fpMhCG','stene','95PnJWVk','ement'];_0x3bad=function(){return _0x273f83;};return _0x3bad();}