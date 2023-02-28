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
      {console.log(data)}
    </div>
  );
}

export default App;
