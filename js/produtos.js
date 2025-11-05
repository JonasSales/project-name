document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Funcionalidade de Busca (Filtro) ---
    const searchInput = document.querySelector('input[placeholder="Buscar Produto"]');
    const productGrid = document.querySelector('.grid.gap-6');
    const productCards = productGrid.querySelectorAll('.bg-white.border');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                card.style.display = 'block'; // Mostra o card
            } else {
                card.style.display = 'none'; // Esconde o card
            }
        });
    });

    // --- 2. Botão Adicionar Item ---
    const addButton = document.querySelector('button.bg-brand-purple');
    addButton.addEventListener('click', () => {
        alert('Abrindo formulário para adicionar novo produto... (Implementação pendente)');
        
    });

    // --- 3. Ações de Editar e Excluir (em todos os cards) ---
    productCards.forEach(card => {
        const editLink = card.querySelector('a[href="#"][class*="text-indigo-600"]');
        const deleteLink = card.querySelector('a[href="#"][class*="text-red-600"]');

        if (editLink) {
            editLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Abrindo formulário de edição para este produto... (Implementação pendente)');
            });
        }

        if (deleteLink) {
            deleteLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Tem certeza que deseja excluir este produto?')) {
                    alert('Produto excluído com sucesso! (Simulação)');
                    card.remove();
                }
            });
        }
    });
});