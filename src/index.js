const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const db = new Database('./src/db/database.db', { verbose: console.log });

const app = express();
app.use(cors());
app.use(express.json());

const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.set('view engine', 'ejs');

app.post('/users', (req, res) => {
  const userLogin = req.body;

  const query = db.prepare(
    'SELECT * FROM Users WHERE username = ? AND password = ? '
  );
  const userSelected = query.get(userLogin.user, userLogin.pass);

  if (userSelected !== undefined) {
    const responseSuccess = {
      success: true,
      userId: userSelected.id,
    };
    res.json(responseSuccess);
  } else {
    const responseFail = {
      success: false,
      errorMessage: 'User not found',
    };
    res.json(responseFail);
  }
});

//Static servers
const staticServerPath = 'src/public-react';
app.use(express.static(staticServerPath));
