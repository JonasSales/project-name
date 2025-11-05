document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.querySelector('input[placeholder="Buscar Usuário (por email ou nome)"]');
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


    const deleteLinks = document.querySelectorAll('a.text-red-600');
    
    deleteLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (confirm('Tem certeza que deseja excluir este usuário?')) {
                alert('Usuário excluído com sucesso! (Simulação)');
                link.closest('tr').remove();
            }
        });
    });

    // Ação de "Editar" e "Adicionar Usuário" já redirecionam para outras páginas
    // ou exigiriam um modal, similar ao de produtos.
});