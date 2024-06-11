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
      imageDataResult.data[i] = Math.min(imageData1.data[i] + imageData2.data[i], 255);
      imageDataResult.data[i + 1] = Math.min(imageData1.data[i + 1] + imageData2.data[i + 1], 255);
      imageDataResult.data[i + 2] = Math.min(imageData1.data[i + 2] + imageData2.data[i + 2], 255); 
      imageDataResult.data[i + 3] = 255;
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
      imageDataResult.data[i] = Math.max(imageData1.data[i] - imageData2.data[i], 0);
      imageDataResult.data[i + 1] = Math.max(imageData1.data[i + 1] - imageData2.data[i + 1], 0); 
      imageDataResult.data[i + 2] = Math.max(imageData1.data[i + 2] - imageData2.data[i + 2], 0); 
      imageDataResult.data[i + 3] = 255; 
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
      imageDataResult.data[i] = Math.min((imageData1.data[i] * imageData2.data[i]) / 255, 255);    
      imageDataResult.data[i + 1] = Math.min((imageData1.data[i + 1] * imageData2.data[i + 1]) / 255, 255); 
      imageDataResult.data[i + 2] = Math.min((imageData1.data[i + 2] * imageData2.data[i + 2]) / 255, 255); 
      imageDataResult.data[i + 3] = 255; 
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
      imageDataResult.data[i] = Math.min(Math.max((imageData1.data[i] / (imageData2.data[i] || 1)) * 255, 0), 255);
      imageDataResult.data[i + 1] = Math.min(Math.max((imageData1.data[i + 1] / (imageData2.data[i + 1] || 1)) * 255, 0), 255);
      imageDataResult.data[i + 2] = Math.min(Math.max((imageData1.data[i + 2] / (imageData2.data[i + 2] || 1)) * 255, 0), 255); 
      imageDataResult.data[i + 3] = 255; 
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function applyNegativeEffect() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < imageData.data.length; i += 4) {

      imageData.data[i] = 255 - imageData.data[i];
      imageData.data[i + 1] = 255 - imageData.data[i + 1]; 
      imageData.data[i + 2] = 255 - imageData.data[i + 2]; 
  }

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

  ctx.save(); 
  ctx.scale(-1, 1);
  ctx.drawImage(tempCanvas, -canvas.width, 0); 
  ctx.restore(); 


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

  ctx.save(); 
  ctx.scale(1, -1);
  ctx.drawImage(tempCanvas, 0, -canvas.height); 
  ctx.restore(); 

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

 
  ctxResult.putImageData(imageData1, 0, 0);


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

  const alpha = 0.5;

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
      imageDataResult.data[i] = alpha * imageData1.data[i] + (1 - alpha) * imageData2.data[i];
      imageDataResult.data[i + 1] = alpha * imageData1.data[i + 1] + (1 - alpha) * imageData2.data[i + 1]; 
      imageDataResult.data[i + 2] = alpha * imageData1.data[i + 2] + (1 - alpha) * imageData2.data[i + 2]; 
      imageDataResult.data[i + 3] = 255; 
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function limiarizacaoImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const threshold = 128; 

  for (let i = 0; i < imageData.data.length; i += 4) {

      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
     
      const binary = gray < threshold ? 0 : 255;
  
      imageData.data[i] = binary;         
      imageData.data[i + 1] = binary; 
      imageData.data[i + 2] = binary; 
  }

  ctx.putImageData(imageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function histogramaImages() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const histogram = new Array(256).fill(0); 


  for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      histogram[Math.floor(gray)]++;
  }

  const maxCount = Math.max(...histogram);

  const histogramCanvas = document.createElement('canvas');
  const histogramCtx = histogramCanvas.getContext('2d');
  histogramCanvas.width = 256; 
  histogramCanvas.height = 150; 
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

  for (let i = 0; i < imageData.data.length; i += 4) {
      if (imageData.data[i] !== 0 && imageData.data[i] !== 255) {
          return false;
      }
  }
  return true;
}

