import Form from './main/Form';
import SocialLogin from './main/SocialLogin';

function Main(props) {
  return (
    <main className='main'>
      <Form
        showPassword={props.showPassword}
        hidePassword={props.hidePassword}
        passwordShown={props.passwordShown}
        handleSubmit={props.handleSubmit}
        handleInputs={props.handleInputs}
        emptyUsernameMessage={props.emptyUsernameMessage}
        emptyPasswordMessage={props.emptyPasswordMessage}
        userNotFound={props.userNotFound}
        sendLoginToApi={props.sendLoginToApi}
      />
      <SocialLogin />
    </main>
  );
}
export default Main;
