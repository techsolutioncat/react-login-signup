import Header from '../../components/auth/header/Header'
import SubCont from '../../components/auth/subcont/Subcont'
import Form from '../../components/auth/form/LoginForm'

function Login() {
  return (
    <>
      <Header />
      <div className='main-content d-flex'>
        <SubCont />
        <Form data={{ title: 'Welcome Back', subtitle: 'Go ahead and log in. Get acces to your incredible account!' }} />
      </div>
    </>
  );
}

export default Login;
