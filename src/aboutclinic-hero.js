/**
 * About Clinic Hero — Soodam Clinic
 *
 * Embed (one line in imweb):
 *   <div id="sdmHero5"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/soodamclinic/sd-imweb-shared@main/public/aboutclinic-hero.js" defer></script>
 *
 * Acts:
 *   1. Hero       — rolling icon belt + typed 4-line question + glass pill CTA
 *   2. Brand      — main message → philosophy + 5 hover hotspots over fixed bg
 *   3. Services   — 5 selectable category cards + detail panel + system steps
 */
(function () {
  'use strict';

  var STYLES = `
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;800;900&display=swap');

/* ========== Global fixed background (only when section mounted) ========== */
html.sdm-bg-on::before{
  content:""; position: fixed; inset: 0;
  z-index:-1; pointer-events:none;
  background-image: url("https://cdn.imweb.me/upload/S20250626bc7495188971b/35a22e4230dab.jpg");
  background-size: cover; background-position: center center; background-repeat: no-repeat;
  transform: translateZ(0);
  will-change: transform;
  contain: paint;
}

/* Respect reduced-motion preference + low-end devices */
@media (prefers-reduced-motion: reduce) {
  #sdmHero5 .sdm-belt,
  #sdmHero5 .sdm-tile,
  #sdmHero5 .sdm-hot,
  #sdmHero5 .sdm-hotCard,
  #sdmHero5 .sdm-morepill,
  #sdmHero5 .sdm-sel,
  #sdmHero5 .sdm-layer,
  #sdmHero5 .sdm-brandPlain,
  #sdmHero5 .sdm-brandMainBlock,
  #sdmHero5 .sdm-brandPhilosophyBlock { transition: none !important; }
  #sdmHero5 .sdm-hintChevron,
  #sdmHero5 .sdm-ghost-caret { animation: none !important; }
}

/* ========== Snap-scroll lock helpers ========== */
html.sdm-snap-lock, body.sdm-snap-lock{
  overscroll-behavior: none;
  touch-action: pan-x pan-y;
}

/* ========== Section root ========== */
#sdmHero5{
  position: relative;
  width: 100%;
  height: 200vh;
  overflow: visible;
  background: transparent !important;
  font-family: "Pretendard","Noto Sans KR",system-ui,-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;
}
#sdmHero5 .sdm-stage{
  position: sticky; top: 0; min-height: 100vh; overflow: hidden;
}

/* ========== Center layout (Act 1 hero text + icon zone) ========== */
#sdmHero5 .sdm-shell{
  position: relative; z-index: 30; min-height: 100vh;
  display: grid; place-items: center;
  padding: clamp(18px, 3.5vw, 64px); box-sizing: border-box;
  pointer-events: none;
}
#sdmHero5 .sdm-center{
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: calc(clamp(128px, 11vw, 170px) * 1.72) 1fr;
  align-items: center;
  gap: clamp(26px, 3.4vw, 52px);
  padding: 110px 0 110px 0;
  box-sizing: border-box;
}
#sdmHero5 .sdm-iconZone{
  width: 100%; aspect-ratio: 1 / 1; border-radius: 30px;
  pointer-events: none;
}

/* ========== Question text (Act 1) ========== */
#sdmHero5 .sdm-question{
  position: relative;
  pointer-events: auto;
  font-size: calc(clamp(44px, 4.6vw, 92px) * 0.80);
  line-height: 1.24;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #CBBBB1;
  text-shadow: 0 2px 18px rgba(0,0,0,0.10);
  max-width: 9em;
  word-break: keep-all;
  padding-left: 22px; padding-right: 12px;
  display: flex; flex-direction: column;
  align-items: flex-start; gap: 18px;
  text-align: left;
}
#sdmHero5 .sdm-question::before{
  content:""; position:absolute; z-index:-1; pointer-events:none;
  top:-180px; bottom:-40px; left:-300px; right:-180px;
  border-radius: 50%;
  background:
    radial-gradient(50% 50% at 36% 50%,
      rgba(0,0,0,0.22) 0%,
      rgba(0,0,0,0.14) 30%,
      rgba(0,0,0,0.06) 56%,
      rgba(0,0,0,0.02) 78%,
      rgba(0,0,0,0.00) 100%
    );
  filter: blur(14px);
}
#sdmHero5 .sdm-lines{
  display: grid; grid-template-rows: repeat(4, 1.08em);
  width: 100%;
}
#sdmHero5 .sdm-line{ display:block; white-space:pre; overflow:hidden; }

#sdmHero5 .sdm-ghost-caret{
  display:inline-block;
  margin-left: 6px;
  transform: translateY(-0.04em) scaleX(1.15);
  opacity: 0.55; font-weight: 900;
  animation: sdmM_Blink 1.1s steps(2,end) infinite;
}
#sdmHero5 .sdm-ctaRow{
  margin-top: 18px;
  display:flex; justify-content:flex-start;
  width: 100%;
}

/* ========== Glass pill (.sdm-morepill, used in Act 1 + Act 3) ========== */
#sdmHero5 a.sdm-morepill,
#sdmHero5 .sdm-morepill{
  --mx: 50%; --my: 50%;
  position: relative;
  display: inline-flex; align-items: center; justify-content: flex-start;
  gap: 10px;
  height: 40px; padding: 0 15px;
  width: 214px; min-width: 214px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.28);
  background: rgba(255,255,255,0.04);
  -webkit-backdrop-filter: blur(8px) saturate(130%);
  backdrop-filter: blur(8px) saturate(130%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.44),
    inset 0 -1px 0 rgba(255,255,255,0.10),
    inset 12px 12px 24px rgba(255,255,255,0.02),
    inset -18px -18px 26px rgba(85,58,36,0.10),
    0 8px 24px rgba(0,0,0,0.06);
  text-decoration: none;
  color: rgba(255,255,255,0.94);
  cursor: pointer; user-select: none;
  white-space: nowrap; overflow: hidden;
  isolation: isolate;
  transition: background 180ms ease, border-color 180ms ease;
}
#sdmHero5 a.sdm-morepill:hover,
#sdmHero5 .sdm-morepill:hover{
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.38);
}
#sdmHero5 a.sdm-morepill:focus,
#sdmHero5 a.sdm-morepill:focus-visible{ outline: none; }

#sdmHero5 .sdm-morepill::before{
  content:""; position:absolute; inset:-18% -30% 28% -24%;
  pointer-events:none; z-index: 0;
  border-radius: 999px;
  background:
    linear-gradient(102deg,
      rgba(255,255,255,0.00) 0%,
      rgba(255,255,255,0.04) 16%,
      rgba(255,255,255,0.22) 26%,
      rgba(255,255,255,0.08) 34%,
      rgba(255,255,255,0.00) 46%,
      rgba(255,248,240,0.04) 56%,
      rgba(255,255,255,0.00) 68%
    ),
    radial-gradient(72% 120% at 16% 18%,
      rgba(255,255,255,0.20) 0%,
      rgba(255,255,255,0.08) 26%,
      rgba(255,255,255,0.00) 58%
    ),
    radial-gradient(circle at var(--mx) var(--my),
      rgba(255,255,255,0.22),
      rgba(255,255,255,0.08) 26%,
      rgba(255,255,255,0.00) 62%
    );
  filter: blur(11px);
  opacity: 0.7;
  transform: rotate(-7deg) translate3d(0,0,0);
}
#sdmHero5 .sdm-morepill::after{
  content:""; position:absolute; inset:0;
  pointer-events:none; z-index: 0;
  border-radius: inherit;
  background:
    radial-gradient(140% 90% at -8% 50%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.00) 18%),
    radial-gradient(140% 90% at 108% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.00) 18%),
    radial-gradient(90% 54% at 50% -12%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.00) 48%),
    linear-gradient(180deg,
      rgba(255,255,255,0.16) 0%,
      rgba(255,255,255,0.04) 18%,
      rgba(255,255,255,0.00) 44%,
      rgba(97,69,47,0.00) 62%,
      rgba(97,69,47,0.10) 100%
    );
  box-shadow:
    inset 1px 0 0 rgba(255,255,255,0.10),
    inset -1px 0 0 rgba(255,255,255,0.08);
}
#sdmHero5 .sdm-morepill > *{ position: relative; z-index: 2; }
#sdmHero5 .sdm-morepill,
#sdmHero5 .sdm-morepill *{ text-decoration: none !important; border-bottom: 0 !important; }

#sdmHero5 .sdm-pill-topic{
  font-size: 14px; font-weight: 800; letter-spacing: -0.02em;
  color: rgba(255,255,255,0.94);
  max-width: 78px; overflow: hidden; text-overflow: ellipsis;
}
#sdmHero5 .sdm-pill-divider{
  width: 1px; height: 14px; background: rgba(255,255,255,0.24); opacity: 0.85;
}
#sdmHero5 .sdm-pill-cta{
  font-size: 14px; font-weight: 700; letter-spacing: -0.01em;
  color: rgba(255,255,255,0.92);
}
#sdmHero5 .sdm-pill-arrow{
  margin-left: auto;
  display:inline-flex; align-items:center; justify-content:center;
  width: 20px; height: 20px;
  opacity: 0.92;
  transition: transform 160ms ease;
}
#sdmHero5 .sdm-pill-arrow svg{ width: 16px; height: 16px; display: block; }
#sdmHero5 .sdm-pill-arrow path{ stroke: rgba(255,255,255,0.94); }
#sdmHero5 .sdm-morepill:hover .sdm-pill-arrow{ transform: translateX(3px); }

/* ========== Belt + tiles + vignette (Act 1) ========== */
#sdmHero5 .sdm-beltArea{
  position:absolute; left:0; right:0;
  top:50%; transform: translateY(-50%);
  z-index: 20; pointer-events: auto;
}
#sdmHero5 .sdm-beltViewport{
  width:100%; overflow-x:hidden; overflow-y:visible;
  padding: 52px 0;
}
#sdmHero5 .sdm-belt{
  display:flex; align-items:center;
  gap: 4px;
  will-change: transform;
  transform: translate3d(0,0,0);
}
#sdmHero5 .sdm-cell{
  flex: 0 0 auto;
  width: calc(clamp(84px, 7.2vw, 118px) * 1.34);
  aspect-ratio: 1 / 1;
  display: grid; place-items: center;
  cursor: pointer;
}
#sdmHero5 .sdm-tile{
  width: clamp(84px, 7.2vw, 118px);
  height: clamp(84px, 7.2vw, 118px);
  border-radius: 22px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.14);
  display:grid; place-items:center;
  opacity: 0.10;
  cursor: pointer;
  transform: scale(1); transform-origin: center center;
  transition: transform 120ms ease, opacity 120ms ease,
              background 120ms ease, border-color 120ms ease, filter 120ms ease;
}
#sdmHero5 .sdm-tile img{
  width: 100%; height: 100%;
  object-fit: cover; border-radius: inherit;
  opacity: 0.98; pointer-events: none; display: block;
}
#sdmHero5 .sdm-tile.is-active{
  opacity: 0.98;
  background: rgba(255,255,255,0.22);
  border-color: rgba(255,255,255,0.24);
  transform: scale(1.32);
}
#sdmHero5 .sdm-tile.is-next{
  opacity: 0.12;
  transform: scale(1);
}
#sdmHero5 .sdm-tile:not(.is-active):hover{
  opacity: 0.42;
  transform: scale(1.12);
  background: rgba(255,255,255,0.20);
  border-color: rgba(255,255,255,0.24);
  filter: brightness(1.06);
}
#sdmHero5 .sdm-tile:not(.is-active):hover img{
  filter: brightness(1.10) contrast(1.05);
}

#sdmHero5 .sdm-beltVignette{
  position: absolute; inset: 0;
  z-index: 26; pointer-events: none;
  background:
    radial-gradient(56% 36% at 50% 38%,
      rgba(0,0,0,0.18) 0%,
      rgba(0,0,0,0.08) 50%,
      rgba(0,0,0,0.00) 100%
    );
  opacity: 0.85;
}

/* ========== Hero arrows (Act 1 only) ========== */
#sdmHero5 .sdm-heroNav{
  position: absolute; top: 50%;
  z-index: 44;
  width: 58px; height: 58px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.24);
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
  box-shadow:
    0 18px 42px rgba(0,0,0,0.14),
    inset 0 1px 0 rgba(255,255,255,0.22);
  -webkit-backdrop-filter: blur(8px) saturate(130%);
  backdrop-filter: blur(8px) saturate(130%);
  display: grid; place-items: center;
  cursor: pointer;
  color: rgba(255,255,255,0.92);
  transition: transform 120ms ease, background 120ms ease, border-color 120ms ease, opacity 120ms ease;
}
#sdmHero5 .sdm-heroNav:hover{
  transform: translate(-50%, -50%) scale(1.03);
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08));
  border-color: rgba(255,255,255,0.34);
}
#sdmHero5 .sdm-heroNav:active{ transform: translate(-50%, -50%) scale(0.98); }
#sdmHero5 .sdm-heroNav svg{ width: 22px; height: 22px; display: block; }
#sdmHero5 .sdm-heroNav path{
  stroke: rgba(255,255,255,0.94);
  stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round;
}
#sdmHero5 .sdm-heroPrev{
  left: calc(50% - clamp(276px, 17.2vw, 324px));
  transform: translate(-50%, -50%);
}
#sdmHero5 .sdm-heroNext{
  left: calc(50% + clamp(276px, 17.2vw, 324px));
  transform: translate(-50%, -50%);
}
#sdmHero5[data-act="brand"] .sdm-heroNav,
#sdmHero5[data-act="services"] .sdm-heroNav{
  opacity: 0; pointer-events: none;
}

/* ========== Scroll hint pill ========== */
#sdmHero5 .sdm-scrollHint{
  position: absolute; left: 50%; bottom: 110px;
  transform: translateX(-50%);
  z-index: 60;
  display: grid; justify-items: center; gap: 8px;
  padding: 0; background: transparent; border: 0; box-shadow: none;
  opacity: 0; pointer-events: none;
  transition: opacity 180ms ease;
}
#sdmHero5[data-act="hero"] .sdm-scrollHint,
#sdmHero5[data-act="brand"] .sdm-scrollHint{ opacity: 0.78; }

#sdmHero5 .sdm-hintPill{
  display:inline-flex; align-items:center; justify-content:center;
  padding: 9px 15px;
  border-radius: 999px;
  background: rgba(255,255,255,0.015);
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.10);
  -webkit-backdrop-filter: blur(8px) saturate(118%);
  backdrop-filter: blur(8px) saturate(118%);
}
#sdmHero5 .sdm-hintText{
  font-size: 11px; line-height: 1;
  color: rgba(203,187,177,0.92);
  letter-spacing: -0.01em; font-weight: 700;
  white-space: nowrap;
}
#sdmHero5 .sdm-hintChevron{
  width: 14px; height: 14px;
  opacity: 0.92;
  animation: sdmBob 1.6s ease-in-out infinite;
}
#sdmHero5 .sdm-hintChevron path{
  stroke: rgba(203,187,177,0.90);
  stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
}
#sdmHero5 .sdm-scrollDots{
  display: inline-flex; align-items: center; justify-content: center;
  gap: 7px; margin-top: 2px;
}
#sdmHero5 .sdm-scrollDot{
  width: 7px; height: 7px;
  border-radius: 999px;
  background: rgba(255,255,255,0.26);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  opacity: 0.9;
  transition: transform 140ms ease, background 140ms ease, box-shadow 140ms ease;
}
#sdmHero5 .sdm-scrollDot.is-on{
  background: rgba(255,255,255,0.92);
  box-shadow:
    0 0 0 4px rgba(255,255,255,0.10),
    0 6px 18px rgba(255,255,255,0.18);
  transform: scale(1.05);
}

/* ========== Act layers ========== */
#sdmHero5 .sdm-layer{
  position: absolute; left: 0; right: 0; top: 0;
  min-height: 100%;
  z-index: 33;
  opacity: 0; pointer-events: none;
  transition: opacity 240ms ease, transform 240ms ease;
}
#sdmHero5 .sdm-layer.is-on{ opacity: 1; pointer-events: auto; }
#sdmHero5 .sdm-layer.is-off{ opacity: 0; pointer-events: none; }

#sdmHero5[data-act="hero"]     .sdm-beltArea{ opacity: 1 !important; }
#sdmHero5[data-act="brand"]    .sdm-beltArea,
#sdmHero5[data-act="services"] .sdm-beltArea{ opacity: 0 !important; }
#sdmHero5[data-act="hero"]     #sdmLayerHero{ pointer-events:auto; }
#sdmHero5[data-act="brand"]    #sdmLayerBrand{ pointer-events:auto; }
#sdmHero5[data-act="services"] #sdmLayerServices{ pointer-events:auto; }

@media (max-width: 980px){
  #sdmHero5 .sdm-center{
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 18px;
    padding: 96px 0 96px 0;
  }
  #sdmHero5 .sdm-question{ text-align: center; align-items: center; }
  #sdmHero5 .sdm-ctaRow{ justify-content: center; }
  #sdmHero5 .sdm-heroPrev{ left: calc(50% - 170px); }
  #sdmHero5 .sdm-heroNext{ left: calc(50% + 170px); }
}

/* ========== Act 2 — Brand stage (main → philosophy crossfade) ========== */
#sdmHero5 .sdm-brandStage{
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 100vh;
  display: grid; place-items: center;
  padding: 90px 0 110px 0;
  box-sizing: border-box;
  text-align: center;
}
#sdmHero5 .sdm-brandPlain{
  width: min(620px, 100%);
  margin: 0 auto;
  position: relative;
  transition: transform 80ms linear, opacity 120ms linear;
}
#sdmHero5 .sdm-brandBig{
  margin: 0;
  font-weight: 950;
  letter-spacing: -0.05em;
  line-height: 1.14;
  font-size: clamp(42px, 4.5vw, 72px);
  color: rgba(203,187,177,0.96);
  text-shadow: 0 18px 52px rgba(0,0,0,0.30);
}
#sdmHero5 .sdm-brandBig .sdm-brandAccent{ color: rgba(203,187,177,0.98); }

#sdmHero5 .sdm-brandMainBlock,
#sdmHero5 .sdm-brandPhilosophyBlock{
  transition: opacity 140ms linear;
}
#sdmHero5 .sdm-brandPhilosophyBlock{
  position: absolute; left: 0; right: 0; top: 0;
  opacity: 0;
}

#sdmHero5 .sdm-brandInfoSlot{
  position: relative; margin-top: 18px; min-height: 110px;
}
#sdmHero5 .sdm-brandInfo,
#sdmHero5 .sdm-brandPrompt{ position: static; opacity: 1; }
#sdmHero5 .sdm-brandSub2{
  margin: 18px 0 0 0;
  font-size: 15px; line-height: 1.78;
  color: rgba(203,187,177,0.84);
  text-shadow: 0 18px 52px rgba(0,0,0,0.22);
}
#sdmHero5 .sdm-brandMicro2{
  margin: 12px 0 0 0;
  font-size: 12px; line-height: 1.75;
  color: rgba(203,187,177,0.62);
  text-shadow: 0 18px 52px rgba(0,0,0,0.18);
}
#sdmHero5 .sdm-brandPromptMain{
  margin: 0;
  font-size: 15px; line-height: 1.75;
  color: rgba(203,187,177,0.86);
  text-shadow: 0 18px 52px rgba(0,0,0,0.20);
}
#sdmHero5 .sdm-brandPromptSub{
  margin: 10px 0 0 0;
  font-size: 12px; line-height: 1.72;
  color: rgba(203,187,177,0.62);
  text-shadow: 0 18px 52px rgba(0,0,0,0.18);
}

/* ========== Act 2 — Hotspots ========== */
#sdmHero5 .sdm-hotLayer{
  position: fixed; inset: 0;
  z-index: 58;
  pointer-events: none;
  display: none;
}
#sdmHero5[data-act="brand"][data-brand-copy="philosophy"] .sdm-hotLayer{ display: block; }
#sdmHero5 .sdm-hotBackdrop{
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.18);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 180ms ease;
  pointer-events: none;
}
#sdmHero5 .sdm-hotLayer.is-focus .sdm-hotBackdrop{ opacity: 1; }
#sdmHero5 .sdm-hot{
  position: absolute;
  width: 30px; height: 30px;
  border-radius: 999px;
  background: rgba(0,0,0,0.34);
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow:
    0 14px 40px rgba(0,0,0,0.34),
    inset 0 1px 0 rgba(255,255,255,0.10);
  display: grid; place-items: center;
  pointer-events: auto; cursor: pointer;
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  backdrop-filter: blur(8px) saturate(120%);
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, opacity 160ms ease;
}
#sdmHero5 .sdm-hot:hover{
  transform: scale(1.08);
  border-color: rgba(255,255,255,0.30);
}
#sdmHero5 .sdm-hotPlus{ width: 12px; height: 12px; position: relative; }
#sdmHero5 .sdm-hotPlus::before,
#sdmHero5 .sdm-hotPlus::after{
  content:""; position:absolute;
  left:50%; top:50%;
  width:12px; height:2.2px;
  background: rgba(203,187,177,0.96);
  border-radius: 999px;
  transform: translate(-50%,-50%);
}
#sdmHero5 .sdm-hotPlus::after{ transform: translate(-50%,-50%) rotate(90deg); }
#sdmHero5 .sdm-hotLayer.is-focus .sdm-hot{ opacity: 0.26; }
#sdmHero5 .sdm-hotLayer.is-focus .sdm-hot.is-active{
  opacity: 1; transform: scale(1.12);
}
#sdmHero5 .sdm-hotCard{
  position: absolute;
  min-width: 240px; max-width: 320px;
  border-radius: 24px;
  padding: 16px 16px;
  background: linear-gradient(180deg, rgba(0,0,0,0.44), rgba(0,0,0,0.28));
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow:
    0 22px 68px rgba(0,0,0,0.34),
    inset 0 1px 0 rgba(255,255,255,0.06);
  -webkit-backdrop-filter: blur(8px) saturate(118%);
  backdrop-filter: blur(8px) saturate(118%);
  color: rgba(203,187,177,0.88);
  pointer-events: auto;
  opacity: 0; transform: translateY(6px);
  transition: opacity 180ms ease, transform 180ms ease;
  display: none;
  z-index: 59;
}
#sdmHero5 .sdm-hotCard.is-show{
  display: block; opacity: 1; transform: translateY(0);
}
#sdmHero5 .sdm-hotCard h4{
  margin: 0 0 8px 0;
  font-size: 15px; font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(203,187,177,0.96);
}
#sdmHero5 .sdm-hotCard p{
  margin: 0;
  font-size: 13px; line-height: 1.62;
  color: rgba(203,187,177,0.82);
}

@media (max-width: 980px){
  #sdmHero5 .sdm-brandStage{ padding: 96px 0 96px 0; }
}

/* ========== Act 3 — Services ========== */
#sdmHero5 .sdm-servicesStage{
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 100vh;
  display: grid; place-items: center;
  padding: 156px 0 64px 0;
  box-sizing: border-box;
}
#sdmHero5 .sdm-servicesWrap{
  width: 100%; padding: 0;
  display: grid; gap: 12px;
}
#sdmHero5 .sdm-serviceRail{
  display: grid; grid-template-columns: 1fr; gap: 10px;
  background: transparent; border: 0; box-shadow: none;
}
#sdmHero5 .sdm-serviceStrip{
  display:flex; gap: 10px;
  padding: 6px 2px 26px 2px;
  overflow: visible;
  justify-content: space-between;
  position: relative;
  scrollbar-width: none;
}
#sdmHero5 .sdm-serviceStrip::-webkit-scrollbar{ display:none; }

#sdmHero5 .sdm-sel{
  position: relative;
  flex: 0 0 auto;
  width: 182px;
  min-height: 84px; height: 84px;
  padding: 12px 16px 10px;
  border-radius: 24px;
  background: rgba(155,132,112,0.22);
  border: 1px solid rgba(255,255,255,0.34);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.44),
    inset 0 -1px 0 rgba(255,255,255,0.10),
    inset 12px 12px 24px rgba(255,255,255,0.02),
    inset -18px -18px 26px rgba(85,58,36,0.10),
    0 8px 24px rgba(0,0,0,0.06);
  -webkit-backdrop-filter: blur(8px) saturate(125%);
  backdrop-filter: blur(8px) saturate(125%);
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: background 150ms ease, border-color 150ms ease, box-shadow 150ms ease, filter 150ms ease;
}
#sdmHero5 .sdm-sel:hover{
  background: rgba(255,255,255,0.10);
  border-color: rgba(255,255,255,0.50);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.48),
    inset 0 -1px 0 rgba(255,255,255,0.12),
    inset 12px 12px 24px rgba(255,255,255,0.03),
    inset -18px -18px 26px rgba(85,58,36,0.12),
    0 14px 34px rgba(0,0,0,0.12),
    0 0 0 1px rgba(255,255,255,0.10);
  filter: brightness(1.06);
}
#sdmHero5 .sdm-sel.is-active{
  background: rgba(255,255,255,0.13);
  border-color: rgba(255,255,255,0.58);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.54),
    inset 0 -1px 0 rgba(255,255,255,0.14),
    inset 12px 12px 24px rgba(255,255,255,0.04),
    inset -18px -18px 26px rgba(85,58,36,0.14),
    0 18px 40px rgba(0,0,0,0.16),
    0 0 0 1px rgba(255,255,255,0.16);
  filter: brightness(1.10);
}
#sdmHero5 .sdm-sel::before{
  content:""; position:absolute;
  inset:-18% -30% 28% -24%;
  pointer-events:none; z-index: 0;
  border-radius: 999px;
  background:
    linear-gradient(102deg,
      rgba(255,255,255,0.00) 0%,
      rgba(255,255,255,0.07) 16%,
      rgba(255,255,255,0.34) 26%,
      rgba(255,255,255,0.12) 34%,
      rgba(255,255,255,0.00) 46%,
      rgba(255,248,240,0.08) 56%,
      rgba(255,255,255,0.00) 68%
    ),
    radial-gradient(72% 120% at 16% 18%,
      rgba(255,255,255,0.30) 0%,
      rgba(255,255,255,0.12) 26%,
      rgba(255,255,255,0.00) 58%
    );
  filter: blur(11px); opacity: 0.85;
  transform: rotate(-7deg) translate3d(0,0,0);
}
#sdmHero5 .sdm-sel::after{
  content:""; position:absolute; inset:0;
  pointer-events:none; z-index:1;
  border-radius: inherit;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.00) 0%,
    rgba(0,0,0,0.02) 60%,
    rgba(0,0,0,0.08) 100%
  );
}
#sdmHero5 .sdm-sel > *{ position: relative; z-index: 2; }

#sdmHero5 .sdm-selTop{
  display: flex; align-items: flex-start;
  margin: 0 0 4px 0;
}
#sdmHero5 .sdm-selTop > div{
  display: flex; flex-direction: column; gap: 5px; width: 100%;
}
#sdmHero5 .sdm-selTitle{
  margin: 0;
  font-size: 14px; font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(255,255,255,0.97);
  text-shadow: 0 1px 8px rgba(0,0,0,0.30), 0 0 1px rgba(0,0,0,0.40);
  line-height: 1.14;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
#sdmHero5 .sdm-selHint{
  margin: 0;
  font-size: 12px; line-height: 1.35;
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.82);
  text-shadow: 0 1px 6px rgba(0,0,0,0.28);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

#sdmHero5 .sdm-serviceGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: stretch;
}
#sdmHero5 .sdm-panel{
  border-radius: 34px;
  padding: 22px 22px;
  background: linear-gradient(180deg, rgba(0,0,0,0.38), rgba(0,0,0,0.22));
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow:
    0 22px 68px rgba(0,0,0,0.26),
    inset 0 1px 0 rgba(255,255,255,0.06);
  -webkit-backdrop-filter: blur(8px) saturate(118%);
  backdrop-filter: blur(8px) saturate(118%);
  height: auto; min-height: 440px;
  display: flex; flex-direction: column;
}
#sdmHero5 .sdm-panelTag{
  display: inline-flex; align-items: center;
  height: 28px; padding: 0 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.26);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(203,187,177,0.86);
  font-weight: 800; font-size: 12px;
  letter-spacing: -0.01em;
  align-self: flex-start;
  width: auto; max-width: max-content;
  white-space: nowrap;
  flex: 0 0 auto;
}
#sdmHero5 .sdm-panelH{
  margin: 10px 0 0 0;
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 900; letter-spacing: -0.03em;
  color: rgba(203,187,177,0.96);
  line-height: 1.18;
  min-height: 96px;
}
#sdmHero5 .sdm-panelP{
  margin: 12px 0 0 0;
  font-size: 14px; line-height: 1.70;
  letter-spacing: -0.01em;
  color: rgba(203,187,177,0.82);
  min-height: 74px;
}
#sdmHero5 .sdm-bul{
  margin: 14px 0 0 0; padding: 0;
  list-style: none; display: grid; gap: 10px;
  min-height: 122px;
}
#sdmHero5 .sdm-bul li{
  display: flex; gap: 10px; align-items: flex-start;
  font-size: 14px; line-height: 1.55;
  color: rgba(203,187,177,0.84);
}
#sdmHero5 .sdm-bulDot{
  margin-top: 7px;
  width: 6px; height: 6px;
  border-radius: 999px;
  background: rgba(203,187,177,0.55);
  flex: 0 0 auto;
}
#sdmHero5 .sdm-systemH{
  margin: 0;
  font-size: 16px; font-weight: 900;
  letter-spacing: -0.02em;
  color: rgba(203,187,177,0.92);
}
#sdmHero5 .sdm-steps{
  display: grid; gap: 10px;
  margin-top: 12px;
  min-height: 192px;
}
#sdmHero5 .sdm-step{
  border-radius: 18px;
  padding: 12px 12px;
  background: rgba(0,0,0,0.22);
  border: 1px solid rgba(255,255,255,0.10);
  color: rgba(203,187,177,0.82);
  font-size: 13px; line-height: 1.55;
}
#sdmHero5 .sdm-step b{ color: rgba(203,187,177,0.94); }
#sdmHero5 .sdm-servicesCtaRow{ margin-top: auto; }

@media (max-width: 980px){
  #sdmHero5 .sdm-servicesStage{ padding: 96px 0 96px 0; }
  #sdmHero5 .sdm-serviceGrid{ grid-template-columns: 1fr; }
  #sdmHero5 .sdm-panel{ height: auto; min-height: 0; }
  #sdmHero5 .sdm-serviceStrip{
    overflow-x: auto; -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    padding-bottom: 16px;
  }
  #sdmHero5 .sdm-sel{ width: 176px; min-height: 80px; height: 80px; }
}

/* ========== Animations ========== */
@keyframes sdmM_Blink{ 0%, 49% { opacity: .55 } 50%, 100% { opacity: 0 } }
@keyframes sdmBob{
  0%   { transform: translateY(0); }
  50%  { transform: translateY(6px); }
  100% { transform: translateY(0); }
}
@keyframes sdmLiquidSheenDrift{
  0%   { transform: rotate(-8deg) translate3d(-4%, -2%, 0) scaleX(0.98); opacity: 0.88; }
  50%  { transform: rotate(-6deg) translate3d(2%, 1%, 0) scaleX(1.02);  opacity: 1; }
  100% { transform: rotate(-9deg) translate3d(7%, 3%, 0) scaleX(1.01);  opacity: 0.92; }
}
`;

  // =========================================================
  // DATA — edit these to change copy / icons / links
  // =========================================================
  var HERO_ITEMS = [
    { topic: '운동',   q: ['숨이 차고,', '땀 흘리는', '운동도', '하셨나요?'],                    url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/02e428ec5f898.png' },
    { topic: '피로',   q: ['자도 자도', '피곤한 이유를', '정리해본 적', '있나요?'],              url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png' },
    { topic: '식곤증', q: ['식후에', '멍해지는 느낌,', '당연한', '걸까요?'],                      url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png' },
    { topic: '피부',   q: ['피부가', '이유 없이 가렵고', '두드러기가', '반복되나요?'],            url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png' },
    { topic: '체중',   q: ['아무리 노력해도', '체중이 안 빠질 때,', '원인은 의외로', '단순합니다.'], url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png' },
    { topic: '혈당',   q: ['혈당은', "'당뇨'만의 문제가 아니라", '일상', '입니다.'],              url: '#', iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png' }
  ];

  var SERVICES = [
    { key: 'glucose',  tag: '혈당 · 체중',         hint: '식곤증 · 폭식 · 체중정체',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png',
      title: '혈당 흐름을 잡으면, 체중과 컨디션이 같이 따라옵니다.',
      p: '혈당은 체중만의 문제가 아닙니다. 집중력, 피로, 수면, 식욕까지 한 줄로 연결됩니다. 우리는 ‘당을 줄여라’가 아니라 ‘개인 패턴’을 데이터로 확인하고 루틴을 재설계합니다.',
      bullets: [
        '식후 급상승/급락 패턴이면: 졸림·야식·폭식이 붙습니다.',
        'CGM은 검사라기보다 ‘습관 장치’로 씁니다.',
        '8주 루틴으로 ‘유지 가능한 형태’까지 만들고 끝냅니다.'
      ], url: '#' },
    { key: 'recovery', tag: '컨디션 · 피로',       hint: '오후 처짐 · 수면질 · 회복력',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/02e428ec5f898.png',
      title: '피로는 ‘부족’보다 ‘전달 장애’인 경우가 많습니다.',
      p: '검사 수치가 정상인데도 피곤하다면, 그건 ‘정상 범위’ 안에서의 흐름 문제일 수 있습니다. 수면·혈당·염증·수분(순환)이 같이 흔들립니다.',
      bullets: [
        '오후에 급격히 처지면: 혈당 변동/카페인 패턴부터 봅니다.',
        '잠을 자도 개운치 않으면: 수면 질 + 미세염증을 같이 봅니다.',
        '치료는 보충이 아니라 ‘리듬 재설계’입니다.'
      ], url: '#' },
    { key: 'iv',       tag: '기능의학 · 수액',     hint: '회복 · 순환 · 밸런스',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png',
      title: '수액은 ‘기분’이 아니라 ‘환경’을 바꾸는 도구입니다.',
      p: '필요 없는 건 권하지 않습니다. 목적이 분명할 때만, 검사·증상·생활 패턴에 맞춰 조합합니다. 중요한 건 ‘한 번 맞고 끝’이 아니라 다시 무너지지 않게 만드는 설계입니다.',
      bullets: [
        '수분은 양이 아니라 ‘순환’입니다: 붓기·갈증·두통은 연결됩니다.',
        '항산화는 ‘감’이 아니라 ‘지표’로 접근합니다.',
        '치료는 짧게, 루틴은 길게 갑니다.'
      ], url: '#' },
    { key: 'cgm',      tag: '연속혈당측정',         hint: '식단 실험 · 행동 교정',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/02e428ec5f898.png',
      title: '내 몸의 ‘당 반응’을 직접 보면, 식습관은 자동으로 바뀝니다.',
      p: '같은 음식도 사람마다 반응이 다릅니다. 우리는 ‘정답 식단’ 대신, 형에게 맞는 최소 규칙을 뽑아줍니다.',
      bullets: [
        '반응을 보면: 유혹이 줄고 선택이 빨라집니다.',
        '실패하는 이유를 ‘의지’가 아니라 ‘패턴’으로 분해합니다.',
        '목표는 단기 감량이 아니라 유지 가능한 시스템입니다.'
      ], url: '#' },
    { key: 'weight',   tag: '비만치료',             hint: '요요 · 식욕 · 수면',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/95794c606f86f.png',
      title: '체중은 숫자보다 ‘되돌아오는 힘’을 꺾는 게 핵심입니다.',
      p: '약은 도구입니다. 몸이 왜 다시 돌아오는지(식욕·혈당·수면·스트레스)를 같이 잡아야 오래 갑니다.',
      bullets: [
        '식욕은 의지가 아니라 호르몬·수면·혈당의 합입니다.',
        '‘먹지 말기’가 아니라 ‘덜 끌리게’ 만드는 설계가 우선입니다.',
        '감량 이후 루틴이 진짜 치료입니다.'
      ], url: '#' },
    { key: 'faq',      tag: '자주 묻는 질문',       hint: '초진 · 검사 · 비용 흐름',
      iconUrl: 'https://cdn.imweb.me/upload/S20250626bc7495188971b/02e428ec5f898.png',
      title: '처음 오면 뭘 검사하고, 얼마나 걸리고, 어떻게 진행하나요?',
      p: '형이 궁금한 것부터 정리해드립니다. 비용·기간·순서·권유 기준을 ‘깔끔하게’ 공개하는 게 신뢰의 시작이라 생각합니다.',
      bullets: [
        '필요 없는 검사/치료는 권하지 않습니다.',
        '진단은 ‘정상/비정상’이 아니라 ‘흐름’으로 설명합니다.',
        '재방문을 줄이는 방향으로 설계합니다.'
      ], url: '#' }
  ];

  var ACT3_SERVICES = SERVICES.slice(0, 5);

  var BG_URL = 'https://cdn.imweb.me/upload/S20250626bc7495188971b/35a22e4230dab.jpg';

  // image-space (0..1) coords + card offsets, tuned to bg
  var HOTSPOT_DATA = {
    bottle:   { ix: 0.418, iy: 0.785, startOffsetVh: 0.46, cardDx: -88,  cardDy: -154,
                title: '치료는 한 번이 아니라 시스템입니다.',
                desc:  '좋아졌다가 다시 무너지면 끝난 치료가 아닙니다. 필요한 검사와 개입을 짧게 하고, 오래 가는 생활 루틴을 남겨야 합니다.' },
    water:    { ix: 0.528, iy: 0.792, startOffsetVh: 0.40, cardDx: -168, cardDy: -170,
                title: '물은 ‘보충’보다 ‘순환’입니다.',
                desc:  '물을 많이 마셔도 컨디션이 안 오르면, 그건 양보다 흐름의 문제일 수 있습니다. 수담의원은 수분을 늘리는 것보다 ‘돌게 만드는 것’을 먼저 봅니다.' },
    notebook: { ix: 0.780, iy: 0.872, startOffsetVh: 0.36, cardDx: -206, cardDy: -148,
                title: '기록은 ‘확인’이 아니라 ‘설계’입니다.',
                desc:  '같은 증상도 사람마다 패턴이 다릅니다. 수면, 식사, 혈당, 피로를 기록하면 무엇을 줄이고 무엇을 남길지 훨씬 명확해집니다.' },
    exercise: { ix: 0.235, iy: 0.705, startOffsetVh: 0.24, cardDx: 28,   cardDy: -118,
                title: '운동은 ‘강도’보다 ‘회복력’입니다.',
                desc:  '운동이 몸에 쌓이려면 수면, 혈당, 수분, 회복이 받쳐줘야 합니다. 수담의원은 버티는 운동보다 돌아오는 운동을 봅니다.' },
    beauty:   { ix: 0.665, iy: 0.405, startOffsetVh: 0.60, cardDx: 28,   cardDy: -118,
                title: '아름다움은 과잉이 아니라 정돈입니다.',
                desc:  '필요 없는 시술을 덧붙이지 않습니다. 수담의원은 과한 변화보다 본래의 균형을 해치지 않는 아름다움을 지향합니다.' }
  };

  var SYSTEM_STEPS = [
    { n: '①', label: '검사',     desc: '필요한 검사만, 목적이 분명한 검사만 합니다.' },
    { n: '②', label: '해석',     desc: '수치가 아니라 "흐름"을 읽습니다 (혈당·순환·염증·수면).' },
    { n: '③', label: '8주 개입', desc: '생활 루틴을 데이터 기반으로 고칩니다 (필요 시 CGM 포함).' },
    { n: '④', label: '재설계',   desc: '유지 가능한 형태로 줄이고, 반복 가능하게 만듭니다.' }
  ];

  // =========================================================
  // BOOT
  // =========================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  function boot() {
    var mount = document.getElementById('sdmHero5');
    if (!mount || mount.dataset.ready === '1') return;
    mount.dataset.ready = '1';

    injectStyles();
    document.documentElement.classList.add('sdm-bg-on');

    mount.innerHTML = renderHTML();

    var ctx = collectRefs(mount);
    initBelt(ctx);
    initHotspots(ctx);
    initServices(ctx);
    initScroll(ctx);
  }

  function injectStyles() {
    if (document.getElementById('sdm-aboutclinic-hero-styles')) return;
    var s = document.createElement('style');
    s.id = 'sdm-aboutclinic-hero-styles';
    s.textContent = STYLES;
    document.head.appendChild(s);
  }

  // The remaining logic is appended below.

  // =========================================================
  // RENDER (HTML scaffold)
  // =========================================================
  function renderHTML() {
    return [
      '<div class="sdm-stage">',
      '  <div class="sdm-beltArea">',
      '    <div class="sdm-beltViewport">',
      '      <div class="sdm-belt" id="sdmBelt5"></div>',
      '    </div>',
      '  </div>',
      '  <div class="sdm-beltVignette" aria-hidden="true"></div>',
      '',
      '  <button class="sdm-heroNav sdm-heroPrev" id="sdmHeroPrev" type="button" aria-label="이전 질문">',
      '    <svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6"/></svg>',
      '  </button>',
      '  <button class="sdm-heroNav sdm-heroNext" id="sdmHeroNext" type="button" aria-label="다음 질문">',
      '    <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6"/></svg>',
      '  </button>',
      '',
      '  <div class="sdm-scrollHint" aria-hidden="true">',
      '    <div class="sdm-hintPill"><span class="sdm-hintText">아래로 스크롤</span></div>',
      '    <svg class="sdm-hintChevron" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6"/></svg>',
      '    <div class="sdm-scrollDots" id="sdmScrollDots">',
      '      <span class="sdm-scrollDot is-on"></span>',
      '      <span class="sdm-scrollDot"></span>',
      '      <span class="sdm-scrollDot"></span>',
      '      <span class="sdm-scrollDot"></span>',
      '    </div>',
      '  </div>',
      '',
      '  <div class="sdm-hotLayer" id="sdmHotLayer" aria-hidden="true">',
      '    <div class="sdm-hotBackdrop"></div>',
      Object.keys(HOTSPOT_DATA).map(function (k) {
        var d = HOTSPOT_DATA[k];
        return [
          '    <button class="sdm-hot" data-hot="' + k + '" type="button" aria-label="' + escAttr(d.title) + '">',
          '      <span class="sdm-hotPlus"></span>',
          '    </button>',
          '    <div class="sdm-hotCard" data-hotcard="' + k + '">',
          '      <h4>' + escHtml(d.title) + '</h4>',
          '      <p>' + escHtml(d.desc) + '</p>',
          '    </div>'
        ].join('\n');
      }).join('\n'),
      '  </div>',
      '',
      '  <div class="sdm-layer is-on" id="sdmLayerHero">',
      '    <div class="sdm-center">',
      '      <div class="sdm-iconZone" id="sdmIconZone5"></div>',
      '      <div class="sdm-question" id="sdmQBox5">',
      '        <div class="sdm-lines">',
      '          <span class="sdm-line" id="sdmL1"></span>',
      '          <span class="sdm-line" id="sdmL2"></span>',
      '          <span class="sdm-line" id="sdmL3"></span>',
      '          <span class="sdm-line" id="sdmL4"></span>',
      '        </div>',
      '        <div class="sdm-ctaRow">',
      '          <a class="sdm-morepill" id="sdmMorePill" href="#" target="_self" rel="noopener">',
      '            <span class="sdm-pill-topic" id="sdmTopic">주제</span>',
      '            <span class="sdm-pill-divider" aria-hidden="true"></span>',
      '            <span class="sdm-pill-cta">더보기</span>',
      '            <span class="sdm-pill-arrow" aria-hidden="true">',
      '              <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="rgba(203,187,177,0.92)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '            </span>',
      '          </a>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '',
      '  <div class="sdm-layer" id="sdmLayerBrand">',
      '    <div class="sdm-brandStage">',
      '      <div class="sdm-brandPlain">',
      '        <div class="sdm-brandMainBlock" id="sdmBrandMainBlock">',
      '          <h2 class="sdm-brandBig"><span class="sdm-brandAccent">수담의원</span>과<br/>당신의 일상을<br/>검토하세요</h2>',
      '          <div class="sdm-brandInfoSlot">',
      '            <div class="sdm-brandInfo">',
      '              <p class="sdm-brandSub2">증상이 아니라 <b>혈당 · 순환 · 회복력</b>의 흐름을 봅니다.<br/>수치를 ‘고치는’ 게 아니라, 다시 무너지지 않게 <b>환경을 바꿉니다</b>.</p>',
      '              <p class="sdm-brandMicro2">필요한 검사만 · 목적이 분명한 치료만 · 유지 가능한 루틴까지</p>',
      '            </div>',
      '          </div>',
      '        </div>',
      '        <div class="sdm-brandPhilosophyBlock" id="sdmBrandPhilosophyBlock">',
      '          <h2 class="sdm-brandBig">건강을 바라보는,<br/>수담의원의 철학</h2>',
      '          <div class="sdm-brandInfoSlot">',
      '            <div class="sdm-brandPrompt">',
      '              <p class="sdm-brandPromptMain">오브제에 마우스를 올려 수담의원의 철학을 확인해보세요</p>',
      '              <p class="sdm-brandPromptSub">물 · 기록 · 치료 · 운동 · 아름다움에 대한 생각을 오브제별로 확인해보세요</p>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '',
      '  <div class="sdm-layer" id="sdmLayerServices">',
      '    <div class="sdm-servicesStage">',
      '      <div class="sdm-servicesWrap">',
      '        <div class="sdm-serviceRail">',
      '          <div style="display:flex; align-items:baseline; justify-content:space-between; gap:14px;">',
      '            <div style="color:rgba(203,187,177,0.92); font-weight:900; letter-spacing:-0.02em; font-size:16px;">자주 찾는 의료서비스</div>',
      '          </div>',
      '          <div class="sdm-serviceStrip" id="sdmServiceStrip"></div>',
      '        </div>',
      '        <div class="sdm-serviceGrid">',
      '          <div class="sdm-panel">',
      '            <span class="sdm-panelTag" id="sdmSvcTag">혈당 · 체중</span>',
      '            <h3 class="sdm-panelH" id="sdmSvcTitle">제목</h3>',
      '            <p class="sdm-panelP" id="sdmSvcP">설명</p>',
      '            <ul class="sdm-bul" id="sdmSvcBul"></ul>',
      '            <div style="height:14px"></div>',
      '            <a class="sdm-morepill" id="sdmSvcCta" href="#" target="_self" rel="noopener">',
      '              <span class="sdm-pill-topic" id="sdmSvcCtaTopic">항목</span>',
      '              <span class="sdm-pill-divider" aria-hidden="true"></span>',
      '              <span class="sdm-pill-cta">자세히</span>',
      '              <span class="sdm-pill-arrow" aria-hidden="true">',
      '                <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="rgba(203,187,177,0.92)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '              </span>',
      '            </a>',
      '          </div>',
      '          <div class="sdm-panel">',
      '            <h4 class="sdm-systemH">해결은 ‘한 번’이 아니라 ‘시스템’입니다</h4>',
      '            <p class="sdm-panelP" style="margin-top:10px;">증상만 보지 않고, 반복되는 원인을 좁혀 다시 설계합니다.</p>',
      '            <div class="sdm-steps">',
      SYSTEM_STEPS.map(function (s) {
        return '              <div class="sdm-step"><b>' + s.n + ' ' + escHtml(s.label) + '</b> ' + escHtml(s.desc) + '</div>';
      }).join('\n'),
      '            </div>',
      '            <div class="sdm-servicesCtaRow">',
      '              <a class="sdm-morepill" id="sdmSysCta" href="#" target="_self" rel="noopener">',
      '                <span class="sdm-pill-topic">수담의원</span>',
      '                <span class="sdm-pill-divider" aria-hidden="true"></span>',
      '                <span class="sdm-pill-cta">첫 방문 안내</span>',
      '                <span class="sdm-pill-arrow" aria-hidden="true">',
      '                  <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="rgba(203,187,177,0.92)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '                </span>',
      '              </a>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  // =========================================================
  // UTILITY
  // =========================================================
  function clamp(v, mn, mx) { return Math.max(mn, Math.min(mx, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escAttr(s) { return escHtml(s).replace(/"/g, '&quot;'); }

  function bindPillMouseFollow(el) {
    if (!el) return;
    var setXY = function (e) {
      var r = el.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width) * 100;
      var y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', x.toFixed(2) + '%');
      el.style.setProperty('--my', y.toFixed(2) + '%');
    };
    el.addEventListener('mousemove', setXY, { passive: true });
    el.addEventListener('mouseenter', setXY, { passive: true });
    el.addEventListener('mouseleave', function () {
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '50%');
    }, { passive: true });
  }

  function collectRefs(mount) {
    var $ = function (id) { return document.getElementById(id); };
    var ctx = {
      mount: mount,
      layerHero:     $('sdmLayerHero'),
      layerBrand:    $('sdmLayerBrand'),
      layerServices: $('sdmLayerServices'),
      belt:          $('sdmBelt5'),
      iconZone:      $('sdmIconZone5'),
      heroPrev:      $('sdmHeroPrev'),
      heroNext:      $('sdmHeroNext'),
      scrollDots:    Array.prototype.slice.call(document.querySelectorAll('#sdmScrollDots .sdm-scrollDot')),
      morePill:      $('sdmMorePill'),
      topicEl:       $('sdmTopic'),
      brandPlain:    document.querySelector('#sdmLayerBrand .sdm-brandPlain'),
      brandMain:     $('sdmBrandMainBlock'),
      brandPhil:     $('sdmBrandPhilosophyBlock'),
      hotLayer:      $('sdmHotLayer'),
      L1: $('sdmL1'), L2: $('sdmL2'), L3: $('sdmL3'), L4: $('sdmL4'),
      svcStrip:      $('sdmServiceStrip'),
      svcTag:        $('sdmSvcTag'),
      svcTitle:      $('sdmSvcTitle'),
      svcP:          $('sdmSvcP'),
      svcBul:        $('sdmSvcBul'),
      svcCta:        $('sdmSvcCta'),
      svcCtaTopic:   $('sdmSvcCtaTopic'),
      sysCta:        $('sdmSysCta')
    };
    bindPillMouseFollow(ctx.morePill);
    bindPillMouseFollow(ctx.svcCta);
    bindPillMouseFollow(ctx.sysCta);
    return ctx;
  }

  function syncScrollDots(ctx, idx) {
    if (!ctx.scrollDots || !ctx.scrollDots.length) return;
    ctx.scrollDots.forEach(function (d, i) { d.classList.toggle('is-on', i === idx); });
  }

  function setLayerState(ctx, onLayer) {
    [ctx.layerHero, ctx.layerBrand, ctx.layerServices].forEach(function (L) {
      if (!L) return;
      if (L === onLayer) { L.classList.add('is-on'); L.classList.remove('is-off'); }
      else { L.classList.remove('is-on'); L.classList.add('is-off'); }
    });
  }


  // =========================================================
  // ACT 1 — HERO BELT + TYPING + AUTO-ROTATE
  // =========================================================
  function initBelt(ctx) {
    var TYPE_SPEED = 120;
    var HOLD_AFTER_TYPED = 3200;
    var SHIFT_MS_AUTO = 260;

    // preload icons
    HERO_ITEMS.forEach(function (it) { (new Image()).src = it.iconUrl; });
    SERVICES.forEach(function (it) { (new Image()).src = it.iconUrl; });

    function makeCell(i) {
      var cell = document.createElement('div');
      cell.className = 'sdm-cell';
      var tile = document.createElement('div');
      tile.className = 'sdm-tile';
      tile.dataset.idx = String(i);
      var img = document.createElement('img');
      img.loading = 'eager';
      img.decoding = 'async';
      img.src = HERO_ITEMS[i].iconUrl;
      img.alt = '';
      tile.appendChild(img);
      cell.appendChild(tile);
      return cell;
    }
    function buildBelt() {
      ctx.belt.innerHTML = '';
      for (var r = 0; r < 6; r++) {
        for (var i = 0; i < HERO_ITEMS.length; i++) ctx.belt.appendChild(makeCell(i));
      }
    }
    buildBelt();

    var tmr = null, holdTmr = null;
    ctx._belt = { isAnimating: false, isPaused: false, inHero: true };

    function setLineHTML(el, text, showCaret) {
      var safe = escHtml(text);
      el.innerHTML = showCaret ? (safe + '<span class="sdm-ghost-caret">▍</span>') : safe;
    }
    function clearLines() { ctx.L1.textContent = ''; ctx.L2.textContent = ''; ctx.L3.textContent = ''; ctx.L4.textContent = ''; }

    function updateActiveTile() {
      var z = ctx.iconZone.getBoundingClientRect();
      var zx = z.left + z.width / 2, zy = z.top + z.height / 2;
      var tilesAll = Array.prototype.slice.call(ctx.belt.querySelectorAll('.sdm-tile'));
      var vw = window.innerWidth, best = null, bestD = Infinity;
      for (var i = 0; i < tilesAll.length; i++) {
        var t = tilesAll[i], r = t.getBoundingClientRect();
        if (r.right < -200 || r.left > vw + 200) continue;
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var d = Math.hypot(cx - zx, cy - zy);
        if (d < bestD) { bestD = d; best = t; }
      }
      var prev = ctx.belt.querySelector('.sdm-tile.is-active');
      if (best !== prev) {
        tilesAll.forEach(function (el) { el.classList.remove('is-active', 'is-next'); });
        if (best) {
          best.classList.add('is-active');
          var next = best.parentElement && best.parentElement.nextElementSibling
            ? best.parentElement.nextElementSibling.querySelector('.sdm-tile') : null;
          if (next) next.classList.add('is-next');
        }
      }
      return best ? (parseInt(best.dataset.idx || '0', 10) % HERO_ITEMS.length) : 0;
    }

    function updatePill(idx) {
      var item = HERO_ITEMS[idx];
      if (ctx.topicEl) ctx.topicEl.textContent = (item && item.topic) || '주제';
      if (ctx.morePill) ctx.morePill.href = (item && item.url) || '#';
    }

    function typeFourLines(lines, done) {
      clearTimeout(tmr); clearLines();
      var s = [String(lines[0] || ''), String(lines[1] || ''), String(lines[2] || ''), String(lines[3] || '')];
      var row = 0, col = 0;
      function step() {
        if (!ctx._belt.inHero) return;
        if (row === 0)      { setLineHTML(ctx.L1, s[0].slice(0, col), true); setLineHTML(ctx.L2, '', false); setLineHTML(ctx.L3, '', false); setLineHTML(ctx.L4, '', false); }
        else if (row === 1) { setLineHTML(ctx.L1, s[0], false); setLineHTML(ctx.L2, s[1].slice(0, col), true); setLineHTML(ctx.L3, '', false); setLineHTML(ctx.L4, '', false); }
        else if (row === 2) { setLineHTML(ctx.L1, s[0], false); setLineHTML(ctx.L2, s[1], false); setLineHTML(ctx.L3, s[2].slice(0, col), true); setLineHTML(ctx.L4, '', false); }
        else                { setLineHTML(ctx.L1, s[0], false); setLineHTML(ctx.L2, s[1], false); setLineHTML(ctx.L3, s[2], false); setLineHTML(ctx.L4, s[3].slice(0, col), true); }
        col++;
        if (col <= s[row].length) { tmr = setTimeout(step, TYPE_SPEED); return; }
        row++; col = 0;
        if (row > 3) {
          setLineHTML(ctx.L1, s[0], false); setLineHTML(ctx.L2, s[1], false); setLineHTML(ctx.L3, s[2], false); setLineHTML(ctx.L4, s[3], true);
          if (done) done();
          return;
        }
        tmr = setTimeout(step, TYPE_SPEED);
      }
      step();
    }

    function getStep() {
      var cell = ctx.belt.querySelector('.sdm-cell');
      if (!cell) return 120;
      return cell.getBoundingClientRect().width + 4;
    }

    function shiftLeftOne(ms) {
      return new Promise(function (resolve) {
        var first = ctx.belt.querySelector('.sdm-cell');
        if (!first) { resolve(); return; }
        var step = getStep();
        ctx._belt.isAnimating = true;
        var onEnd = function (ev) {
          if (ev.propertyName !== 'transform') return;
          ctx.belt.removeEventListener('transitionend', onEnd);
          ctx.belt.style.transition = 'none';
          ctx.belt.style.transform = 'translate3d(0,0,0)';
          ctx.belt.appendChild(first);
          requestAnimationFrame(function () { ctx._belt.isAnimating = false; resolve(); });
        };
        ctx.belt.addEventListener('transitionend', onEnd);
        ctx.belt.style.transition = 'transform ' + ms + 'ms cubic-bezier(.08,.98,.12,1)';
        ctx.belt.style.transform = 'translate3d(-' + step + 'px,0,0)';
      });
    }
    function shiftRightOne(ms) {
      return new Promise(function (resolve) {
        var last = ctx.belt.querySelector('.sdm-cell:last-child');
        if (!last) { resolve(); return; }
        var step = getStep();
        ctx._belt.isAnimating = true;
        ctx.belt.style.transition = 'none';
        ctx.belt.insertBefore(last, ctx.belt.firstChild);
        ctx.belt.style.transform = 'translate3d(-' + step + 'px,0,0)';
        requestAnimationFrame(function () {
          var onEnd = function (ev) {
            if (ev.propertyName !== 'transform') return;
            ctx.belt.removeEventListener('transitionend', onEnd);
            ctx.belt.style.transition = 'none';
            ctx.belt.style.transform = 'translate3d(0,0,0)';
            requestAnimationFrame(function () { ctx._belt.isAnimating = false; resolve(); });
          };
          ctx.belt.addEventListener('transitionend', onEnd);
          ctx.belt.style.transition = 'transform ' + ms + 'ms cubic-bezier(.08,.98,.12,1)';
          ctx.belt.style.transform = 'translate3d(0,0,0)';
        });
      });
    }

    ctx._belt.moveBy = function (dir) {
      if (ctx._belt.isAnimating) return Promise.resolve();
      clearTimeout(holdTmr);
      ctx._belt.isPaused = true;
      var p = dir > 0 ? shiftLeftOne(72) : shiftRightOne(72);
      return p.then(function () { renderHeroByActive(); ctx._belt.isPaused = false; });
    };

    function startAutoAdvance(delay) {
      clearTimeout(holdTmr);
      holdTmr = setTimeout(function () {
        if (!ctx._belt.inHero) return;
        if (ctx._belt.isPaused)    { startAutoAdvance(180); return; }
        if (ctx._belt.isAnimating) { startAutoAdvance(80);  return; }
        shiftLeftOne(SHIFT_MS_AUTO).then(renderHeroByActive);
      }, delay);
    }

    function renderHeroByActive() {
      if (!ctx._belt.inHero) return;
      var idx = updateActiveTile();
      updatePill(idx);
      typeFourLines(HERO_ITEMS[idx].q, function () { startAutoAdvance(HOLD_AFTER_TYPED); });
    }
    ctx._belt.renderHeroByActive = renderHeroByActive;
    ctx._belt.stop = function () { clearTimeout(tmr); clearTimeout(holdTmr); };

    if (ctx.morePill) {
      ctx.morePill.addEventListener('mouseenter', function () { ctx._belt.isPaused = true; clearTimeout(holdTmr); }, { passive: true });
      ctx.morePill.addEventListener('mouseleave', function () {
        clearTimeout(holdTmr);
        if (!ctx._belt.inHero) return;
        ctx._belt.isPaused = false;
        startAutoAdvance(HOLD_AFTER_TYPED);
      }, { passive: true });
    }
    if (ctx.heroPrev) ctx.heroPrev.addEventListener('click', function (e) { e.preventDefault(); ctx._belt.moveBy(-1); });
    if (ctx.heroNext) ctx.heroNext.addEventListener('click', function (e) { e.preventDefault(); ctx._belt.moveBy(1); });

    requestAnimationFrame(function () {
      updateActiveTile();
      requestAnimationFrame(function () { updateActiveTile(); setTimeout(renderHeroByActive, 60); });
    });
  }


  // =========================================================
  // ACT 2 — HOTSPOTS over fixed background
  // =========================================================
  function initHotspots(ctx) {
    var bgMeta = { w: 0, h: 0, ready: false };
    (function preload() {
      var img = new Image();
      img.onload = function () {
        bgMeta.w = img.naturalWidth || 0;
        bgMeta.h = img.naturalHeight || 0;
        bgMeta.ready = !!(bgMeta.w && bgMeta.h);
        positionAll();
      };
      img.src = BG_URL;
    })();

    function getBgCoverRect() {
      var vw = window.innerWidth || 1, vh = window.innerHeight || 1;
      if (!bgMeta.ready) return { left: 0, top: 0, width: vw, height: vh, fallback: true };
      var iw = bgMeta.w, ih = bgMeta.h;
      var s = Math.max(vw / iw, vh / ih);
      var w = iw * s, h = ih * s;
      return { left: (vw - w) / 2, top: (vh - h) / 2, width: w, height: h, fallback: false };
    }

    var hots = {};
    Object.keys(HOTSPOT_DATA).forEach(function (k) {
      var d = HOTSPOT_DATA[k];
      hots[k] = {
        meta: d,
        el:   ctx.hotLayer.querySelector('[data-hot="' + k + '"]'),
        card: ctx.hotLayer.querySelector('[data-hotcard="' + k + '"]')
      };
    });
    var activeKey = null;

    function positionOne(h) {
      var vh = window.innerHeight || 1;
      var rect = ctx.mount.getBoundingClientRect();
      var travel = Math.max(1, rect.height - vh);
      var brandStartPx = 0.12 * travel;
      var brandEndPx   = 0.78 * travel;
      var current = clamp(-rect.top, 0, travel);
      var brandScrollPx = clamp(current - brandStartPx, 0, brandEndPx - brandStartPx);

      var bg = getBgCoverRect();
      var d = h.meta;
      var px, pyBase;
      if (bg.fallback) { px = d.ix * (window.innerWidth || 1); pyBase = d.iy * vh; }
      else { px = bg.left + d.ix * bg.width; pyBase = bg.top + d.iy * bg.height; }

      var py = pyBase + (d.startOffsetVh || 0) * vh - brandScrollPx;
      if (h.el)   { h.el.style.left   = (px - 15) + 'px'; h.el.style.top   = (py - 15) + 'px'; }
      if (h.card) { h.card.style.left = (px + d.cardDx) + 'px'; h.card.style.top = (py + d.cardDy) + 'px'; }
    }
    function positionAll() { Object.keys(hots).forEach(function (k) { positionOne(hots[k]); }); }
    ctx._hots = { positionAll: positionAll };

    function close() {
      activeKey = null;
      if (ctx.hotLayer) ctx.hotLayer.classList.remove('is-focus');
      Object.keys(hots).forEach(function (k) {
        if (hots[k].el)   hots[k].el.classList.remove('is-active');
        if (hots[k].card) hots[k].card.classList.remove('is-show');
      });
    }
    function open(key) {
      close();
      activeKey = key;
      var h = hots[key];
      if (!h) return;
      if (ctx.hotLayer) ctx.hotLayer.classList.add('is-focus');
      if (h.el)   h.el.classList.add('is-active');
      if (h.card) h.card.classList.add('is-show');
    }
    ctx._hots.close = close;

    Object.keys(hots).forEach(function (key) {
      var h = hots[key];
      if (!h.el) return;
      var mClose = function (e) {
        if (h.el.contains(e.relatedTarget) || (h.card && h.card.contains(e.relatedTarget))) return;
        close();
      };
      h.el.addEventListener('mouseenter', function () { open(key); });
      h.el.addEventListener('focus',      function () { open(key); });
      h.el.addEventListener('mouseleave', mClose);
      h.el.addEventListener('click', function (e) { e.preventDefault(); if (activeKey === key) close(); else open(key); });
      if (h.card) {
        h.card.addEventListener('mouseenter', function () { open(key); });
        h.card.addEventListener('mouseleave', mClose);
      }
    });
    document.addEventListener('click', function (e) {
      if (!ctx.hotLayer || !ctx.hotLayer.contains(e.target)) close();
    }, true);
  }

  // =========================================================
  // ACT 3 — SERVICES
  // =========================================================
  function initServices(ctx) {
    function build() {
      ctx.svcStrip.innerHTML = '';
      ACT3_SERVICES.forEach(function (s, idx) {
        var el = document.createElement('div');
        el.className = 'sdm-sel' + (idx === 0 ? ' is-active' : '');
        el.dataset.idx = String(idx);
        el.style.setProperty('--wm', 'url("' + s.iconUrl + '")');
        el.innerHTML =
          '<div class="sdm-selTop"><div>' +
          '<p class="sdm-selTitle">' + escHtml(s.tag) + '</p>' +
          '<p class="sdm-selHint">'  + escHtml(s.hint) + '</p>' +
          '</div></div>';
        ctx.svcStrip.appendChild(el);
      });
    }
    function render(idx) {
      var s = ACT3_SERVICES[idx];
      if (!s) return;
      Array.prototype.slice.call(ctx.svcStrip.querySelectorAll('.sdm-sel'))
        .forEach(function (x) { x.classList.remove('is-active'); });
      var on = ctx.svcStrip.querySelector('.sdm-sel[data-idx="' + idx + '"]');
      if (on) on.classList.add('is-active');
      ctx.svcTag.textContent = s.tag;
      ctx.svcTitle.textContent = s.title;
      ctx.svcP.textContent = s.p;
      ctx.svcBul.innerHTML = '';
      s.bullets.forEach(function (b) {
        var li = document.createElement('li');
        li.innerHTML = '<span class="sdm-bulDot"></span><span>' + escHtml(b) + '</span>';
        ctx.svcBul.appendChild(li);
      });
      ctx.svcCta.href = s.url || '#';
      ctx.svcCtaTopic.textContent = s.tag;
    }
    build();
    render(0);
    ctx.svcStrip.addEventListener('click', function (e) {
      var t = e.target.closest('.sdm-sel');
      if (!t) return;
      render(parseInt(t.dataset.idx || '0', 10));
    }, true);
  }

  // =========================================================
  // SCROLL — snap engine + 3-act state machine
  // =========================================================
  function initScroll(ctx) {
    var SNAP_POINTS = [0.00, 0.20, 0.56, 0.999];
    var SNAP_ANIM_MS = 380;
    var snapLock = false, snapIndex = 0, snapAnimFrame = null, snapAnimToken = 0;
    var wheelAccum = 0, snapLastAt = 0, wheelResetTimer = null;

    function getTravel() { return Math.max(1, ctx.mount.offsetHeight - (window.innerHeight || 1)); }
    function getDocTop() { var r = ctx.mount.getBoundingClientRect(); return window.scrollY + r.top; }
    function getProg() {
      var r = ctx.mount.getBoundingClientRect();
      return clamp(((-r.top) / (r.height - (window.innerHeight || 1))), 0, 1);
    }
    function nearestSnap(p) {
      var best = 0, bd = Infinity;
      SNAP_POINTS.forEach(function (sp, i) { var d = Math.abs(sp - p); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    function isSectionActive() {
      var r = ctx.mount.getBoundingClientRect(), vh = window.innerHeight || 1;
      return r.top <= vh * 0.18 && r.bottom >= vh * 0.82;
    }
    function normalizeWheel(e) {
      var d = e.deltaY || 0;
      if (e.deltaMode === 1) d *= 16;
      if (e.deltaMode === 2) d *= window.innerHeight || 1;
      return d;
    }
    function releaseLock() {
      snapLock = false;
      document.documentElement.classList.remove('sdm-snap-lock');
      document.body.classList.remove('sdm-snap-lock');
    }
    function goSnap(idx) {
      var i = clamp(idx, 0, SNAP_POINTS.length - 1);
      var docTop = getDocTop(), travel = getTravel();
      var targetY = Math.round(docTop + SNAP_POINTS[i] * travel);
      var startY = window.scrollY || window.pageYOffset || 0;
      var dY = targetY - startY;
      snapIndex = i; wheelAccum = 0;
      if (Math.abs(dY) < 2) {
        if (snapAnimFrame) cancelAnimationFrame(snapAnimFrame);
        snapAnimFrame = null; releaseLock();
        window.scrollTo(0, targetY);
        return;
      }
      snapLock = true;
      document.documentElement.classList.add('sdm-snap-lock');
      document.body.classList.add('sdm-snap-lock');
      if (snapAnimFrame) cancelAnimationFrame(snapAnimFrame);
      var token = ++snapAnimToken;
      var t0 = performance.now();
      function tick(now) {
        if (token !== snapAnimToken) return;
        var t = clamp((now - t0) / SNAP_ANIM_MS, 0, 1);
        window.scrollTo(0, Math.round(startY + dY * easeOutCubic(t)));
        if (t < 1) { snapAnimFrame = requestAnimationFrame(tick); return; }
        snapAnimFrame = null;
        window.scrollTo(0, targetY);
        releaseLock();
      }
      snapAnimFrame = requestAnimationFrame(tick);
    }
    function shouldUseSnapState() { return isSectionActive() || snapLock; }

    function onWheel(e) {
      if (!isSectionActive()) return;
      var d = normalizeWheel(e);
      if (Math.abs(d) < 1) return;
      var prog = getProg();
      if (!snapLock) snapIndex = nearestSnap(prog);
      if (d < 0 && snapIndex === 0 && prog <= SNAP_POINTS[0] + 0.004) return;
      if (d > 0 && snapIndex === SNAP_POINTS.length - 1 && prog >= SNAP_POINTS[SNAP_POINTS.length - 1] - 0.002) return;
      e.preventDefault(); e.stopPropagation();
      if (snapLock) return;
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(function () { wheelAccum = 0; }, 110);
      wheelAccum += d;
      var now = Date.now();
      if (now - snapLastAt < 280) return;
      var threshold = Math.abs(d) > 40 ? 28 : 14;
      if (Math.abs(wheelAccum) < threshold) return;
      var dir = wheelAccum > 0 ? 1 : -1;
      wheelAccum = 0; snapLastAt = now;
      var nx = clamp(snapIndex + dir, 0, SNAP_POINTS.length - 1);
      if (nx !== snapIndex) goSnap(nx);
    }

    function applyAct(act, brandCopy) {
      var dotIdx = (act === 'hero') ? 0
                 : (act === 'brand' && brandCopy === 'main') ? 1
                 : (act === 'brand' && brandCopy === 'philosophy') ? 2 : 3;
      syncScrollDots(ctx, dotIdx);

      ctx.layerHero.style.opacity     = (act === 'hero') ? '1' : '0';
      ctx.layerBrand.style.opacity    = (act === 'brand') ? '1' : '0';
      ctx.layerServices.style.opacity = (act === 'services') ? '1' : '0';
      ctx.layerServices.style.transform = (act === 'services') ? 'translate3d(0,18px,0)' : 'translate3d(0,0,0)';

      if (act === 'hero')     setLayerState(ctx, ctx.layerHero);
      if (act === 'brand')    setLayerState(ctx, ctx.layerBrand);
      if (act === 'services') setLayerState(ctx, ctx.layerServices);

      var nowInHero = (act === 'hero');
      if (nowInHero && !ctx._belt.inHero) {
        ctx._belt.inHero = true; ctx._belt.isPaused = false;
        ctx._belt.renderHeroByActive();
      }
      if (!nowInHero && ctx._belt.inHero) {
        ctx._belt.inHero = false; ctx._belt.stop(); ctx._belt.isPaused = true;
      }

      if (ctx.brandPlain) {
        var bY = 0, bO = 1;
        if (act === 'brand' && brandCopy === 'main')        { bY = 0;   bO = 1; }
        else if (act === 'brand' && brandCopy === 'philosophy') { bY = -36; bO = 1; }
        else if (act === 'services')                         { bY = -56; bO = 0; }
        ctx.brandPlain.style.transform = 'translate3d(0,' + bY + 'px,0)';
        ctx.brandPlain.style.opacity = String(bO);
      }
      if (ctx.brandMain) ctx.brandMain.style.opacity = (act === 'brand' && brandCopy === 'main') ? '1' : '0';
      if (ctx.brandPhil) ctx.brandPhil.style.opacity = (act === 'brand' && brandCopy === 'philosophy') ? '1' : '0';

      if (!(act === 'brand' && brandCopy === 'philosophy')) {
        if (ctx._hots) ctx._hots.close();
      } else if (ctx._hots) {
        ctx._hots.positionAll();
      }
    }

    function onScroll() {
      var prog = getProg();
      if (!snapLock && isSectionActive()) snapIndex = nearestSnap(prog);

      var act = 'hero', brandCopy = 'main';
      if (shouldUseSnapState()) {
        var i = snapIndex;
        if (i <= 0)        { act = 'hero'; }
        else if (i === 1)  { act = 'brand'; brandCopy = 'main'; }
        else if (i === 2)  { act = 'brand'; brandCopy = 'philosophy'; }
        else               { act = 'services'; }
      } else {
        if (prog < 0.20)      { act = 'hero'; }
        else if (prog < 0.56) { act = 'brand'; brandCopy = 'main'; }
        else if (prog < 0.93) { act = 'brand'; brandCopy = 'philosophy'; }
        else                  { act = 'services'; }
      }

      var changed = ctx.mount.dataset.act !== act || ctx.mount.dataset.brandCopy !== brandCopy;
      if (changed) {
        ctx.mount.dataset.act = act;
        ctx.mount.dataset.brandCopy = brandCopy;
        applyAct(act, brandCopy);
      } else if (act === 'brand' && brandCopy === 'philosophy' && ctx._hots) {
        ctx._hots.positionAll();
      }
    }

    var pending = false;
    function onScrollThrottled() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; onScroll(); });
    }
    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    window.addEventListener('resize', onScrollThrottled, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    onScroll();
  }

})();
