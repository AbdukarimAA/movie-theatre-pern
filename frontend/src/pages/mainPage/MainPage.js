import './mainPage.scss';
import {NavBar} from "../../components/navBar/NavBar";
import {MainSlider} from "../../components/mainSlider/MainSlider";
import {List} from "../../components/list/List";

export const MainPage = () => {
    return(
        <div className='main'>
            <NavBar />
            <MainSlider />
            <List />
        </div>
    );
};