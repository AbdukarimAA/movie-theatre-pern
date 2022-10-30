import './listItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {useState} from "react";


export const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
      <div className='listItem'
           style={{left: isHovered && index * 265 - 50 + index * 2.5}}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
          <img src="https://placepic.ru/wp-content/uploads/2018/05/image_5319021115093426252.jpg" alt="AVA"/>
          {isHovered && (
              <>
              <video src={trailer} autoPlay={true} loop/>
              <div className="itemInfo">
                  <div className="icons">
                      <PlayArrowIcon className='icon'/>
                      <AddIcon className='icon'/>
                      <FavoriteBorderOutlinedIcon className='icon'/>
                  </div>
              </div>
              <div className="itemInfoTop">
                  <span className='limits'>16+</span>
                  <span>2018</span>
                  <span>52 min</span>
              </div>
              <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias error laborum sequi suscipit tenetur?
              </div>
              <div className="genre">
                  Action
              </div>
          </>
          )}
      </div>
  );
};