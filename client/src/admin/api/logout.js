export default () => (
  fetch('/api/user/logout', {
    method: 'POST',
  })
  .then(() => window.location.href = "/")
  .catch(() => {})
);
