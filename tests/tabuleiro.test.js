// Testes de criação e estado inicial do tabuleiro
// Eduardo Barella — RA 24088000-2

const SudokuBinario = require('../src/SudokuBinario');
const { tabuleiroInicial } = require('./helpers/tabuleiros');

describe('Criação do tabuleiro', () => {
  test('CT01 — tabuleiro deve ter 6 linhas e 6 colunas', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    expect(jogo.linhas).toBe(6);
    expect(jogo.colunas).toBe(6);
  });

  test('CT02 — células preenchidas devem conter apenas 0 ou 1', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    for (let l = 0; l < 6; l++) {
      for (let c = 0; c < 6; c++) {
        const val = jogo.obterCelula(l, c);
        if (val !== null) {
          expect([0, 1]).toContain(val);
        }
      }
    }
  });

  test('CT03 — células fixas não devem ser alteráveis', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    // (0,0) é 0 fixo no puzzle
    expect(() => jogo.inserir(0, 0, 1)).toThrow();
  });

  test('CT04 — estado inicial deve ser "jogando"', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    expect(jogo.obterEstado()).toBe('jogando');
  });

  test('CT05 — deve lançar erro se tabuleiro tiver tamanho diferente de 6x6', () => {
    const tabInvalido = [[0,1],[1,0]];
    expect(() => new SudokuBinario({ tabuleiro: tabInvalido })).toThrow();
  });

  test('CT06 — deve lançar erro se célula tiver valor diferente de 0, 1 ou null', () => {
    const tab = tabuleiroInicial();
    tab[0][1] = 5;
    expect(() => new SudokuBinario({ tabuleiro: tab })).toThrow();
  });
});
