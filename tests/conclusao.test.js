// Testes de conclusão do puzzle
// Eduardo Barella — RA 24088000-2

const SudokuBinario = require('../src/SudokuBinario');
const { tabuleiroResolvido, tabuleiroInicial } = require('./helpers/tabuleiros');

describe('Conclusão do puzzle', () => {
  test('CT20 — tabuleiro completamente preenchido e válido deve dar vitória', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroResolvido() });
    expect(jogo.obterEstado()).toBe('vitoria');
  });

  test('CT21 — preencher todas as células corretamente deve dar vitória', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    // Preenche as células nulas com a solução correta
    const solucao = tabuleiroResolvido();
    for (let l = 0; l < 6; l++) {
      for (let c = 0; c < 6; c++) {
        if (jogo.obterCelula(l, c) === null) {
          jogo.inserir(l, c, solucao[l][c]);
        }
      }
    }
    expect(jogo.obterEstado()).toBe('vitoria');
  });

  test('CT22 — tabuleiro com células vazias não deve dar vitória', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    expect(jogo.obterEstado()).toBe('jogando');
  });

  test('CT23 — tabuleiro completo mas inválido não deve dar vitória', () => {
    // Tabuleiro com três consecutivos — completo mas errado
    const tab = [
      [1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 1, 1],
    ];
    const jogo = new SudokuBinario({ tabuleiro: tab });
    expect(jogo.obterEstado()).not.toBe('vitoria');
  });

  test('CT24 — obterTabuleiro deve retornar cópia defensiva', () => {
    const jogo = new SudokuBinario({ tabuleiro: tabuleiroInicial() });
    const tab = jogo.obterTabuleiro();
    tab[0][0] = 999;
    expect(jogo.obterCelula(0, 0)).not.toBe(999);
  });
});
