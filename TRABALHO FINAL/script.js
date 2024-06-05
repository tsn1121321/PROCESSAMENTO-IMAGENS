document.getElementById('upload1').addEventListener('change', function (e) {
  loadImage(e.target.files[0], 'canvas1', 'box1');
});

document.getElementById('upload2').addEventListener('change', function (e) {
  loadImage(e.target.files[0], 'canvas2', 'box2');
});

function loadImage(file, canvasId, boxId) {
  const reader = new FileReader();
  reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
          const canvas = document.getElementById(canvasId);
          const ctx = canvas.getContext('2d');
          const fixedWidth = 300;
          const fixedHeight = 300;
          canvas.width = fixedWidth;
          canvas.height = fixedHeight;
          ctx.clearRect(0, 0, fixedWidth, fixedHeight);
          ctx.drawImage(img, 0, 0, fixedWidth, fixedHeight);
          document.getElementById(boxId).style.backgroundImage = `url(${canvas.toDataURL()})`;
      };
      img.src = event.target.result;
  }
  reader.readAsDataURL(file);
}

function sumImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("Carregue as duas imagens!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      imageDataResult.data[i] = Math.min(imageData1.data[i] + imageData2.data[i], 255);     // Red
      imageDataResult.data[i + 1] = Math.min(imageData1.data[i + 1] + imageData2.data[i + 1], 255); // Green
      imageDataResult.data[i + 2] = Math.min(imageData1.data[i + 2] + imageData2.data[i + 2], 255); // Blue
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function subtractImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("Carregue as duas imagens!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      imageDataResult.data[i] = Math.max(imageData1.data[i] - imageData2.data[i], 0);     // Red
      imageDataResult.data[i + 1] = Math.max(imageData1.data[i + 1] - imageData2.data[i + 1], 0); // Green
      imageDataResult.data[i + 2] = Math.max(imageData1.data[i + 2] - imageData2.data[i + 2], 0); // Blue
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function multiImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("Carregue as duas imagens!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      imageDataResult.data[i] = Math.min((imageData1.data[i] * imageData2.data[i]) / 255, 255);     // Red
      imageDataResult.data[i + 1] = Math.min((imageData1.data[i + 1] * imageData2.data[i + 1]) / 255, 255); // Green
      imageDataResult.data[i + 2] = Math.min((imageData1.data[i + 2] * imageData2.data[i + 2]) / 255, 255); // Blue
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function divImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("Carregue as duas imagens!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      imageDataResult.data[i] = Math.min(Math.max((imageData1.data[i] / (imageData2.data[i] || 1)) * 255, 0), 255);     // Red
      imageDataResult.data[i + 1] = Math.min(Math.max((imageData1.data[i + 1] / (imageData2.data[i + 1] || 1)) * 255, 0), 255); // Green
      imageDataResult.data[i + 2] = Math.min(Math.max((imageData1.data[i + 2] / (imageData2.data[i + 2] || 1)) * 255, 0), 255); // Blue
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function applyNegativeEffect() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < imageData.data.length; i += 4) {
      // Invertendo o valor de cada canal de cor (R, G, B)
      imageData.data[i] = 255 - imageData.data[i];         // Red
      imageData.data[i + 1] = 255 - imageData.data[i + 1]; // Green
      imageData.data[i + 2] = 255 - imageData.data[i + 2]; // Blue
      // Mantendo o canal alfa (transparência) inalterado
  }

  // Desenhando a imagem negativa no canvas
  ctx.putImageData(imageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function flipImageLR() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.putImageData(imageData, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(-1, 1);
  ctx.drawImage(tempCanvas, -canvas.width, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function flipImageUD() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.putImageData(imageData, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(1, -1); // Invertendo o eixo y
  ctx.drawImage(tempCanvas, 0, -canvas.height); // Desenhando a imagem invertida
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}


function concatenateImages() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.height !== canvas2.height) {
      alert("As imagens têm alturas diferentes. A concatenação horizontal não é possível.");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth * 2;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');

  // Desenha a primeira imagem na metade esquerda do canvas resultante
  ctxResult.putImageData(imageData1, 0, 0);

  // Desenha a segunda imagem na metade direita do canvas resultante
  ctxResult.putImageData(imageData2, fixedWidth, 0);

  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function blendImages() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const alpha = 0.5; // Peso da primeira imagem (varie de 0 a 1)

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("Erro ao redimensionar as imagens!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Combinando os canais de cor usando uma média ponderada
      imageDataResult.data[i] = alpha * imageData1.data[i] + (1 - alpha) * imageData2.data[i];         // Red
      imageDataResult.data[i + 1] = alpha * imageData1.data[i + 1] + (1 - alpha) * imageData2.data[i + 1]; // Green
      imageDataResult.data[i + 2] = alpha * imageData1.data[i + 2] + (1 - alpha) * imageData2.data[i + 2]; // Blue
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function limiarizacaoImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const threshold = 128; // Limiar (threshold) para a limiarização

  for (let i = 0; i < imageData.data.length; i += 4) {
      // Converte a cor para tons de cinza usando a média dos canais RGB
      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      // Aplica a limiarização
      const binary = gray < threshold ? 0 : 255;
      // Define o valor do canal de cor para o valor binário calculado
      imageData.data[i] = binary;         // Red
      imageData.data[i + 1] = binary; // Green
      imageData.data[i + 2] = binary; // Blue
      // Mantém o canal alfa (transparência) inalterado
  }

  // Desenha a imagem limiarizada no canvas
  ctx.putImageData(imageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function histogramaImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const histogram = new Array(256).fill(0); // Array para armazenar as contagens de tons de cinza

  // Calcula o histograma
  for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      histogram[Math.floor(gray)]++;
  }

  // Encontra o valor máximo no histograma para normalização
  const maxCount = Math.max(...histogram);

  // Desenha o histograma no canvas
  const histogramCanvas = document.createElement('canvas');
  const histogramCtx = histogramCanvas.getContext('2d');
  histogramCanvas.width = 256; // Largura fixa para o histograma
  histogramCanvas.height = 150; // Altura fixa para o histograma
  histogramCtx.fillStyle = '#ffffff';
  histogramCtx.fillRect(0, 0, histogramCanvas.width, histogramCanvas.height);

  for (let i = 0; i < histogram.length; i++) {
      const height = (histogram[i] / maxCount) * histogramCanvas.height;
      histogramCtx.fillStyle = '#000000';
      histogramCtx.fillRect(i, histogramCanvas.height - height, 1, height);
  }

  // Exibe o histograma no console
  console.log(histogram);

  // Exibe o histograma no HTML
  document.getElementById('box3').style.backgroundImage = `url(${histogramCanvas.toDataURL()})`;
}

function checkBinary(imageData) {
  // Verifica se a imagem é binária (preto e branco) ou não
  for (let i = 0; i < imageData.data.length; i += 4) {
      if (imageData.data[i] !== 0 && imageData.data[i] !== 255) {
          return false;
      }
  }
  return true;
}

function applyBinaryThreshold(imageData, threshold) {
  // Converte a imagem para binária (preto e branco) usando um limiar
  for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      const binary = gray < threshold ? 0 : 255;
      imageData.data[i] = binary;
      imageData.data[i + 1] = binary;
      imageData.data[i + 2] = binary;
  }
}

function applyNOT(imageData) {
  // Aplica a operação lógica NOT (NÃO) na imagem binária
  for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i] = 255 - imageData.data[i];
      imageData.data[i + 1] = 255 - imageData.data[i + 1];
      imageData.data[i + 2] = 255 - imageData.data[i + 2];
  }
}

function andImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("As imagens não têm as mesmas dimensões (MxN)!");
      return;
  }

  if (!checkBinary(imageData1) || !checkBinary(imageData2)) {
      alert("As imagens não são binárias. Por favor, converta-as para binárias antes de aplicar as operações lógicas!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica AND (E) entre os pixels das duas imagens
      imageDataResult.data[i] = imageData1.data[i] & imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] & imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] & imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function orImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("As imagens não têm as mesmas dimensões (MxN)!");
      return;
  }

  if (!checkBinary(imageData1) || !checkBinary(imageData2)) {
      alert("As imagens não são binárias. Por favor, converta-as para binárias antes de aplicar as operações lógicas!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica OR (OU) entre os pixels das duas imagens
      imageDataResult.data[i] = imageData1.data[i] | imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] | imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] | imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function notImagesBoxes() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas.width !== fixedWidth || canvas.height !== fixedHeight) {
      alert("As imagens não têm as mesmas dimensões (MxN)!");
      return;
  }

  if (!checkBinary(imageData)) {
      alert("A imagem não é binária. Por favor, converta-a para binária antes de aplicar a operação lógica NOT!");
      return;
  }

  applyNOT(imageData);

  ctx.putImageData(imageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function xorImagesBoxes() {
  const canvas1 = document.getElementById('canvas1');
  const ctx1 = canvas1.getContext('2d');
  const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  const fixedWidth = 300;
  const fixedHeight = 300;

  if (canvas1.width !== fixedWidth || canvas1.height !== fixedHeight ||
      canvas2.width !== fixedWidth || canvas2.height !== fixedHeight) {
      alert("As imagens não têm as mesmas dimensões (MxN)!");
      return;
  }

  if (!checkBinary(imageData1) || !checkBinary(imageData2)) {
      alert("As imagens não são binárias. Por favor, converta-as para binárias antes de aplicar as operações lógicas!");
      return;
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica XOR entre os pixels das duas imagens
      imageDataResult.data[i] = imageData1.data[i] ^ imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] ^ imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] ^ imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function applyMinimumFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = minimumFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function minimumFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a filtragem por mínimo

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let min = 255;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[j + 1][i + 1];
                  const value = imageData.data[idx];
                  if (value * weight < min) {
                      min = value * weight;
                  }
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = min;
          newData[idx + 1] = min;
          newData[idx + 2] = min;
      }
  }

  return newData;
}

function applyMaximumFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = maximumFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function maximumFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a filtragem por máximo

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let max = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[j + 1][i + 1];
                  const value = imageData.data[idx];
                  if (value * weight > max) {
                      max = value * weight;
                  }
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = max;
          newData[idx + 1] = max;
          newData[idx + 2] = max;
      }
  }

  return newData;
}

function applyAverageFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = averageFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function averageFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a filtragem por média

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let sum = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[j + 1][i + 1];
                  sum += imageData.data[idx] * weight;
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = sum / 9; // Divisão pela soma dos pesos do kernel
          newData[idx + 1] = sum / 9;
          newData[idx + 2] = sum / 9;
      }
  }

  return newData;
}

function applyMedianFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = medianFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function medianFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a filtragem por mediana

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {

        const values = [];
        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                const idx = ((y + j) * width + (x + i)) * 4;
                const weight = kernel[j + 1][i + 1];
                const value = imageData.data[idx] * weight;
                values.push(value);
            }
        }
        values.sort((a, b) => a - b); // Ordena os valores
        const medianIdx = Math.floor(values.length / 2);
        const idx = (y * width + x) * 4;
        newData[idx] = values[medianIdx];
        newData[idx + 1] = values[medianIdx];
        newData[idx + 2] = values[medianIdx];
    }
}

