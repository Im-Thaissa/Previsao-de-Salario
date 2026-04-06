✅ Alterações realizadas no código original
O projeto original realizava uma previsão de notas com base nas horas de estudo.
O código foi adaptado, mantendo sua estrutura principal, para implementar uma nova previsão utilizando TensorFlow.js.


🔁 1. Alteração do tema
Antes: Horas de estudo → Nota
Depois: Anos de experiência → Salário


📝 2. Alterações no HTML
✔ Título da página

Antes:
HTML<title>Aula de ML Prática</title>Mostrar mais linhas
Depois:
HTML<title>Previsão de Salário com IA</title>Mostrar mais linhas


✔ Texto explicativo da página
Antes: Explicava a previsão de notas com base no estudo
Depois: Passou a explicar a previsão de salário com base nos anos de experiência

✔ Campo de entrada
Antes:
HTML<input type="number" id="horas">Mostrar mais linhas

Depois:
HTML<input type="number" id="experiencia">Mostrar mais linhas



🧠 3. Alterações no JavaScript
✔ Nome das variáveis
Antes:
JavaScriptconst horasDigitadasMostrar mais linhas

Depois:
JavaScriptconst anosExperienciaMostrar mais linhas



✔ Dados de treinamento
Antes (horas → notas):
JavaScriptconst dadosEntrada = tf.tensor2d([1, 2, 3, 4], [4, 1]);const dadosSaida = tf.tensor2d([2, 4, 6, 8], [4, 1]);Mostrar mais linhas

Depois (experiência → salário):
JavaScriptconst dadosEntrada = tf.tensor2d([1, 2, 3, 4], [4, 1]);const dadosSaida = tf.tensor2d([2, 4, 6, 8], [4, 1]);Mostrar mais linhas


✅ A estrutura foi mantida, mas agora os valores representam:
X = anos de experiência
Y = salário (em milhares de reais)


✔ Mensagem exibida ao usuário
Antes:
JavaScript"Nota Prevista: "Mostrar mais linhas
Depois:
JavaScript"Salário Previsto: R$ "Mostrar mais linhas


🎨 4. Estilização visual (extra)

Foi adicionado CSS diretamente no HTML para:

Melhorar o visual
Centralizar o conteúdo
Utilizar cores, fontes e efeitos modernos


⚙️ 5. O que foi mantido do código original
✅ Estrutura principal da função
✅ Criação do modelo com tf.sequential()
✅ Camada dense com uma entrada e uma saída
✅ Função de perda e otimizador
✅ Treinamento e previsão no navegador
✅ Uso do TensorFlow.js via CDN
