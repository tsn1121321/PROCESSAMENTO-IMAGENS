document.getElementById('image-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imagePreview = document.getElementById('image-preview');
        const loadingOverlay = document.createElement('div');
        loadingOverlay.classList.add('loading-overlay');
        loadingOverlay.innerHTML = '<div class="loading-icon"></div>';
        imagePreview.src = e.target.result;
        imagePreview.style.opacity = '0.5';
        imagePreview.parentElement.appendChild(loadingOverlay);

        setTimeout(function() {
            imagePreview.style.opacity = '1';
            loadingOverlay.remove();
            document.getElementById('save-btn').disabled = false;
        }, 1000);
    };

    reader.readAsDataURL(file);
});

document.getElementById('original-btn').addEventListener('click', function() {
    resetImage();
});

document.getElementById('negative-btn').addEventListener('click', function() {
    applyNegativeEffect();
});

document.getElementById('brightness-btn').addEventListener('click', function() {
    applyBrightnessEffect();
});

document.getElementById('contrast-btn').addEventListener('click', function() {
    applyContrastEffect();
});

document.getElementById('save-btn').addEventListener('click', function() {
    saveImage();
});

function resetImage() {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.style.filter = 'none';
}

function applyNegativeEffect() {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.style.filter = 'invert(100%)';
}

function applyBrightnessEffect() {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.style.filter = 'brightness(200%)';
}

function applyContrastEffect() {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.style.filter = 'contrast(200%)';
}

function saveImage() {
    const imagePreview = document.getElementById('image-preview');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = imagePreview.naturalWidth; 
    canvas.height = imagePreview.naturalHeight; 

    const filter = imagePreview.style.filter;
    ctx.filter = filter === 'none' ? 'unset' : filter; 

    ctx.drawImage(imagePreview, 0, 0);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'imagem_salva.png';
    link.click();
}
