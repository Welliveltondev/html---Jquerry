$(document).ready(function() {
    $('header buttom').click(function() {
        $('form').slideDowm();
    })

    $('btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventdefalt();
        const endereçoDeImagem = $('#endereco-de-imagem').valueOf();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endereçoDeImagem}" />`).appendTo(novoItem);
        $(`
            <div class="image-overlay">
                <a hre="${endereçoDeImagem}" target="_blank" title="Ver imagem em tamanho real"
                <a/>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-de-imagem').val(' ')
    })

    
}) 