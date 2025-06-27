// Conteúdo dos artigos
const articles = {
    'treino-casa': {
        title: 'Treino em Casa: Guia Completo para Iniciantes',
        category: 'Treino em Casa',
        date: '20/03/2024',
        image: '../images/blog/treino-casa.jpg',
        content: `
            <p>Treinar em casa pode ser uma excelente alternativa para quem não tem tempo ou recursos para frequentar uma academia. Com os exercícios certos e um pouco de disciplina, é possível obter resultados significativos.</p>
            
            <h2>Benefícios do Treino em Casa</h2>
            <ul>
                <li>Economia de tempo e dinheiro</li>
                <li>Flexibilidade de horários</li>
                <li>Privacidade e conforto</li>
                <li>Sem desculpas para faltar</li>
            </ul>

            <h2>Equipamentos Básicos</h2>
            <p>Para começar, você não precisa de muito. Alguns itens essenciais incluem:</p>
            <ul>
                <li>Tapete de yoga</li>
                <li>Faixas de resistência</li>
                <li>Pesos livres (opcional)</li>
                <li>Barra de flexão (opcional)</li>
            </ul>

            <h2>Exemplo de Rotina</h2>
            <p>Aqui está um exemplo de rotina para iniciantes:</p>
            <ol>
                <li>Aquecimento: 5-10 minutos de alongamento</li>
                <li>Flexões: 3 séries de 10-15 repetições</li>
                <li>Agachamentos: 3 séries de 15-20 repetições</li>
                <li>Prancha: 3 séries de 30 segundos</li>
                <li>Alongamento final: 5 minutos</li>
            </ol>
        `
    },
    'nutricao': {
        title: 'Nutrição para Ganho de Massa Muscular',
        category: 'Nutrição',
        date: '18/03/2024',
        image: '../images/blog/nutricao.jpg',
        content: `
            <p>Para ganhar massa muscular, a nutrição é tão importante quanto o treino. Uma dieta adequada fornece os nutrientes necessários para a construção e recuperação muscular.</p>

            <h2>Macronutrientes Essenciais</h2>
            <ul>
                <li>Proteínas: 1.6-2.2g por kg de peso corporal</li>
                <li>Carboidratos: 4-6g por kg de peso corporal</li>
                <li>Gorduras: 0.8-1g por kg de peso corporal</li>
            </ul>

            <h2>Alimentos Recomendados</h2>
            <ul>
                <li>Proteínas: Frango, peixe, ovos, carne magra</li>
                <li>Carboidratos: Arroz, batata doce, aveia, frutas</li>
                <li>Gorduras: Abacate, castanhas, azeite de oliva</li>
            </ul>

            <h2>Timing das Refeições</h2>
            <p>Distribua suas refeições ao longo do dia:</p>
            <ul>
                <li>Café da manhã: Rico em proteínas e carboidratos</li>
                <li>Pré-treino: 1-2 horas antes do treino</li>
                <li>Pós-treino: Até 1 hora após o treino</li>
                <li>Ceia: Proteína de digestão lenta</li>
            </ul>
        `
    },
    'suplementacao': {
        title: 'Suplementos Essenciais para o Seu Treino',
        category: 'Suplementação',
        date: '15/03/2024',
        image: '../images/blog/suplementacao.jpg',
        content: `
            <p>Os suplementos podem ser aliados importantes no seu treino, mas é essencial saber quais usar e como usá-los corretamente.</p>

            <h2>Suplementos Básicos</h2>
            <ul>
                <li>Whey Protein: Para complementar a ingestão de proteínas</li>
                <li>Creatina: Para aumentar força e massa muscular</li>
                <li>BCAA: Para reduzir fadiga e melhorar recuperação</li>
                <li>Multivitamínico: Para garantir nutrientes essenciais</li>
            </ul>

            <h2>Como Usar</h2>
            <p>Timing e dosagem são importantes:</p>
            <ul>
                <li>Whey: Após o treino ou entre refeições</li>
                <li>Creatina: 5g por dia, independente do horário</li>
                <li>BCAA: Durante ou após o treino</li>
                <li>Multivitamínico: Com a primeira refeição do dia</li>
            </ul>

            <h2>Precauções</h2>
            <ul>
                <li>Consulte um nutricionista</li>
                <li>Comece com doses menores</li>
                <li>Observe possíveis efeitos colaterais</li>
                <li>Mantenha-se hidratado</li>
            </ul>
        `
    },
    'treino-forca': {
        title: 'Treino de Força: Técnicas Avançadas',
        category: 'Treino',
        date: '25/03/2024',
        image: '../images/blog/treino-forca.jpg',
        content: `
            <p>O treino de força é essencial para quem busca hipertrofia e definição muscular. Conheça as técnicas avançadas que podem levar seus resultados a outro nível.</p>

            <h2>Técnicas Avançadas</h2>
            <ul>
                <li>Drop Set: Redução progressiva de peso</li>
                <li>Rest-Pause: Pausas curtas entre séries</li>
                <li>Supersets: Combinação de exercícios</li>
                <li>Pirâmide: Aumento progressivo de peso</li>
            </ul>

            <h2>Benefícios</h2>
            <ul>
                <li>Aumento da força máxima</li>
                <li>Melhor definição muscular</li>
                <li>Maior densidade óssea</li>
                <li>Melhor postura e equilíbrio</li>
            </ul>

            <h2>Precauções</h2>
            <ul>
                <li>Mantenha a técnica correta</li>
                <li>Use pesos adequados</li>
                <li>Respeite os intervalos</li>
                <li>Tenha um spotter quando necessário</li>
            </ul>
        `
    },
    'hiit': {
        title: 'HIIT: O Treino que Queima Mais Calorias',
        category: 'Treino',
        date: '23/03/2024',
        image: '../images/blog/hiit.jpg',
        content: `
            <p>O HIIT (High-Intensity Interval Training) é um dos métodos mais eficientes para queimar calorias e melhorar o condicionamento físico.</p>

            <h2>Como Funciona</h2>
            <ul>
                <li>Intervalos curtos de alta intensidade</li>
                <li>Períodos de recuperação ativa</li>
                <li>Duração total de 15-30 minutos</li>
                <li>Queima calórica prolongada</li>
            </ul>

            <h2>Benefícios</h2>
            <ul>
                <li>Maior queima de gordura</li>
                <li>Melhora do condicionamento</li>
                <li>Ganho de tempo nos treinos</li>
                <li>Versatilidade de exercícios</li>
            </ul>

            <h2>Exemplo de Treino</h2>
            <p>Treino HIIT básico de 20 minutos:</p>
            <ol>
                <li>Aquecimento: 5 minutos</li>
                <li>30s de alta intensidade / 30s de descanso (8x)</li>
                <li>Resfriamento: 5 minutos</li>
            </ol>
        `
    },
    'treino-funcional': {
        title: 'Treino Funcional: Benefícios e Exercícios',
        category: 'Treino',
        date: '21/03/2024',
        image: '../images/blog/treino-funcional.jpg',
        content: `
            <p>O treino funcional trabalha o corpo como um todo, melhorando força, equilíbrio e coordenação.</p>

            <h2>Principais Benefícios</h2>
            <ul>
                <li>Melhora da postura</li>
                <li>Ganho de força global</li>
                <li>Prevenção de lesões</li>
                <li>Melhor mobilidade</li>
            </ul>

            <h2>Exercícios Básicos</h2>
            <ul>
                <li>Agachamento com salto</li>
                <li>Flexão de braço</li>
                <li>Prancha com rotação</li>
                <li>Burpee</li>
            </ul>

            <h2>Dicas para Iniciantes</h2>
            <ul>
                <li>Comece com exercícios básicos</li>
                <li>Foque na execução correta</li>
                <li>Use pesos leves inicialmente</li>
                <li>Respeite seus limites</li>
            </ul>
        `
    },
    'sono': {
        title: 'Importância do Sono para o Ganho Muscular',
        category: 'Saúde',
        date: '28/03/2024',
        image: '../images/blog/sono.jpg',
        content: `
            <p>O sono é um dos pilares mais importantes para o ganho muscular e recuperação pós-treino.</p>

            <h2>Por que o Sono é Importante</h2>
            <ul>
                <li>Liberação de hormônio do crescimento</li>
                <li>Recuperação muscular</li>
                <li>Regulação do metabolismo</li>
                <li>Melhora da performance</li>
            </ul>

            <h2>Quantidade Ideal</h2>
            <ul>
                <li>7-9 horas por noite</li>
                <li>Qualidade do sono é crucial</li>
                <li>Rotina regular de sono</li>
                <li>Ambiente adequado</li>
            </ul>

            <h2>Dicas para Melhorar o Sono</h2>
            <ul>
                <li>Evite cafeína à noite</li>
                <li>Mantenha o quarto escuro e fresco</li>
                <li>Estabeleça uma rotina</li>
                <li>Evite telas antes de dormir</li>
            </ul>
        `
    },
    'motivacao': {
        title: 'Como Manter a Motivação nos Treinos',
        category: 'Saúde',
        date: '26/03/2024',
        image: '../images/blog/motivacao.jpg',
        content: `
            <p>Manter a motivação é um dos maiores desafios na jornada fitness. Descubra como se manter motivado a longo prazo.</p>

            <h2>Estratégias de Motivação</h2>
            <ul>
                <li>Estabeleça metas realistas</li>
                <li>Registre seu progresso</li>
                <li>Encontre um parceiro de treino</li>
                <li>Varie seus treinos</li>
            </ul>

            <h2>Superando Obstáculos</h2>
            <ul>
                <li>Planeje seus treinos</li>
                <li>Celebre pequenas vitórias</li>
                <li>Visualize seus objetivos</li>
                <li>Mantenha um diário de treino</li>
            </ul>

            <h2>Dicas Práticas</h2>
            <ul>
                <li>Prepare sua roupa na noite anterior</li>
                <li>Escute música motivadora</li>
                <li>Assista vídeos inspiradores</li>
                <li>Participe de desafios</li>
            </ul>
        `
    },
    'saude-mental': {
        title: 'Saúde Mental e Exercício Físico',
        category: 'Saúde',
        date: '24/03/2024',
        image: '../images/blog/saude-mental.jpg',
        content: `
            <p>O exercício físico tem um impacto profundo na saúde mental, ajudando a reduzir estresse e ansiedade.</p>

            <h2>Benefícios para a Saúde Mental</h2>
            <ul>
                <li>Redução do estresse</li>
                <li>Melhora do humor</li>
                <li>Aumento da autoestima</li>
                <li>Melhor qualidade do sono</li>
            </ul>

            <h2>Exercícios Recomendados</h2>
            <ul>
                <li>Yoga</li>
                <li>Meditação em movimento</li>
                <li>Exercícios ao ar livre</li>
                <li>Atividades em grupo</li>
            </ul>

            <h2>Dicas para Incorporar</h2>
            <ul>
                <li>Encontre atividades que você goste</li>
                <li>Estabeleça uma rotina</li>
                <li>Combine exercício com mindfulness</li>
                <li>Respeite seus limites</li>
            </ul>
        `
    },
    'cetogenica': {
        title: 'Dieta Cetogênica e Musculação',
        category: 'Nutrição',
        date: '30/03/2024',
        image: '../images/blog/cetogenica.jpg',
        content: `
            <p>A dieta cetogênica pode ser uma aliada na perda de gordura, mas requer cuidados especiais para quem pratica musculação.</p>

            <h2>Como Funciona</h2>
            <ul>
                <li>Baixo consumo de carboidratos</li>
                <li>Alto consumo de gorduras</li>
                <li>Moderado consumo de proteínas</li>
                <li>Indução à cetose</li>
            </ul>

            <h2>Benefícios</h2>
            <ul>
                <li>Perda de gordura acelerada</li>
                <li>Melhor controle de apetite</li>
                <li>Estabilidade energética</li>
                <li>Redução de inflamação</li>
            </ul>

            <h2>Precauções</h2>
            <ul>
                <li>Adaptação gradual</li>
                <li>Suplementação adequada</li>
                <li>Monitoramento de performance</li>
                <li>Acompanhamento profissional</li>
            </ul>
        `
    },
    'suplementos-naturais': {
        title: 'Suplementos Naturais para Performance',
        category: 'Nutrição',
        date: '28/03/2024',
        image: '../images/blog/suplementos-naturais.jpg',
        content: `
            <p>Conheça os suplementos naturais que podem melhorar sua performance nos treinos.</p>

            <h2>Suplementos Recomendados</h2>
            <ul>
                <li>Ashwagandha: Reduz estresse</li>
                <li>Rhodiola Rosea: Aumenta energia</li>
                <li>Ginseng: Melhora foco</li>
                <li>Curcumina: Anti-inflamatório</li>
            </ul>

            <h2>Benefícios</h2>
            <ul>
                <li>Menos efeitos colaterais</li>
                <li>Melhor absorção</li>
                <li>Benefícios adicionais</li>
                <li>Segurança a longo prazo</li>
            </ul>

            <h2>Como Usar</h2>
            <ul>
                <li>Dosagem adequada</li>
                <li>Consistência no uso</li>
                <li>Combinação estratégica</li>
                <li>Monitoramento de efeitos</li>
            </ul>
        `
    },
    'pre-pos-treino': {
        title: 'Alimentação Pré e Pós-Treino',
        category: 'Nutrição',
        date: '26/03/2024',
        image: '../images/blog/pre-pos-treino.jpg',
        content: `
            <p>A alimentação antes e depois do treino é crucial para maximizar seus resultados.</p>

            <h2>Pré-Treino</h2>
            <ul>
                <li>Carboidratos de fácil digestão</li>
                <li>Proteínas magras</li>
                <li>Hidratação adequada</li>
                <li>Timing correto</li>
            </ul>

            <h2>Pós-Treino</h2>
            <ul>
                <li>Proteínas de rápida absorção</li>
                <li>Carboidratos de alto índice glicêmico</li>
                <li>Recuperação muscular</li>
                <li>Reidratação</li>
            </ul>

            <h2>Dicas Práticas</h2>
            <ul>
                <li>Planeje suas refeições</li>
                <li>Tenha opções práticas</li>
                <li>Respeite seu horário</li>
                <li>Adapte às suas necessidades</li>
            </ul>
        `
    }
};

// Função para carregar o artigo
function loadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article');
    
    if (articleId && articles[articleId]) {
        const article = articles[articleId];
        
        // Atualizar título da página
        document.title = `${article.title} - NEXON FITNESS`;
        
        // Atualizar conteúdo
        document.querySelector('.post-category').textContent = article.category;
        document.querySelector('.post-date').textContent = article.date;
        document.querySelector('.post-title').textContent = article.title;
        document.querySelector('.post-image img').src = article.image;
        document.querySelector('.post-image img').alt = article.title;
        document.querySelector('.post-body').innerHTML = article.content;
    } else {
        // Redirecionar para a página do blog se o artigo não existir
        window.location.href = 'blog.html';
    }
}

// Carregar o artigo quando a página carregar
document.addEventListener('DOMContentLoaded', loadArticle); 