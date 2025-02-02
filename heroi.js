// Variáveis do herói
let nome = "Pikachu";
let xp = 8000; // Esse valor pode ser alterado para testar outros níveis

let nivel;

// Estruturas de decisão
if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) { // XP entre 1.001 e 2.000
  nivel = "Bronze";
} else if (xp <= 5000) { // XP entre 2.001 e 5.000
  nivel = "Prata";
} else if (xp <= 7000) { // XP entre 5.001 e 7.000
  nivel = "Ouro";
} else if (xp <= 8000) { // XP entre 7.001 e 8.000
  nivel = "Platina";
} else if (xp <= 9000) { // XP entre 8.001 e 9.000
  nivel = "Ascendente";
} else if (xp <= 10000) { // XP entre 9.001 e 10.000
  nivel = "Imortal";
} else { // XP maior ou igual a 10.001
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);