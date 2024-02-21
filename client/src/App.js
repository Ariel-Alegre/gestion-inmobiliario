import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Test from './pages/test';
import Contract from './components/Contract/Contract';
import LoginPage from './pages/LoginPage';
import { useDispatch, useSelector } from "react-redux";
import InicialPage from './pages/InicialPage';
import Carrusel from './components/Home/Inventario/Carrusel';
import Leads from './components/Home/Leads/Leads';
import PanelAdminPage from './pages/PanelAdminPage';
import Register from './components/Register/Register';



function App() {


  return (
    <Router>


      <Routes>

          <Route path='/' element={<Navigate to='/login' />} />


        <Route path="/home" element={<Home />}>
          <Route index element={<Carrusel />} />
          <Route path="inventario" element={<Carrusel />} />
          {/*  <Route path="inventario/:clientId" element={<Carrusel />} />   */}
          <Route path="leads" element={<Leads />} />
          <Route path="leads/:clientId" element={<Leads />} />
          <Route path="leads/client/:clientId" element={<Leads />} />
          <Route path="leads/client" element={<Leads />} />

          
          {/* <Route path="mi sitio" element={<RegisterPage />} /> */}
          <Route path="mi sitio" element={<InicialPage />} />
        </Route>

        <Route path="/admin" element={<PanelAdminPage />}>
          <Route index element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="contract" element={<Contract />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
