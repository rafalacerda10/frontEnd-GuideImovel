function aplicarMascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); 
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    return cpf;
}

function aplicarMascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ""); 
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2"); 
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); 
    return telefone;
}

document.getElementById('cpf').addEventListener('input', function() {
    this.value = aplicarMascaraCPF(this.value);
});

document.getElementById('telefone').addEventListener('input', function() {
    this.value = aplicarMascaraTelefone(this.value);
});


///


function aumentarTamanho() {
    const img = document.getElementById('imagem');
    const larguraAtual = img.clientWidth;

    // Aumenta a largura da imagem em 20%
    img.style.width = (larguraAtual * 1.2) + 'px';
}



/// modal 

// Função para abrir o modal

function abrirModal() {
    document.getElementById('modal').style.display = "block";
}
// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

// Fecha o modal quando o usuário clica fora da imagem
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        fecharModal();
    }
}

/// Telefone
function revelarTelefone() {
    const telefoneSpan = document.getElementById('telefoneSpan');
    const placeholder = document.getElementById('placeholder');
    
    placeholder.style.display = 'none';
    telefoneSpan.style.display = 'inline';
}