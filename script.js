const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo",
        "Verifica apenas se os valores são iguais",
        "Compara valores e tipos de dados",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Diretório de Objetos Móveis",
        "Documento de Objeto Mínimo",
        "Modelo de Objeto de Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var minhaVar;",
        "variavel = minhaVar;",
        "declare minhaVar;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Um bloco de código executado antes de uma função",
        "Um objeto que armazena valores de outras funções",
        "Uma função junto com o ambiente léxico em que ela foi declarada",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'forEach' em arrays?",
      respostas: [
        "Adicionar um elemento ao final do array",
        "Executar uma função para cada elemento do array",
        "Ordenar os elementos do array em ordem alfabética",
      ],
      correta: 1
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca popular de gráficos",
        "Uma técnica para atualizar partes de uma página sem recarregar a página inteira",
        "Uma função para criar animações em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "'Este é um comentário'",
        "# Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que é hoisting em JavaScript?",
      respostas: [
        "Uma técnica para criar efeitos de animação",
        "Elevar uma declaração de variável ou função ao topo de seu escopo antes da execução",
        "Um método para acessar propriedades de objetos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'var' na declaração de variáveis?",
      respostas: [
        "Não há diferença, ambos são usados para declarar variáveis",
        "'let' é block-scoped, enquanto 'var' é function-scoped",
        "'var' é block-scoped, enquanto 'let' é function-scoped",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados leve e independente de linguagem",
        "Um método para criar objetos em JavaScript",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Loop ou Laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)  
  }