import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import './app.scss';
import {Player} from "./pages/player/Player";
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
import {FilmPage} from "./pages/filmPage/FilmPage";
//29-44
function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
    </Routes>
  );
}

export default App;
