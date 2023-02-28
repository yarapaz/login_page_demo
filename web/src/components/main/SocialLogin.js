import Google from '../socialLogin/Google';
import Microsoft from '../socialLogin/Microsoft';
import Github from '../socialLogin/Github';

function SocialLogin() {
  return (
    <section className='socialLogin'>
      <Google />
      <Microsoft />
      <Github />
    </section>
  );
}

export default SocialLogin;
