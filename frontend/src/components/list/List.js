import './list.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {ListItem} from "../listItem/ListItem";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const List = () => {
    const [movies, setMovies] = useState([]);

    const ref = useRef();

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


    return (
        <div className='list'>
            <span className='listTitle'> Вам также понравится </span>
            <div className="container" ref={ref}>
                {
                    movies.map((movie) => (
                        <Link to={`/film/${movie.id}`}>
                            <ListItem {...movie}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}