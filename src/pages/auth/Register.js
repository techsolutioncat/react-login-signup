import Header from '../../components/auth/header/Header'
import SubCont from '../../components/auth/subcont/Subcont'
import Form from '../../components/auth/form/SignupForm'

function Register() {
  return (
    <>
      <Header />
      <div className='main-content d-flex'>
        <SubCont />
        <Form data={{ title: 'Create Account', subtitle: 'Provide necessary information to proceed with registration or sign up with social media' }} />
      </div>
    </>
  );
}

export default Register;
