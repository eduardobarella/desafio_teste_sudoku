// Helpers com tabuleiros fixos para Sudoku Binário 6x6.
// Regras: cada célula é 0 ou 1; cada linha e coluna tem exatamente três 0s e três 1s;
// não pode haver três valores iguais consecutivos (linha ou coluna);
// cada linha e cada coluna deve ser única.
// Células null = vazias (a preencher).

// Tabuleiro resolvido válido.
function tabuleiroResolvido() {
  return [
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 0, 1],
  ];
}

// Tabuleiro parcialmente preenchido (puzzle) com solução única.
// null = célula vazia.
function tabuleiroInicial() {
  return [
    [0,    null, 0,    1,    null, 1   ],
    [null, 0,    1,    null, 1,    null],
    [0,    1,    null, null, 0,    1   ],
    [1,    null, null, 1,    null, 0   ],
    [null, 1,    0,    null, 1,    null],
    [1,    null, 1,    0,    null, null],
  ];
}

// Tabuleiro com três 1s seguidos na linha 0 (inválido).
function tabuleiroTresConsecutivos() {
  return [
    [1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 1, 1],
  ];
}

// Tabuleiro com linha repetida (linhas 0 e 1 iguais — inválido).
function tabuleiroLinhaRepetida() {
  return [
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0],
  ];
}

// Tabuleiro com desequilíbrio na linha 0 (quatro 1s — inválido).
function tabuleiroDesequilibrado() {
  return [
    [1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 0, 1],
  ];
}

module.exports = {
  tabuleiroResolvido,
  tabuleiroInicial,
  tabuleiroTresConsecutivos,
  tabuleiroLinhaRepetida,
  tabuleiroDesequilibrado,
};
