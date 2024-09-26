document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const nomes = document.getElementById('nomes').value;
  const senha = document.getElementById('senha').value;

  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomes, senha })
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById('message').innerText = data;
      if (data === 'conectado') {
          window.location.href = "../acesso-restrito/acesso.html"; // Redireciona para uma página restrita
      }
  })
  .catch(error => {
      console.error('Erro:', error);
  });
});
