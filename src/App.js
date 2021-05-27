import './App.css';

import {Home} from './components/Home'
import {Department} from './components/Department'
import {Navigation} from './components/Navigation'
import {AddDep} from './components/AddDep'
import {EditDiamond} from './components/EditDiamond';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    <div className="Container">

    <h3 className="m-3 d-flex justify-content-center">
      DIAMOND VAULT
    </h3>

      <Navigation/>

    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/department' component={Department}/>
      <Route path='/AddDep' component={AddDep}/>
      <Route path='/EditDiamond' component={EditDiamond}/>


    </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
