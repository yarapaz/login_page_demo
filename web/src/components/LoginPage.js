import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <h1>Welcome to Zertificon!</h1>
      <NavLink to='/'>Back to Main Page</NavLink>
    </>
  );
}

export default LoginPage;
