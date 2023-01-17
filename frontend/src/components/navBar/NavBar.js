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
                    <img src="https://www.amediateka.ru/static/images/logos/logo-full.svg" alt=''/>
                    <span>Сериалы</span>
                    <span>Фильмы</span>
                    <span>Коллекции</span>
                    <span>Новинки</span>
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