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
