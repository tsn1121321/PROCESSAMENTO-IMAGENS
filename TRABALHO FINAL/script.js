function loadImage(event, boxId, canvasId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
          const canvas = document.getElementById(canvasId);
          const context = canvas.getContext('2d');
          const box = document.getElementById(boxId);

          // Redimensionar a imagem para caber no box
          const boxWidth = box.clientWidth;
          const boxHeight = box.clientHeight;
          const scale = Math.min(boxWidth / img.width, boxHeight / img.height);
          const width = img.width * scale;
          const height = img.height * scale;

          canvas.width = width;
          canvas.height = height;
          context.drawImage(img, 0, 0, width, height);
          box.style.backgroundImage = `url(${canvas.toDataURL()})`;
      };
      img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

document.getElementById('upload1').addEventListener('change', function(event) {
  loadImage(event, 'box1', 'canvas1');
});

document.getElementById('upload2').addEventListener('change', function(event) {
  loadImage(event, 'box2', 'canvas2');
});

function addImages() {
  const canvas1 = document.getElementById('canvas1');
  const canvas2 = document.getElementById('canvas2');
  const box3 = document.getElementById('box3');

  if (canvas1.width === 0 || canvas2.width === 0) {
      alert('Ambas as imagens devem ser carregadas.');
      return;
  }

  const width = Math.min(canvas1.width, canvas2.width);
  const height = Math.min(canvas1.height, canvas2.height);

  const resultCanvas = document.createElement('canvas');
  resultCanvas.width = width;
  resultCanvas.height = height;
  const resultContext = resultCanvas.getContext('2d');

  const context1 = canvas1.getContext('2d');
  const context2 = canvas2.getContext('2d');

  const imageData1 = context1.getImageData(0, 0, width, height);
  const imageData2 = context2.getImageData(0, 0, width, height);
  const resultImageData = resultContext.createImageData(width, height);

  for (let i = 0; i < resultImageData.data.length; i += 4) {
      resultImageData.data[i] = Math.min(255, imageData1.data[i] + imageData2.data[i]);     // Red
      resultImageData.data[i + 1] = Math.min(255, imageData1.data[i + 1] + imageData2.data[i + 1]); // Green
      resultImageData.data[i + 2] = Math.min(255, imageData1.data[i + 2] + imageData2.data[i + 2]); // Blue
      resultImageData.data[i + 3] = 255; // Alpha
  }

  resultContext.putImageData(resultImageData, 0, 0);
  box3.style.backgroundImage = `url(${resultCanvas.toDataURL()})`;
}

function saveImage() {
  const box3 = document.getElementById('box3');
  const background = box3.style.backgroundImage;
  if (background) {
      const imageData = background.slice(5, -2);
      const a = document.createElement('a');
      a.href = imageData;
      a.download = 'resultado.png';
      a.click();
  } else {
      alert('Nenhuma imagem para salvar!');
  }
}
