import './App.css';
import Homepage from './components/homepage';
import Navbar from './components/navbar'
import KommunicateChat from './components/chat';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <KommunicateChat/>
    </div>
  );
}

export default App;
