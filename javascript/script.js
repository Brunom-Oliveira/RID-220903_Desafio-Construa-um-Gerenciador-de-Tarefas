// Seleciona os elementos do DOM
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let tarefasConcluidas = 0;

// Evento para capturar o envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Captura valores dos inputs
  const nome = document.getElementById('task-name').value.trim();
  const etiqueta = document.getElementById('task-tag').value.trim();

  if (nome === '') return;

  // Cria a tarefa
  const card = document.createElement('div');
  card.classList.add('task-card');

  const topo = document.createElement('div');
  topo.classList.add('task-top');

  const titulo = document.createElement('h3');
  titulo.textContent = nome;

  const botaoConcluir = document.createElement('button');
  botaoConcluir.textContent = 'Concluir';
  botaoConcluir.addEventListener('click', function () {
    concluirTarefa(card, botaoConcluir, titulo, badge, data);
  });

  topo.appendChild(titulo);
  topo.appendChild(botaoConcluir);

  const badge = document.createElement('span');
  badge.classList.add('badge');
  badge.textContent = etiqueta || 'sem etiqueta';

  const data = document.createElement('p');
  data.classList.add('date');
  data.textContent = 'Criado em: ' + new Date().toLocaleDateString('pt-BR');

  // Monta o card
  card.appendChild(topo);
  card.appendChild(badge);
  card.appendChild(data);

  // Adiciona à lista
  taskList.appendChild(card);

  // Limpa os campos do formulário
  form.reset();
});

// Função que marca a tarefa como concluída
function concluirTarefa(card, botao, titulo, badge, data) {
  card.classList.add('completed');
  botao.remove(); // Remove o botão

  const icone = document.createElement('span');
  icone.classList.add('check-icon');
  icone.innerHTML = '<img src="icone/icone.svg" alt="Ícone de concluído" />';
  card.querySelector('.task-top').appendChild(icone);

  tarefasConcluidas++;
  atualizarContador();
}

// Atualiza o texto do rodapé
function atualizarContador() {
  taskCounter.textContent =
    tarefasConcluidas === 1
      ? '1 tarefa concluída'
      : `${tarefasConcluidas} tarefas concluídas`;
}
