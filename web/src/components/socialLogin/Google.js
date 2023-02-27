import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';

function Google() {
  return (
    <LoginSocialGoogle
    // isOnlyGetToken
    // client_id={process.env.REACT_APP_GG_APP_ID || ''}
    // onLoginStart={onLoginStart}
    // onResolve={({ provider, data }) => {
    //   // setProvider(provider);
    //   // setProfile(data);
    // }}
    // onReject={(err) => {
    //   console.log(err);
    // }}
    >
      <GoogleLoginButton />
    </LoginSocialGoogle>
  );
}

export default Google;
