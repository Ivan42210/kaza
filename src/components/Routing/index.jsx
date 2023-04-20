import Home from '../../Pages/Home'
import About from '../../Pages/About';
import LogementPage from '../../Pages/LogementPage'
import Error from '../../Pages/Error'
import { Routes, Route } from 'react-router-dom';



export default function Routing(){
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/logement/:id' element={<LogementPage />}/>
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}