return newData;
}

function applyOrderFilter() {
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const newData = orderFilter(imageData, canvas.width, canvas.height);

ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function orderFilter(imageData, width, height) {
const newData = new Uint8ClampedArray(imageData.data);
const kernel = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]; // Elemento estruturante (kernel) para a filtragem por ordem

for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
        const values = [];
        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                const idx = ((y + j) * width + (x + i)) * 4;
                const weight = kernel[j + 1][i + 1];
                const value = imageData.data[idx] * weight;
                values.push(value);
            }
        }
        values.sort((a, b) => a - b); // Ordena os valores
        const idx = (y * width + x) * 4;
        newData[idx] = values[4]; // O quinto valor é o valor central, que corresponde ao pixel atual
        newData[idx + 1] = values[4];
        newData[idx + 2] = values[4];
    }
}

return newData;
}

function medianFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const radius = 1; // Raio da vizinhança (3x3)

  for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
          const values = [];
          for (let j = -radius; j <= radius; j++) {
              for (let i = -radius; i <= radius; i++) {
                  const nx = Math.min(Math.max(x + i, 0), width - 1);
                  const ny = Math.min(Math.max(y + j, 0), height - 1);
                  const idx = (ny * width + nx) * 4;
                  const value = (imageData.data[idx] + imageData.data[idx + 1] + imageData.data[idx + 2]) / 3;
                  values.push(value);
              }
          }
          values.sort((a, b) => a - b);
          const medianIndex = Math.floor(values.length / 2);
          const medianValue = values[medianIndex];
          const idx = (y * width + x) * 4;
          newData[idx] = medianValue;
          newData[idx + 1] = medianValue;
          newData[idx + 2] = medianValue;
      }
  }

  return newData;
}

function applysuavizacaoFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = medianFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function gaussianBlur(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const weights = [1, 2, 1, 2, 4, 2, 1, 2, 1]; // Filtro gaussiano 3x3

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let r = 0,
              g = 0,
              b = 0;
          let weightSum = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = weights[(j + 1) * 3 + (i + 1)];
                  r += imageData.data[idx] * weight;
                  g += imageData.data[idx + 1] * weight;
                  b += imageData.data[idx + 2] * weight;
                  weightSum += weight;
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = r / weightSum;
          newData[idx + 1] = g / weightSum;
          newData[idx + 2] = b / weightSum;
      }
  }

  return newData;
}

