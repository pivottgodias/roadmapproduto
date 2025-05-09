document.addEventListener('DOMContentLoaded', function () {
    const timelineGrid = document.getElementById('timelineGrid');

    // Dados da timeline (exemplo baseado na sua imagem)
    // startMonth e endMonth: 0 = Janeiro, 1 = Fevereiro, ..., 5 = Junho
    const timelineData = [
        {
            objective: "Objetivo de negócio",
            epic: "Épico (agrupamento de features que atendem um objetivo de negócio)",
            startMonth: 0, // Janeiro
            endMonth: 0,   // Janeiro
            status: "green" // Cor da barra (green, yellow, red, no-prazo)
        },
        {
            objective: "Objetivo de negócio",
            epic: "Épico (agrupamento de features que atendem um objetivo de negócio)",
            startMonth: 1, // Fevereiro
            endMonth: 2,   // Março
            status: "yellow"
        },
        {
            objective: "Objetivo de negócio",
            epic: "Épico (agrupamento de features que atendem um objetivo de negócio)",
            startMonth: 2, // Março
            endMonth: 3,   // Abril
            status: "red"
        },
        {
            objective: "Objetivo de negócio",
            epic: "Épico (agrupamento de features que atendem um objetivo de negócio)",
            startMonth: 4, // Maio
            endMonth: 5,   // Junho
            status: "no-prazo" // Conforme legenda da imagem
        }
        // Adicione mais itens conforme necessário
    ];

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

    // Mapeamento de status para classes CSS (reutilizando as existentes)
    const statusClasses = {
        "green": "status-green",     // Reutilizando a cor verde da seção Key Results
        "yellow": "status-yellow",   // Reutilizando a cor amarela
        "red": "status-red",         // Reutilizando a cor vermelha
        "no-prazo": "status-no-prazo"// Classe específica para "NO PRAZO" do timeline
    };

    timelineData.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('timeline-row'); // Adiciona a classe para estilização da linha

        // Célula do Objetivo
        const objectiveCell = document.createElement('div');
        objectiveCell.textContent = item.objective;
        row.appendChild(objectiveCell);

        // Célula do Épico
        const epicCell = document.createElement('div');
        epicCell.textContent = item.epic;
        row.appendChild(epicCell);

        // Células dos Meses
        for (let i = 0; i < months.length; i++) {
            const monthCell = document.createElement('div');
            if (i >= item.startMonth && i <= item.endMonth) {
                const barContainer = document.createElement('div');
                barContainer.classList.add('timeline-bar-container');

                const bar = document.createElement('div');
                bar.classList.add('timeline-bar');
                if (statusClasses[item.status]) {
                    bar.classList.add(statusClasses[item.status]);
                }
                // A barra ocupará 100% da célula do mês se estiver ativa nele
                bar.style.width = '100%';
                if (i > item.startMonth && i <= item.endMonth) {
                    // Adiciona classe 'continue' se for continuação de barra
                    // (pode precisar de estilo específico se quiser diferenciar)
                    // bar.classList.add('continue');
                }

                barContainer.appendChild(bar);
                monthCell.appendChild(barContainer);
            }
            row.appendChild(monthCell);
        }
        timelineGrid.appendChild(row);
    });
});
