import './mainSlider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export const MainSlider = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchFilms = async () => {
            const res = await axios.get('http://localhost:5000/api/movie/getAllMovies', {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoiS2FyaW0gQUFBIiwiZW1haWwiOiJLYXJpbWNoaWtAZ21haWwuY29tIiwiaXNBZG1pbiI6IkFETUlOIiwiaWF0IjoxNjcyMzA2Nzk0LCJleHAiOjE2NzIzOTMxOTR9.taKUh7rj4PG2KcoVh6aznQn1KugiINHL7_X1eclBtA8`
                }
            })
            console.log(res)
            setMovies(res.data?.rows)
        }

        fetchFilms()

    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", width: "50px", height: '50px'}}
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
                {
                    movies.map((movie) => (
                        <Link to={`/film/${movie.id}`}>
                            <div className="card">
                                <img src={`http://localhost:5000/${movie.img}`} className='img' alt="AVA"/>
                                <div className="info_2">
                                    <img className='im' src={`http://localhost:5000/${movie.imgTitle}`} alt="AVA"/>
                                    <span className='description'>
                                        {movie.title}
                                    </span>
                                    <div className="buttons">
                                        <Link to={`/player/${movie?.id}`}>
                                            <button className="play_2">
                                                <PlayArrowIcon />
                                                <span>Смотреть</span>
                                            </button>
                                        </Link>
                                        <Link to={`/film/${movie?.id}`}>
                                            <button className="infoFilm">
                                                <InfoOutlinedIcon />
                                                <span>Узнать больше о фильме</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
            <div className="linear1"></div>
        </div>
    );
};