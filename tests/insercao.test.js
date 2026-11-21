// Testes de inserção de valores
// Eduardo Barella — RA 24088000-2

const SudokuBinario = require('../src/SudokuBinario');
const { tabuleiroInicial } = require('./helpers/tabuleiros');

function jogoNovo() {
  return new SudokuBinario({ tabuleiro: tabuleiroInicial() });
}

describe('Inserção de valores', () => {
  test('CT07 — deve aceitar inserir 0 ou 1 em célula vazia', () => {
    const jogo = jogoNovo();
    // (0,1) é null no puzzle
    expect(() => jogo.inserir(0, 1, 1)).not.toThrow();
    expect(jogo.obterCelula(0, 1)).toBe(1);
  });

  test('CT08 — deve lançar erro ao inserir valor diferente de 0 ou 1', () => {
    const jogo = jogoNovo();
    expect(() => jogo.inserir(0, 1, 2)).toThrow();
    expect(() => jogo.inserir(0, 1, -1)).toThrow();
  });

  test('CT09 — deve lançar erro ao inserir em coordenada inválida', () => {
    const jogo = jogoNovo();
    expect(() => jogo.inserir(-1, 0, 1)).toThrow();
    expect(() => jogo.inserir(0, 6, 1)).toThrow();
    expect(() => jogo.inserir(6, 6, 0)).toThrow();
  });

  test('CT10 — deve permitir apagar valor inserido (null)', () => {
    const jogo = jogoNovo();
    jogo.inserir(0, 1, 1);
    jogo.inserir(0, 1, null);
    expect(jogo.obterCelula(0, 1)).toBeNull();
  });

  test('CT11 — não deve permitir apagar célula fixa', () => {
    const jogo = jogoNovo();
    expect(() => jogo.inserir(0, 0, null)).toThrow();
  });

  test('CT12 — inserção não deve alterar outras células', () => {
    const jogo = jogoNovo();
    const antes = jogo.obterCelula(0, 2);
    jogo.inserir(0, 1, 1);
    expect(jogo.obterCelula(0, 2)).toBe(antes);
  });
});
