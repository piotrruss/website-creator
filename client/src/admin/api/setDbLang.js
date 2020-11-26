export default (language) => (
  fetch('/api/user/language', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ language }),
  })
    .catch(() => {})
);
