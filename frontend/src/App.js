import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import './app.scss';
import {Player} from "./pages/player/Player";
import {Register} from "./pages/register/Register";
import {Login} from "./pages/login/Login";
//29-44
function App() {
  return (
    <Routes>
        <Route path='/' element={<Player/>}/>
    </Routes>
  );
}

export default App;
