import { MicrosoftLoginButton } from 'react-social-login-buttons';
import { LoginSocialMicrosoft } from 'reactjs-social-login';

function Microsoft() {
  return (
    <LoginSocialMicrosoft
    // isOnlyGetToken
    // client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ''}
    // redirect_uri={REDIRECT_URI}
    // onLoginStart={onLoginStart}
    // onResolve={({ provider, data }) => {
    //   // setProvider(provider);
    //   // setProfile(data);
    // }}
    // onReject={(err) => {
    //   console.log(err);
    // }}
    >
      <MicrosoftLoginButton />
    </LoginSocialMicrosoft>
  );
}

export default Microsoft;
