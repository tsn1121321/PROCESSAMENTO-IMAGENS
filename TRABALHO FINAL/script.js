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

  // Criação do canvas temporário
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');

  // Transferência dos dados da imagem para o canvas temporário
  tempCtx.putImageData(imageData, 0, 0);

  // Limpeza do canvas original
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Escala horizontal invertida
  ctx.save(); // Salva o estado atual do contexto
  ctx.scale(-1, 1);
  ctx.drawImage(tempCanvas, -canvas.width, 0); // Desenho da imagem espelhada horizontalmente
  ctx.restore(); // Restaura o estado anterior do contexto

  // Definição da imagem de fundo do elemento 'box3'
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function flipImageUD() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Criação do canvas temporário
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');

  // Transferência dos dados da imagem para o canvas temporário
  tempCtx.putImageData(imageData, 0, 0);

  // Limpeza do canvas original
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Escala vertical invertida
  ctx.save(); // Salva o estado atual do contexto
  ctx.scale(1, -1);
  ctx.drawImage(tempCanvas, 0, -canvas.height); // Desenho da imagem espelhada verticalmente
  ctx.restore(); // Restaura o estado anterior do contexto

  // Definição da imagem de fundo do elemento 'box3'
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

function andImages() {
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

  // Verifica se as imagens são binárias e converte, se necessário
  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); // Aplicando um limiar de 128 para converter para binário
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128); // Aplicando um limiar de 128 para converter para binário
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica AND (E) entre os pixels das duas imagens binárias
      imageDataResult.data[i] = imageData1.data[i] & imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] & imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] & imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function orImages() {
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

  // Verifica se as imagens são binárias e converte, se necessário
  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); // Aplicando um limiar de 128 para converter para binário
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128); // Aplicando um limiar de 128 para converter para binário
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica OR (OU) entre os pixels das duas imagens binárias
      imageDataResult.data[i] = imageData1.data[i] | imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] | imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] | imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function applyNOT(imageData) {
  const newData = new Uint8ClampedArray(imageData.data.length);

  for (let i = 0; i < imageData.data.length; i += 4) {
    newData[i] = 255 - imageData.data[i];       // Inverte o valor de Red
    newData[i + 1] = 255 - imageData.data[i + 1]; // Inverte o valor de Green
    newData[i + 2] = 255 - imageData.data[i + 2]; // Inverte o valor de Blue
    newData[i + 3] = imageData.data[i + 3];       // Mantém o valor de Alpha (transparência)
  }

  return newData;
}


function notImages() {
  const canvas = document.getElementById('canvas1');
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2D context not available');
    return;
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) {
    console.error('Failed to get image data');
    return;
  }

  // Verifica se a imagem é binária e converte, se necessário
  if (!checkBinary(imageData)) {
    applyBinaryThreshold(imageData, 128); // Aplicando um limiar de 128 para converter para binário
  }

  const newData = applyNOT(imageData);

  // Cria um novo Uint8ClampedArray para o novo imageData
  const newImageData = new ImageData(new Uint8ClampedArray(newData), canvas.width, canvas.height);

  // Define o novo imageData no contexto do canvas
  ctx.putImageData(newImageData, 0, 0);

  // Atualiza o estilo de fundo do elemento com ID 'box3' com a nova imagem
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}



function xorImages() {
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

  // Verifica se as imagens são binárias e converte, se necessário
  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); // Aplicando um limiar de 128 para converter para binário
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128); // Aplicando um limiar de 128 para converter para binário
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
      // Aplica a operação lógica XOR entre os pixels das duas imagens binárias
      imageDataResult.data[i] = imageData1.data[i] ^ imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] ^ imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] ^ imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; // Alpha
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}


function minimoImages() {
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

function maximoImages() {
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

function mediaImages() {
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

function medianaImages() {
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

function ordemImages() {
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

function suavizacaoImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = medianFilter(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function gaussianBlur(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data.length);
  const weights = [1, 2, 1, 2, 4, 2, 1, 2, 1]; // Filtro gaussiano 3x3
  const weightSum = weights.reduce((a, b) => a + b, 0);

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let r = 0, g = 0, b = 0;

      for (let j = -1; j <= 1; j++) {
        for (let i = -1; i <= 1; i++) {
          const idx = ((y + j) * width + (x + i)) * 4;
          const weight = weights[(j + 1) * 3 + (i + 1)];
          r += imageData.data[idx] * weight;
          g += imageData.data[idx + 1] * weight;
          b += imageData.data[idx + 2] * weight;
        }
      }

      const idx = (y * width + x) * 4;
      newData[idx] = r / weightSum;
      newData[idx + 1] = g / weightSum;
      newData[idx + 2] = b / weightSum;
      newData[idx + 3] = imageData.data[idx + 3]; // Copiando o valor do alfa
    }
  }

  return newData;
}

function applyGaussianBlur() {
  const canvas = document.getElementById('canvas1');
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2D context not available');
    return;
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) {
    console.error('Failed to get image data');
    return;
  }

  const newData = gaussianBlur(imageData, canvas.width, canvas.height);

  ctx.putImageData(new ImageData(newData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function prewittImages() {
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

function sobelImages() {
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

function laplacianoImages() {
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

function dilatacaoImages() {
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

function erosaoImages() {
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

function aberturaImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = erosion(imageData, canvas.width, canvas.height);
  const openedData = dilation(new ImageData(newData, canvas.width, canvas.height), canvas.width, canvas.height);

  ctx.putImageData(new ImageData(openedData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function fechamentoImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const newData = dilation(imageData, canvas.width, canvas.height);
  const closedData = erosion(new ImageData(newData, canvas.width, canvas.height), canvas.width, canvas.height);

  ctx.put
  ctx.putImageData(new ImageData(closedData, canvas.width, canvas.height), 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function subtractImageData(imageData1, imageData2) {
  const width = imageData1.width;
  const height = imageData1.height;
  const data1 = imageData1.data;
  const data2 = imageData2.data;
  const newData = new Uint8ClampedArray(data1.length);

  for (let i = 0; i < data1.length; i += 4) {
    newData[i] = Math.abs(data1[i] - data2[i]);       // Red
    newData[i + 1] = Math.abs(data1[i + 1] - data2[i + 1]); // Green
    newData[i + 2] = Math.abs(data1[i + 2] - data2[i + 2]); // Blue
    newData[i + 3] = data1[i + 3]; // Alpha
  }

  return new ImageData(newData, width, height);
}

function contornoImages() {
  const canvas = document.getElementById('canvas1');
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2D context not available');
    return;
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) {
    console.error('Failed to get image data');
    return;
  }

  // Aplica filtros ou técnicas para obter duas imagens a serem subtraídas
  const blurredImageData = gaussianBlur(imageData, canvas.width, canvas.height); // Por exemplo, desfoca a imagem
  const newImageData = subtractImageData(imageData, new ImageData(blurredImageData, canvas.width, canvas.height));

  ctx.putImageData(newImageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}
  

function saveImage() {
  const box3 = document.getElementById('box3');
  const image = box3.style.backgroundImage.slice(5, -2);
  const link = document.createElement('a');
  link.href = image;
  link.download = 'result.png';
  link.click();
}
