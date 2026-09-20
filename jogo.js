// ==========================================
// ENEM QUEST - BIOLOGIA
// ==========================================

let pontuacao = 0;
let respondeu = false;
let anoSelecionado = 2015;
let questaoAtual = 0;


// ==========================================
// BANCO DE QUESTÕES
// ==========================================

const questoesPorAno = {

    // ======================================
    // 2015
    // ======================================

    2015: [

        // QUESTÃO 01
        {
            numero: 1,

            pergunta:
                "A indústria têxtil utiliza grande quantidade de corantes no processo de tingimento dos tecidos. O escurecimento das águas dos rios causado pelo despejo desses corantes pode desencadear uma série de problemas no ecossistema aquático. Considerando esse escurecimento das águas, o impacto negativo inicial que ocorre é o(a).",

            alternativas: {
                A: "eutrofização",
                B: "proliferação de algas",
                C: "inibição da fotossíntese",
                D: "fotodegradação da matéria orgânica",
                E: "aumento da quantidade de gases dissolvidos"
            },

            correta: "C",
            tema: "Ecologia"
        },


        // QUESTÃO 02
        {
            numero: 2,

            pergunta:
                "Um grupo de pesquisadores desenvolveu um método simples, barato e eficaz de remoção de petróleo contaminante na água, que utiliza um plástico produzido a partir do líquido da castanha-de-caju (LCC). A composição química do LCC é muito parecida com a do petróleo e suas moléculas, por suas características, interagem formando agregados com o petróleo. Para retirar os agregados da água, os pesquisadores misturam ao LCC nanopartículas magnéticas. Essa técnica considera dois processos de separação de misturas, sendo eles, respectivamente,",

            alternativas: {
                A: "flotação e decantação.",
                B: "decomposição e centrifugação.",
                C: "floculação e separação magnética.",
                D: "destilação fracionada e peneiração.",
                E: "dissolução fracionada e magnetização."
            },

            correta: "C",
            tema: "Separação de misturas"
        },


        // QUESTÃO 03
        {
            numero: 3,

            pergunta:
                "A soda cáustica pode ser usada no desentupimento de encanamentos domésticos e tem, em sua composição, o hidróxido de sódio como principal componente, além de algumas impurezas. A soda normalmente é comercializada na forma sólida, mas que apresenta aspecto “derretido” quando exposta ao ar por certo período. O fenômeno de “derretimento” decorre da",

            alternativas: {
                A: "absorção da umidade presente no ar atmosférico.",
                B: "fusão do hidróxido pela troca de calor com o ambiente.",
                C: "reação das impurezas do produto com o oxigênio do ar.",
                D: "adsorção de gases atmosféricos na superfície do sólido.",
                E: "reação do hidróxido de sódio com o gás nitrogênio presente no ar."
            },

            correta: "A",
            tema: "Química"
        },


        // QUESTÃO 04
        {
            numero: 4,

            pergunta:
                "Um importante princípio da biologia, relacionado à transmissão de caracteres e à embriogênese humana, foi quebrado com a descoberta do microquimerismo fetal. Microquimerismo é o nome dado ao fenômeno biológico referente a uma pequena população de células ou DNA presente em um indivíduo, mas derivada de um organismo geneticamente distinto. Investigando-se a presença do cromossomo Y, foi revelado que diversos tecidos de mulheres continham células masculinas. A análise do histórico médico revelou uma correlação extremamente curiosa: apenas as mulheres que antes tiveram filhos homens apresentaram microquimerismo masculino. Essa correlação levou à interpretação de que existe uma troca natural entre células do feto e maternas durante a gravidez. O princípio contestado com essa descoberta, relacionado ao desenvolvimento do corpo humano, é o de que",

            alternativas: {
                A: "o fenótipo das nossas células pode mudar por influência do meio ambiente.",
                B: "a dominância genética determina a expressão de alguns genes.",
                C: "as mutações genéticas introduzem variabilidade no genoma.",
                D: "as mitocôndrias e o seu DNA provêm do gameta materno.",
                E: "as nossas células corporais provêm de um único zigoto."
            },

            correta: "E",
            tema: "Genética"
        },


        // QUESTÃO 05
        {
            numero: 5,

            pergunta:
                "Algumas raças de cães domésticos não conseguem copular entre si devido à grande diferença em seus tamanhos corporais. Ainda assim, tal dificuldade reprodutiva não ocasiona a formação de novas espécies (especiação). Essa especiação não ocorre devido ao(à)",

            alternativas: {
                A: "oscilação genética das raças.",
                B: "convergência adaptativa das raças.",
                C: "isolamento geográfico entre as raças.",
                D: "seleção natural que ocorre entre as raças.",
                E: "manutenção do fluxo gênico entre as raças."
            },

            correta: "E",
            tema: "Evolução"
        },


        // QUESTÃO 06
        {
            numero: 6,

            pergunta:
                "A cariotipagem é um método que analisa células de um indivíduo para determinar seu padrão cromossômico. Essa técnica consiste na montagem fotográfica, em sequência, dos pares de cromossomos e permite identificar um indivíduo normal (46, XX ou 46, XY) ou com alguma alteração cromossômica. A investigação do cariótipo de uma criança do sexo masculino com alterações morfológicas e comprometimento cognitivo verificou que ela apresentava fórmula cariotípica 47, XY, +18. A alteração cromossômica da criança pode ser classificada como",

            alternativas: {
                A: "estrutural, do tipo deleção.",
                B: "numérica, do tipo euploidia.",
                C: "numérica, do tipo poliploidia.",
                D: "estrutural, do tipo duplicação.",
                E: "numérica, do tipo aneuploidia."
            },

            correta: "E",
            tema: "Genética"
        },


        // QUESTÃO 07
        {
            numero: 7,

            pergunta:
                "Durante uma expedição, um grupo de estudantes perdeu-se de seu guia. Ao longo do dia em que esse grupo estava perdido, sem água e debaixo de sol, os estudantes passaram a sentir cada vez mais sede. Consequentemente, o sistema excretor desses indivíduos teve um acréscimo em um dos seus processos funcionais. Nessa situação o sistema excretor dos estudantes",

            alternativas: {
                A: "aumentou a filtração glomerular.",
                B: "produziu maior volume de urina.",
                C: "produziu urina com menos ureia.",
                D: "produziu urina com maior concentração de sais.",
                E: "reduziu a reabsorção de glicose e aminoácidos."
            },

            correta: "D",
            tema: "Fisiologia"
        },


        // QUESTÃO 08
        {
            numero: 8,

            pergunta:
                "Tanto a febre amarela quanto a dengue são doenças causadas por vírus do grupo dos arbovírus, pertencentes ao gênero Flavivirus, existindo quatro sorotipos para o vírus causador da dengue. A transmissão de ambas acontece por meio da picada de mosquitos, como o Aedes aegypti. Entretanto, embora compartilhem essas características, hoje somente existe vacina, no Brasil, para a febre amarela e nenhuma vacina efetiva para a dengue. Esse fato pode ser atribuído à:",

            alternativas: {
                A: "maior taxa de mutação do vírus da febre amarela do que do vírus da dengue.",
                B: "Alta variabilidade antigênica do vírus da dengue à população humana do que do vírus da febre amarela.",
                C: "menor adaptação do vírus da dengue à população humana do que do vírus da febre amarela..",
                D: "presença de dois tipos de ácidos nucleicos no vírus da dengue e somente um tipo no vírus da febre amarela.",
                E: "baixa capacidade de indução da resposta imunológica pelo vírus da dengue em relação ao da febre amarela."
            },

            correta: "B",
            tema: "Virologia e Imunologia"
        },


        // QUESTÃO 09
        {
            numero: 9,

            pergunta:
                "A palavra “biotecnologia” surgiu no século XX, quando o cientista Herbert Boyer introduziu a informação responsável pela fabricação da insulina humana em uma bactéria, para que ela passasse a produzir a substância. As bactérias modificadas por Herbert Boyer passaram a produzir insulina humana porque receberam",

            alternativas: {
                A: "a sequência de DNA codificante de insulina humana.",
                B: "a proteína sintetizada por células humanas.",
                C: "um RNA recombinante de insulina humana.",
                D: "o RNA mensageiro de insulina humana.",
                E: "um cromossomo da espécie humana"
            },

            correta: "A",
            tema: "Biotecnologia"
        },


        // QUESTÃO 10
        {
            numero: 10,

            pergunta:
                "Os anfíbios representam o primeiro grupo de vertebrados que, evolutivamente, conquistou o ambiente terrestre. Apesar disso, a sobrevivência do grupo ainda permanece restrita a ambientes úmidos ou aquáticos, devido à manutenção de algumas características fisiológicas relacionadas à água. Uma das características a que o texto se refere é a",

            alternativas: {
                A: "reprodução por viviparidade.",
                B: "respiração pulmonar nos adultos.",
                C: "regulação térmica por endotermia.",
                D: "cobertura corporal delgada e altamente permeável.",
                E: "locomoção por membros anteriores e posteriores desenvolvidos."
            },

            correta: "D",
            tema: "Reino Animal"
        },


        // QUESTÃO 11
        {
            numero: 11,

            pergunta:
                "O formato das células de organismos pluricelulares é extremamente variado. Existem células discoides, como é o caso das hemácias, as que lembram uma estrela, como os neurônios, e ainda algumas alongadas, como as musculares. Em um mesmo organismo, a diferenciação dessas células ocorre por",

            alternativas: {
                A: "produzirem mutações específicas.",
                B: "possuírem DNA mitocondrial diferentes.",
                C: "apresentarem conjunto de genes distintos.",
                D: "expressarem porções distintas do genoma.",
                E: "terem um número distinto de cromossomos."
            },

            correta: "D",
            tema: "Citologia"
        },


        // QUESTÃO 12
        {
            numero: 12,

            pergunta:
                "Euphorbia milii é uma planta ornamental amplamente disseminada no Brasil e conhecida como coroa-de-cristo. O estudo químico do látex dessa espécie forneceu o mais potente produto natural moluscicida, a miliamina L. O uso desse látex em água infestada por hospedeiros intermediários tem potencial para atuar no controle da",

            alternativas: {
                A: "Dengue.",
                B: "Malária.",
                C: "Elefantíase",
                D: "Ascaridíase",
                E: "Esquistossomose."
            },

            correta: "E",
            tema: "Reino animal"
        }

    ],


    // ======================================
    // ANOS FUTUROS
    // ======================================

    2016: [],
    2017: [],
    2018: [],
    2019: [],
    2020: [],
    2021: [],
    2022: [],
    2023: [],
    2024: [],
    2025: [],
    2026: []

};


