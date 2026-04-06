async function treinarEPrever() {

    // Elementos da tela
    const textoStatus = document.getElementById("status");
    const textoResultado = document.getElementById("resultado");

    // Valor digitado pelo usuário
    const anosExperiencia = Number(document.getElementById("experiencia").value);

    textoStatus.innerText = "Status: Treinando a IA...";

    // =========================
    // 1. CRIAR O MODELO
    // =========================
    const modelo = tf.sequential();
    modelo.add(tf.layers.dense({
        units: 1,
        inputShape: [1]
    }));

    // =========================
    // 2. COMPILAR O MODELO
    // =========================
    modelo.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    // =========================
    // 3. DADOS DE TREINO
    // X = anos de experiência
    // Y = salário (em milhares de reais)
    // =========================
    const dadosEntrada = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const dadosSaida = tf.tensor2d([2, 4, 6, 8], [4, 1]);

    // =========================
    // 4. TREINAMENTO
    // =========================
    await modelo.fit(dadosEntrada, dadosSaida, {
        epochs: 200
    });

    textoStatus.innerText = "Status: IA treinada com sucesso!";

    // =========================
    // 5. PREVISÃO
    // =========================
    const previsao = modelo.predict(
        tf.tensor2d([anosExperiencia], [1, 1])
    );

    const salarioPrevisto = previsao.dataSync()[0];

    // Resultado final
    textoResultado.innerText =
        "Salário Previsto: R$ " + salarioPrevisto.toFixed(2) + " mil";
}