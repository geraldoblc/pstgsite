function toggleContent(element) {
    // Encontra o elemento span.show-more clicado
    const showMoreSpan = element;

    // Encontra o elemento span.hidden-content correspondente
    const hiddenContent = showMoreSpan.nextElementSibling;

    // Encontra o ícone dentro do span.show-more
    const icon = showMoreSpan.querySelector('i');

    // Verifica se a hidden-content está visível ou não
    if (hiddenContent.classList.contains('hidden-content')) {
        // Mostra o conteúdo
        hiddenContent.classList.remove('hidden-content');
        icon.style.transform = 'rotate(180deg)';
    } else {
        // Esconde o conteúdo
        hiddenContent.classList.add('hidden-content');
        icon.style.transform = 'rotate(0deg)';
    }
}