import './App.css';
import Peformance from './components/peformance'
import Homepage from './components/homepage';
import { Routes, Route, useNavigate} from 'react-router-dom';

function App() {

  return (
    <div>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/peformance" element={<Peformance/>} />
    
  </Routes>
  </div>
  );
}

export default App;
