import Header from '../../components/auth/header/Header'
import SubCont from '../../components/auth/subcont/Subcont'
import Form from '../../components/auth/form/CreatePasswordForm'

function Signup() {
  return (
    <>
      <Header />
      <div className='main-content d-flex'>
        <SubCont />
        <Form data={{ title: 'Create Password', subtitle: "Set your security password. Recommended usage of at least 1 number, 1 uppercase letter and 1 special character" }} />
      </div>
    </>
  );
}

export default Signup;
