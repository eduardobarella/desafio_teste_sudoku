// Testes de validação das regras do Sudoku Binário
// Eduardo Barella — RA 24088000-2

const SudokuBinario = require('../src/SudokuBinario');
const {
  tabuleiroResolvido,
  tabuleiroTresConsecutivos,
  tabuleiroLinhaRepetida,
  tabuleiroDesequilibrado,
} = require('./helpers/tabuleiros');

describe('Validação das regras', () => {
  test('CT13 — tabuleiro resolvido válido deve passar na validação', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroResolvido() });
    expect(jogo.validar()).toBe(true);
  });

  test('CT14 — três valores iguais consecutivos na linha deve ser inválido', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroTresConsecutivos() });
    expect(jogo.validar()).toBe(false);
  });

  test('CT15 — linha com desequilíbrio (≠ três 0s e três 1s) deve ser inválida', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroDesequilibrado() });
    expect(jogo.validar()).toBe(false);
  });

  test('CT16 — linhas repetidas devem ser inválidas', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroLinhaRepetida() });
    expect(jogo.validar()).toBe(false);
  });

  test('CT17 — três valores iguais consecutivos na coluna deve ser inválido', () => {
    // Coluna 0: 0,0,0,1,1,1 — três 0s seguidos
    const tab = tabuleiroResolvido();
    tab[0][0] = 0; tab[1][0] = 0; tab[2][0] = 0;
    tab[3][0] = 1; tab[4][0] = 1; tab[5][0] = 1;
    const jogo = new SudokuBinario({ tabuleiro: tab });
    expect(jogo.validar()).toBe(false);
  });

  test('CT18 — colunas repetidas devem ser inválidas', () => {
    // Faz col 0 e col 1 iguais
    const tab = tabuleiroResolvido();
    for (let l = 0; l < 6; l++) tab[l][1] = tab[l][0];
    const jogo = new SudokuBinario({ tabuleiro: tab });
    expect(jogo.validar()).toBe(false);
  });

  test('CT19 — coluna com desequilíbrio deve ser inválida', () => {
    const tab = tabuleiroResolvido();
    // Coluna 0: quatro 1s
    tab[0][0] = 1; tab[1][0] = 1; tab[2][0] = 1; tab[3][0] = 1;
    tab[4][0] = 0; tab[5][0] = 0;
    const jogo = new SudokuBinario({ tabuleiro: tab });
    expect(jogo.validar()).toBe(false);
  });
});
