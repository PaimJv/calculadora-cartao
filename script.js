function pesquisar() {
    // Obtém o valor digitado pelo usuário
    const userInput = document.getElementById("userInput").value;

    // Converte o valor para um número inteiro
    const valor = parseInt(userInput);

    // Verifica se a conversão foi bem-sucedida
    if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido.";
    } else {
        // Exibe os resultados na tela
        calculaParcela(valor);
    }
}

// Adiciona o evento para capturar a tecla Enter
document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pesquisar();
    }
});

function calculaParcela(valor) {
    let resultadoHTML = `
        <table border="1" style="width:100%; border-collapse: collapse; text-align: center;">
            <thead>
                <tr>
                    <th>Quantidade de Parcelas</th>
                    <th>Valor de Cada Parcela (R$)</th>
                    <th>Valor Total (R$)</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let qtdParcela = 1; qtdParcela <= 21; qtdParcela++) {
        let taxa = 0;

        // Define a taxa de acordo com o número de parcelas
        if (qtdParcela == 1) { taxa = 1.14144; }
        else if (qtdParcela == 2) { taxa = 1.15111; }
        else if (qtdParcela == 3) { taxa = 1.15879; }
        else if (qtdParcela == 4) { taxa = 1.16655; }
        else if (qtdParcela == 5) { taxa = 1.17428; }
        else if (qtdParcela == 6) { taxa = 1.18207; }
        else if (qtdParcela == 7) { taxa = 1.19402; }
        else if (qtdParcela == 8) { taxa = 1.20191; }
        else if (qtdParcela == 9) { taxa = 1.20982; }
        else if (qtdParcela == 10) { taxa = 1.21777; }
        else if (qtdParcela == 11) { taxa = 1.22583; }
        else if (qtdParcela == 12) { taxa = 1.23380; }
        else if (qtdParcela == 13) { taxa = 1.24482; }
        else if (qtdParcela == 14) { taxa = 1.25294; }
        else if (qtdParcela == 15) { taxa = 1.26126; }
        else if (qtdParcela == 16) { taxa = 1.26931; }
        else if (qtdParcela == 17) { taxa = 1.27553; }
        else if (qtdParcela == 18) { taxa = 1.28581; }
        else if (qtdParcela == 19) { taxa = 1.30083; }
        else if (qtdParcela == 20) { taxa = 1.31144; }
        else if (qtdParcela == 21) { taxa = 1.32211; }

        let valorCalculado = valor * taxa; // Calcula o valor final
        let valorParcela = valorCalculado / qtdParcela;

        resultadoHTML += `
            <tr>
                <td>${qtdParcela}</td>
                <td>R$ ${valorParcela.toFixed(2)}</td>
                <td>R$ ${valorCalculado.toFixed(2)}</td>
            </tr>
        `;
    }

    resultadoHTML += `
            </tbody>
        </table>
    `;

    // Exibe todos os resultados no elemento "resultado"
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
