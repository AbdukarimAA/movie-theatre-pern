import './register.scss';

export const Register = () => {
  return(
      <div className='register'>
          <div className="top">
              <div className="wrapper">
                  {/*<img src="https://i.amediateka.tech/trim/%7BSIZE%7D/_stor_/cms/assets-dummyasset/f/71/93b885adfe0da089cdf634904fd59f71-1-d77d60a8c40e47ff929b03a5941b993f.png" alt=""/>*/}
                  <img src="https://thumb.tildacdn.com/tild6434-3264-4234-b565-313638626430/-/resize/560x/-/format/webp/photo.png" alt="logo" className="logo"/>
                  <span className='title'>Регистрация</span>
                  <span className='title2'>Зарегистрируйтесь для просмотра сотни фильмов и сериалов</span>
                  <div className="input">
                      <input className='email' type='email' placeholder='Email' autoComplete='off'/>
                      <input className='email' type="password" placeholder='Password' autoComplete='off'/>
                      <span>Не менее 6 символов</span>
                      <div className="check">
                              <input className='c' type="checkbox"/>
                              <span className='agreement'>
                                Я согласен с условиями пользовательского соглашения и даю свое согласие на обработку моих персональных данных
                              </span>
                      </div>
                      <div className="b">
                          <button className='but'>Зарегистрироваться</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="log">
              <span>
                  Уже зарегистрированы?
                  <a href="a">
                        Войдите в аккаунт
                  </a>
              </span>
          </div>
      </div>
  );
}