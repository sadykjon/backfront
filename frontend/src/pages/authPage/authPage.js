import React, { useState, useContext } from 'react';
import services from '../../services/service';
import { MyContext } from '../../context/my-context/my-context';

const AuthPage = () => {

  const { login, isActive } = useContext(MyContext)
  const [input, setInput] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    isActive(1)

    try {
      const data = await services.loginService({ ...input }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      login(data.data.token, data.data.userId)
      isActive(null)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="auth-page">
          <h3>Авторизация</h3>
          <form className='form from-login' action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={handleInputChange} type="email" name='email' id='' className='vaildate' />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input onChange={handleInputChange} type="password" name="password" id='' className='vaildate' />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button type='submit' className='btn black  waves-effect waves-light btn'>Войти</button>
              <span onClick={() => isActive(2)} className='btn-outline btn-reg'>Нет Аккаунта?</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;