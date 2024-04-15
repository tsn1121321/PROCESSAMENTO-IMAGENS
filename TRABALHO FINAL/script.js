let imageArray = [];
let resultImage = null;

function loadFirstImage() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.png, .jpg, .jpeg, .bmp, .tif, .tiff';

  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = readerEvent => {
      const content = readerEvent.target.result;

      document.getElementById('box1').style.backgroundImage = `url(${content})`;
      imageArray[0] = content;
    };
  };

  input.click();
}

function loadSecondImage() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.png, .jpg, .jpeg, .bmp, .tif, .tiff';

  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = readerEvent => {
      const content = readerEvent.target.result;

      document.getElementById('box2').style.backgroundImage = `url(${content})`;
      imageArray[1] = content;
    };
  };

  input.click();
}


function sumImagesBoxes() {
    if (imageArray.length === 2) {
      const img1 = new Image();
      const img2 = new Image();
  
      img1.crossOrigin = 'Anonymous';
      img2.crossOrigin = 'Anonymous';
  
      img1.onload = function () {
        img2.onload = function () {
          if (img1.width === img2.width && img1.height === img2.height) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
  
            canvas.width = img1.width;
            canvas.height = img1.height;
  
            ctx.drawImage(img1, 0, 0);
            ctx.globalAlpha = 0.5;
            ctx.drawImage(img2, 0, 0);
  
            const imageData = canvas.toDataURL();
            resultImage = imageData;
            document.getElementById('box3').style.backgroundImage = `url(${imageData})`;
          } else {
            alert('As imagens não têm a mesma dimensão. Impossível somar.');
          }
        };
  
        img2.src = imageArray[1];
      };
  
      img1.src = imageArray[0];
    }
  }

function applyNegativeEffect() {
  if (imageArray.length >= 1) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img1 = new Image();

    img1.crossOrigin = 'Anonymous';

    img1.onload = function () {
      canvas.width = img1.width;
      canvas.height = img1.height;

      ctx.drawImage(img1, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1]; 
        data[i + 2] = 255 - data[i + 2]; 

      ctx.putImageData(imageData, 0, 0);

      const resultImageData = canvas.toDataURL();
      resultImage = resultImageData;
      document.getElementById('box3').style.backgroundImage = `url(${resultImageData})`;
    };

    img1.src = imageArray[0];
  }
}

function concatenateImages() {
  if (imageArray.length === 2) {
    const img1 = new Image();
    const img2 = new Image();

    img1.crossOrigin = 'Anonymous';
    img2.crossOrigin = 'Anonymous';

    img1.onload = function () {
      img2.onload = function () {
        if (img1.width === img2.width && img1.height === img2.height) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = img1.width * 2;
          canvas.height = img1.height;

          ctx.drawImage(img1, 0, 0);
          ctx.drawImage(img2, img1.width, 0);

          const imageData = canvas.toDataURL();
          resultImage = imageData;
          document.getElementById('box3').style.backgroundImage = `url(${imageData})`;
        } else {
          alert('As imagens não têm a mesma dimensão. Impossível concatenar.');
        }
      };

      img2.src = imageArray[1];
    };

    img1.src = imageArray[0];
  }
}

function flipImageLR() {
  if (imageArray.length >= 1) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img1 = new Image();

    img1.crossOrigin = 'Anonymous';

    img1.onload = function () {
      canvas.width = img1.width;
      canvas.height = img1.height;

      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(img1, 0, 0);

      const resultImageData = canvas.toDataURL();
      resultImage = resultImageData;
      document.getElementById('box3').style.backgroundImage = `url(${resultImageData})`;
    };

    img1.src = imageArray[0];
  }
}

function flipImageUD() {
  if (imageArray.length >= 1) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img1 = new Image();

    img1.crossOrigin = 'Anonymous';

    img1.onload = function () {
      canvas.width = img1.width;
      canvas.height = img1.height;

      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.drawImage(img1, 0, 0);

      const resultImageData = canvas.toDataURL();
      resultImage = resultImageData;
      document.getElementById('box3').style.backgroundImage = `url(${resultImageData})`;
    };

    img1.src = imageArray[0];
  }
}

function flipImageUD() {
    if (imageArray.length >= 1) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img1 = new Image();
  
      img1.crossOrigin = 'Anonymous';
  
      img1.onload = function () {
        canvas.width = img1.width;
        canvas.height = img1.height;
  
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
        ctx.drawImage(img1, 0, 0);
  
        const resultImageData = canvas.toDataURL();
        resultImage = resultImageData;
        document.getElementById('box3').style.backgroundImage = `url(${resultImageData})`;
      };
  
      img1.src = imageArray[0];
    }
  }

  function subtractImagesBoxes() {
    if (imageArray.length === 2) {
      const img1 = new Image();
      const img2 = new Image();
  
      img1.crossOrigin = 'Anonymous';
      img2.crossOrigin = 'Anonymous';
  
      img1.onload = function () {
        img2.onload = function () {
          if (img1.width === img2.width && img1.height === img2.height) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
  
            canvas.width = img1.width;
            canvas.height = img1.height;
  
            ctx.drawImage(img1, 0, 0);
            ctx.globalCompositeOperation = 'difference';
            ctx.drawImage(img2, 0, 0);
  
            const imageData = canvas.toDataURL();
            resultImage = imageData;
            document.getElementById('box3').style.backgroundImage = `url(${imageData})`;
          } else {
            alert('As imagens não têm a mesma dimensão. Impossível subtrair.');
          }
        };
  
        img2.src = imageArray[1];
      };
  
      img1.src = imageArray[0];
    }
  }

function limiarizacaoImages() {
  var image1 = document.getElementById('box1').style.backgroundImage;

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = image1.slice(5, -2);
  img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      var threshold = 128; 

      for (var i = 0; i < data.length; i += 4) {
          var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          var color = avg > threshold ? 255 : 0; 
          data[i] = data[i + 1] = data[i + 2] = color;
      }
      ctx.putImageData(imageData, 0, 0);
      var resultImage = canvas.toDataURL();
      document.getElementById('box3').style.backgroundImage = 'url(' + resultImage + ')';
  };
}

function histogramaImages() {
  var image1 = document.getElementById('box1').style.backgroundImage;

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = image1.slice(5, -2); 
  img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      var histogram = new Array(256).fill(0);

      for (var i = 0; i < data.length; i += 4) {
          var avg = (data[i] + data[i + 1] + data[i + 2]) / 3; 
          histogram[Math.round(avg)]++;
      }

      var max = Math.max(...histogram);

      var histCanvas = document.createElement('canvas');
      histCanvas.width = 256;
      histCanvas.height = 200;
      var histCtx = histCanvas.getContext('2d');
      histCtx.fillStyle = 'white';
      histCtx.fillRect(0, 0, histCanvas.width, histCanvas.height);
      histCtx.strokeStyle = 'black';
      histCtx.beginPath();

      for (var j = 0; j < histogram.length; j++) {
          var normalizedValue = (histogram[j] / max) * histCanvas.height;
          histCtx.lineTo(j, histCanvas.height - normalizedValue);
      }

      histCtx.stroke();

      var resultImage = histCanvas.toDataURL();
      document.getElementById('box3').style.backgroundImage = 'url(' + resultImage + ')';
  };
}

function saveImage() {
  const box3 = document.getElementById('box3');
  const backgroundImage = box3.style.backgroundImage;
  
  if (backgroundImage) {
    const image = new Image();
    image.src = backgroundImage.slice(5, -2);
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'imagem_salva.png';
    link.click();
  } else {
    alert('Nenhuma imagem para salvar.');
  }
}
}
