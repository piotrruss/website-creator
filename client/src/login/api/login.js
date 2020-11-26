export default (loginData) => (
  fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(loginData),
  })
    .then(() => window.location.href = "/admin")
    .catch(() => {})
);
