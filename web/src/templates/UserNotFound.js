function UserNotFound(props) {
  return (
    <p className={`${props.userNotFound !== '' ? '' : 'collapsed'}`}>
      {props.userNotFound}
    </p>
  );
}

export default UserNotFound;
