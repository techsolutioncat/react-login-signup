import Header from '../../components/auth/header/Header'
import SubCont from '../../components/auth/subcont/Subcont'
import Form from '../../components/auth/form/VerifyEmailForm'

function Signup() {
  return (
    <>
      <Header />
      <div className='main-content d-flex'>
        <SubCont />
        <Form data={{ title: 'Verify Your Email', subtitle: "We have send you a code.  Check your email and input the code to procced" }} />
      </div>
    </>
  );
}

export default Signup;
