import './listItem.scss';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {useState} from "react";

export const ListItem = ({index, title, country, desc, director, actors, genres, img, imgSmall, imgTitle, limit, ratings, trailer, video, year}) => {

    const [isHovered, setIsHovered] = useState(false)

    // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


    return (
        <div className='list_item'
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <img src={`http://localhost:5000/${imgSmall}`} alt="AVA"/>
            {/*<div className="itemInfo">*/}
            {/*    <div className="icons">*/}
            {/*        <PlayArrowIcon className='icon'/>*/}
            {/*        <AddIcon className='icon'/>*/}
            {/*        <FavoriteBorderOutlinedIcon className='icon'/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="itemInfoTop">
                <span className='limits'>{limit}+</span>
                <span>{year} Year</span>
                <span>IMDB rating {ratings}</span>
                <span>{genres}</span>
            </div>
            {isHovered && (
                <>
                    <video src={`http://localhost:5000/${trailer}`} autoPlay={true} loop/>
                    <div className="description">
                        {desc}
                    </div>
                </>
            )}
        </div>
    )
}
