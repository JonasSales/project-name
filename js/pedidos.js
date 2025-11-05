document.addEventListener('DOMContentLoaded', () => {
    const detailLinks = document.querySelectorAll('a[href="#"]');

    detailLinks.forEach(link => {
        if (link.textContent.includes('Ver Detalhes')) {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const pedidoElement = event.target.closest('.flex-col.md:flex-row');
                const pedidoId = pedidoElement.querySelector('.font-bold.text-lg').textContent;
                
                alert(`Exibindo detalhes do ${pedidoId}... (Implementação pendente)`);
            });
        }
    });
});