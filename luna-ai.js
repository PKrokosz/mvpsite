let responses = {};

fetch('responses.json')
  .then(res => res.json())
  .then(data => { responses = data; });

function getLunaResponse(inputText) {
  const keys = Object.keys(responses);
  const lower = inputText.toLowerCase();

  for (let key of keys) {
    if (lower.includes(key)) {
      return `LUNA: ${responses[key]}`;
    }
  }
  return `LUNA: ${responses['default']}`;
}

export { getLunaResponse };