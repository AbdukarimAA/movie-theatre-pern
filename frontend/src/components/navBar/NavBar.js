import './navBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState();

    window.onscroll = () => {
        setScrolled(window.scrollY   === 0 ? false : true);
        return () => window.onscroll = null;
    };

  return(
      <div className= {scrolled ? 'navbar scroll':'navbar'}>
          <div className="container">
              <div className="left">
                  <img src="https://thumb.tildacdn.com/tild6434-3264-4234-b565-313638626430/-/resize/560x/-/format/webp/photo.png" alt=''/>
                  <span>HomePage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My List</span>
              </div>
              <div className="right">
                  <SearchIcon className='icons'/>
                  <img src="https://placepic.ru/wp-content/uploads/2018/05/image_5319021115093426252.jpg" alt="AVA"/>
                  <div className="arrowDown">
                      <ArrowDropDownIcon className='icons'/>
                      <div className="arrowOptions">
                          <span>Settings</span>
                          <span>Log Out</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};