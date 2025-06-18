let responses;
const responsesPromise = fetch('responses.json')
  .then(res => res.json())
  .then(data => {
    responses = data;
  });

async function getLunaResponse(inputText) {
  await responsesPromise;
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
