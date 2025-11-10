
document.addEventListener('DOMContentLoaded', () => {
    const couponForm = document.querySelector('form');

    if (couponForm) {
        couponForm.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário
            event.preventDefault();
            
            // Limpa erros de validação anteriores
            clearErrors();

            let isValid = true;
            
            // Seleciona todos os inputs do formulário
            const codigoInput = document.getElementById('codigo');
            const tipoDescontoInput = document.getElementById('tipo-desconto');
            const valorDescontoInput = document.getElementById('valor-desconto');
            // O checkbox 'ativo' não requer validação de preenchimento

            // 1. Validação do Código (Texto)
            // Usar.trim() é essencial para evitar entradas somente com espaços [3, 4]
            if (!codigoInput.value.trim()) {
                showError(codigoInput, 'O código do cupom é obrigatório.');
                isValid = false;
            }

            // 2. Validação do Tipo de Desconto (Select)
            // A validação falha se o valor for a string vazia (opção "Selecione") [5, 6]
            if (!tipoDescontoInput.value) {
                showError(tipoDescontoInput, 'Por favor, selecione um tipo de desconto.');
                isValid = false;
            }

 

            // 3. Validação do Valor do Desconto (Numérico, Positivo)
            const valorValue = parseFloat(valorDescontoInput.value);
            
            if (!valorDescontoInput.value) {
                showError(valorDescontoInput, 'O valor do desconto é obrigatório.');
                isValid = false;
            } else if (isNaN(valorValue)) { // Verifica se é um número válido [7]
                showError(valorDescontoInput, 'Por favor, insira um número válido.');
                isValid = false;
            } else if (valorValue <= 0) { // Valor deve ser maior que zero [8, 9]
                showError(valorDescontoInput, 'O valor do desconto deve ser maior que zero.');
                isValid = false;
            }else if (tipoDescontoInput.value === 'porcentagem' && valorValue >= 100) {
                showError(valorDescontoInput, 'Desconto em porcentagem deve ser menor que 100.');
                isValid = false;
            }
            
            // Se tudo for válido, o formulário pode ser enviado
            if (isValid) {
                console.log('Formulário de cupom válido. Enviando...');

                // Simulação de envio
                alert('Cupom cadastrado com sucesso! (Simulação)');
                 
                // Redireciona para o painel de cupons (exemplo)
                window.location.href = '/htmlFiles/cupons.html';
            }
        });
    }
});

/**
 * Exibe uma mensagem de erro abaixo do campo de input.
 * (Reutilizada do script de validação original)
 * @param {HTMLElement} inputElement - O elemento <input>
 * @param {string} message - A mensagem de erro
 */
function showError(inputElement, message) {
    // Remove a classe de foco padrão para destacar o erro
    inputElement.classList.remove('focus:ring-brand-purple');
    // Adiciona a borda vermelha de erro
    inputElement.classList.add('border-red-500', 'focus:ring-red-500');

    // Cria o elemento <p> para a mensagem de erro
    const errorElement = document.createElement('p');
    errorElement.className = 'text-red-500 text-xs mt-1 validation-error';
    errorElement.textContent = message;
    
    // Insere a mensagem de erro logo após o input (ou seu container pai se necessário)
    inputElement.parentNode.appendChild(errorElement);
}

/**
 * Limpa todas as mensagens de erro e bordas vermelhas.
 * (Reutilizada do script de validação original)
 */
function clearErrors() {
    // Remove todas as mensagens de erro
    const errorMessages = document.querySelectorAll('.validation-error');
    errorMessages.forEach(msg => msg.remove());
    
    // Remove as bordas de erro dos inputs
    const errorInputs = document.querySelectorAll('.border-red-500');
    errorInputs.forEach(input => {
        input.classList.remove('border-red-500', 'focus:ring-red-500');
        input.classList.add('focus:ring-brand-purple');
    });
}