function Button(props) {
  return (
    <button onClick={props.handleClick} className='button' type={props.type}>
      {props.text}
    </button>
  );
}

export default Button;
