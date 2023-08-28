import React, { useContext, useState } from 'react';
import services from '../../services/service';
import { MyContext } from '../../context/my-context/my-context';

const RegisterPage = () => {
    const { isActive } = useContext(MyContext)
    const [input, setInput] = useState({ email: '', password: '' });

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await services.registerService({ ...input }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="auth-page">
                    <h3>Регистрация</h3>
                    <form className="form from-login" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="email" name="email" id="" className="vaildate" value={input.email} onChange={handleInputChange}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input type="password" name="password" id="" className="vaildate" value={input.password} onChange={handleInputChange}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" className="btn black waves-effect waves-light btn">
                                Регистрация
                            </button>
                            <span onClick={() => isActive(1)} className="btn-outline btn-reg">Уже есть аккаунт? </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;