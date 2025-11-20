// Obtém os elementos pelo ID/Classe
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const iconsContainer = document.querySelector('.icons'); // Opcional: para mover ícones se necessário

// Verifica se os elementos existem antes de adicionar o listener
if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' da navbar
        navbar.classList.toggle('active');
        
        // Opcional: Altera o ícone (hambúrguer para 'X' e vice-versa)
        const menuIconImg = document.getElementById('menu-icon');
        if (navbar.classList.contains('active')) {
            // Se estiver ativo, muda para o ícone de fechar (X)
            menuIconImg.src = "https://img.icons8.com/ios-filled/30/ffffff/delete-sign--v1.png";
            menuIconImg.alt = "close-icon";
        } else {
            // Se não estiver ativo, volta para o hambúrguer
            menuIconImg.src = "https://img.icons8.com/ios-filled/30/ffffff/menu--v1.png";
            menuIconImg.alt = "menu-icon";
        }
    });
}