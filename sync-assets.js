/**
 * Figma書き出し → public/ 同期スクリプト
 * 使い方: npm run sync
 *
 * Figmaで画像を書き出したら ../image/ フォルダに保存し、
 * このスクリプトを実行すると public/ に反映されます。
 */

const fs = require("fs");
const path = require("path");

const IMAGE_DIR = path.join(__dirname, "..", "image");
const PUBLIC_DIR = path.join(__dirname, "public");

// Figma書き出しファイル名 → public/のファイル名
const ASSETS = [
  { src: "S__59359234.jpg", dest: "hero.jpg", label: "ヒーロー画像" },
];

let updated = 0;
let skipped = 0;

ASSETS.forEach(({ src, dest, label }) => {
  const srcPath = path.join(IMAGE_DIR, src);
  const destPath = path.join(PUBLIC_DIR, dest);

  if (!fs.existsSync(srcPath)) {
    console.log(`⚠  スキップ: ${label} (${src} が見つかりません)`);
    skipped++;
    return;
  }

  fs.copyFileSync(srcPath, destPath);
  console.log(`✓  更新: ${label}  ${src} → public/${dest}`);
  updated++;
});

console.log(`\n完了 — 更新: ${updated}件 / スキップ: ${skipped}件`);
if (updated > 0) {
  console.log("ブラウザで Ctrl+Shift+R を押して確認してください。");
}
