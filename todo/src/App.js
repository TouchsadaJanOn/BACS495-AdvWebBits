import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js';
import Body from './Body.js';
import Blocks from './Blocks';



function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Blocks/>
        <Footer/>
    </div>
  );
}

export default App;
