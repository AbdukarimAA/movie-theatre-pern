import './adminPage.scss';
import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {createFilm} from "../../service/redux/slices/FilmSlice";

export const AdminPage = () => {
    // const [movie, setMovie] = useState({
    //     title: '', country: '', desc: '', director: '', genres: '', img: '', imgSmall: '', imgTitle: '', limit: '', ratings: '', trailer: '', video: '', year: '', isSeries: ''
    // })
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [desc, setDesc] = useState('');
    const [director, setDirector] = useState('');
    const [genres, setGenres] = useState('');
    const [limit, setLimit] = useState(0);
    const [ratings, setRatings] = useState(0);
    const [year, setYear] = useState('');
    const [isSeries, setIsSeries] = useState(false);
    const [img, setImg] = useState(null);
    const [imgSmall, setImgSmall] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);

    const dispatch = useDispatch();
    // const changeHandler = (e) => {
    //     setMovie({
    //         ...movie,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const selectFile = (e) => {
        // setImg(e.target.files[0]);
        setImg(e.target.files)
    };

    const onAdd = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('country', country);
        formData.append('director', director);
        formData.append('genres', genres);
        formData.append('limit', `${limit}`);
        formData.append('ratings', `${ratings}`);
        formData.append('year', year);
        formData.append('isSeries', isSeries);
        formData.append('img', img);
        formData.append('imgSmall', imgSmall);
        formData.append('imgTitle', imgTitle);
        formData.append('trailer', trailer);
        formData.append('video', video);
        dispatch(createFilm(formData))
    };

    // const createMovie = async () => {
    //     try {
    //
    //         const res = await axios.post('http://localhost:5000/api/movie', onAdd)
    //
    //         console.log(res)
    //     }catch (e) {
    //         console.log(e)
    //     }
    // }

    return (
        <div className='admin'>
            <span>Админка</span>
            <div className='admin-modal'>
                <div className='admin-input'>
                    <input className='admin-input-value'
                           name='title'
                            value={title}
                           placeholder='Название фильма'
                            onChange={(e) => setTitle(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='desc'
                            value={desc}
                           placeholder='Описание фильма'
                           onChange={(e) => setDesc(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='director'
                            value={director}
                           placeholder='Режиссер'
                           onChange={(e) => setDirector(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='country'
                            value={country}
                           placeholder='Страна'
                           onChange={(e) => setCountry(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='year'
                            value={year}
                           placeholder='Год'
                           onChange={(e) => setYear(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='limit'
                            value={limit}
                           placeholder='Ограничения'
                           onChange={(e) => setLimit((e.target.value))}
                    />
                    <input className='admin-input-value'
                           name='genres'
                            value={genres}
                           placeholder='Жанр'
                           onChange={(e) => setGenres(e.target.value)}
                    />
                    <input className='admin-input-value'
                           name='ratings'
                            value={ratings}
                           placeholder='Рейтнг'
                           onChange={(e) => setRatings((e.target.value))}
                    />
                    <input className='admin-input-value'
                           name='isSeries'
                            value={isSeries}
                           placeholder='Тип фильма'
                           onChange={(e) => setIsSeries(e.target.value)}
                    />
                </div>
            </div>
            <div className="files">
                <div className="files-input">

                    <p>Please select img:</p>
                    <input type="file"
                           onChange={selectFile}
                           // value={movie.img}
                           />

                    <p>Please select imgTitle:</p>
                    <input type="file"
                           onChange={(e) => setImgSmall(e.target.files[0])}
                           // value={movie.imgTitle}
                           />

                    <p>Please select imgSmall:</p>
                    <input type="file"
                           onChange={(e) => setImgTitle(e.target.files[0])}
                           // value={movie.imgSmall}
                           />

                    <p>Please select trailer:</p>
                    <input type="file"
                           onChange={(e) => setTrailer(e.target.files[0])}
                           // value={movie.trailer}
                    />

                    <p>Please select video:</p>
                    <input type="file"
                           onChange={(e) => setVideo(e.target.files[0])}
                           // value={movie.video}
                    />

                </div>
            </div>
            <button onClick={onAdd}>Create</button>
        </div>
    )
};