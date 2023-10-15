import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import AppFemale from './AppFemale.jsx'
import MyHome from './MyHome.jsx'

function HomeControl(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<MyHome/>}/>
                <Route path="/male" element = {<App/>}/>
                <Route path="/Female" element = {<AppFemale/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default HomeControl;