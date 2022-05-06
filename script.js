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
