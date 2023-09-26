import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../features/auth/authActions';
import { useEffect } from 'react';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <>
      <div>
        <>
          <div className='container'>
            <div className='row'>
              <div className='col-md-20 offset-md'>
                <Form onSubmit={handleSubmit(submitForm)}>
                  {error && <Error>{error}</Error>}
                  <FloatingLabel controlId='email' label='Email'>
                    <Form.Control
                      type='email'
                      className='form-input'
                      {...register('email')}
                      required
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId='password' label='Password'>
                    <Form.Control
                      type='password'
                      className='form-input'
                      {...register('password')}
                      required
                    />
                  </FloatingLabel>
                  <div>
                    <button id='sign-in-button'>Sign In with Google</button>
                  </div>
                  <br />
                  <button type='submit' className='button' disabled={loading}>
                    {loading ? <Spinner /> : 'Login'}
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default LoginScreen;