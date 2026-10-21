document.querySelectorAll('.sacola').forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = {
            id: botao.dataset.id,
            nome: botao.dataset.nome,
            preco: parseFloat(botao.dataset.preco),
            img: botao.dataset.img,
            quantidade: 1
        };

        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const existente = carrinho.find(item => item.id === produto.id);

        if (existente) {
            existente.quantidade += 1;
        } else {
            carrinho.push(produto);
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado ao carrinho!');
    });
});
