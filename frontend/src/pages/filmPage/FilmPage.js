import './filmPage.scss';
import {NavBar} from "../../components/navBar/NavBar";
import {FilmInfoPage} from "../../components/filmInfoPage/FilmInfoPage";
import {List} from "../../components/list/List";


export const FilmPage = () => {
    return(
      <div className='filmMain'>
          <NavBar />
          <FilmInfoPage />
          <div className="filmInfo">
              <div className="trailer">
                  <span>Трейлер</span>
                  <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"  progress controls/>
              </div>
              <div className="textInfo">
                <div className="text">
                    <div className="desc">
                        <span className='desc'>
                            Войны клонов идут уже третий год, дела в Галактической Республике с каждым днем все хуже. Джедаи, стоящие на страже мира и справедливости, стараются отражать атаки армии темного лорда ситхов, графа Дуку. «Звездные войны: Эпизод 3 — Месть ситхов» отражает переломный момент для Галактики, ведь именно в этой части молодой Энакин Скайуокер пытается найти баланс между любовью и долгом, но становится пешкой в игре более опытных манипуляторов.
                        </span>
                    </div>
                    <div className="p">
                        <div className="crew">
                            <span>Режиссеры:</span>
                            <span>В ролях:</span>
                            <span>Страна:</span>
                        </div>
                        <div className="people">
                            <span>Джордж Лукас</span>
                            <span>Натали Портман, Юэн МакГрегор</span>
                            <span>США</span>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="video">
              <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" autoPlay progress controls loop/>
          </div>
          <List />
      </div>
    );
};