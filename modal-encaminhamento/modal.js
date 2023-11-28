// Função para abrir o modal
function myModalLinkedin() {
    var modal = document.getElementById('myModalLinkedin');
    modal.style.display = 'flex';
    modal.classList.add('modal-open'); // Adiciona a classe para aplicar a transição
}

function myModalSocial() {
    var modal = document.getElementById('myModalSocial');
    modal.style.display = 'flex';
    modal.classList.add('modal-open'); // Adiciona a classe para aplicar a transição
}

function myModalContato() {
    var modal = document.getElementById('myModalContato');
    modal.style.display = 'flex';
    modal.classList.add('modal-open'); // Adiciona a classe para aplicar a transição
}


// Função para fechar o modal
function closeModalLinkedin() {
    var modal = document.getElementById('myModalLinkedin');
    modal.style.display = 'none';
    modal.classList.remove('modal-open'); // Remove a classe para aplicar a transição
}

function closeModalSocial() {
    var modal = document.getElementById('myModalSocial');
    modal.style.display = 'none';
    modal.classList.remove('modal-open'); // Remove a classe para aplicar a transição
}

function closeModalContato() {
    var modal = document.getElementById('myModalContato');
    modal.style.display = 'none';
    modal.classList.remove('modal-open'); // Remove a classe para aplicar a transição
}

function encaminha(caminhoHref) {
    window.location.href = caminhoHref;
}