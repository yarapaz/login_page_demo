import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <NavLink>
        <div className='header__img_wrapper'>
          <img
            className='header__img_wrapper__logo'
            src='https://pbs.twimg.com/profile_images/1420738683188039680/OnDjWorb_400x400.jpg'
            alt="Zertificon's logo"
          ></img>
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