function applyBinaryThreshold(imageData, threshold) {
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

  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); 
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128); 
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
     
      imageDataResult.data[i] = imageData1.data[i] & imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] & imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] & imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255;
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

  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); 
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128);
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
   
      imageDataResult.data[i] = imageData1.data[i] | imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] | imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] | imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; 
  }

  ctxResult.putImageData(imageDataResult, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvasResult.toDataURL()})`;
}

function applyNOT(imageData, canvas) {
  const newData = new Uint8ClampedArray(imageData.data.length);

  for (let i = 0; i < imageData.data.length; i += 4) {
    newData[i] = 255 - imageData.data[i];       
    newData[i + 1] = 255 - imageData.data[i + 1]; 
    newData[i + 2] = 255 - imageData.data[i + 2]; 
    newData[i + 3] = imageData.data[i + 3];      
  }

  return new ImageData(newData, canvas.width, canvas.height);
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

  if (!checkBinary(imageData)) {
    applyBinaryThreshold(imageData, 128); 
  }

  const newImageData = applyNOT(imageData, canvas);
  
  ctx.putImageData(newImageData, 0, 0);

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

  
  if (!checkBinary(imageData1)) {
    applyBinaryThreshold(imageData1, 128); 
  }
  if (!checkBinary(imageData2)) {
    applyBinaryThreshold(imageData2, 128); 
  }

  const canvasResult = document.createElement('canvas');
  canvasResult.width = fixedWidth;
  canvasResult.height = fixedHeight;
  const ctxResult = canvasResult.getContext('2d');
  const imageDataResult = ctxResult.createImageData(fixedWidth, fixedHeight);

  for (let i = 0; i < imageData1.data.length; i += 4) {
     
      imageDataResult.data[i] = imageData1.data[i] ^ imageData2.data[i];
      imageDataResult.data[i + 1] = imageData1.data[i + 1] ^ imageData2.data[i + 1];
      imageDataResult.data[i + 2] = imageData1.data[i + 2] ^ imageData2.data[i + 2];
      imageDataResult.data[i + 3] = 255; 
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
  ]; 

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
  ]; 

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

  averageFilter(imageData, canvas);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function averageFilter(imageData, canvas) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const kernelSize = 3;
  const newData = new Uint8ClampedArray(imageData.data.length);

  const halfKernelSize = Math.floor(kernelSize / 2);

  for (let y = halfKernelSize; y < height - halfKernelSize; y++) {
    for (let x = halfKernelSize; x < width - halfKernelSize; x++) {
      let totalR = 0, totalG = 0, totalB = 0;

      for (let j = -halfKernelSize; j <= halfKernelSize; j++) {
        for (let i = -halfKernelSize; i <= halfKernelSize; i++) {
          const idx = ((y + j) * width + (x + i)) * 4;
          totalR += imageData.data[idx];
          totalG += imageData.data[idx + 1];
          totalB += imageData.data[idx + 2];
        }
      }

      const idx = (y * width + x) * 4;
      newData[idx] = totalR / (kernelSize * kernelSize);
      newData[idx + 1] = totalG / (kernelSize * kernelSize);
      newData[idx + 2] = totalB / (kernelSize * kernelSize);
      newData[idx + 3] = imageData.data[idx + 3];
    }
  }

  ctx.putImageData(new ImageData(newData, width, height), 0, 0);
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
  ]; 

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
        values.sort((a, b) => a - b); 
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
]; 

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
        values.sort((a, b) => a - b);
        const idx = (y * width + x) * 4;
        newData[idx] = values[4]; 
        newData[idx + 1] = values[4];
        newData[idx + 2] = values[4];
    }
}

return newData;
}

function medianFilter(imageData, width, height) {
  const newData = new Uint8ClampedArray(imageData.data);
  const radius = 1; 

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
  const weights = [1, 4, 7, 4, 1, 4, 16, 26, 16, 4, 7, 26, 41, 26, 7, 4, 16, 26, 16, 4, 1, 4, 7, 4, 1]; 
  const weightSum = weights.reduce((a, b) => a + b, 0);

  for (let y = 2; y < height - 2; y++) {
    for (let x = 2; x < width - 2; x++) {
      let r = 0, g = 0, b = 0;

      for (let j = -2; j <= 2; j++) {
        for (let i = -2; i <= 2; i++) {
          const idx = ((y + j) * width + (x + i)) * 4;
          const weight = weights[(j + 2) * 5 + (i + 2)];
          r += imageData.data[idx] * weight;
          g += imageData.data[idx + 1] * weight;
          b += imageData.data[idx + 2] * weight;
        }
      }

      const idx = (y * width + x) * 4;
      newData[idx] = r / weightSum;
      newData[idx + 1] = g / weightSum;
      newData[idx + 2] = b / weightSum;
      newData[idx + 3] = imageData.data[idx + 3]; 
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
  const kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0]; 

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
          const magnitude = Math.abs(sum); 
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
  ]; 
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
  ]; 

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

function fechamentoImagens() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const kernel = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];

  const dilatedImage = dilatacao(imageData, kernel);
  const closedImage = erosao(dilatedImage, kernel);

  ctx.putImageData(closedImage, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function aberturaImagens() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const kernel = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]; 

  const erodedImage = erosao(imageData, kernel);
  const openedImage = dilatacao(erodedImage, kernel);

  ctx.putImageData(openedImage, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function dilatacao(imageData, kernel) {
  const width = imageData.width;
  const height = imageData.height;
  const data = imageData.data;

  const resultData = new Uint8ClampedArray(data);

  const kernelSize = kernel.length;
  const halfKernelSize = Math.floor(kernelSize / 2);

  for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
          let maxValue = 0;

          for (let ky = 0; ky < kernelSize; ky++) {
              for (let kx = 0; kx < kernelSize; kx++) {
                  const pixelY = y + ky - halfKernelSize;
                  const pixelX = x + kx - halfKernelSize;

                  if (pixelY >= 0 && pixelY < height && pixelX >= 0 && pixelX < width) {
                      const pixelIndex = (pixelY * width + pixelX) * 4;
                      const kernelValue = kernel[ky][kx];
                      const value = data[pixelIndex] * kernelValue;
                      if (value > maxValue) {
                          maxValue = value;
                      }
                  }
              }
          }

          const resultIndex = (y * width + x) * 4;
          resultData[resultIndex] = maxValue;
          resultData[resultIndex + 1] = maxValue;
          resultData[resultIndex + 2] = maxValue;
      }
  }

  return new ImageData(resultData, width, height);
}

// Função para realizar a erosão
function erosao(imageData, kernel) {
  const width = imageData.width;
  const height = imageData.height;
  const data = imageData.data;

  const resultData = new Uint8ClampedArray(data);

  const kernelSize = kernel.length;
  const halfKernelSize = Math.floor(kernelSize / 2);

  for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
          let minValue = 255;

          for (let ky = 0; ky < kernelSize; ky++) {
              for (let kx = 0; kx < kernelSize; kx++) {
                  const pixelY = y + ky - halfKernelSize;
                  const pixelX = x + kx - halfKernelSize;

                  if (pixelY >= 0 && pixelY < height && pixelX >= 0 && pixelX < width) {
                      const pixelIndex = (pixelY * width + pixelX) * 4;
                      const kernelValue = kernel[ky][kx];
                      const value = data[pixelIndex] * kernelValue;
                      if (value < minValue) {
                          minValue = value;
                      }
                  }
              }
          }

          const resultIndex = (y * width + x) * 4;
          resultData[resultIndex] = minValue;
          resultData[resultIndex + 1] = minValue;
          resultData[resultIndex + 2] = minValue;
      }
  }

  return new ImageData(resultData, width, height);
}

function subtractImageData(imageData1, imageData2) {
  const width = imageData1.width;
  const height = imageData1.height;
  const data1 = imageData1.data;
  const data2 = imageData2.data;
  const newData = new Uint8ClampedArray(data1.length);

  for (let i = 0; i < data1.length; i += 4) {
    newData[i] = Math.max(data1[i] - data2[i], 0);  
    newData[i + 1] = Math.max(data1[i + 1] - data2[i + 1], 0); 
    newData[i + 2] = Math.max(data1[i + 2] - data2[i + 2], 0); 
    newData[i + 3] = data1[i + 3]; 
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


  const blurredImageData = gaussianBlur(imageData, canvas.width, canvas.height);
  const newImageData = subtractImageData(imageData, new ImageData(blurredImageData, canvas.width, canvas.height));

  ctx.putImageData(newImageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function convertToGrayscale() {
  document.getElementById('box3').innerHTML = "";

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const newImageData = toGrayscale(imageData);

  ctx.putImageData(newImageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function toGrayscale(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
      const grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
      data[i] = grayscale;   
      data[i + 1] = grayscale; 
      data[i + 2] = grayscale; 
      
  }
  return imageData;
}

function convertToBinary(threshold = 128) {
 
  document.getElementById('box3').innerHTML = "";

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  const binaryImageData = toBinary(imageData, threshold);

  ctx.putImageData(binaryImageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function toBinary(imageData, threshold) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
      const grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
      const binaryValue = grayscale >= threshold ? 255 : 0;
      data[i] = binaryValue;     
      data[i + 1] = binaryValue; 
      data[i + 2] = binaryValue; 
  }
  return imageData;
}

function applyBrightness() {
  document.getElementById('box3').innerHTML = "";

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const brightness = parseInt(document.getElementById('brightness').value, 10);

  const brightnessValue = (brightness - 50) * 5.1;
  
  const newImageData = adjustBrightness(imageData, brightnessValue);

  ctx.putImageData(newImageData, 0, 0);
  document.getElementById('box3').style.backgroundImage = `url(${canvas.toDataURL()})`;
}

function adjustBrightness(imageData, brightness) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
      data[i] = clamp(data[i] + brightness);     
      data[i + 1] = clamp(data[i + 1] + brightness); 
      data[i + 2] = clamp(data[i + 2] + brightness); 
  }
  return imageData;
}

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}
 

function saveImage() {
  const box3 = document.getElementById('box3');
  const image = box3.style.backgroundImage.slice(5, -2);
  const link = document.createElement('a');
  link.href = image;
  link.download = 'result.png';
  link.click();
}
