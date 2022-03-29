import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Inicio } from '../Inicio'
import { Login } from '../Login/Login'
import { Register } from '../Register'

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login"  element={<Login />} />
                <Route path="/register"  element={< Register />} />
                <Route path="/inicio"  element={< Inicio />} />
            </Routes>
        </Router>
    )
}