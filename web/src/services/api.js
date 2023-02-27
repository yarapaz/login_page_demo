const sendLoginToApi = (login) => {
  return fetch('http://localhost:4000/users', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default sendLoginToApi;
