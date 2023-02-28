import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import LoginPage from './LoginPage';
import callToApi from '../services/api';
import router from '../services/router';
import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Microsoft,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';

// SuperTokens init
SuperTokens.init({
  appInfo: {
    appName: 'Management Center',
    apiDomain: 'http://localhost:4000',
    websiteDomain: 'http://localhost:3000',
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Github.init(), Google.init(), Microsoft.init()],
      },
    }),
    Session.init(),
  ],
});

function App() {
  //States
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emptyUsernameMessage, setEmptyUsernameMessage] = useState(false);
  const [emptyPasswordMessage, setEmptyPasswordMessage] = useState(false);
  const [userNotFound, setUserNotFound] = useState('');
  const [login, setLogin] = useState({
    user: username,
    pass: password,
  });

  //Functions
  const showPassword = () => {
    setPasswordShown(true);
  };

  const hidePassword = () => {
    setPasswordShown(false);
  };

  const handleInputs = (ev) => {
    if (ev.currentTarget.id === 'username') {
      setUsername(ev.currentTarget.value);
    } else if (ev.currentTarget.id === 'password') {
      setPassword(ev.currentTarget.value);
    }
    setLogin({ ...login, pass: password, user: username });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const sendLoginToApi = () => {
    if (username === '' && password === '') {
      setEmptyUsernameMessage(true);
      setEmptyPasswordMessage(true);
    } else if (username === '') {
      setEmptyUsernameMessage(true);
      setEmptyPasswordMessage(false);
    } else if (password === '') {
      setEmptyUsernameMessage(false);
      setEmptyPasswordMessage(true);
    } else {
      setEmptyUsernameMessage(false);
      setEmptyPasswordMessage(false);
      callToApi(login).then((response) => {
        if (response.success === true) {
          router.redirect('/login');
        } else {
          setUserNotFound(response.errorMessage);
        }
      });
    }
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Main
                showPassword={showPassword}
                hidePassword={hidePassword}
                passwordShown={passwordShown}
                handleSubmit={handleSubmit}
                handleInputs={handleInputs}
                emptyUsernameMessage={emptyUsernameMessage}
                emptyPasswordMessage={emptyPasswordMessage}
                userNotFound={userNotFound}
                sendLoginToApi={sendLoginToApi}
              />
            </>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
