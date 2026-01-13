const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const SRC_DIR = path.join(__dirname, "src");
const OUT_DIR = path.join(__dirname, "public");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith(".js"));

if (files.length === 0) {
  console.error("❌ src 폴더에 js 파일이 없습니다.");
  process.exit(1);
}

files.forEach(file => {
  const srcPath = path.join(SRC_DIR, file);
  const outPath = path.join(OUT_DIR, file);

  const input = fs.readFileSync(srcPath, "utf8");

  const output = JavaScriptObfuscator.obfuscate(input, {
  compact: true,

  stringArray: true,
  stringArrayThreshold: 0.75,
  rotateStringArray: true,

  // 🔒 A단계 강화 옵션
  splitStrings: true,
  splitStringsChunkLength: 5,

  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,

  disableConsoleOutput: false
}).getObfuscatedCode();

  fs.writeFileSync(outPath, output, "utf8");
  console.log(`✅ build 완료: ${file}`);
});

console.log("🎉 전체 빌드 완료");
