import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(question, ans => {
    rl.close();
    resolve(ans);
  }));
}

function extractInnerSvg(content) {
  const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (match) {
    return match[1].trim();
  }
  return content.trim();
}

function extractViewBox(content) {
  const match = content.match(/viewBox="([^"]+)"/i);
  if (match) {
    return match[1];
  }
  return '0 0 300 165';
}

async function main() {
  const inputPath = await ask('Introduce el path de la carpeta con los SVGs (ej: ./src/assets/stickman_svg): ');
  const outputName = await ask('Introduce el nombre de tu archivo de sprite (ej: stickman-sprite.svg): ');
  const inputDir = path.join(__dirname, inputPath || './src/assets/stickman_svg');
  const outputFile = path.join(__dirname, 'public', outputName || 'stickman-sprite.svg');

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));
  let symbols = '';

  files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const inner = extractInnerSvg(svgContent);
    const viewBox = extractViewBox(svgContent);
    const id = path.basename(file, '.svg');
    symbols += `  <symbol id="${id}" viewBox="${viewBox}">\n${inner}\n  </symbol>\n`;
  });

  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols}</svg>\n`;
  fs.writeFileSync(outputFile, sprite, 'utf8');
  console.log(`Sprite generado en ${outputFile} con ${files.length} símbolos.`);
}

main(); 