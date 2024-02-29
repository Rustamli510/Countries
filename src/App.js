import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Country from './Country';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Countryin from './Countryin';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Country />} />
        <Route path='/:id' element={<Countryin />} />
      </Routes>
    </div>
  );
}

export default App;
