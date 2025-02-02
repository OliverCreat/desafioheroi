//Dados de entrada

calcularRanked()

function calcularRanked() {
    // Calcula o saldo de partidas
    // Esses valores podem ser alterados para testar outros níveis
    let vitorias = 10
    let derrotas = 7

    const saldoVitorias = vitorias - derrotas;
    
    let nivel;  
    // Define o nível do jogador com base na quantidade de vitórias
    if (vitorias <= 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }  
    // Retorna a mensagem com o saldo e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`)
  }