// ==========================================
// INICIAR JOGO
// ==========================================

function iniciarJogo() {

    document.getElementById("telaInicial").style.display = "none";

    document.getElementById("telaAnos").style.display = "block";
}


// ==========================================
// ABRIR ANO
// ==========================================

function abrirAno(ano) {

    if (
        !questoesPorAno[ano] ||
        questoesPorAno[ano].length === 0
    ) {

        alert(
            "As questões deste ano ainda serão adicionadas."
        );

        return;
    }

    anoSelecionado = ano;
    questaoAtual = 0;
    pontuacao = 0;
    respondeu = false;

    document.getElementById("telaAnos").style.display = "none";

    document.getElementById("telaQuestao").style.display = "block";

    mostrarQuestao();
}


// ==========================================
// MOSTRAR QUESTÃO
// ==========================================

function mostrarQuestao() {

    const questao =
        questoesPorAno[anoSelecionado][questaoAtual];

    document.getElementById("anoQuestao").textContent =
        "ENEM " + anoSelecionado;

    document.getElementById("numeroQuestao").textContent =
        "Questão " +
        String(questaoAtual + 1).padStart(2, "0");

    document.getElementById("pergunta").textContent =
        questao.pergunta;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    for (let letra in questao.alternativas) {

        const botao =
            document.createElement("button");

        botao.textContent =
            letra +
            ") " +
            questao.alternativas[letra];

        botao.onclick = function () {

            responder(letra);

        };

        alternativas.appendChild(botao);
    }

    document.getElementById("resultado").innerHTML =
        "";

    document.getElementById("botaoProxima").style.display =
        "none";
}


