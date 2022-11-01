import './mainSlider.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const MainSlider = () => {
  return (
      <div className='mainSlider'>
          <img src="https://placepic.ru/wp-content/uploads/2018/05/image_5319021115093426252.jpg" alt="AVA"/>
          <div className="info">
              <img src='https://i.amediateka.tech/trim/640x320/_stor_/cms/content-contentasset/d/c9/ca5d14f1728f86b5810a2afe682ecdc9-123178-7fbeae28ff3b40df8831a459dae7e0e3.png' alt="AVA"/>
              <span className='description'>
                    Star Wars: Episode III - Revenge of the Sith
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