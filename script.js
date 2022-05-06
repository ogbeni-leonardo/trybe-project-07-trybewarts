function byId(id) {
  const element = document.getElementById(id);
  return element;
}

const emailInput = byId('email');
const passwordInput = byId('password');

const button = byId('btn-form-header');
button.onclick = (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

/* O botão só pode ser habilitado se a caixa de seleção estiver selecionada */
const agreement = byId('agreement');
agreement.onchange = (event) => {
  byId('submit-btn').disabled = !event.target.checked;
};

const textArea = byId('textarea');
textArea.addEventListener('keyup', () => {
  const caracteresRestantes = 500 - textArea.value.length;
  const count = document.getElementById('counter');
  count.innerHTML = `Caracteres : ${caracteresRestantes}`;
});

function addToForm(array) {
  let result = '<div class="result">\n';
  console.log(array);
  for (let index = 0; index < array.length; index += 1) {
    console.log(index);
    result += `<p>${array[index]}</p>\n`;
  }

  result += '</div>';
  console.log(result);
  byId('evaluation-form').innerHTML = result;
}

function concatItems(allValues, checkedItems) {
  const nome = `Nome: ${allValues[0]} ${allValues[1]}`;
  const email = `Email: ${allValues[2]}`;
  const casa = `Casa: ${allValues[3]}`;
  const familia = `Família: ${allValues[5]}`;
  let materias = 'Matérias: ';
  const avaliacao = `Avaliação: ${allValues[6]}`;
  const observacao = `Observações: ${allValues[4]}`;

  for (let index = 0; index < checkedItems.length; index += 1) {
    materias += checkedItems[index];
    if (index !== checkedItems.length - 1) materias += ', ';
  }

  const array = [nome, email, casa, familia, materias, avaliacao, observacao];
  console.log(array);
  addToForm(array);
}

const ids = ['input-name', 'input-lastname', 'input-email', 'house', 'textarea'];
const names = ['radio', 'checkbox'];

function type(elementType, element, array) {
  if (elementType === 'radio' && element.checked) {
    array[0].push(element.value);
  }
  if (elementType === 'checkbox' && element.checked) {
    array[1].push(element.value);
  }
}

const submitButton = byId('submit-btn');
submitButton.onclick = (event) => {
  event.preventDefault();

  const allValues = [];
  for (let index = 0; index < ids.length; index += 1) {
    allValues.push(byId(ids[index]).value);
  }

  const checkedItems = [];
  for (let index = 0; index < names.length; index += 1) {
    const radios = document.querySelectorAll(`input[type='${names[index]}']`);
    for (let secondIndex = 0; secondIndex < radios.length; secondIndex += 1) {
      type(names[index], radios[secondIndex], [allValues, checkedItems]);
    }
  }

  checkedItems.pop();
  concatItems(allValues, checkedItems);
};
