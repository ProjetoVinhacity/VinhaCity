function quiz() {
    var perguntas = [
        "Qual é a principal uva usada na produção de vinho tinto na região de Bordeaux, na França?\n" +
        "a) Cabernet Sauvignon\nb) Merlot\nc) Pinot Noir\nd) Syrah",

        "Qual é a temperatura ideal de serviço para um vinho branco seco?\n" +
        "a) 10-12°C\nb) 14-16°C\nc) 18-20°C\nd) 22-24°C",
            
        "O que significa a sigla 'DOC' na denominação de origem de um vinho italiano?\n" +
        "a) Denominação de Origem Controlada\nb) Denominação de Origem Certificada\nc) Denominação de Origem Classificada\nd) Denominação de Origem de Corte",

        "Qual é o nome da região vinícola famosa por seus tintos encorpados e intensos, produzidos principalmente a partir da uva Malbec?\n" +
        "a) Napa Valley, EUA\nb) Rioja, Espanha\nc) Barossa Valley, Austrália\nd) Mendoza, Argentina",

        "O que é um vinho 'tanino'?\n" +
        "a) Um vinho tinto envelhecido em barris de carvalho\nb) Um vinho branco doce com alto teor alcoólico\nc) Um vinho com baixo teor alcoólico\nd) Uma substância encontrada nas cascas e sementes da uva que confere amargor e adstringência ao vinho",

        "Qual é o principal método de produção de espumantes, como o champanhe?\n" +
        "a) Método Charmat\nb) Método Asti\nc) Método Tradicional\nd) Método de Fermentação em Barril",

        "Qual é o país conhecido por produzir vinhos com aroma de xarope de bordo?\n" +
        "a) França\nb) Canadá\nc) Itália\nd) Austrália",

        "O que é um 'vinho de sobremesa'?\n" +
        "a) Um vinho tinto seco\nb) Um vinho branco suave\nc) Um vinho rosé\nd) Um vinho doce destinado a ser apreciado com sobremesas",

        "O que é um 'vinho de reserva'?\n" +
        "a) Um vinho recém-lançado no mercado\nb) Um vinho envelhecido por um longo período de tempo\nc) Um vinho produzido em pequena quantidade\nd) Um vinho com baixo teor alcoólico",

        "O que é uma 'vertical de vinhos'?\n" +
        "a) Uma degustação de vinhos de diferentes regiões\nb) Uma degustação de vinhos de diferentes uvas\nc) Uma degustação de vinhos de diferentes safras do mesmo vinho\nd) Uma degustação de vinhos de diferentes estilos"
        
    ];

    var respostas = ["b", "a", "a", "d", "d", "c", "b", "d", "b", "c"];
    var acertos = 0;

    for (var i = 0; i < perguntas.length; i++) {
        var resposta = prompt(perguntas[i]);
        if (resposta !== null && resposta.toLowerCase() === respostas[i]) {
            console.log("Resposta correta!");
            acertos++;
        } else {
            console.log("Resposta incorreta.");
        }
    }

    resultado.innerHTML =  `Você acertou ${acertos} de ${perguntas.length} perguntas.`
}

function background_color(cor) {
    switch(cor) {
      case 1:
        document.body.style.background = "#CACACA";
        break;
      case 2:
        document.body.style.background = "#252424";
        break;
      case 3:
        document.body.style.background = "#8C2E43";
        break;
    }
  }

  
