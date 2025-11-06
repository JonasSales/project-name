document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário
            event.preventDefault();
            
            // Limpa erros de validação anteriores
            clearErrors();

            let isValid = true;
            
            const emailInput = document.getElementById('email');
            const senhaInput = document.getElementById('senha');

            // 1. Validação do Email
            if (!emailInput.value) {
                showError(emailInput, 'Email é obrigatório.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Por favor, insira um email válido.');
                isValid = false;
            }

            // 2. Validação da Senha
            if (!senhaInput.value) {
                showError(senhaInput, 'Senha é obrigatória.');
                isValid = false;
            }
            
            // Se tudo for válido, o formulário pode ser enviado
            if (isValid) {
                console.log('Formulário de login válido. Enviando...');
                // Descomente a linha abaixo para permitir o envio real
                // loginForm.submit(); 
                
                // Apenas para demonstração:
                alert('Login enviado com sucesso! (Simulação)');
                window.location.href = '/htmlFiles/home.html';
            }
        });
    }
});

/**
 * Verifica se um email tem um formato válido.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Exibe uma mensagem de erro abaixo do campo de input.
 * @param {HTMLElement} inputElement - O elemento <input>
 * @param {string} message - A mensagem de erro
 */
function showError(inputElement, message) {
    // Remove a classe de foco padrão para destacar o erro
    inputElement.classList.remove('focus:ring-brand-purple');
    // Adiciona a borda vermelha de erro
    inputElement.classList.add('border-red-500');

    // Cria o elemento <p> para a mensagem de erro
    const errorElement = document.createElement('p');
    errorElement.className = 'text-red-500 text-xs mt-1 validation-error';
    errorElement.textContent = message;
    
    // Insere a mensagem de erro logo após o input
    inputElement.parentNode.appendChild(errorElement);
}

/**
 * Limpa todas as mensagens de erro e bordas vermelhas.
 */
function clearErrors() {
    // Remove todas as mensagens de erro
    const errorMessages = document.querySelectorAll('.validation-error');
    errorMessages.forEach(msg => msg.remove());
    
    // Remove as bordas de erro dos inputs
    const errorInputs = document.querySelectorAll('.border-red-500');
    errorInputs.forEach(input => {
        input.classList.remove('border-red-500');
        input.classList.add('focus:ring-brand-purple');
    });
}