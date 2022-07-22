import { Routes, Route } from 'react-router-dom'

//importar as pages
import { App } from '../page/App';

export function AppRoutes() {
    return (
        //exemplos de Route
        //<Route path='/exemple1' element={<App />} />
        //<Route path='/exempla2' element={<App/>}/>
        <Routes> 
            <Route path='/' element={<App />} />
        </Routes>
    )
};