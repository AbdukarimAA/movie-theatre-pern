import './mainSlider.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const MainSlider = () => {
  return (
      <div className='mainSlider'>
          <img src="https://placepic.ru/wp-content/uploads/2018/05/image_5319021115093426252.jpg" alt="AVA"/>
          <div className="info">
              <img src="https://i.amediateka.tech/trim/640x320/_stor_/cms/showcases-bannerasset/3/f9/0c5bee94c7a6904b9af775e24e84b3f9-1846-fc68cea5489d4e52890d61d484cdae98.png" alt="AVA"/>
              <span className='description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum minima natus perferendis quaerat quod? Ab, consectetur dolorum ex excepturi minus nemo odio omnis, perspiciatis provident quae quaerat quo quos.
          </span>
              <div className="buttons">
                  <button className="play">
                      <PlayArrowIcon />
                      <span>Смотреть</span>
                  </button>
                  <button className="infoFilm">
                      <InfoOutlinedIcon />
                      <span>Узнать больше о фильме</span>
                  </button>
              </div>
          </div>
      </div>
  );
};