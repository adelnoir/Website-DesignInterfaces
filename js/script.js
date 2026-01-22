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
}

// document.addEventListener('DOMContentLoaded', function() {
//     abrirConteudo(2);
// });

//Ripple Effect 
function createRipple(event) { 
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height); 
    const x = event.clientX - rect.left - size / 2; 
    const y = event.clientY - rect.top - size / 2; 
    ripple.style.width = ripple.style.height = size + 'px'; ripple.style.left = x + 'px'; ripple.style.top = y + 'px'; ripple.classList.add('ripple');
    button.appendChild(ripple); setTimeout(() => ripple.remove(), 600); } 

// Shake Effect 
function shakeButton(button)
    {
        button.classList.add('shake');
        setTimeout(() => button.classList.remove('shake'), 500);
} 
// Toggle Switch 
function toggleSwitch(toggle) { toggle.classList.toggle('active'); const text = document.getElementById('toggleText'); text.textContent = toggle.classList.contains('active') ? 'Ligado' : 'Desligado'; }