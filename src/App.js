
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import SideBar from './Component/SideBar';
import Main from './Component/Main';
import Music from './www.mp3'
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';


function App() {
  return (
    <BrowserRouter>
   
   <div className='wrapper'>
        <SideBar />
    <Portfolio />
    <Contact />

   </div>
  
      </BrowserRouter>
    

  );
}

export default App;
