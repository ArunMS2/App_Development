import logo from './logo.svg';
import './App.css';
import Login from './login';
import Create from './create';

export default function App(){

  return(<Route></Route>)
  }
  function Route(){
    if(window.location.pathname=='/create'){
      return(<Create></Create>)
     }
     else if (window.location.pathname==='/'){
      return (<Login></Login>)
     }
  }
