
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideBar from './Component/SideBar';


function App() {
  return (
    <BrowserRouter>
   
   <div className='wrapper'>
        <SideBar />
   

   </div>
  
      </BrowserRouter>
    

  );
}

export default App;