// ==========================================
// RESPONDER
// ==========================================

function responder(alternativa) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const questao =
        questoesPorAno[anoSelecionado][questaoAtual];

    const resultado =
        document.getElementById("resultado");

    if (alternativa === questao.correta) {

        pontuacao++;

        resultado.innerHTML =
            "✅ CORRETA!<br><br>" +
            "Você ganhou 1 ponto!<br>" +
            "Pontuação: " +
            pontuacao;
    }

    else {

        resultado.innerHTML =
            "❌ INCORRETA!<br><br>" +
            "A resposta correta é " +
            questao.correta +
            ".<br>" +
            "Pontuação: " +
            pontuacao;
    }

    document.getElementById("botaoProxima").style.display =
        "block";
}


// ==========================================
// PRÓXIMA QUESTÃO
// ==========================================

function proximaQuestao() {

    questaoAtual++;

    const totalQuestoes =
        questoesPorAno[anoSelecionado].length;

    if (questaoAtual < totalQuestoes) {

        respondeu = false;

        mostrarQuestao();
    }

    else {

        mostrarResultado();
    }
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function mostrarResultado() {

    const totalQuestoes =
        questoesPorAno[anoSelecionado].length;

    document.getElementById("telaQuestao").style.display =
        "none";

    document.getElementById("telaResultado").style.display =
        "block";

    const porcentagem =
        Math.round(
            (pontuacao / totalQuestoes) * 100
        );

    document.getElementById("resultadoFinal").innerHTML =
        "Você acertou <strong>" +
        pontuacao +
        "</strong> de <strong>" +
        totalQuestoes +
        "</strong> questões.<br><br>" +
        "🎯 Aproveitamento: <strong>" +
        porcentagem +
        "%</strong>";
}


// ==========================================
// VOLTAR PARA OS ANOS
// ==========================================

function voltarAnos() {

    document.getElementById("telaResultado").style.display =
        "none";

    document.getElementById("telaAnos").style.display =
        "block";
}
