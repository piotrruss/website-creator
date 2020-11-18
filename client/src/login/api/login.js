export default (email, password) => (
  fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email, password }),
  })
    .then(() => window.location.href = "/admin")
    .catch(() => {})
);
