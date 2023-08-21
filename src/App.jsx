import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import NuestraEmpresa from './pages/NuestraEmpresa';
import Contacto from './pages/Contacto';
import TiendaOnline from './pages/TiendaOnline';

function App() {

  return( 
    <Router>
        <div className='App'> 
          <Menu/>
          <ItemListContainer/>
            <Routes>
              <Route path="/" element={<NuestraEmpresa />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/TiendaOnline" element={<TiendaOnline />} />
            </Routes>
        </div>
    </Router>

  );

}

export default App;
