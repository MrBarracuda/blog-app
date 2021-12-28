import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Create from "./components/Create";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route exact path='/create' element={<Create/>}/>
                    <Route path='/blogs/:id' element={<BlogDetails/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
