document.addEventListener('DOMContentLoaded', function () {
    const nomeElement = document.getElementById('nome-carregamento');
    const nomeText = nomeElement.innerText;
    nomeElement.innerHTML = '';

    for (let i = 0; i < nomeText.length; i++) {
        const span = document.createElement('span');
        span.textContent = nomeText[i];
        nomeElement.appendChild(span);
    }

    nomeElement.classList.add('carregando');
});
