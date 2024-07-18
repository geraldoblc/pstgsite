// Função para alternar o tema (day/night)
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    // Salva o tema atual no localStorage para persistência
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Verifica o tema armazenado no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        document.querySelector('header').classList.toggle('dark-mode', savedTheme === 'dark');
        document.querySelector('main').classList.toggle('dark-mode', savedTheme === 'dark');
        document.querySelector('footer').classList.toggle('dark-mode', savedTheme === 'dark');
    }
});