import './mainSlider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export const MainSlider = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", width: "50"}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "210px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='app'>
            <Slider {...settings}>
                <div className="card">
                    <img src="http://avatars.mds.yandex.net/get-ott/1652588/2a0000016fb27b97beee97f93c92540dd577/orig"className='img' alt="AVA"/>
                </div>
                <div className="card">
                    <img src="http://avatars.mds.yandex.net/get-ott/1652588/2a0000016fb27b97beee97f93c92540dd577/orig"className='img' alt="AVA"/>
                    <span className='description'>
                  Star Wars: Episode III - Revenge of the Sith
            </span>
                </div>
            </Slider>
            <div className="info">
                <img className='im' src='https://i.amediateka.tech/trim/640x320/_stor_/cms/content-contentasset/d/c9/ca5d14f1728f86b5810a2afe682ecdc9-123178-7fbeae28ff3b40df8831a459dae7e0e3.png' alt="AVA"/>
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
            <div className="linear1"></div>
        </div>
    );
};