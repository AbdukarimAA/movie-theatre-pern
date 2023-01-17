import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import './app.scss';
import {Player} from "./pages/player/Player";
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {FilmPage} from "./pages/filmPage/FilmPage";
import {AdminPage} from './pages/admin/AdminPage'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/film/:id' element={<FilmPage/>}/>
            <Route path='/player/:id' element={<Player/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
    );
}

export default App;
