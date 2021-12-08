import {memo} from "react";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Payment from "./pages/payment";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/payment" element={<Payment/>}/>
            </Routes>
        </Router>
    );
}

export default memo(App);
