function ErrorMessage(props) {
  return (
    <p
      className={`form__error_message ${props.errorControl ? '' : 'collapsed'}`}
    >
      {props.errorMessage}
    </p>
  );
}

export default ErrorMessage;
