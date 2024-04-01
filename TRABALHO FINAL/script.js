let imageArray = [];
let resultImage = null;

function loadImage() {
  const input = document.createElement('input');
  input.type = 'file';

  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = readerEvent => {
      const content = readerEvent.target.result;

      if (!document.getElementById('box1').style.backgroundImage) {
        document.getElementById('box1').style.backgroundImage = `url(${content})`;
        imageArray[0] = content;
      } else if (!document.getElementById('box2').style.backgroundImage) {
        document.getElementById('box2').style.backgroundImage = `url(${content})`;
        imageArray[1] = content;
      } else {
        const oldImage = document.getElementById('box1').style.backgroundImage;
        document.getElementById('box1').style.backgroundImage = `url(${content})`;
        document.getElementById('box2').style.backgroundImage = oldImage;
        imageArray[0] = content;
        imageArray[1] = oldImage;
      }
    };
  };

  input.click();
}

function sumImages() {
  if (imageArray.length === 2) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img1 = new Image();
    const img2 = new Image();

    img1.crossOrigin = 'Anonymous';
    img2.crossOrigin = 'Anonymous';

    img1.onload = function () {
      canvas.width = img1.width;
      canvas.height = img1.height;

      ctx.drawImage(img1, 0, 0);

      img2.onload = function () {
        ctx.drawImage(img2, 0, 0);
        const imageData = canvas.toDataURL();
        resultImage = imageData;
        document.getElementById('box3').style.backgroundImage = `url(${imageData})`;
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
        data[i] = 255 - data[i]; // Red
        data[i + 1] = 255 - data[i + 1]; // Green
        data[i + 2] = 255 - data[i + 2]; // Blue
      }

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

function saveImage() {
  if (resultImage) {
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'result_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
