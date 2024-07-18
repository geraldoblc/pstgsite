// Função para carregar o Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawGraphic1);
google.charts.setOnLoadCallback(drawGraphic2); // Chama a função para o gráfico2 também

// Função para desenhar o gráfico de pizza (gráfico1)
function drawGraphic1() {
    const dados = [
        ['Category', 'Value'],
        ['Connection Margin Studies', 0],
        ['Global Minimum Cost Studies', 0],
        ['Access and Connection Studies', 4],
        ['Systemic Studies', 6],
        ['Maneuver Transient Studies', 60],
        ['Studies of Electromagnetic Transient Phenomena', 99],
        ['Power Electronics Device Modeling', 19],
        ['Studies on High Voltage Underground Transmission Lines', 12],
        ['Line Project', 11],
        ['Others', 1]
    ];

    const data = google.visualization.arrayToDataTable(dados);

    const options = {
        title: 'Completed Projects',
        width: '100%',
        height: '100%',
        legend: 'none',
        slices: {
            75: {offset: 0.5}
        },
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        }
    };

    const chart = new google.visualization.PieChart(document.getElementById('graphic1'));
    chart.draw(data, options);
}

// Função para desenhar o gráfico de pizza (gráfico2)
function drawGraphic2() {
    const dados2 = [
        ['Category', 'Value'],
        ['RSS \'Resonance\'', 16],
        ['CEM \'Electromagnetic Field\'', 16],
        ['TRV \'Transient Restoration Voltage\'', 25],
        ['HVDC \'High Voltage Direct Current\'', 13],
        ['SVC \'Static Var Compensator\'', 4],
        ['Wind Turbine', 4],
        ['Solar', 8],
        ['Interference', 6],
        ['Transmission Lines', 23],
        ['Secondary Arc', 28],
        ['Underground Lines', 12]
    ];

    const data2 = google.visualization.arrayToDataTable(dados2);

    const options2 = {
        title: 'New Projects',
        width: '100%',
        height: '100%',
        legend: 'none',
        pieSliceText: 'value',
        slices: {
            75: {offset: 0.5}
        },
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        }
    };

    const chart2 = new google.visualization.PieChart(document.getElementById('graphic2'));
    chart2.draw(data2, options2);
}

// Função para redimensionar os gráficos quando a janela for redimensionada
window.addEventListener('resize', function() {
    drawGraphic1();
    drawGraphic2(); // Chama a função de desenho do gráfico2 também
});
