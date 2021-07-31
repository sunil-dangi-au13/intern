
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home  from './pages/Home';

function App() {
  return (
    <div className="App"> 
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Footer />
    </Switch>
    </Router>
      
    </div>
  );
}

export default App;
