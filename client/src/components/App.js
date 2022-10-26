import '../App.css'
import Login from './Login';
import Home from './Home'
import {Routes, Route} from 'react-router-dom'
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}>
        </Route>
        <Route exact path='/home' element={<Home />}>
        </Route>
        <Route exact path='/signup' element={<Signup />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
