const prompt = require("prompt-sync")();
console.clear();

jogo: while (true) {
  let nome;
  let horario1;
  let horario2;
  let horario3;
  let horario4;
  let horario5;
  let horario6;
  let horario7;

  const primeiroDiahoras = [7, 9, 11, 17];
  const segundoDiahoras = [10, 12, 15];

  for (let i = 0; i < primeiroDiahoras.length; i++) {
    horario1 = primeiroDiahoras[0];
    horario2 = primeiroDiahoras[1];
    horario3 = primeiroDiahoras[2];
    horario4 = primeiroDiahoras[3];
  }
  for (let i = 0; i < segundoDiahoras.length; i++) {
    horario5 = segundoDiahoras[0];
    horario6 = segundoDiahoras[1];
    horario7 = segundoDiahoras[2];
  }
  function fim1() {
    console.clear();
    console.log(
      `${nome} chega em casa, toma um banho e descansa para um novo dia de trabalho amanhã.`
    );
    console.log();
  }
  function fim2() {
    console.clear();
    console.log(
      `agora são ${horario7} hrs e ${nome} acaba de chegar em casa...`
    );
    console.log(
      `vai dormir e acorda no outro dia pensando que tudo não passou de um sonho...`
    );
    console.log();
  }
  function fim3() {
    console.clear();
    console.log(`agora são ${horario7} hs e ${nome} acaba de chegar em casa!`);
    console.log();
    prompt(`pressione ENTER para continuar: `);
    console.clear();
    console.log(`depois de pensar muito ${nome} toma a decisão de usar seus poderes para fazer o bem 
  e passa a viver uma vida de Super Herói `);
    console.log();
  }

  function trabalho1() {
    console.clear();
    console.log(
      `agora são ${horario2} hrs e ${nome} acaba de chegar ao trabalho.`
    );
    console.log(status);
    let bomDia = +prompt(
      `${nome}: Bom dia chefe! Bora para mais um dia incrível de trabalho. [pressione 1] `
    );
    console.clear();
    while (true) {
      if (bomDia !== 1) {
        bomDia = +prompt(
          `${nome}: Bom dia chefe! Bora para mais um dia incrível de trabalho. [pressione 1] `
        );
        console.clear();
      } else {
        break;
      }
    }

    console.log(`${nome} bater o ponto, `);
    console.log(`verifica as pendências do dia anterior, `);
    console.log(`responde aos seus emails `);
    console.log(`e da manutenção nos códigos dos programas de cada cliente, `);

    console.log();
    let almoco = +prompt(
      `${nome}: nossa, meu estomago esta roncando, vou almoçar [pressione 1] `
    );
    console.clear();
    while (true) {
      if (almoco !== 1) {
        almoco = +prompt(
          `${nome}: nossa, meu estomago esta roncando, vou almoçar [pressione 1] `
        );
        console.log();
      } else {
        status.fisico = `com muita fome`;
        console.log(status);
        prompt(`pressione ENTER para continuar: `);
        console.clear();
        break;
      }
    }

    status.fisico = `tranquilo`;
    console.log(`retorno do almoço, `);
    console.log(status);
    console.log(`${nome} finaliza as pendências, `);
    console.log(`encaminha para os clientes os serviços concluídos, `);
    console.log();
    console.log(`fim de expediente!`);
    console.log();
    prompt(`pressione ENTER para continuar: `);
    console.clear();
  }
  function trabalho2() {
    console.clear();
    console.log(
      `agora são ${horario3} hrs, ${nome} acaba de chegar no trabalho`
    );

    status.emocional = `preocupado`;
    status.fisico = `tenso`;
    console.log(status);
    let atrasado = +prompt(
      `${nome} muito atrasado levou bronca do chefe... [pressione 1] `
    );
    console.log();
    console.clear();
    while (true) {
      if (atrasado !== 1) {
        atrasado = +prompt(
          `chegou atrasado, levou bronca do chefe... [pressione 1] `
        );
        console.log();
        console.clear();
      } else {
        break;
      }
    }
    console.log();
    console.log(`${nome} finaliza as pendências no trabalho e `);
    console.log(`encaminha para os clientes os serviços concluídos, `);
    console.log(`fim de expediente!`);
    console.log();
    prompt(`pressione ENTER para continuar: `);
    console.clear();
  }

  const heroi = {
    emocional: `alerta`,
    fisico: `super forte`,
    percepcao: `super Apurada`,
    visao: `Raio X`,
    velocidade: `Super Rápido`,
  };
  const status = {
    emocional: `equilibrado`,
    fisico: `descansado`,
    percepcao: `comum`,
    visao: `míope`,
    velocidade: `comum`,
  };
  console.log(`O Justiceiro!`);
  console.log();
  console.log(`-------------------------------------------`);
  nome = prompt(`Escolha o nome do personagem: `);
  console.log(`-------------------------------------------`);
  console.clear();
  console.log(
    `---------------------------------------------------------------------`
  );

  dia: while (true) {
    console.log(`agora são ${horario1} hrs`);
    console.log(
      `mais um dia se inicia para você ${nome}, o despertador esta tocando... `
    );
    acordar = prompt(`você vai levantar [sim ou nao] ? `);
    console.clear();
    console.log(
      `---------------------------------------------------------------------`
    );
    while (true) {
      if (acordar === `sim`) {
        console.log(
          `${nome}: como é bom acordar! vou para mais um dia de trabalho.`
        );
        trabalho1();

        break;
      } else if (acordar === `nao`) {
        console.log(`agora são ${horario1} hrs e ${nome} acabou de acordar.`);
        console.log(`${nome}: nossa! estou atrasado para o trabalho...`);
        trabalho2();

        break;
      } else {
        acordar = prompt(`você vai levantar [sim ou nao] ? `);
        console.log(
          `---------------------------------------------------------------------`
        );
      }
    }
    console.log(
      `-----------------------------------------------------------------------------------------------------`
    );
    console.log(
      `agora são ${horario4} hrs e na saída do trabalho como de costume ${nome} caminhando até a estação de trem, de repente escuta um grito de socorro`
    );
    console.log();
    let socorro = prompt(
      `você vai ver o que esta acontecendo ${nome} [sim ou nao]? `
    );
    console.clear();
    console.log(
      `-----------------------------------------------------------------------------------------------------`
    );

    while (true) {
      if (socorro === `sim`) {
        console.log(`${nome} corre para saber o que esta acontecendo e quando chega na esquina próxima a estação de trem, 
    percebe que uma moça esta sendo assaltada. Sem hesitar, ${nome} corre para salvar a jovem mais sem perceber acaba entrando 
    na frente de um caminhão com produtos radioativos e o motorista na tentativa de desviar acaba tombando o caminhão. `);
        console.log();
        prompt(`pressione ENTER para continuar: `);
        console.clear();
        console.log(
          `${nome} fica coberto por material radioativo e acaba desmaiando!`
        );
        console.log();
        prompt(`pressione ENTER para continuar: `);
        console.clear();

        break dia;
      } else if (socorro === `nao`) {
        console.log(
          `${nome} ignora os gritos de socorro, percebe que seu trem esta quase chegando e corre para não perder o horário pois não quer chegar tarde em casa...`
        );
        console.log();
        prompt(`pressione ENTER para continuar: `);
        console.clear();

        fim1();
        break jogo;
      } else {
        socorro = prompt(
          `você vai ver o que esta acontecendo ${nome} [sim ou nao]? `
        );
        console.clear();
        console.log(
          `-----------------------------------------------------------------------------------------------------`
        );
      }
    }
  }

  console.log(`no dia seguinte as ${horario5} hrs ${nome} acorda no hospital, milagrosamente sem nenhum ferimento, os médicos não conseguem 
            entender nada mas como ${nome} está bem recebe alta médica`);
  console.log();
  console.log(
    `${nome} sai do hospital se sentindo muito diferente! mais não entende o que esta acontecendo... `
  );
  console.log(heroi);
  console.log(`agora são ${horario6} hrs e ${nome} está a caminho de casa...`);
  console.log();
  let superForca = prompt(
    `${nome}: nossa como estou diferente! Que força sobrenatural tem um carro aqui na rua devo tentar levanta-lo [sim ou nao] ? `
  );
  console.clear();
  while (true) {
    if (superForca === `sim`) {
      console.log(
        `caramba! não acredito! consegui levantar o carro... que força incrivel`
      );
      console.log();
      prompt(`pressione ENTER para continuar: `);
      console.clear();
      fim3();
      break;
    } else if (superForca === `nao`) {
      console.log(
        `melhor não, acho que to ficando maluco! preciso dormir, vou pra casa...`
      );
      console.log();
      prompt(`pressione ENTER para continuar: `);
      console.clear();
      fim2();
      break;
    } else {
      superForca = prompt(
        `${nome}: nossa como estou diferente! Que força sobrenatural tem um carro aqui na rua devo tentar levanta-lo [sim ou nao] ? `
      );
      console.clear();
    }
  }
  console.clear();
  break;
}
