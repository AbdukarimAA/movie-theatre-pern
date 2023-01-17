import './register.scss';
import {useDispatch} from "react-redux";
import {authRegister} from "../../service/redux/slices/UserSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useState} from "react";
import {Link} from "react-router-dom";

export const Register = () => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const registerHandler = async () => {
        try {
            const resAction = await dispatch(authRegister({username: form.username, email: form.email, password: form.password}))
            unwrapResult(resAction)
        } catch (e) {
            console.log(e)
        }
    };

    return(
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    {/*<img src="https://i.amediateka.tech/trim/%7BSIZE%7D/_stor_/cms/assets-dummyasset/f/71/93b885adfe0da089cdf634904fd59f71-1-d77d60a8c40e47ff929b03a5941b993f.png" alt=""/>*/}
                    <img src="https://www.amediateka.ru/static/images/logos/logo-full.svg" alt="logo" className="logo"/>
                    <span className='title'>Регистрация</span>
                    <span className='title2'>Зарегистрируйтесь для просмотра сотни фильмов и сериалов</span>
                    <div className="input">
                        <input className='email'
                               onChange={changeHandler}
                               name='username'
                               value={form.username}
                               placeholder='Имя'
                        />
                        <input className='email'
                               onChange={changeHandler}
                               name='email'
                               value={form.email}
                               placeholder='Почта'
                        />
                        <input className='email'
                               onChange={changeHandler}
                               name='password'
                               value={form.password}
                               placeholder='Пароль'
                               type='password'
                        />
                        <span>Не менее 6 символов</span>
                        <div className="check">
                            <input className='c' type="checkbox"/>
                            <span className='agreement'>
                                Я согласен с условиями пользовательского соглашения и даю свое согласие на обработку моих персональных данных
                              </span>
                        </div>
                        <Link to={'/main'}>
                            <div className="b">
                                <button className='but' onClick={registerHandler}>Зарегистрироваться</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="log">
              <span>
                  Уже зарегистрированы? &nbsp;
                  <Link to={'/'}>
                         Войдите в аккаунт
                  </Link>
              </span>
            </div>
        </div>
    );
}