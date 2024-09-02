function capturarImagem() {
    html2canvas(document.getElementById('captureArea')).then(function(canvas) {
        // Criar um link para download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'captura.png';
        link.click();
    });
}
//adicionar imagem

// Menu
function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}
