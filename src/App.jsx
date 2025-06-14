import HeroSearch from './components/HeroSearch';
import Working from './components/HowItWorks';
import Navbar from './components/Navbar';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSearch/>
     <Working/>
    </div>
  );
}

export default App;
