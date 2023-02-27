import Button from './Button';

function Form(props) {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <label htmlFor='username' hidden>
        Username
      </label>
      <input
        className='form__username_input'
        type='text'
        name='username'
        id='username'
        required
        onChange={props.handleInputs}
      />
      <p
        className={`form__error_message ${
          props.emptyUsernameMessage ? '' : 'collapsed'
        }`}
      >
        Empty field
      </p>
      <label htmlFor='password' hidden>
        Password
      </label>
      <input
        className='form__password_input'
        type={`${props.passwordShown ? 'text' : 'password'}`}
        name='password'
        id='password'
        required
        onChange={props.handleInputs}
      />
      <p className={`${props.emptyPasswordMessage ? '' : 'collapsed'}`}>
        Empty field
      </p>
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
      <Button sendLoginToApi={props.sendLoginToApi} />
      <p className={`${props.userNotFound !== '' ? '' : 'collapsed'}`}>
        {props.userNotFound}
      </p>
    </form>
  );
}

export default Form;
