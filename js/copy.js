function copyEmail(email) {
    // Cria um elemento de texto temporário
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
  
    // Seleciona o texto do elemento
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
  
    // Copia o texto para a área de transferência
    document.execCommand('copy');
  
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
  
    // Notifica o usuário (opcional)
    alert('Copy: ' + email);
  }  