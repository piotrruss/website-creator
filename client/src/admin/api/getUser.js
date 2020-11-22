export default (setUser) => (
  fetch('/api/user/me')
    .then(res => res.json())
    .then(data => setUser(data.email))
    .catch(() => {})
);
