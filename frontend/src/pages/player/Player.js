import './player.scss';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export const Player = () => {
    const[film, setFilm] = useState();
    const {id} = useParams();
    console.log(id)

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

    return(
        <div className='player'>
            <div className='back'>
                <ChevronLeftOutlinedIcon />
                Home
            </div>
            <video className='video' autoPlay controls src={`http://localhost:5000/${film?.video}`} />
        </div>
    );
}