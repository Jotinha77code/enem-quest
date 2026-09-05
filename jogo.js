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
                "As células dos seres vivos apresentam estruturas responsáveis por diferentes funções. Qual estrutura celular está diretamente relacionada à produção de energia por meio da respiração celular?",

            alternativas: {
                A: "Núcleo",
                B: "Mitocôndria",
                C: "Ribossomo",
                D: "Lisossomo",
                E: "Complexo golgiense"
            },

            correta: "B",

            tema: "Citologia"
        },


        // QUESTÃO 02

        {
            numero: 2,

            pergunta:
                "Qual processo permite que as plantas produzam matéria orgânica utilizando energia luminosa?",

            alternativas: {
                A: "Respiração celular",
                B: "Fermentação",
                C: "Fotossíntese",
                D: "Digestão",
                E: "Excreção"
            },

            correta: "C",

            tema: "Fotossíntese"
        },


        // QUESTÃO 03

        {
            numero: 3,

            pergunta:
                "O DNA é uma molécula fundamental para os seres vivos. Uma de suas principais funções é:",

            alternativas: {
                A: "Produzir energia diretamente",
                B: "Armazenar informações genéticas",
                C: "Realizar a digestão celular",
                D: "Transportar oxigênio no sangue",
                E: "Produzir lipídios"
            },

            correta: "B",

            tema: "Genética"
        },


        // QUESTÃO 04

        {
            numero: 4,

            pergunta:
                "Em um ecossistema, os organismos produtores são importantes porque:",

            alternativas: {
                A: "Alimentam-se exclusivamente de outros animais",
                B: "Produzem matéria orgânica a partir de matéria inorgânica",
                C: "Decompõem todos os seres vivos mortos",
                D: "Impedem a circulação de nutrientes",
                E: "Não participam das cadeias alimentares"

            },

            correta: "B",

            tema: "Ecologia"
        },


        // QUESTÃO 05

        {
            numero: 5,

            pergunta:
                "Uma pessoa apresenta uma alteração no número de cromossomos de suas células. Esse tipo de alteração é classificado como:",

            alternativas: {
                A: "Mutação cromossômica",
                B: "Mutação exclusivamente gênica",
                C: "Transcrição",
                D: "Tradução",
                E: "Replicação normal"
            },

            correta: "A",

            tema: "Genética"
        },


        // QUESTÃO 06

        {
            numero: 6,

            pergunta:
                "Durante a respiração celular aeróbica, a maior parte da produção de ATP ocorre:",

            alternativas: {
                A: "No núcleo",
                B: "Nos lisossomos",
                C: "Nas mitocôndrias",
                D: "No complexo golgiense",
                E: "Nos ribossomos"
            },

            correta: "C",

            tema: "Metabolismo"
        },


        // QUESTÃO 07

        {
            numero: 7,

            pergunta:
                "Em uma cadeia alimentar, os decompositores desempenham principalmente a função de:",

            alternativas: {
                A: "Produzir luz",
                B: "Consumir exclusivamente produtores",
                C: "Reciclar matéria orgânica e devolver nutrientes ao ambiente",
                D: "Impedir a decomposição",
                E: "Produzir oxigênio sem realizar metabolismo"
            },

            correta: "C",

            tema: "Ecologia"
        },


        // QUESTÃO 08

        {
            numero: 8,

            pergunta:
                "Uma característica importante das vacinas é estimular o organismo a desenvolver:",

            alternativas: {
                A: "Memória imunológica",
                B: "Digestão intracelular",
                C: "Produção de glicose",
                D: "Respiração anaeróbica",
                E: "Divisão celular descontrolada"
            },

            correta: "A",

            tema: "Imunologia"
        },


        // QUESTÃO 09

        {
            numero: 9,

            pergunta:
                "Quando uma célula realiza mitose, o resultado normalmente é a formação de:",

            alternativas: {
                A: "Quatro células geneticamente diferentes",
                B: "Duas células geneticamente semelhantes à célula original",
                C: "Uma única célula com metade dos cromossomos",
                D: "Quatro células com o dobro dos cromossomos",
                E: "Duas células obrigatoriamente haploides"
            },

            correta: "B",

            tema: "Divisão celular"
        },


        // QUESTÃO 10

        {
            numero: 10,

            pergunta:
                "Os glóbulos vermelhos humanos são especializados no transporte de gases respiratórios. Essa função está relacionada principalmente à presença de:",

            alternativas: {
                A: "Hemoglobina",
                B: "Insulina",
                C: "Queratina",
                D: "Melanina",
                E: "Colágeno"
            },

            correta: "A",

            tema: "Fisiologia"
        },


        // QUESTÃO 11

        {
            numero: 11,

            pergunta:
                "Em uma população de bactérias, algumas apresentam resistência a determinado antibiótico. Após a aplicação do medicamento, as bactérias resistentes conseguem sobreviver e se reproduzir. Esse fenômeno está relacionado à:",

            alternativas: {
                A: "Seleção natural",
                B: "Fotossíntese",
                C: "Osmose",
                D: "Digestão",
                E: "Fermentação"
            },

            correta: "A",

            tema: "Evolução"
        },


        // QUESTÃO 12

        {
            numero: 12,

            pergunta:
                "O desmatamento de uma área pode provocar redução da biodiversidade porque:",

            alternativas: {
                A: "Aumenta todos os habitats disponíveis",
                B: "Elimina ou modifica habitats utilizados pelos organismos",
                C: "Impede completamente a ocorrência de mutações",
                D: "Aumenta obrigatoriamente o número de espécies",
                E: "Transforma todos os organismos em produtores"
            },

            correta: "B",

            tema: "Biodiversidade"
        },


        // QUESTÃO 13

        {
            numero: 13,

            pergunta:
                "Na espécie humana, a fecundação normalmente ocorre quando:",

            alternativas: {
                A: "Dois óvulos se unem",
                B: "Um espermatozoide se une ao ovócito",
                C: "Duas células somáticas se unem",
                D: "Um espermatozoide se transforma em óvulo",
                E: "Uma célula muscular se une a uma célula nervosa"
            },

            correta: "B",

            tema: "Reprodução"
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