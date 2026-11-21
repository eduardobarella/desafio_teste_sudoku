# desafio_teste_sudoku

Casos de teste em JavaScript (Jest) para **Sudoku Binário** de tamanho **6×6**.

O jogo em si **não está implementado** — os testes falham de propósito (TDD fase RED).

---

## Desafio

Sudoku Binário 6×6: cada célula recebe 0 ou 1, com as seguintes regras:
- Cada linha e coluna tem exatamente **três 0s e três 1s**
- Não pode haver **três valores iguais consecutivos** (na horizontal ou vertical)
- Cada linha deve ser **única**; cada coluna deve ser **única**

---

## Colaboradores

| Nome | RA | GitHub |
|---|---|---|
| Eduardo Barella | 24088000-2 | [@eduardobarella](https://github.com/eduardobarella) |

---

## Como rodar

Requer **Node.js 18+**.

```bash
npm install
npm test
```

Todos os testes falham até que `src/SudokuBinario.js` seja implementado — isso é esperado.

---

## Funcionamento dos casos de teste

Os testes testam a **lógica da classe** `SudokuBinario` (exportada em `src/SudokuBinario.js`).

### Interface esperada da classe

```js
// tabuleiro: matriz 6x6 com valores 0, 1 ou null (célula vazia)
const jogo = new SudokuBinario({ tabuleiro: [[0,null,...], ...] });

jogo.linhas                    // 6
jogo.colunas                   // 6
jogo.obterCelula(linha, col)   // 0 | 1 | null
jogo.obterTabuleiro()          // cópia defensiva da matriz 6x6
jogo.inserir(linha, col, val)  // val: 0 | 1 | null (apagar); lança erro se célula fixa
jogo.validar()                 // boolean — verifica todas as regras no estado atual
jogo.obterEstado()             // 'jogando' | 'vitoria'
```

### Casos de teste

| Arquivo | IDs | Comportamento testado |
|---|---|---|
| `tests/tabuleiro.test.js` | CT01–CT06 | Dimensões, valores válidos, células fixas, estado inicial |
| `tests/insercao.test.js` | CT07–CT12 | Inserir 0/1, apagar, coordenada inválida, célula fixa |
| `tests/validacao.test.js` | CT13–CT19 | Três consecutivos, desequilíbrio, repetição de linha/coluna |
| `tests/conclusao.test.js` | CT20–CT24 | Vitória, tabuleiro incompleto, cópia defensiva |

Total: **24 casos de teste**.
