function Button(props) {
  return (
    <button className='button' type='submit' onClick={props.sendLoginToApi}>
      Submit
    </button>
  );
}

export default Button;
