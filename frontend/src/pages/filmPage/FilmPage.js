import './filmPage.scss';
import {NavBar} from "../../components/navBar/NavBar";
import {FilmInfoPage} from "../../components/filmInfoPage/FilmInfoPage";
import {List} from "../../components/list/List";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {ListItem} from "../../components/listItem/ListItem";


export const FilmPage = () => {
    const [film, setFilm] = useState(null);
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {
        const fetchFilm = async () => {
            const res = await axios.get(`http://localhost:5000/api/movie/getOneMovie/${id}`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoiS2FyaW0gQUFBIiwiZW1haWwiOiJLYXJpbWNoaWtAZ21haWwuY29tIiwiaXNBZG1pbiI6IkFETUlOIiwiaWF0IjoxNjcyMzA2Nzk0LCJleHAiOjE2NzIzOTMxOTR9.taKUh7rj4PG2KcoVh6aznQn1KugiINHL7_X1eclBtA8`
                }
            })
            setFilm(res.data)
            console.log(res.data)
        }
        fetchFilm();
    }, [])
    if(!film){
        return (<div>Loading</div>)
    }

    return(
        <div className='filmMain'>
            <NavBar />
            <FilmInfoPage {...film}/>
            <div className="filmInfo">
                <div className="trailer">
                    <span>Трейлер</span>
                    <video src={`http://localhost:5000/${film?.trailer}`}  progress controls/>
                </div>
                <div className="textInfo">
                    <div className="text">
                        <div className="desc">
                        <span className='desc'>
                            {film?.desc}
                        </span>
                        </div>
                        <div className="p">
                            <div className="people">
                                <span>Режиссеры <br/> {film?.director}</span>
                                <span>Актеры <br/>{film?.actors.map((actor) => (
                                    <span> {actor?.name}</span>
                                ))}</span>
                                <span>Страна <br/>{film?.country}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video">
                <video src={`http://localhost:5000/${film?.video}`} progress controls loop/>
            </div>
            <List />
        </div>
    );
};
