import './App.css'
import Peformance from './components/peformance'
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import About from './components/about';

function App() {

  return (
    <div>
    <Routes>
    <Route path="/tutorly" element={<Homepage/>} />
    <Route path="/tutorly/peformance" element={<Peformance/>} />
    <Route path ="/tutorly/about" element = {<About/>}></Route>
  </Routes>
  </div>
  );
}

export default App;
