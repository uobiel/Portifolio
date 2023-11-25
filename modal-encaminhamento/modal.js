// Função para abrir o modal
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex';
    modal.classList.add('modal-open'); // Adiciona a classe para aplicar a transição
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    modal.classList.remove('modal-open'); // Remove a classe para aplicar a transição
}

function encaminha(caminhoHref) {
    window.location.href = caminhoHref;
}