import Home from "./components/pages/Home.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import InformationPokemon from "./components/pages/InformationPokemon.jsx";
import Logo from "./components/logo/Logo.jsx";

function App() {
  return (
    <div className="App">

      <Router>      
        <Routes>
          <Route  exact path='/' element={
              <Home/>
              }></Route>      
          <Route path="/InformationPokemon/:name" element={
              <InformationPokemon/>
              }></Route>   
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
