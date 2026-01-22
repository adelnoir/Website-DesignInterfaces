function abrirConteudo(numeroPagina)
{
    document.getElementById("gridPaginas").style.display = 'none';
    document.getElementById("pagina" + numeroPagina).style.display = 'block';
}

function fecharConteudo()
{
    document.getElementById("gridPaginas").style.display = 'grid';
    // Ocultar todas as páginas de conteúdo
    for (let i = 1; i <= 6; i++) {
        document.getElementById("pagina" + i).style.display = 'none';
    }

document.addEventListener('DOMContentLoaded', function() {
    abrirConteudo(1);
});
