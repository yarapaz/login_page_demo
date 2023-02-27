import { GithubLoginButton } from 'react-social-login-buttons';
import { LoginSocialGithub } from 'reactjs-social-login';

function Github() {
  return (
    <LoginSocialGithub
    //   isOnlyGetToken
    //   client_id={process.env.REACT_APP_GITHUB_APP_ID || ''}
    //   client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ''}
    //   redirect_uri={REDIRECT_URI}
    //   onLoginStart={onLoginStart}
    //   onResolve={({ provider, data }) => {
    //     // setProvider(provider);
    //     // setProfile(data);
    //   }}
    //   onReject={(err) => {
    //     console.log(err);
    //   }}
    >
      <GithubLoginButton />
    </LoginSocialGithub>
  );
}

export default Github;
