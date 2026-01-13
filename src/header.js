(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var html = `
      <div style="
        position:sticky;
        top:0;
        z-index:99999;
        background:#ffffff;
        border-bottom:1px solid #e5e5e5;
        padding:12px;
        font-size:14px;
        text-align:center;
      ">
        ✅ 수담 공용 헤더 테스트 (VS Code → Vercel 예정)
      </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", html);
  });
})();
