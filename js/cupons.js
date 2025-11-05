document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[placeholder="Buscar Cupom (ex: DESCONTO10)"]');
    const tableRows = document.querySelectorAll('tbody > tr');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            
            if (rowText.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    const addButton = document.querySelector('button.bg-brand-purple');
    addButton.addEventListener('click', () => {
        alert('Abrindo formulário para adicionar novo cupom... (Implementação pendente)');

    });

    const deleteLinks = document.querySelectorAll('a.text-red-600');
    
    deleteLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (confirm('Tem certeza que deseja excluir este cupom?')) {
                alert('Cupom excluído com sucesso! (Simulação)');
                link.closest('tr').remove();
            }
        });
    });
});