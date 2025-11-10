document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.querySelector('form');

    if (productForm) {
        productForm.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário
            event.preventDefault();
            
            // Limpa erros de validação anteriores
            clearErrors();

            let isValid = true;
            
            // Seleciona todos os inputs do formulário
            const nomeProdutoInput = document.getElementById('nome-produto');
            const categoriaInput = document.getElementById('categoria');
            const descricaoInput = document.getElementById('descricao');
            const precoInput = document.getElementById('preco');
            const estoqueInput = document.getElementById('estoque');
            // const imagemInput = document.getElementById('imagem');

            // 1. Validação de Campos de Texto (Nome, SKU, Descrição)
            // Usar.trim() é essencial para evitar entradas somente com espaços [13]
            if (!nomeProdutoInput.value.trim()) {
                showError(nomeProdutoInput, 'Nome do produto é obrigatório.');
                isValid = false;
            }

          

            if (!descricaoInput.value.trim()) {
                showError(descricaoInput, 'Descrição é obrigatória.');
                isValid = false;
            }

            // 2. Validação de Select (Categoria)
            // A validação falha se o valor for a string vazia (opção "Selecione") [15]
            if (!categoriaInput.value) {
                showError(categoriaInput, 'Por favor, selecione uma categoria.');
                isValid = false;
            }

            // 3. Validação de Preço (Numérico, Positivo)
            const precoValue = parseFloat(precoInput.value);
            if (!precoInput.value) {
                showError(precoInput, 'Preço é obrigatório.');
                isValid = false;
            } else if (isNaN(precoValue)) { // Verifica se é um número válido 
                showError(precoInput, 'Por favor, insira um número válido.');
                isValid = false;
            } else if (precoValue <= 0) { // Preço deve ser maior que zero 
                showError(precoInput, 'O preço deve ser maior que zero.');
                isValid = false;
            }

            // 4. Validação de Estoque (Numérico, Inteiro, >= 0)
            // Usamos parseFloat para consistência, mas verificamos se é inteiro
            const estoqueValue = parseFloat(estoqueInput.value);
            if (!estoqueInput.value) {
                showError(estoqueInput, 'Estoque é obrigatório.');
                isValid = false;
            } else if (isNaN(estoqueValue)) {
                showError(estoqueInput, 'Por favor, insira um número válido.');
                isValid = false;
            } else if (!Number.isInteger(estoqueValue)) { // Verifica se é um número inteiro [29]
                showError(estoqueInput, 'Estoque deve ser um número inteiro.');
                isValid = false;
            } else if (estoqueValue < 0) {
                showError(estoqueInput, 'Estoque não pode ser negativo.');
                isValid = false;
            }

            // // 5. Validação de Upload de Imagem (Existência, Tipo, Tamanho)
            // const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

            // if (imagemInput.files.length === 0) { // Verifica se algum arquivo foi selecionado [21, 22]
            //     showError(imagemInput, 'Imagem do produto é obrigatória.');
            //     isValid = false;
            // } else {
            //     const file = imagemInput.files;

            //     // Verifica o tipo de arquivo (MIME type) [24, 25]
            //     if (!file.type.startsWith('image/')) {
            //         showError(imagemInput, 'Arquivo inválido. Por favor, selecione uma imagem (PNG, JPG, WEBP).');
            //         isValid = false;
            //     }
                
            //     // Verifica o tamanho do arquivo [26, 28]
            //     else if (file.size > MAX_FILE_SIZE) {
            //         showError(imagemInput, 'Imagem é muito grande (Máx 2MB).');
            //         isValid = false;
            //     }
            // }
            
            // Se tudo for válido, o formulário pode ser enviado
            if (isValid) {
                console.log('Formulário de produto válido. Enviando...');

                // Simulação de envio
                alert('Produto cadastrado com sucesso! (Simulação)');
                 
                // Redireciona para o painel do fornecedor (exemplo)
                window.location.href = '/htmlFiles/produtos.html';
            }
        });
    }
});

/**
 * Exibe uma mensagem de erro abaixo do campo de input.
 * (Reutilizada do register.js)
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
 * (Reutilizada do register.js)
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