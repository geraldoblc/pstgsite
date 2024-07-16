// Função para carregar o Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(desenharGraficoPizza);

// Função para desenhar o gráfico de pizza
function desenharGraficoPizza() {
    // Dados das categorias
    const dados = [
        ['Categoria', 'Valor'],
        ['Estudos de Margem de Conexão', 0],
        ['Estudos de Mínimo Custo Global', 0],
        ['Estudos de Acesso e Conexão', 4],
        ['Estudos Sistêmicos', 6],
        ['Estudos de Transitórios de Manobra', 60],
        ['Estudos de Fenômenos de Transitórios Eletromagnéticos', 99],
        ['Modelagem de Dispositivos de Eletrônica de Potência', 19],
        ['Estudos em Linhas de Transmissão Subterrâneas em Alta Tensão', 12],
        ['Projeto de linha', 11],
        ['Outros', 1]
    ];

    // Converter os dados para o formato apropriado para o Google Charts
    const data = google.visualization.arrayToDataTable(dados);

    // Opções do gráfico de pizza
    const options = {
        title: 'Projetos Concluídos',
        width: '100%', // Largura do gráfico
        height: '100%', // Altura do gráfico
        legend: 'none', // Oculta a legenda
        slices: {  // Configuração individual das fatias
            75: {offset: 0.5}
        },
        chartArea: {
            left: 0, // Margem à esquerda (em relação à largura do gráfico)
            top: 0, // Margem superior (em relação à altura do gráfico)
            width: '100%', // Largura da área do gráfico (em relação à largura do gráfico)
            height: '100%' // Altura da área do gráfico (em relação à altura do gráfico)
        }
    };

    // Instanciar e desenhar o gráfico de pizza dentro da div #graficoPizza
    const chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    chart.draw(data, options);
}

// Função para redimensionar o gráfico quando a janela for redimensionada
window.addEventListener('resize', desenharGraficoPizza);