import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Main from './main';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
    </BrowserRouter>
    
  );
}

export default App;
