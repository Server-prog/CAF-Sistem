import {
    Routes,
    Route
} from 'react-router-dom'

import { EmailConfirmation} from "./pages/emailConfomation";
 
import { ForgotPassword} from "./pages/forgotPassword";
import { SignIn } from './pages/signIn';
import Sistema from './pages/sistema';
import Matriz from './pages/matriz';
import Resolucao from './pages/resolucao';
import Alunos from './pages/alunos';

 export function MainRoutes (){
    return (
        <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sistema" element={<Sistema />} />
        <Route path="/matriz" element={<Matriz />} />
        <Route path="/resolucao" element={<Resolucao />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/email-confirmation?' element = {<EmailConfirmation /> }/>
        </Routes>
    )
 }