function byId(id) {
  return document.getElementById(id);
}

byId('btn-form-header').onclick = (event) => {
  event.preventDefault();

  if (byId('email').value === 'tryber@teste.com' && byId('password').value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

byId('agreement').onchange = (event) => {
  byId('submit-btn').disabled = !event.target.checked;
};

byId('textarea').addEventListener('keyup', (event) => {
  const caracteresRestantes = 500 - event.target.value.length;
  byId('counter').innerHTML = `Caracteres : ${caracteresRestantes}`;
});

function concatItems(textValues, checkedItems) {
  const radioFamily = document.querySelector('input[name="family"]:checked');
  const radioRate = document.querySelector('input[name="rate"]:checked');
  const result = `<div class="result">
  <p>Nome: ${textValues[0]} ${textValues[1]}</p>
  <p>Email: ${textValues[2]}</p>
  <p>Casa: ${textValues[3]}</p>
  <p>Família: ${(radioFamily) ? radioFamily.value : ''}</p>
  <p>Matérias: ${checkedItems.join(', ')}</p>
  <p>Avaliação: ${(radioRate) ? radioRate.value : ''}</p>
  <p>Observações: ${textValues[4]}</p>
</div>`;

  byId('evaluation-form').innerHTML = result;
}

const ids = ['input-name', 'input-lastname', 'input-email', 'house', 'textarea'];

byId('submit-btn').onclick = (event) => {
  event.preventDefault();
  const textInputs = [];
  for (let index = 0; index < ids.length; index += 1) {
    textInputs.push(byId(ids[index]).value);
  }
  const checkedItems = [];
  const checks = document.querySelectorAll('input[name="content"]:checked');
  checks.forEach((element) => checkedItems.push(element.value));
  concatItems(textInputs, checkedItems);
};
