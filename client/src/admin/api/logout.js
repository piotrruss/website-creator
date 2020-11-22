export default () => (
  fetch('/api/user/logout', {
    method: 'POST',
  })
  .then(() => window.location.href = "/")
  .then(() => console.log('it will logout'))
  .catch(() => {})
);
