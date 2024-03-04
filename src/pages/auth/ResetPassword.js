import Header from '../../components/auth/header/Header'
import SubCont from '../../components/auth/subcont/Subcont'
import Form from '../../components/auth/form/ResetPasswordForm'

function Signup() {
  return (
    <>
      <Header />
      <div className='main-content d-flex'>
        <SubCont />
        <Form data={{ title: 'Reset Password', subtitle: "Ready to create new password? Please type something you'll remember." }} />
      </div>
    </>
  );
}

export default Signup;
