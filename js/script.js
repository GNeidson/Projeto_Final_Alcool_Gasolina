const precoAlcoolInput = document.getElementById('preco-alcool');
const precoGasolinaInput = document.getElementById('preco-gasolina');
const calcularBotao = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const mensagemResultado = document.getElementById('mensagem-resultado');

calcularBotao.addEventListener('click', verificarViabilidade);

function verificarViabilidade() {
    const precoAlcool = parseFloat(precoAlcoolInput.value);
    const precoGasolina = parseFloat(precoGasolinaInput.value);

    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        mensagemResultado.textContent = 'Por favor, insira preços válidos para ambos os combustíveis.';
        resultadoDiv.style.display = 'block';
        return;
    }

    if (precoGasolina === 0) {
        mensagemResultado.textContent = 'O preço da gasolina não pode ser zero para a comparação.';
        resultadoDiv.style.display = 'block';
        return;
    }

    const relacaoPrecos = precoAlcool / precoGasolina;

    if (relacaoPrecos <= 0.7) {
        mensagemResultado.textContent = 'O álcool é mais vantajoso para abastecer.';
    } else {
        mensagemResultado.textContent = 'A gasolina é mais vantajosa para abastecer.';
    }

    resultadoDiv.style.display = 'block';
}