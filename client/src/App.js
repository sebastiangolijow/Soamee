import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import {Landing} from './Components/Landing/Landing';
import {About} from './Components/Landing/About';
import {Nav} from './Components/Nav';
import {CreateA} from './Components/CreateA';
import {CreateB} from './Components/CreateB';
import{ Autores} from './Components/Authors'




function App() {
  return (
    <div className="App">
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/CreateA' component={CreateA}/>
    <Route exact path='/CreateB' component={CreateB}/>
    <Route exact path='/Authors' component={Autores}/>



    <Route exact path='/book/:id' render={({match}) => <About id={match.params.id}/>}/>

    </div>
  );
}

export default App;