function applyGaussianBlur() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = gaussianBlur(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function applyPrewittFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = prewittFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function prewittFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernelX = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
  const kernelY = [-1, -1, -1, 0, 0, 0, 1, 1, 1];

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let gradientX = 0;
          let gradientY = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weightX = kernelX[(j + 1) * 3 + (i + 1)];
                  const weightY = kernelY[(j + 1) * 3 + (i + 1)];
                  gradientX += imageData.data[idx] * weightX;
                  gradientY += imageData.data[idx] * weightY;
              }
          }
          const idx = (y * width + x) * 4;
          const magnitude = Math.sqrt(gradientX * gradientX + gradientY * gradientY);
          newData[idx] = magnitude;
          newData[idx + 1] = magnitude;
          newData[idx + 2] = magnitude;
      }
  }

  return newData;
}

function applySobelFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = sobelFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function sobelFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const kernelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let gradientX = 0;
          let gradientY = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weightX = kernelX[(j + 1) * 3 + (i + 1)];
                  const weightY = kernelY[(j + 1) * 3 + (i + 1)];
                  gradientX += imageData.data[idx] * weightX;
                  gradientY += imageData.data[idx] * weightY;
              }
          }
          const idx = (y * width + x) * 4;
          const magnitude = Math.sqrt(gradientX * gradientX + gradientY * gradientY);
          newData[idx] = magnitude;
          newData[idx + 1] = magnitude;
          newData[idx + 2] = magnitude;
      }
  }

  return newData;
}

function applyLaplacianFilter() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = laplacianFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function laplacianFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0]; // Filtro Laplaciano

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let sum = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[(j + 1) * 3 + (i + 1)];
                  sum += imageData.data[idx] * weight;
              }
          }
          const idx = (y * width + x) * 4;
          const magnitude = Math.abs(sum); // Valor absoluto para realçar as bordas
          newData[idx] = magnitude;
          newData[idx + 1] = magnitude;
          newData[idx + 2] = magnitude;
      }
  }

  return newData;
}

function applyDilation() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = dilation(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function dilation(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a dilatação

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let max = 0;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[j + 1][i + 1];
                  const value = imageData.data[idx];
                  if (value * weight > max) {
                      max = value * weight;
                  }
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = max;
          newData[idx + 1] = max;
          newData[idx + 2] = max;
      }
  }

  return newData;
}

function applyErosion() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = erosion(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function erosion(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const kernel = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
  ]; // Elemento estruturante (kernel) para a erosão

  for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
          let min = 255;
          for (let j = -1; j <= 1; j++) {
              for (let i = -1; i <= 1; i++) {
                  const idx = ((y + j) * width + (x + i)) * 4;
                  const weight = kernel[j + 1][i + 1];
                  const value = imageData.data[idx];
                  if (value * weight < min) {
                      min = value * weight;
                  }
              }
          }
          const idx = (y * width + x) * 4;
          newData[idx] = min;
          newData[idx + 1] = min;
          newData[idx + 2] = min;
      }
  }

  return newData;
}

function applyOpening() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = erosion(imageData, canvas.width, canvas.height);
  const openedData = dilation(new ImageData(newData, canvas.width, canvas.height), canvas.width, canvas.height);

  ctx.putImageData(new ImageData(openedData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function applyClosing() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = dilation(imageData, canvas.width, canvas.height);
  const closedData = erosion(new ImageData(newData, canvas.width, canvas.height), canvas.width, canvas.height);

  ctx.put
  ctx.putImageData(new ImageData(closedData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function applyContour() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const erodedData = erosion(imageData, canvas.width, canvas.height);

  const contourData = subtractImageData(imageData, erodedData);

  ctx.putImageData(new ImageData(contourData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function subtractImageData(imageData1, imageData2) {
  const newData = new Uint8ClampedArray(imageData1.data);

  for (let i = 0; i < newData.length; i += 4) {
      newData[i] = Math.abs(imageData1.data[i] - imageData2.data[i]);
      newData[i + 1] = Math.abs(imageData1.data[i + 1] - imageData2.data[i + 1]);
      newData[i + 2] = Math.abs(imageData1.data[i + 2] - imageData2.data[i + 2]);
  }

  return newData;
}

function saveImage() {
  const box3 = document.getElementById('box3');
  const image = box3.style.backgroundImage.slice(5, -2);
  const link = document.createElement('a');
  link.href = image;
  link.download = 'result.png';
  link.click();
}
