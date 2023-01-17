import './filmInfoPage.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import {Link} from "react-router-dom";

export const FilmInfoPage = ({id, title, genres, ratings, limit, imgTitle, img, year, desc}) => {


    return (
        <div className='mainSlider'>
            <img src={`http://localhost:5000/${img}`} className='mainPhoto' alt="AVA"/>
            <div className="linear"></div>
            <div className="info">
                <img src={`http://localhost:5000/${imgTitle}`} alt="AVA"/>
                {/*  <span className='description'>*/}
                {/*      {desc}*/}
                {/*</span>*/}
                <div className="buttons">
                    <Link to={`/player/${id}`}>
                        <button className="play">
                            <PlayArrowIcon />
                            <span>Смотреть</span>
                        </button>
                    </Link>
                    <button className="infoFilm">
                        <AddCircleOutlineRoundedIcon className='add'/>
                        <span>В избранное</span>
                    </button>
                    <div className="over">
                        <FavoriteBorderSharpIcon className='icons like'/>
                        <ThumbDownOutlinedIcon className='icons dislike'/>
                        <ShareIcon className='icons share'/>
                    </div>
                </div>
            </div>
            <div className="rate">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIzLjMyMyAyMS4xNTRzLS4wNjQtLjE4Ny0uMTkyLS42MjNjLS4xMjgtLjM3My0uNTc1LS41Ni0uODMtLjY4NC0uMzg0LS4xODctLjM4NC0uNDk4LS4xOTItLjYyMi4xOTEtLjEyNS4yNTUtLjE4NyAxLjQ3LS43NDcgMS4yMTMtLjU2LS4zODQtLjgwOS0xLjE1LTEuMzA2LS41NzYtLjM3NC0uODMxLS44MS0uODk1LTEuMDU4IDAtLjA2Mi0uMDY0LS4wNjItLjA2NC0uMTI0TDE1LjcxOSAwaC01LjQ5NUw0LjUzNyAxNS44MDNsLS4wNjQuMTI0cy0uMzg0Ljg3MS4wNjQgMS4yNDVjLjM4My4zMSAxLjIxNC42ODQtLjA2NCAxLjI0NC0xLjIxNC41Ni0xLjcyNS43NDctMS45MTcuODcxLS4xOTIuMTI1LS4zMi40MzYuMDY0LjQ5OC4zMi4wNjIuMzIuNDM1LjE5Mi44MDktLjEyOC4zNzMtLjI1Ni42MjItLjI1Ni42MjJMMCAyOC4yNDZoNS40OTVsMi41NTYtNy4wOTJzLjA2NC0uMTg3LjI1Ni0uNTZjLjEyOC0uMzc0LjEyOC0uNzQ3LS4xOTItLjgxLS4zMi0uMDYxLS4yNTYtLjM3Mi0uMDY0LS40OTcuMTkyLS4xMjQuNzAzLS4zMTEgMS45MTctLjg3IDEuMjE0LS41Ni40NDctLjk5Ni4wNjQtMS4yNDUtLjUxMS0uMzc0LS4wNjQtMS4yNDUtLjA2NC0xLjI0NWwzLjAwMy04LjI3NCAzLjE5NSA4LjgzNGgtNC42NjRjLS4wNjQuMjUgMCAuNTYuMjU1Ljc0Ny4zODQuMzExIDEuMjE0LjY4NC0uMDY0IDEuMjQ0LTEuMjE0LjU2LTEuNzI1Ljc0Ny0xLjkxNy44NzEtLjE5MS4xMjUtLjI1NS40MzYuMDY0LjQ5OC4zMi4wNjIuMzIuNDM2LjE5Mi44MDktLjEyOC4zNzMtLjMyLjg3LS4zMi44N3YuMDYzaDguMzcxbDIuNDI4IDYuNzgyaDUuNDk2bC0yLjY4NC03LjIxN3oiIGZpbGw9IiM1NjVDNjciIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K" alt="logo"/>
                <span className='digits'>{ratings}</span>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQwLjMwOSAyMC4wMzdjLS4xMyAxLjA1LS45OTYgMS44Ni0yLjA0NiAxLjg2aC0zNi4yQy45MjIgMjEuODk3IDAgMjAuOTQyIDAgMTkuNzY0di0xNy4xQzAgMS41OTkuNzU0LjcxNyAxLjc0LjU1N2gzNi44NDVjLjkuMTQ2IDEuNjA4Ljg5NCAxLjcyNCAxLjgzNHYxNy42NDZ6TTQuNjI1IDQuNzd2MTIuOTM1aDMuMjQzVjQuNzdINC42MjV6bTEwLjE2IDBsLS43NTEgNi4wNDMtLjQ2NS0zLjI4NmE5OC4xOTYgOTguMTk2IDAgMCAwLS4zODgtMi43NTdIOC45NzZ2MTIuOTM1aDIuODRsLjAxLTguNTQgMS4xOTYgOC41NGgyLjAyM2wxLjEzNS04LjczMS4wMSA4LjczMWgyLjgzMVY0Ljc3aC00LjIzNnptOS41NTQgMi42OWMuMDM2LjE2NS4wNTQuNTQuMDU0IDEuMTI1VjEzLjZjMCAuODYtLjA1NCAxLjM4OC0uMTYxIDEuNTgyLS4xMDguMTk0LS4zOTUuMjkxLS44NjEuMjkxdi04LjQ5Yy4zNTMgMCAuNTk0LjAzOC43MjIuMTE1LjEyOC4wNzcuMjEuMTk4LjI0Ni4zNjJ6bTEuNDY1IDEwLjExNGMuMzg2LS4wODguNzEtLjI0Mi45NzMtLjQ2My4yNjItLjIyLjQ0Ni0uNTI2LjU1Mi0uOTE4LjEwNS0uMzkuMTY4LTEuMTY2LjE2OC0yLjMyNVY5LjMyNWMwLTEuMjIzLS4wNDYtMi4wNDQtLjExOC0yLjQ2MWEyLjM1NiAyLjM1NiAwIDAgMC0uNTQtMS4xMzdjLS4yODktLjM0LS43MS0uNTg1LTEuMjYzLS43MzQtLjU1My0uMTQ5LTEuNDU2LS4yMjMtMy4wMjYtLjIyM2gtMi40MnYxMi45MzVoMy45M2MuNzc3IDAgMS4zNTgtLjA0NCAxLjc0NC0uMTMxem02LjkyNi0xLjgyMmMtLjA2LjE2NS0uMzIxLjI0OC0uNTIuMjQ4LS4xOTMgMC0uMzIxLS4wOC0uMzg3LS4yMzktLjA2NS0uMTYtLjA5Ny0uNTIzLS4wOTctMS4wOXYtMy40MmMwLS41ODkuMDI4LS45NTYuMDg2LTEuMTAyLjA1Ny0uMTQ2LjE4Mi0uMjIuMzc1LS4yMi4xOTggMCAuNDYzLjA4NC41MzEuMjUxLjA2OC4xNjcuMTAyLjUyNS4xMDIgMS4wNzF2My4zMTVjMCAuNjI2LS4wMyAxLjAyMi0uMDkgMS4xODZ6bS00LjEyOCAxLjk1M2gyLjkybC4yMDEtLjgyNGMuMjY0LjMzMS41NTYuNTguODc0Ljc0NS4zMTguMTY2Ljc5NC4yNDkgMS4xNjIuMjQ5LjUxMiAwIC45NTUtLjE0IDEuMzI4LS40MTkuMzcyLS4yNzguNjEtLjYwOC43MS0uOTg4LjEwMS0uMzguMTUyLS45NTcuMTUyLTEuNzMzdi0zLjYyOWMwLS43ODEtLjAxNy0xLjI5LS4wNS0xLjUzYTEuNzg4IDEuNzg4IDAgMCAwLS4zLS43MzMgMS42MTcgMS42MTcgMCAwIDAtLjcyMS0uNTgxYy0uMzE2LS4xMzktLjY4OC0uMjA4LTEuMTE4LS4yMDgtLjM3MyAwLS44NS4wNzctMS4xNjkuMjNhMi41ODUgMi41ODUgMCAwIDAtLjg2NS42OTNWNC43N2gtMy4xMjR2MTIuOTM1eiIgZmlsbD0iIzU2NUM2NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=" alt=""/>
                <span className='digits'>{ratings}</span>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE0LjE4NSAyOC4zN0M2LjM1MSAyOC4zNyAwIDIyLjAyIDAgMTQuMTg2IDAgNi4zNTEgNi4zNTEgMCAxNC4xODUgMGM3LjgzNSAwIDE0LjE4NiA2LjM1MSAxNC4xODYgMTQuMTg1IDAgNy44MzUtNi4zNTEgMTQuMTg2LTE0LjE4NiAxNC4xODZ6bTAtMTEuOTA1YTIuMjggMi4yOCAwIDEgMCAwLTQuNTYgMi4yOCAyLjI4IDAgMCAwIDAgNC41NnptNS40NDctNC4zMDZhMy40MiAzLjQyIDAgMSAwIDAtNi44NCAzLjQyIDMuNDIgMCAwIDAgMCA2Ljg0em0wIDEwLjg5MmEzLjQyIDMuNDIgMCAxIDAgMC02Ljg0IDMuNDIgMy40MiAwIDAgMCAwIDYuODR6TTguNzM5IDEyLjE2YTMuNDIgMy40MiAwIDEgMCAwLTYuODQgMy40MiAzLjQyIDAgMCAwIDAgNi44NHptMCAxMC44OTJhMy40MiAzLjQyIDAgMSAwIDAtNi44NCAzLjQyIDMuNDIgMCAwIDAgMCA2Ljg0eiIgZmlsbD0iIzU2NUM2NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=" alt=""/>
                <span className='digits'>{ratings}</span>
                <span className='digits'>{year}</span>
                <span className='digits'>{limit}</span>
                <span className='digits'>{genres}</span>
            </div>
            {/*<div className="title">*/}
            {/*    <h1 className='tit'>{title}</h1>*/}
            {/*</div>*/}
        </div>
    );
};