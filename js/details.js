function showMore(clickedElement) {
    // Encontra o elemento irmão oculto do elemento clicado
    var hiddenElement = clickedElement.nextElementSibling;
    
    // Alterna a visibilidade do elemento oculto
    if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
        hiddenElement.style.display = 'inline'; // Exibe o texto oculto
        clickedElement.innerHTML = 'Detalhes: '; // Altera o texto do botão para "Mostrar menos"
    } else {
        hiddenElement.style.display = 'none'; // Esconde o texto oculto
        clickedElement.innerHTML = 'Detalhes...'; // Altera o texto do botão de volta para "Leia mais..."
    }
}