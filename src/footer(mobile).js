/* ✅ SOODAM CUSTOM FOOTER (MOBILE ONLY) v1.1
   Converted from footer_mobile.txt to a standalone JS file:
   - Removes <style>/<script>/<div> wrappers
   - Injects CSS via JS so you can deploy as src/footer(mobile).js
*/
(function(){
  function sdmViewportW(){
    try{
      return (window.top && window.top.innerWidth) ? window.top.innerWidth : window.innerWidth;
    }catch(e){ return window.innerWidth; }
  }
  if (sdmViewportW() > 860) return;

  if (window.__SDM_FOOTER_MOBILE_V11__) return;
  window.__SDM_FOOTER_MOBILE_V11__ = true;

  var SD_FOOTER_M_CSS = `:root{
  --sdFM-bg:#4A423D;
  --sdFM-text:#F5F2ED;
  --sdFM-sub:rgba(245,242,237,.72);
  --sdFM-dim:rgba(245,242,237,.50);
  --sdFM-line:rgba(245,242,237,.12);

  --sdFM-max:720px;
  --sdFM-padX:18px;

  --sdFM-title:16px;
  --sdFM-body:13px;
  --sdFM-meta:11.6px;

  --sdFM-radius:16px;
  --sdFM-cardBg:rgba(255,255,255,.04);
  --sdFM-cardBd:rgba(255,255,255,.08);

  --sdFM-ctaH:54px;

  /* ✅ 프로필 사진 높이(모바일) */
  --sdFM-profPhotoH:132px;
}

#sdmFM_mount{ display:none; }

#sdFooterM{
  background:var(--sdFM-bg);
  color:var(--sdFM-text);
  width:100%;
  position:relative;
  overflow:hidden;
  padding:28px 0 40px;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
#sdFooterM:before{
  content:"";
  position:absolute; inset:-140px;
  background:
    radial-gradient(ellipse at 50% 10%, rgba(255,255,255,.05), transparent 58%),
    radial-gradient(ellipse at 16% 82%, rgba(0,0,0,.18), transparent 58%),
    radial-gradient(ellipse at 85% 70%, rgba(0,0,0,.12), transparent 58%);
  pointer-events:none;
}

#sdFooterM .sdFM-inner{
  position:relative;
  max-width:var(--sdFM-max);
  margin:0 auto;
  padding:0 var(--sdFM-padX);
}

/* 헤더 */
#sdFooterM .sdFM-brand{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-bottom:14px;
}
#sdFooterM .sdFM-title{
  font-size:18px;
  font-weight:700;
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-sub{
  font-size:12.6px;
  color:var(--sdFM-sub);
  letter-spacing:-0.01em;
  line-height:1.45;
}

/* CTA 그리드 (큰 버튼) */
#sdFooterM .sdFM-ctaGrid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin:14px 0 18px;
}
#sdFooterM .sdFM-ctaBtn{
  height:var(--sdFM-ctaH);
  border-radius:14px;
  background:rgba(255,255,255,.035);
  border:1px solid rgba(255,255,255,.10);
  text-decoration:none;
  color:var(--sdFM-text);
  display:flex;
  align-items:center;
  gap:10px;
  padding:0 12px;
  transition:transform .18s ease, background .18s ease, border-color .18s ease, opacity .18s ease;
  opacity:.95;
}
#sdFooterM .sdFM-ctaBtn:active{ transform:scale(.985); }
#sdFooterM .sdFM-ctaBtn:hover{ background:rgba(255,255,255,.055); border-color:rgba(255,255,255,.14); opacity:1; }

#sdFooterM .sdFM-ico{
  width:32px; height:32px;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.10);
  overflow:hidden;
  flex:0 0 auto;
}
#sdFooterM .sdFM-ico img{
  width:16px; height:16px;
  display:block;
  filter:brightness(1.05) contrast(1.05);
}
#sdFooterM .sdFM-ctaTxt{
  display:flex;
  flex-direction:column;
  gap:2px;
  line-height:1.15;
  min-width:0;
}
#sdFooterM .sdFM-ctaTxt .t{
  font-size:12.6px;
  font-weight:650;
  letter-spacing:-0.01em;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
#sdFooterM .sdFM-ctaTxt .s{
  font-size:11.4px;
  color:rgba(245,242,237,.62);
  letter-spacing:-0.01em;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

/* 아코디언 */
#sdFooterM .sdFM-acc{
  border-radius:var(--sdFM-radius);
  border:1px solid var(--sdFM-cardBd);
  background:var(--sdFM-cardBg);
  overflow:visible;
  box-shadow:0 16px 42px rgba(0,0,0,.18);
  margin-bottom:12px;
}
#sdFooterM .sdFM-accBtn{
  width:100%;
  border:0;
  background:transparent;
  color:var(--sdFM-text);
  padding:14px 14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  cursor:pointer;
}
#sdFooterM .sdFM-accBtn .left{
  display:flex;
  flex-direction:column;
  gap:4px;
  text-align:left;
}
#sdFooterM .sdFM-accBtn .toggleIcon{
  transition:transform .18s ease, opacity .18s ease;
  opacity:.9;
  font-size:18px;
  line-height:1;
  transform:translateY(-1px);
}
#sdFooterM .sdFM-accBtn[aria-expanded="true"] .toggleIcon{
  transform:rotate(90deg);
}

#sdFooterM .sdFM-accBtn .h{
  font-size:13.4px;
  font-weight:700;
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-accBtn .d{
  font-size:11.6px;
  color:rgba(245,242,237,.62);
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-accPanel{
  overflow:hidden;
  border-top:1px solid rgba(255,255,255,.08);

  height:0;
  transition:height .22s ease;
  will-change:height;
}

#sdFooterM .sdFM-accPanel .pad{
  padding:14px;
}

/* 지도 */
#sdFooterM .sdFM-mapBox{
  border-radius:14px;
  overflow:hidden;
  background:rgba(0,0,0,.14);
  border:1px solid rgba(255,255,255,.08);
}
#sdFooterM #sdFM_naverMap{
  width:100%;
  height:260px; /* ✅ 모바일 지도 크게 */
  background:rgba(0,0,0,.12);
}
#sdFooterM .sdFM-mapMeta{
  padding:12px 12px 12px;
  font-size:12px;
  line-height:1.6;
  color:rgba(245,242,237,.78);
}
#sdFooterM .sdFM-mapMeta strong{
  color:rgba(245,242,237,.94);
  font-weight:750;
}
#sdFooterM .sdFM-mapActions{
  margin-top:10px;
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
#sdFooterM .sdFM-miniBtn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  height:34px;
  padding:0 12px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.045);
  color:rgba(245,242,237,.92);
  text-decoration:none;
  font-size:12px;
  letter-spacing:-0.01em;
  opacity:.95;
}
#sdFooterM .sdFM-miniBtn:active{ transform:scale(.99); }

/* 소개 */
#sdFooterM .sdFM-ph{
  font-size:var(--sdFM-body);
  line-height:1.85;
  color:rgba(245,242,237,.86);
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-ph .head{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  align-items:baseline;
  margin-bottom:10px;
}
#sdFooterM .sdFM-ph .name{
  font-weight:800;
  color:rgba(245,242,237,.96);
  font-size:13.3px;
}
#sdFooterM .sdFM-ph .subline{
  font-size:12.2px;
  font-weight:650;
  color:rgba(245,242,237,.78);
}
#sdFooterM .sdFM-ph .miniList{
  margin-top:12px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.08);
  background:rgba(255,255,255,.03);
}

/* 참여학회: 2열 3행 */
#sdFooterM .miniList .miniListGrid{
  display:grid;
  grid-template-columns:1fr 1fr; /* ✅ 2열 */
  gap:6px 18px;                  /* 행 / 열 간격 */
  margin-top:10px;
  padding-left:18px;             /* 약력 li 들여쓰기 맞춤 */
}

#sdFooterM .miniList .miniListGrid li{
  list-style:disc;               /* 약력과 동일 */
  font-size:12.4px;
  line-height:1.35;
  letter-spacing:-0.01em;
  color:rgba(245,242,237,.78);
}

#sdFooterM .sdFM-ph ul{
  margin:0;
  padding-left:16px;
  color:rgba(245,242,237,.78);
}
#sdFooterM .sdFM-ph li{ margin:4px 0; }

/* ✅ 프로필 사진 2장 (지도 박스 결) */
#sdFooterM .sdFM-profPhotoRow{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px;
  margin:2px 0 12px;
}
#sdFooterM .sdFM-profPhoto{
  height:var(--sdFM-profPhotoH);
  border-radius:14px;
  overflow:hidden;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 14px 40px rgba(0,0,0,.18);
}
#sdFooterM .sdFM-profPhoto img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
  object-position:center 35%;
  filter:saturate(1.02) contrast(1.03);
}

/* 서비스 (모바일: 카테고리만 보여주고, 펼치면 링크 리스트) */
#sdFooterM .sdFM-svcCat{
  display:flex;
  flex-direction:column;
  gap:10px;
}
#sdFooterM .sdFM-svcItem{
  border-radius:14px;
  border:1px solid rgba(255,255,255,.08);
  background:rgba(255,255,255,.03);
  overflow:hidden;
}
#sdFooterM .sdFM-svcBtn{
  width:100%;
  border:0;
  background:transparent;
  color:var(--sdFM-text);
  padding:12px 12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  cursor:pointer;
}
#sdFooterM .sdFM-svcBtn .t{
  font-size:13px;
  font-weight:750;
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-svcBtn .r{
  font-size:18px;
  opacity:.85;
  transition:transform .18s ease;
}
#sdFooterM .sdFM-svcBtn[aria-expanded="true"] .r{ transform:rotate(90deg); }

#sdFooterM .sdFM-svcPanel{
  height:0;
  overflow:hidden;
  transition:height .22s ease;
  will-change:height;
  border-top:1px solid rgba(255,255,255,.08);
}

#sdFooterM .sdFM-links{
  padding:10px 12px 12px;
  display:flex;
  flex-wrap:wrap;
  gap:8px 10px;
}
#sdFooterM .sdFM-link{
  display:inline-block;
  color:rgba(245,242,237,.82);
  text-decoration:none;
  font-size:12.2px;
  letter-spacing:-0.01em;
  padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  background:rgba(255,255,255,.03);
  opacity:.92;
}
#sdFooterM .sdFM-link:active{ transform:scale(.99); }
#sdFooterM .sdFM-link:hover{ opacity:1; color:rgba(245,242,237,.96); }

/* 메타 */
#sdFooterM .sdFM-meta{
  margin-top:14px;
  font-size:var(--sdFM-meta);
  color:rgba(245,242,237,.62);
  line-height:1.7;
  letter-spacing:-0.01em;
}
#sdFooterM .sdFM-meta .line{ margin-top:4px; }
#sdFooterM .sdFM-meta .k{ opacity:.78; margin-right:8px; }
#sdFooterM .sdFM-copy{
  margin-top:10px;
  font-size:11px;
  color:var(--sdFM-dim);
  letter-spacing:-0.01em;
}

/* ✅ MOBILE ONLY */
@media (min-width: 861px){
  #sdFooterM{ display:none !important; }
}`;


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

  function ready(fn){
    if (document.readyState === 'complete' || document.readyState === 'interactive') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    var doc = findDozDoc();
    var win = doc.defaultView || window;

     // ✅ Inject CSS (from footer_mobile.txt) as <style> to ensure this file works standalone
     try{
       if (!doc.getElementById('sdFooterM_style')){
         var st = doc.createElement('style');
         st.id = 'sdFooterM_style';
         st.type = 'text/css';
         st.appendChild(doc.createTextNode(SD_FOOTER_M_CSS));
         (doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(st);
       }
     }catch(e){}


    if (doc.getElementById('sdFooterM')) return;

    /* =========================
       ✅ CONFIG (PC v9 기반)
    ========================= */
    var NAVER_NCP_KEY_ID = "bjduigrnb7";
    var GEOCODE_QUERY = "서울특별시 영등포구 여의대방로 69길 19, 수담의원";

    var ICO_BLOG  = "https://cdn.imweb.me/upload/S20250626bc7495188971b/3bcc53cb95ce0.png";
    var ICO_INSTA = "https://cdn.imweb.me/upload/S20250626bc7495188971b/e3610f0aedf9c.png";
    var ICO_NAVER_RESERVE = "https://cdn.imweb.me/upload/S20250626bc7495188971b/ce6ea9fa4d24e.png";
    var ICO_NAVER_TALK    = "https://cdn.imweb.me/upload/S20250626bc7495188971b/73a6434ec447b.png";

    var LINKS = {
      naverReserve: "https://naver.me/5iTdhw37",
      talk: "https://talk.naver.com/profile/w4emvp",
      blog: "https://blog.naver.com/soodam_clinic",
      instaDM: "https://www.instagram.com/soodam_clinic",
      // ✅ “길찾기/지도앱” 버튼용 (네이버지도 검색 URL)
      naverMapSearch: "https://map.naver.com/v5/search/" + encodeURIComponent("수담의원")
    };

    var FALLBACK_LAT = 37.5219;
    var FALLBACK_LNG = 126.9246;

    /* ✅ 의료진 사진 2장 */
    var DOC_PHOTO_1 = "https://cdn.imweb.me/upload/S20250626bc7495188971b/a9f97eea57a50.png";
    var DOC_PHOTO_2 = "https://cdn.imweb.me/upload/S20250626bc7495188971b/2424e2da13e55.png";

    // ✅ 모바일 소개는 “짧고 단단하게”
    var PROFILE_HTML = `
  <div class="sdFM-ph">
    <div class="sdFM-profPhotoRow" aria-label="Doctor Photos">
      <div class="sdFM-profPhoto" aria-label="Doctor Photo 1">
        <img src="${DOC_PHOTO_1}" alt="박우진 원장 사진 1" loading="lazy" decoding="async">
      </div>
      <div class="sdFM-profPhoto" aria-label="Doctor Photo 2">
        <img src="${DOC_PHOTO_2}" alt="박우진 원장 사진 2" loading="lazy" decoding="async">
      </div>
    </div>

    <div class="head">
      <span class="name">박우진 원장</span>
      <span class="subline">가정의학과 전문의</span>
    </div>

    <div style="color:rgba(245,242,237,.84);">
      건강은 ‘어느 날 갑자기’ 무너지는 게 아니라, 일상에서 조금씩 쌓입니다.
      수담의원은 미용을 포함한 일상의 문제를 의과학적 원리로 쉽게 설명하고,
      본질적인 해법을 함께 찾는 진료를 지향합니다.
    </div>

    <div class="miniList">
      <!-- 약력 -->
      <ul>
        <li>강남세브란스병원 가정의학과 전문의 수료</li>
        <li>전, 인천성모병원 응급의료센터 내과전담교수</li>
        <li>현, 강남세브란스병원 가정의학과 외래교수</li>
      </ul>

      <!-- 참여학회 (✅ 같은 박스 안, 2열 3행) -->
      <ul class="miniListGrid">
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

    // ✅ 모바일 서비스: “카테고리 접기/펼치기” (가로스크롤 제거)
    var SERVICES = [
      { cat:"젊음유지 클리닉", items:[
        {label:"자가혈 줄기세포치료", url:"#"},
        {label:"NAD+ 항노화치료", url:"#"},
        {label:"항산화 클리닉", url:"#"},
        {label:"Running with Doc", url:"#"},
        {label:"건강기능식품 처방", url:"#"}
      ]},
      { cat:"혈당다이어트", items:[
        {label:"혈당습관개선 다이어트", url:"#"},
        {label:"연속혈당측정기 처방", url:"#"},
        {label:"10일간의 집중혈당관리", url:"#"},
        {label:"대사밸런스 수액치료", url:"#"},
        {label:"만성질환관리 첫시작", url:"#"}
      ]},
      { cat:"기능의학 혈액검사", items:[
        {label:"항산화·노화 검사", url:"#"},
        {label:"비타민·미네랄 유전자", url:"#"},
        {label:"음식물반응 검사", url:"#"},
        {label:"NK 세포 활성도", url:"#"},
        {label:"생활피로검진", url:"#"},
        {label:"중금속·독성 검사", url:"#"},
        {label:"소변 유기산 검사", url:"#"},
        {label:"위험·혈뇌누수 검사", url:"#"}
      ]},
      { cat:"맞춤 주사+수액치료", items:[
        {label:"항산화치료", url:"#"},
        {label:"에너지·항산화 종합치료", url:"#"},
        {label:"면역활성 항산화치료", url:"#"},
        {label:"암환자 면역주사", url:"#"},
        {label:"여성 항노화치료", url:"#"},
        {label:"난임부부 치료", url:"#"},
        {label:"오메가-3 균형", url:"#"}
      ]},
      { cat:"아플 때 찾는 수액치료", items:[
        {label:"감기몸살 수액치료", url:"#"},
        {label:"장염설사 수액치료", url:"#"},
        {label:"숙취증상 개선치료", url:"#"},
        {label:"간회복 프로그램", url:"#"},
        {label:"피부염 개선치료", url:"#"},
        {label:"빈혈치료", url:"#"}
      ]},
      { cat:"리프팅", items:[
        {label:"정밀 초음파 리프팅(리프테라2)", url:"#"},
        {label:"고출력 고주파 리프팅(올페이스)", url:"#"},
        {label:"무통증 고주파 리프팅(G-WAVE)", url:"#"}
      ]},
      { cat:"스킨부스터", items:[
        {label:"줄기세포 피부이식", url:"#"},
        {label:"리쥬란", url:"#"},
        {label:"쥬베룩", url:"#"},
        {label:"코리아", url:"#"},
        {label:"릴리이드", url:"#"},
        {label:"키오머2", url:"#"},
        {label:"쥬베룩볼륨", url:"#"}
      ]},
      { cat:"보톡스·기타시술", items:[
        {label:"초음파 가이드 보톡스", url:"#"},
        {label:"주름·스킨보톡스", url:"#"},
        {label:"점·판상·비립종 제거", url:"#"},
        {label:"프락셀", url:"#"},
        {label:"이중턱(V-OLET)", url:"#"}
      ]},
      { cat:"에스테틱", items:[
        {label:"여드름 특화 솔루션", url:"#"},
        {label:"프리미엄 스킨케어", url:"#"},
        {label:"여드름 일상관리", url:"#"},
        {label:"에스테틱 기기관리", url:"#"}
      ]}
    ];

    function buildServicesHTML(){
      return SERVICES.map(function(group, idx){
        var key = "svc_" + idx;
        var links = group.items.map(function(it){
          return '<a class="sdFM-link" href="'+(it.url||'#')+'">'+it.label+'</a>';
        }).join('');

        return (
          '<div class="sdFM-svcItem">' +
            '<button class="sdFM-svcBtn" type="button" data-svc="'+key+'" aria-expanded="false">' +
              '<span class="t">'+group.cat+'</span>' +
              '<span class="r">›</span>' +
            '</button>' +
            '<div class="sdFM-svcPanel" data-panel="'+key+'">' +
              '<div class="sdFM-links">'+links+'</div>' +
            '</div>' +
          '</div>'
        );
      }).join('');
    }

    /* =========================
       ✅ HTML Inject
    ========================= */
    var html = `
      <footer id="sdFooterM" aria-label="Soodam Clinic Footer (Mobile)">
        <div class="sdFM-inner">

          <div class="sdFM-brand">
            <div class="sdFM-title">여의도 수담의원</div>
            <div class="sdFM-sub">아름다울 일상을 진료합니다.</div>
          </div>

          <div class="sdFM-ctaGrid" aria-label="Quick Actions">
            <a class="sdFM-ctaBtn" href="${LINKS.naverReserve}" target="_blank" rel="noopener">
              <span class="sdFM-ico"><img src="${ICO_NAVER_RESERVE}" alt=""></span>
              <span class="sdFM-ctaTxt">
                <span class="t">네이버 예약</span>
                <span class="s">가장 빠른 확정</span>
              </span>
            </a>

            <a class="sdFM-ctaBtn" href="${LINKS.talk}" target="_blank" rel="noopener">
              <span class="sdFM-ico"><img src="${ICO_NAVER_TALK}" alt=""></span>
              <span class="sdFM-ctaTxt">
                <span class="t">네이버 톡톡</span>
                <span class="s">간단 문의</span>
              </span>
            </a>

            <a class="sdFM-ctaBtn" href="${LINKS.instaDM}" target="_blank" rel="noopener">
              <span class="sdFM-ico"><img src="${ICO_INSTA}" alt=""></span>
              <span class="sdFM-ctaTxt">
                <span class="t">인스타 DM</span>
                <span class="s">영업시간 내 응답</span>
              </span>
            </a>

            <a class="sdFM-ctaBtn" href="${LINKS.blog}" target="_blank" rel="noopener">
              <span class="sdFM-ico"><img src="${ICO_BLOG}" alt=""></span>
              <span class="sdFM-ctaTxt">
                <span class="t">건강컬럼</span>
                <span class="s">블로그 기록</span>
              </span>
            </a>
          </div>

          <!-- ✅ 위치안내(지도) : 모바일에서는 제일 중요. 크게 보여줌 -->
          <div class="sdFM-acc" data-acc="map">
            <button class="sdFM-accBtn" type="button" aria-expanded="false">
              <span class="left">
                <span class="h">위치안내</span>
                <span class="d">지도 · 길찾기 · 주차/역 정보</span>
              </span>
              <span class="toggleIcon">›</span>
            </button>
            <div class="sdFM-accPanel">
              <div class="pad">
                <div class="sdFM-mapBox">
                  <div id="sdFM_naverMap" aria-label="Naver Map"></div>
                  <div class="sdFM-mapMeta">
                    <div><strong>수담의원</strong></div>
                    <div style="margin-top:6px;">서울특별시 영등포구 여의대방로 69길 19</div>
                    <div style="margin-top:3px;">전화: 010-8706-7696</div>
                    <div style="margin-top:8px;opacity:.72;font-size:11.6px;line-height:1.55;">
                      · 자주식 주차가능 (일방통행 도로입니다. 진행 방향 기준 좌측에 주차장 출입구가 있습니다.)<br>· 여의도역/여의나루역(9·5) 도보 10분<br>· 샛강역(9·신림선) 도보 7분
                    </div>

                    <div class="sdFM-mapActions">
                      <a class="sdFM-miniBtn" href="${LINKS.naverMapSearch}" target="_blank" rel="noopener">네이버지도 열기</a>
                      <a class="sdFM-miniBtn" href="${LINKS.naverReserve}" target="_blank" rel="noopener">바로 예약</a>
                      <a class="sdFM-miniBtn" href="${LINKS.talk}" target="_blank" rel="noopener">톡톡 문의</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ✅ 의료진/철학 : 모바일은 짧게 + 사진 2장 -->
          <div class="sdFM-acc" data-acc="ph">
            <button class="sdFM-accBtn" type="button" aria-expanded="false">
              <span class="left">
                <span class="h">의료진소개 · 진료철학</span>
                <span class="d">진료철학 · 약력 · 참여학회</span>
              </span>
              <span class="toggleIcon">›</span>
            </button>
            <div class="sdFM-accPanel">
              <div class="pad">${PROFILE_HTML}</div>
            </div>
          </div>

          <!-- ✅ 의료서비스 : 모바일은 탐색(접기/펼치기) -->
          <div class="sdFM-acc" data-acc="sv">
            <button class="sdFM-accBtn" type="button" aria-expanded="false">
              <span class="left">
                <span class="h">전체의료서비스</span>
                <span class="d">카테고리별로 빠르게 찾기</span>
              </span>
              <span class="toggleIcon">›</span>
            </button>
            <div class="sdFM-accPanel">
              <div class="pad">
                <div class="sdFM-svcCat">${buildServicesHTML()}</div>
              </div>
            </div>
          </div>

          <div class="sdFM-meta">
            <div class="line"><span class="k">FAX</span>070-8733-7007</div>
            <div class="line"><span class="k">병원번호</span>010-8706-7696</div>
            <div class="line"><span class="k">대표자</span>박우진</div>
            <div class="line"><span class="k">사업자등록번호</span>755-37-01269</div>
            <div class="line"><span class="k">진료과목</span>가정의학과 · 내과 · 피부과</div>
            <div class="line"><span class="k">업태</span>건강기능식품판매업 · 의료기기판매업</div>
          </div>

          <div class="sdFM-copy">© 2025 Soodam Clinic. All rights reserved.</div>
        </div>
      </footer>
    `;

    var body = doc.getElementById('doz_body') || doc.body;
    var wrap = doc.createElement('div');
    wrap.innerHTML = html;
    body.appendChild(wrap.firstElementChild);

    var footer = doc.getElementById('sdFooterM');

    /* =========================
       ✅ Accordion behavior
       - map: 펼칠 때만 지도 로드
       - 한 번에 여러 개 열려도 OK (모바일은 스크롤 탐색)
    ========================= */
    function setPanel(btn, panel, open){
  if (!btn || !panel) return;

  btn.setAttribute('aria-expanded', open ? 'true' : 'false');

  // ✅ 애니 중복 방지
  if (panel.__animHandler){
    panel.removeEventListener('transitionend', panel.__animHandler);
    panel.__animHandler = null;
  }

  // 현재 픽셀 높이 확보
  var curH = panel.getBoundingClientRect().height;

  if (open){
    // 닫힌 상태(0)에서 열기
    panel.style.display = 'block';

    // 1) 시작 높이 고정
    panel.style.height = curH + 'px';

    // 2) 다음 프레임에 목표 높이로
    requestAnimationFrame(function(){
      var target = panel.scrollHeight;
      panel.style.height = target + 'px';
    });

    // 3) 애니 끝나면 auto로 복귀 → 이후 내용 변화는 즉시 자동 반영(=완벽)
    var onEnd = function(e){
      if (e.propertyName !== 'height') return;
      panel.style.height = 'auto';
      panel.removeEventListener('transitionend', onEnd);
      panel.__animHandler = null;
    };
    panel.__animHandler = onEnd;
    panel.addEventListener('transitionend', onEnd);

  } else {
    // 열려있을 때 auto일 수 있음 → 닫기 전에 px로 고정
    if (getComputedStyle(panel).height === 'auto' || panel.style.height === 'auto'){
      panel.style.height = panel.scrollHeight + 'px';
    } else {
      panel.style.height = curH + 'px';
    }

    // 다음 프레임에 0으로
    requestAnimationFrame(function(){
      panel.style.height = '0px';
    });
  }
}


    function bindAcc(root){
  var btn = root.querySelector('.sdFM-accBtn');
  var panel = root.querySelector('.sdFM-accPanel');
  if (!btn || !panel) return;

  // 초기 닫힘
  panel.style.display = 'block';
  panel.style.height = '0px';
  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', function(){
    var isOpen = btn.getAttribute('aria-expanded') === 'true';

    // ✅ 다른 아코디언 전부 닫기 (height 방식이라 꼬임 없음)
    footer.querySelectorAll('.sdFM-acc').forEach(function(other){
      if (other === root) return;
      var ob = other.querySelector('.sdFM-accBtn');
      var op = other.querySelector('.sdFM-accPanel');
      if (ob && op) setPanel(ob, op, false);
    });

    // 내 패널 토글
    setPanel(btn, panel, !isOpen);

    // 지도는 열릴 때만 1회 init
    if (!isOpen && root.getAttribute('data-acc') === 'map'){
      initMapFlowOnce();
    }
  });
}
footer.querySelectorAll('.sdFM-acc').forEach(bindAcc);


/* =========================
   ✅ Services category toggles
   - 여러개 동시 오픈 가능
   - 열고/닫을 때 부모(전체의료서비스 acc) 높이 재계산 → 내용 안 잘림
========================= */

function bindSvc(){
  var svcBtns = footer.querySelectorAll('.sdFM-svcBtn');

  svcBtns.forEach(function(b){
    var key = b.getAttribute('data-svc');
    var panel = footer.querySelector('.sdFM-svcPanel[data-panel="'+key+'"]');
    if (!panel) return;

    // 초기 닫힘
    b.setAttribute('aria-expanded', 'false');
    panel.style.height = '0px';

    b.addEventListener('click', function(){
      var isOpen = b.getAttribute('aria-expanded') === 'true';
      var willOpen = !isOpen;

      b.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

      // ✅ 애니 중복 방지
      if (panel.__animHandler){
        panel.removeEventListener('transitionend', panel.__animHandler);
        panel.__animHandler = null;
      }

      var curH = panel.getBoundingClientRect().height;

      if (willOpen){
        panel.style.height = curH + 'px';
        requestAnimationFrame(function(){
          panel.style.height = panel.scrollHeight + 'px';
        });

        var onEnd = function(e){
          if (e.propertyName !== 'height') return;
          panel.style.height = 'auto';
          panel.removeEventListener('transitionend', onEnd);
          panel.__animHandler = null;
        };
        panel.__animHandler = onEnd;
        panel.addEventListener('transitionend', onEnd);

      } else {
        // auto면 px로 고정 후 0으로
        if (getComputedStyle(panel).height === 'auto' || panel.style.height === 'auto'){
          panel.style.height = panel.scrollHeight + 'px';
        } else {
          panel.style.height = curH + 'px';
        }
        requestAnimationFrame(function(){
          panel.style.height = '0px';
        });
      }
    });
  });
}
bindSvc();

    /* =========================
       ✅ NAVER MAPS (Lazy load)
    ========================= */
    var mapInited = false;

    function loadNaverMaps(cb){
      try{
        if (win.naver && win.naver.maps && win.naver.maps.Map) return cb();
      }catch(e){}

      if (win.__SDM_NAVERMAP_LOADING_M__) {
        var tt = setInterval(function(){
          try{
            if (win.naver && win.naver.maps && win.naver.maps.Map){
              clearInterval(tt); cb();
            }
          }catch(e){}
        }, 80);
        setTimeout(function(){ try{ clearInterval(tt); }catch(e){} }, 9000);
        return;
      }
      win.__SDM_NAVERMAP_LOADING_M__ = true;

      win.__sdmFooterMobileInitMap__ = function(){ cb(); };

      var s = doc.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src =
        "https://oapi.map.naver.com/openapi/v3/maps.js" +
        "?ncpKeyId=" + encodeURIComponent(NAVER_NCP_KEY_ID) +
        "&submodules=geocoder" +
        "&callback=__sdmFooterMobileInitMap__";

      win.navermap_authFailure = function(){
        var el = doc.getElementById('sdFM_naverMap');
        if (el) {
          el.innerHTML = '<div style="padding:14px;font-size:12px;line-height:1.6;opacity:.75;">지도 인증 실패.<br>ncpKeyId/도메인 등록을 확인해주세요.</div>';
        }
      };

      (doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(s);
    }

    function initNaverMap(){
      var el = doc.getElementById('sdFM_naverMap');
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

      try{
        if (win.naver.maps.Service && win.naver.maps.Service.geocode){
          win.naver.maps.Service.geocode({ query: GEOCODE_QUERY }, function(status, response){
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
      }catch(e){}
    }

    function initMapFlowOnce(){
      if (mapInited) return;
      mapInited = true;

      if (!NAVER_NCP_KEY_ID) {
        var el = doc.getElementById('sdFM_naverMap');
        if (el) el.innerHTML = '<div style="padding:14px;font-size:12px;opacity:.75;">ncpKeyId가 비어있습니다.</div>';
        return;
      }
      loadNaverMaps(initNaverMap);
    }

    /* ✅ 하단이 로드된 후, 레이아웃 변화(폰/이미지) 대비해서 패널 높이 재계산 */
    function refreshOpenPanels(){
      footer.querySelectorAll('.sdFM-acc').forEach(function(acc){
        var btn = acc.querySelector('.sdFM-accBtn');
        var panel = acc.querySelector('.sdFM-accPanel');
        if (!btn || !panel) return;
        if (btn.getAttribute('aria-expanded') === 'true'){
          panel.style.height = 'auto';
}
      });

      footer.querySelectorAll('.sdFM-svcBtn').forEach(function(b){
        if (b.getAttribute('aria-expanded') !== 'true') return;
        var key = b.getAttribute('data-svc');
        var panel = footer.querySelector('.sdFM-svcPanel[data-panel="'+key+'"]');
        if (panel) panel.style.height = 'auto';
});
    }
    setTimeout(refreshOpenPanels, 400);
    win.addEventListener('resize', function(){ setTimeout(refreshOpenPanels, 120); }, { passive:true });
  });
})();
