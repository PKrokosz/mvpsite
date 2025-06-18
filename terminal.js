
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  let responses = {};

  fetch('responses.json')
    .then(res => res.json())
    .then(data => {
      responses = data;
      executeCommand('menu_start');
    });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      executeCommand(command);
      input.value = '';
    }
  });

  function executeCommand(cmd) {
    if (cmd === 'clear') {
      output.textContent = '';
    } else if (cmd === 'help') {
      printOutput(Object.keys(responses).join('\n'));
    } else if (responses[cmd]) {
      printOutput(responses[cmd]);
    } else {
      printOutput('Nieznana komenda. Wpisz `help`.');
    }
  }

  function printOutput(text) {
    output.textContent += text + '\n> ';
    output.scrollTop = output.scrollHeight;
  }
});
