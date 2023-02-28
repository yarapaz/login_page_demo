import LoginForm from '../../templates/LoginForm';

function Form(props) {
  return (
    <LoginForm
      firstInputInfo={props.firstInputInfo}
      secondInputInfo={props.secondInputInfo}
      handleInputs={props.handleInputs}
      handleSubmit={props.handleSubmit}
      passwordShown={props.passwordShown}
      hidePassword={props.hidePassword}
      showPassword={props.showPassword}
      emptyUsernameMessage={props.emptyUsernameMessage}
      emptyPasswordMessage={props.emptyPasswordMessage}
      emptyFieldsMessage={props.emptyFieldsMessage}
      sendLoginToApi={props.sendLoginToApi}
      buttonType={props.buttonType}
      buttonText={props.buttonText}
    />
  );
}

export default Form;
