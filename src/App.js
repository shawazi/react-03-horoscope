import './App.scss';
import { data } from './helper/data';
import { useState } from 'react';
import Cards from './components/Cards';


function App() {
  // const [showText, setShowText] = useState(false);


  return (
    <div className="App">
      <h1>Horoscopes</h1>
      < Cards />
    </div>
  );
}

export default App;
