import ErrorMessage from '../templates/ErrorMessage';
import UserNotFound from '../templates/UserNotFound';
import Button from '../templates/Button';

function LoginForm(props) {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <label htmlFor={`${props.firstInputInfo}`} hidden>
        {props.firstInputInfo}
      </label>
      <input
        className={`form__${props.firstInputInfo}_input`}
        type='text'
        name={`${props.firstInputInfo}`}
        id={`${props.firstInputInfo}`}
        required
        onChange={props.handleInputs}
        placeholder={`${props.firstInputInfo}`}
        pattern='^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$'
      />
      <ErrorMessage
        errorControl={props.emptyUsernameMessage}
        errorMessage={props.emptyFieldsMessage}
      ></ErrorMessage>
      <label htmlFor={`${props.secondInputInfo}`} hidden>
        {props.secondInputInfo}
      </label>
      <input
        className={`form__${props.secondInputInfo}_input`}
        type={`${props.passwordShown ? 'text' : 'password'}`}
        name={`${props.secondInputInfo}`}
        id={`${props.secondInputInfo}`}
        required
        onChange={props.handleInputs}
        placeholder={`${props.secondInputInfo}`}
        pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"'
      />
      <ErrorMessage
        errorControl={props.emptyPasswordMessage}
        errorMessage={props.emptyFieldsMessage}
      ></ErrorMessage>
      <i
        className={`fa-regular fa-eye ${
          props.passwordShown ? '' : 'collapsed'
        }`}
        onClick={props.hidePassword}
      ></i>
      <i
        className={`fa-sharp fa-regular fa-eye-slash ${
          props.passwordShown ? 'collapsed' : ''
        }`}
        onClick={props.showPassword}
      ></i>
      <Button
        handleClick={props.sendLoginToApi}
        type={props.buttonType}
        text={props.buttonText}
      />
      <UserNotFound userNotFound={props.userNotFound}></UserNotFound>
    </form>
  );
}

export default LoginForm;
