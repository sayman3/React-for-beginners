import { Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Navbar from './components/Navbar';

function App(){
    return <>
    <Navbar></Navbar>
        <Routes>
            <Route path="/movie/:id" element={<Detail></Detail>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/*" element="404" />
        </Routes>
    </>
}


export default App;